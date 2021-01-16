import React from 'react'
import { Box } from '@chakra-ui/react'
import Banner from '../components/Banner'
import CarrouselOne from '../components/CarouselOne'
import Highlights from '../components/Highlights'

const Landing = () => {
  return (
    <Box>
      <Banner/>
      <CarrouselOne title="Receitas"/>
      <Highlights/>
    </Box>
  )
}

export default Landing
