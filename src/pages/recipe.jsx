import React from 'react'
import { Grid, GridItem, Image, Flex, Spacer, Img } from "@chakra-ui/react"
import {TopTitle} from '../components/MainStyles'
import theme from '../theme'
import Back from '../assets/back.svg'
import {myBack} from '../components/MainStyles'

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
              <p>voltar para </p><p style={{display: 'inline-block', marginLeft: '7px', color:`${theme.colors.subTitle}`}} >{category[0]}</p>
              <myBack>
                <Img
                src={Back}
                ></Img></myBack>
          </Flex>
        </Flex>
      </GridItem>

    </Grid>
  )
}

export default Recipe
