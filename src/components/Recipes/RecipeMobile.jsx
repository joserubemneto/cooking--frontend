import React from 'react'
import CategoryCard from '../CategoryCard'
import { Grid, GridItem, Flex, Spacer, Image } from "@chakra-ui/react"
import {TopTitle} from '../MainStyles'
import theme from '../../theme'
import {Select} from '../MainStyles'
import BackToTop from '../../assets/back to top.svg'


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
        <GridItem
        position= "fixed"
        right="5px"
        bottom="100px"
        >
          <a href="#">
          <Image
          src={BackToTop}
          alt="voltar para o topo"
          width="35px"
          height="35px"
          objectFit="cover"
        />
          </a>
        </GridItem>
      </Grid>
    </>
  )
}

export default RecipeMobile
