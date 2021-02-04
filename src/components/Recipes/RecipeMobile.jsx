import React from 'react'
import CategoryCard from '../CategoryCard'
import { Grid, GridItem, Flex, Spacer } from "@chakra-ui/react"
import {TopTitle} from '../MainStyles'
import theme from '../../theme'
import {Select} from '../MainStyles'

const RecipeMobile = ({recipes, categories}) => {
  console.log(categories);
  console.log(recipes);
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
            {categories.map((category) => (
              <option value={category}>{category.name}</option>
            ))}
          </Select>
          </Flex>
        </GridItem>
        <GridItem
        colStart={2}
        colSpan={1}
        >
          {recipes.map((recipe) => (
            <CategoryCard data={recipe}/>
          ))}
        </GridItem>
      </Grid>
    </>
  )
}

export default RecipeMobile
