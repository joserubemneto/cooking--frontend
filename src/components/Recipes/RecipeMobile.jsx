import React from 'react'
import CategoryCard from '../CategoryCard'
import { Grid, GridItem, Flex, Spacer } from "@chakra-ui/react"
import {TopTitle} from '../MainStyles'
import theme from '../../theme'
import {Select} from '../MainStyles'

const RecipeMobile = () => {

  const categories = ["Bolos e Tortas", "Camarões", "Carnes", "Empanados"];

  return (
    <>
      <Grid
      templateColumns="9% 82% 9%"
      >
        <GridItem
        colStart={2}
        >
          <Flex
          alignItems="center"
          >
          <TopTitle color={theme.colors.title}>Nossas Receitas</TopTitle>
          <Spacer />
          <Select>
            <option disabled selected>Filtros</option>
            <option option="none">Nenhum</option>
            {categories.map((category, index) => (
              <option value={category}>{category}</option>
            ))}
          </Select>
          </Flex>
        </GridItem>
        <GridItem
        colStart={2}
        >
          <CategoryCard Name="Gelo"/>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </GridItem>
      </Grid>
    </>
  )
}

export default RecipeMobile
