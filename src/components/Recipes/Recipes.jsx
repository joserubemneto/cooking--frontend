import React from 'react'
import CarouselOne from '../CarouselOne/CarouselOne'
import {TopTitle, HeadTitle} from '../MainStyles'
import { Grid, GridItem } from "@chakra-ui/react"
import theme from '../../theme'
import {Box} from '../CarouselOne/styles'

const Recipes = () => {
  const title = [
    "Receitas mais acessadass"
  ]

  const categories = [
    "Bolos e Tortas", "Camarões", "Carnes", "Empanados", "Microondas", "Petiscos", "Bebidas", "Bolos e Tortas", "Camarões", "Carnes", "Empanados", "Doces", "Veganos"
  ]

  return (
    <>
      <CarouselOne title={title[0]}/>
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

        </GridItem>
        <GridItem
        colStart={2}
        rowStart={3}
        >
          <HeadTitle weight="600" color={theme.colors.subTitle}>Mais acessadas</HeadTitle>
        </GridItem>
        <GridItem
        colStart={2}
        rowStart={4}
        >
          <Grid
            templateColumns="1fr 1fr 1fr"
            templateRows="auto auto"
            gap="20px"
          >
            <h1>oi</h1>
            <h1>oi</h1>
            <h1>oi</h1>
            <h1>oi</h1>
            <h1>oi</h1>
            <h1>oi</h1>


          </Grid>
        </GridItem>
      </Grid>
    </>
  )
}

export default Recipes
