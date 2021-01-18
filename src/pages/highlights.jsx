import React from 'react'
import { Box } from '@chakra-ui/react'
import CarouselTwo from '../components/CarouselTwo'


const Highlights = () => {
  return (
    <Box>
      <CarouselTwo title="Receitas Práticas" first={true}/>
      <CarouselTwo title="Receitas Práticas"/>
      <CarouselTwo title="Receitas Práticas"/>
    </Box>
  )
}

export default Highlights
