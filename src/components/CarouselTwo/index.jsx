import React, { useContext } from 'react'
import useMedia from '../../hooks/useMedia'
import { ThemeContext } from 'styled-components'
import { GlobalStyle } from '../MainStyles'
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import Slider from '../CarouselTwo/Slider'
import SliderMobile from '../CarouselTwo/SliderMobile'

const CarouselTwo = ({ first, data }) => {
  const { colors } = useContext(ThemeContext)
  const large = useMedia('(min-width: 62.5rem)')

  return (
    <Grid templateColumns='7% 86% 7%' templateRows='auto auto'>
      <GlobalStyle />
      <GridItem mt={first ? '2rem' : '8rem'} rowSpan={1} colStart={2}>
        <Heading weight='bold' color={colors.title}>
          {data && data.name}
        </Heading>
      </GridItem>
      <GridItem rowSpan={2} colStart={2} mt='2rem'>
        {large ? (
          <Slider data={data && data.recipes} />
        ) : (
          <SliderMobile data={data && data.recipes} />
        )}
      </GridItem>
    </Grid>
  )
}

export default CarouselTwo
