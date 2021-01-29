import React from 'react'
import { Flex, Box, Heading, Text, Link } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'

const ChefCard = ({ chefName, description, id }) => {
  return (
    <Flex direction='column' justifyContent='center' align='center'>
      <Heading fontSize='1.625rem' color='#EE6737'>
        {chefName}
      </Heading>

      <Box maxWidth='250px' w='100%' h='250px' mt='2rem' bg='#C5C5C5'></Box>

      <Text mt='2rem' fontSize='1.125rem' maxWidth='350px'>
        {description}
      </Text>

      <Link
        as={ReachLink}
        to={`chef/${id}`}
        textAlign='center'
        bgGradient='linear(262.91deg, #EE6737 5.69%, #F73C2C 94.63%)'
        color='#FFF'
        fontWeight='bold'
        borderRadius='2rem'
        p='0.2rem 1rem'
        mt='2rem'
        maxWidth='300px'
        w='100%'
        transition='300ms'
        _hover={{
          transform: 'translateY(-5px)',
          bgGradient: 'linear(262.91deg, #F73C2C -32.44%, #EE6737 136.54%)',
        }}
        _focus={{
          outline: 'none',
        }}>
        ver perfil
      </Link>
    </Flex>
  )
}

export default ChefCard
