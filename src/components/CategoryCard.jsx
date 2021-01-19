import React from 'react'
import theme from '../theme'
import {TopTitle} from '../components/MainStyles'
import {Box} from '../components/CarouselOne/styles'
import Back from '../assets/Image1.jpg'
import {Btn} from '../components/MainStyles'
import { Image, Flex } from "@chakra-ui/react";


const CategoryCard = ({Name}) => {
  return (
    <Flex
    flexDirection="column"
    alignItems="center">
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
        <Btn margin="20px">ver receita</Btn>
      </Flex>
  )
}

export default CategoryCard
