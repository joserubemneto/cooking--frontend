import React from 'react'
import theme from '../theme'
import {TopTitle} from '../components/MainStyles'
import {Box} from '../components/CarouselOne/styles'
import Back from '../assets/Image1.jpg'
import {Btn} from '../components/MainStyles'
import { Image } from "@chakra-ui/react";


const CategoryCard = ({Name}) => {
  return (
    <>
      <TopTitle color={theme.colors.title}>{Name}</TopTitle>
      <Box mobile={true} bg="transparent">
        <Image
      boxSize="100%"
      objectFit="cover"
      src={Back}
      alt="Dan Abramov"
      position="absolute"
      zIndex="-1"
      borderRadius="2rem"
        />
      </Box>
      <Btn>ver receita</Btn>
    </>
  )
}

export default CategoryCard
