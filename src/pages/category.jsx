import React from 'react'
import { Grid, GridItem, Image, Flex, Spacer } from '@chakra-ui/react'
import { TopTitle } from '../components/MainStyles'
import theme from '../theme'
import { Link } from 'react-router-dom'
import Back from '../assets/back.svg'
import { Box } from '../components/CarouselOne/styles'
import Imagem from '../assets/Image1.jpg'
import CategoryCard from '../components/CategoryCard'

const Category = () => {
  return (
    <>
      <Grid templateColumns='11% 39% 39% 11%' templateRows='repeat(6, auto)'>
        <GridItem colStart={2} colSpan={2}>
          <Flex>
            <TopTitle color={theme.colors.title}>Bebidas</TopTitle>
            <Spacer />
            <Flex alignItems='center'>
              <p>voltar para </p>
              <p
                style={{
                  display: 'inline-block',
                  marginLeft: '5px',
                  color: `${theme.colors.subTitle}`,
                }}>
                Receitas
              </p>
              <Link to='/recipes'>
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
  )
}

export default Category
