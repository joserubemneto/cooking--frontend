import React from 'react'
import CategoryCard from '../CategoryCard'
import { Grid, GridItem, Flex, Spacer, Select } from "@chakra-ui/react"
import {TopTitle} from '../MainStyles'
import theme from '../../theme'

const RecipeMobile = () => {
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
          <Select placeholder="Filtros"
          variant="filled"
          maxWidth="150px"
          borderRadius="1rem"
          bg="linear-gradient(201.73deg, #EE6737 -7.35%, #F73C2C 103.6%);"
          color="white"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          </Flex>
        </GridItem>
        <GridItem
        colStart={2}
        >
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </GridItem>
      </Grid>
    </>
  )
}

export default RecipeMobile
