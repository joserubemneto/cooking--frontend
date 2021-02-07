import React, { useState, useCallback, useEffect } from 'react'
import { Grid, GridItem, Image, Flex, Spacer, Text } from '@chakra-ui/react'
import { TopTitle, HeadTitle } from '../components/MainStyles'
import theme from '../theme'
import Back from '../assets/back.svg'
import Photo from '../assets/Image5.jpg'
import Elipse from '../assets/Ellipse75.svg'
import CarouselOne from '../components/CarouselOne'
import { Link, useParams } from 'react-router-dom'
import { getRecipe, getRecipes } from '../services/api'
import { useRequest } from '../context/Request'
import Loading from '../components/Loading'
import Error from '../components/Error'
import useMedia from '../hooks/useMedia'

const Recipe = () => {
  const [recipes, setRecipes] = useState([])
  const [recipe, setRecipe] = useState([])
  const { id } = useParams()
  const { loading, setLoading, error, setError } = useRequest()
  const large = useMedia('(min-width: 62.5rem)')

  const requestData = useCallback(async () => {
    try {
      setLoading(true)
      const { data: recipesData } = await getRecipes()
      const { data: recipeData } = await getRecipe(id)
      setRecipes(recipesData)
      setRecipe(recipeData)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    requestData()
  }, [id])

  return (
    <>
      {!loading && !error && (
        <>
          <Grid
            templateColumns='11% 51% 27% 11%'
            templateRows='repeat(6, auto)'>
            <GridItem colStart={2} colSpan={2}>
              <Flex>
                <TopTitle color={theme.colors.title}>{recipe.title}</TopTitle>
                <Spacer />
                <Flex alignItems='center'>
                  <p
                    style={{
                      display: large ? '' : 'none',
                    }}>
                    voltar para{' '}
                  </p>
                  <Link
                    to={
                      large ? `/categoria/${recipe.category_id}` : `/receitas`
                    }
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                    <p
                      style={{
                        display: large ? 'inline-block' : 'none',
                        marginLeft: '7px',
                        color: `${theme.colors.subTitle}`,
                      }}>
                      {recipe.category_name}
                    </p>
                    <Image
                      boxSize='35px'
                      objectFit='cover'
                      src={Back}
                      alt='Dan Abramov'
                      zIndex='-1'
                      cursor='pointer'
                      borderRadius='2rem'
                      ml='10px'
                    />
                  </Link>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={2} colStart={2}>
              <Image
                mt='30px'
                boxSize='75%'
                height='400px'
                width={large ? '75%' : '100%'}
                objectFit='cover'
                src={recipe.img_url}
                alt='Dan Abramov'
                zIndex='-1'
                cursor='pointer'
              />
            </GridItem>
            <GridItem colStart={2} colSpan={large ? 1 : 2}>
              <TopTitle Talign='left' color={theme.colors.subTitle}>
                Resumo
              </TopTitle>
              <Text fontSize='18px' lineHeight='27px'>
                {recipe.resume}
              </Text>
            </GridItem>
            <GridItem colStart={2} colSpan={large ? 1 : 2} mt='20px'>
              <TopTitle Talign='left' color={theme.colors.subTitle}>
                Ingredientes
              </TopTitle>
              <div>
                {recipe.ingredients.map((ingredient) => (
                  <Flex key={ingredient.id} align='center' mt='5px'>
                    <Image src={Elipse} alt={'Elipse'} p='0 1rem' />
                    <Text fontWeight='medium' fontSize='1.3rem'>
                      {ingredient}
                    </Text>
                  </Flex>
                ))}
              </div>
            </GridItem>
            <GridItem colStart={2} colSpan={large ? 1 : 2}>
              <TopTitle Talign='left' color={theme.colors.subTitle}>
                Modo de Preparo
              </TopTitle>
              <div>
                {recipe.preparation.map((preparation, index) => (
                  <Flex key={preparation.id} align='center' mt='20px' ml='15px'>
                    <Text fontSize='1.7rem' color={theme.colors.title}>
                      {index + 1}.
                    </Text>
                    <Text fontSize='1.3rem' ml='20px' fontWeight='light'>
                      {preparation}
                    </Text>
                  </Flex>
                ))}
              </div>
            </GridItem>
          </Grid>
          <CarouselOne title='Outras Receitas' data={recipes} />
        </>
      )}
      {loading && !error && <Loading />}
      {error && <Error />}
    </>
  )
}

export default Recipe
