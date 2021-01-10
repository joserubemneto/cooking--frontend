import React, {useContext} from 'react'
import Slider from './Slider'
import SliderMobile from './SliderMobile'
import { TopTitle, GlobalStyle } from '../MainStyles'
import { ThemeContext } from 'styled-components'
import { Grid, GridItem } from "@chakra-ui/react"
import './Slider.css'
import useMedia from '../../hooks/useMedia'


const CarouselOne = () => {
  const {font, colors} = useContext(ThemeContext)
  const large = useMedia('(min-width: 62.5rem)')

  return (
    <Grid
    templateColumns="7% 86% 7%"
    templateRows="auto auto"
    >
    <GlobalStyle />
    <GridItem rowSpan={1} colStart={2}>
        <TopTitle weight="bold" color={colors.title}>Receitas mais procuradas</TopTitle>
    </GridItem>
    <GridItem rowSpan={2} colStart={2}>
        {large ? <Slider /> : <SliderMobile /> }
    </GridItem>
    </Grid>
  )
}

export default CarouselOne
