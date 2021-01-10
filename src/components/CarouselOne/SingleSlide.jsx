import React from 'react'
import { Box, Chef } from './styles'
import { SlideTitle } from '../MainStyles'
import theme from '../../theme'
import Back from '../../assets/Image4.jpg'
import { Image } from "@chakra-ui/react"


const SingleSlide = () => {

  return (
    <>
      <Box>
        <SlideTitle color={theme.colors.slide}>bacon e ovos</SlideTitle>
        <Image
    boxSize="100%"
    objectFit="cover"
    src={Back}
    alt="Dan Abramov"
    position="absolute"
    zIndex="-1"
    borderRadius="2rem"
  />
        <Chef>Chef Lucas</Chef>
      </Box>
    </>
  )
}

export default SingleSlide
