import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { ReactComponent as Bloob1 } from '../../assets/Vetor Header 3.svg'
import { ReactComponent as Bloob2 } from '../../assets/Vetor Header 2.svg'

export const Bloob = () => {
  return (
    <Flex width={'150px'} ml={'2rem'}>
      <Bloob2 />
      <Box width={'100px'} ml={'2.5rem'}>
        <Bloob1 />
      </Box>
    </Flex>
  )
}
