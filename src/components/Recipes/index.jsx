import React from 'react'
import {TopTitle, HeadTitle} from '../MainStyles'
import { Grid, GridItem, Image } from "@chakra-ui/react"
import theme from '../../theme'
import {CategoryTitle} from './styles'
import {Box} from '../CarouselOne/styles'
import Elipse from '../../assets/Ellipse75.svg'
import { Flex, Spacer } from "@chakra-ui/react"
import {SlideTitle} from '../MainStyles'
import Back from '../../assets/Image4.jpg'


const RecipesComponent = () => {
  const categories = [
    "Bolos e Tortas", "Camarões", "Carnes", "Empanados", "Microondas", "Petiscos", "Bebidas", "Bolos e Tortas", "Camarões", "Carnes", "Empanados", "Doces", "Veganos"
  ];


  function CreateCategories(props){

    const myCategories = props.name.map((category, index) => {
      if(index === 0){
        return <CategoryTitle>{category}</CategoryTitle>
      } else if (index % 2 == 0){
        return (
        <Flex>
       <img src={Elipse} alt=""/>
       <CategoryTitle>{category}</CategoryTitle>
       </Flex>
        )
      } else if (index % 2 != 0){
        return (
        <Flex>
       <img src={Elipse} alt=""/>
       <CategoryTitle weight="600">{category}</CategoryTitle>
       </Flex>
        )
      }
    });

    return myCategories;
  }

  return (
    <>
      <Grid
      templateColumns="11% 78% 11%"
      templateRows="repeat(4, auto)"
      >
        <GridItem
        colStart={2}
        rowStart={1}
        >
          <TopTitle weight="600" color={theme.colors.title}Talign='left'>Categorias</TopTitle>
        </GridItem>

        <GridItem
        colStart={2}
        rowStart={2}
        >
          <Flex>
          <CreateCategories name={categories} />
          </Flex>
        </GridItem>

        <GridItem
        colStart={2}
        rowStart={3}
        mt="30px"
        >
          <HeadTitle weight="600" color={theme.colors.subTitle}>Mais acessadas</HeadTitle>
        </GridItem>
        <GridItem
        colStart={2}
        rowStart={4}
        mt="30px"
        >
          <Grid
            templateColumns="1fr 1fr 1fr"
            templateRows="auto auto"
            gap="20px"
          >
            <Box mobile={true}>
            <SlideTitle color={theme.colors.slide}>{categories[0]}</SlideTitle>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Back}
                alt="Dan Abramov"
                position="absolute"
                zIndex="-1"
                borderRadius="2rem"
              />
            </Box>
            <Box mobile={true}>
            <SlideTitle color={theme.colors.slide}>{categories[1]}</SlideTitle>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Back}
                alt="Dan Abramov"
                position="absolute"
                zIndex="-1"
                borderRadius="2rem"
              />
            </Box>
            <Box mobile={true}>
            <SlideTitle color={theme.colors.slide}>{categories[2]}</SlideTitle>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Back}
                alt="Dan Abramov"
                position="absolute"
                zIndex="-1"
                borderRadius="2rem"
              />
            </Box>
            <Box mobile={true}>
            <SlideTitle color={theme.colors.slide}>{categories[3]}</SlideTitle>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Back}
                alt="Dan Abramov"
                position="absolute"
                zIndex="-1"
                borderRadius="2rem"
              />
            </Box>
            <Box mobile={true}>
            <SlideTitle color={theme.colors.slide}>{categories[4]}</SlideTitle>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Back}
                alt="Dan Abramov"
                position="absolute"
                zIndex="-1"
                borderRadius="2rem"
              />
            </Box>
            <Box mobile={true}><SlideTitle color={theme.colors.slide}>{categories[5]}</SlideTitle>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Back}
                alt="Dan Abramov"
                position="absolute"
                zIndex="-1"
                borderRadius="2rem"
              /></Box>
          </Grid>
        </GridItem>
      </Grid>
    </>
  )
}

export default RecipesComponent
