import React, {useContext} from 'react'
import Slider from './Slider'
import { TopTitle, GlobalStyle } from '../MainStyles'
import { ThemeContext } from 'styled-components'
import { Grid, GridItem } from "@chakra-ui/react"


const CarouselOne = () => {
  const {font, colors} = useContext(ThemeContext)

  return (
    <Grid
    templateColumns="7% 86% 7%"
    templateRows="auto auto"
    >
    <GlobalStyle />
    <GridItem rowSpan={1} colStart={2}>
        <TopTitle color={colors.title}>Receitas mais procuradas</TopTitle>
    </GridItem>
    <GridItem rowSpan={2} colStart={2}>
        <Slider  />
    </GridItem>
    </Grid>
  )
}

export default CarouselOne
