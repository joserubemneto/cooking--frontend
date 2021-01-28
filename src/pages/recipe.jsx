import React, { useState, useCallback, useEffect } from 'react'
import { Grid, GridItem, Image, Flex, Spacer, Text } from '@chakra-ui/react'
import { TopTitle, HeadTitle } from '../components/MainStyles'
import theme from '../theme'
import Back from '../assets/back.svg'
import Photo from '../assets/Image5.jpg'
import Elipse from '../assets/Ellipse75.svg'
import CarouselOne from '../components/CarouselOne'
import { Link } from 'react-router-dom'
import useMedia from '../hooks/useMedia'
import { getRecipes } from '../services/api'

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  const requestRecipes = useCallback(async () => {
    const { data: recipesData } = await getRecipes()
    setRecipes(recipesData)
    console.log(recipes[0]);
  })

  useEffect(() => {
    requestRecipes()
  }, [])

  return (
    <>
      <Grid templateColumns='11% 51% 27% 11%' templateRows='repeat(6, auto)'>
        <GridItem colStart={2} colSpan={2}>
          <Flex>
            <TopTitle color={theme.colors.title}>{recipes[0].title}</TopTitle>
            <Spacer />
            <Flex alignItems='center'>
              <p>voltar para </p>
              <p
                style={{
                  display: 'inline-block',
                  marginLeft: '7px',
                  color: `${theme.colors.subTitle}`,
                }}>
                {recipes[0].chef_name}
              </p>
              <Link to='/recipes'>
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
            objectFit='cover'
            src={Photo}
            alt='Dan Abramov'
            zIndex='-1'
            cursor='pointer'
          />
        </GridItem>
        <GridItem colStart={2}>
          <TopTitle Talign='left' color={theme.colors.subTitle}>
            Resumo
          </TopTitle>
          <Text fontSize='18px' lineHeight='27px'>
            resumo do resumo do resumo do resumo resumo do resumo do resumo do
            resumoresumo do resumo do resumo do resumoresumo do resumo do resumo
            do resumoresumo do resumo do resumo do resumoresumo do resumo do
            resumo do resumoresumo do resumo do resumo do resumoresumo do resumo
            do resumo do resumo
          </Text>
        </GridItem>
        <GridItem colStart={2} mt='20px'>
          <TopTitle Talign='left' color={theme.colors.subTitle}>
            Ingredientes
          </TopTitle>
          <div>
            {recipes[0].ingredients.map((ingredient) => (
              <Flex key={ingredient.id} align='center' mt='5px'>
                <Image src={Elipse} alt={'Elipse'} p='0 1rem' />
                <Text fontWeight='medium' fontSize='1.3rem'>
                  {ingredient}
                </Text>
              </Flex>
            ))}
          </div>
        </GridItem>
        <GridItem colStart={2}>
          <TopTitle Talign='left' color={theme.colors.subTitle}>
            Modo de Preparo
          </TopTitle>
          <div>
            {recipes[0].preparation.map((preparation, index) => (
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
      <CarouselOne title='Outras Receitas' />
    </>
  )
}

export default Recipe
