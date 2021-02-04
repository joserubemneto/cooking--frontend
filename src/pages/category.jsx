import React, { useEffect, useCallback, useState } from 'react'
import { Grid, GridItem, Image, Flex, Spacer } from '@chakra-ui/react'
import { TopTitle } from '../components/MainStyles'
import theme from '../theme'
import { Link, useParams } from 'react-router-dom'
import Back from '../assets/back.svg'
import { Box } from '../components/CarouselOne/styles'
import Imagem from '../assets/Image1.jpg'
import CategoryCard from '../components/CategoryCard'
import { useRequest } from '../context/Request'
import { getRecipesByCategory, getCategory } from '../services/api'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Category = () => {
  const [category, setCategory] = useState([])
  const [idIndex, setIdIndex] = useState(0);
  const { id } = useParams()
  const { loading, setLoading, error, setError } = useRequest()

  const requestData = useCallback(async () => {
    try {
      setLoading(true)
      const { data: categoryData } = await getRecipesByCategory(id)
      setCategory(categoryData)
      setId()
      console.log(idIndex);
      console.log(category);
      console.log(category[1].id);
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  })

  const setId = useCallback(async () => {
    {category.map((category, index) => {
      if(category.id === id) setIdIndex(index)
    })}
  })

  useEffect(() => {
    requestData()
  }, [])

  return (
    <>
      {!loading && !error && (
        <>
            <Grid
              templateColumns='11% 39% 39% 11%'
              templateRows='repeat(6, auto)'>
              <GridItem colStart={2} colSpan={2}>
                <Flex>
                  <TopTitle color={theme.colors.title}>
                    { category.name }
                  </TopTitle>
                  <Spacer />
                  <Flex alignItems='center'>
                    <p>voltar para </p>
                    <Link to='/receitas'
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      <p
                        style={{
                          display: 'inline-block',
                          marginLeft: '5px',
                          color: `${theme.colors.subTitle}`,
                        }}>
                        Receitas
                      </p>
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
              </GridItem>
              <GridItem colStart={2} colSpan={2} mt='35px' marginBottom='30px'>
                <Box bg='transparent' mobile='true'>
                  <Image
                    boxSize='100%'
                    objectFit='cover'
                    src={Imagem}
                    alt='Dan Abramov'
                    position='absolute'
                    zIndex='-1'
                    borderRadius='2rem'
                  />
                </Box>
              </GridItem>
              <GridItem colStart={2} colSpan={2}>
                <Grid templateColumns='1fr 1fr'>
                  <GridItem margin=' 0 30px'>
                    <CategoryCard Name='lucas melo' />
                  </GridItem>
                  <GridItem margin='0 30px'>
                    <CategoryCard Name='lucas melo' />
                  </GridItem>
                  <GridItem margin='0 30px'>
                    <CategoryCard Name='lucas melo' />
                  </GridItem>
                  <GridItem margin='0 30px'>
                    <CategoryCard Name='lucas melo' />
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
        </>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </>
  )
}

export default Category
