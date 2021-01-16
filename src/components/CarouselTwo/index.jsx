import React, { useContext } from 'react'
import useMedia from '../../hooks/useMedia'
import { ThemeContext } from 'styled-components'
import { GlobalStyle } from '../MainStyles'
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import Slider from '../CarouselTwo/Slider'
import SliderMobile from '../CarouselTwo/SliderMobile'


const CarouselTwo = ({ title }) => {
  const {fonts, colors} = useContext(ThemeContext)
  const large = useMedia('(min-width: 62.5rem)')

  return (
    <Grid
      templateColumns="7% 86% 7%"
      templateRows="auto auto"
    >
    <GlobalStyle />
    <GridItem
      rowSpan={1}
      colStart={2}
    >
      <Heading
        weight="bold"
        color={colors.title}
      >
        {title}
      </Heading>
    </GridItem>
    <GridItem
      rowSpan={2}
      colStart={2}
      mt="2rem"
    >
      {large ? <Slider/> : <SliderMobile/>}

    </GridItem>
    </Grid>
  )
}

export default CarouselTwo
