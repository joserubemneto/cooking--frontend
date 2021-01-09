import React from 'react'
import { Box, Chef } from './styles'
import { SlideTitle } from '../MainStyles'
import theme from '../../theme'
import Back from '../../assets/Image4.jpg'


const SingleSlide = () => {

  return (
    <>
      <Box background={Back}>
        <SlideTitle color={theme.colors.slide}>bacon e ovos</SlideTitle>
        <Chef>Chef Lucas</Chef>
      </Box>
    </>
  )
}

export default SingleSlide
