import React, { useState, useEffect, useCallback } from 'react'
import { useRequest } from '../context/Request'
import { getChef, getRecipes } from '../services/api'
import { Flex, Box, Heading, Text, Link, Image } from '@chakra-ui/react'
import { Link as ReactLink, useParams } from 'react-router-dom'
import CarouselOne from '../components/CarouselOne'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Back from '../assets/back.svg'

const Chef = () => {
  const [chef, setChef] = useState([])
  const [recipes, setRecipes] = useState([])
  const { id } = useParams()
  const { loading, setLoading, error, setError } = useRequest()

  const requestChef = useCallback(async () => {
    try {
      setLoading(true)
      const { data: chefData } = await getChef(id)
      setChef(chefData)
      const { data: recipesData } = await getRecipes()
      setRecipes(recipesData)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    requestChef()
  }, [])

  return (
    <>
      {!loading && !error && (
        <Box>
          <Flex
            direction='column'
            align='flex-start'
            justify='flex-start'
            p={['4rem 2rem', '4rem 2rem', '4rem 5rem', '4rem 8rem']}>
            <Flex w='100%' justify='space-between' align='center'>
              <Heading color='#F73C2C' fontSize='1.5rem'>
                {chef.name}
              </Heading>

              <Flex
                justify='center'
                align='center'
                direction={['column-reverse', 'column-reverse', 'row', 'row']}>
                <Box
                  fontSize='1.125rem'
                  mr={'3rem'}
                  display={['none', 'none', 'block', 'block']}
                  visibility={['hidden', 'hidden', 'visible', 'visible']}>
                  voltar para{' '}
                  <Text color='#D64D27' display='inline'>
                    Chefs
                  </Text>
                </Box>
                <Link as={ReactLink} to='/chefs'>
                <Image
                      boxSize='35px'
                      objectFit='cover'
                      src={Back}
                      alt='Voltar'
                      zIndex='-1'
                      cursor='pointer'
                      borderRadius='2rem'
                      ml='10px'
                    />
                </Link>
              </Flex>
            </Flex>

            <Box mt='2rem' w='300px' h='300px'>
              <Image src={chef.img_url} boxSize='100%' objectFit='cover' />
            </Box>

            <Text mt='3rem' maxWidth='500px'>
              {chef.resume}
            </Text>

            <Flex mt='1.25rem' justify='center' align='center'>
              <Box
                position='relative'
                bgGradient='linear(201.73deg, #EE6737 -7.35%, #F73C2C 103.6%)'
                borderRadius='50%'>
                <Text
                  p='0.5rem 1rem'
                  fontSize='1.25rem'
                  color='#FFF'
                  fontWeight='bold'
                  textAlign='center'>
                  {chef.recipes && chef.recipes.length}
                </Text>
              </Box>

              <Text
                ml='1rem'
                fontSize='1.25rem'
                color='#D64D27'
                fontWeight='bold'>
                Receitas no cooking
              </Text>
            </Flex>
          </Flex>
          <CarouselOne title='Receitas do chef' url='receitas' data={chef.recipes || recipes} />
        </Box>
      )}
      {loading && !error && <Loading />}
      {error && <Error />}
    </>
  )
}

export default Chef
