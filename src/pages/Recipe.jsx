import React from 'react'
import { Grid, GridItem, Image, Flex, Spacer } from "@chakra-ui/react"
import {TopTitle} from '../components/MainStyles'
import theme from '../theme'
import { ReactComponent as Back } from '../assets/back.svg'

const Recipe = (id) => {

  const category = ["Bolos e Tortas"];

  return (
    <Grid
    templateColumns="11% 51% 27% 11%"
    templateRows="repeat(6, auto)"
    >
      <GridItem
      colStart={2}
      colSpan={2}
      >
        <Flex

        >
          <TopTitle color={theme.colors.title}>oi</TopTitle>
          <Spacer />
          <Flex>
              <p>voltar para {category[0]}</p>
              <button><Back /></button>
          </Flex>
        </Flex>
      </GridItem>

    </Grid>
  )
}

export default Recipe
