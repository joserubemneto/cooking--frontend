import React from 'react'
import { Flex, Text, Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex justify='center' direction='column' align='center'>
      <Text>Carregando...</Text>
      <Spinner size='xl' mt='1rem' color='#D64D27' />
    </Flex>
  )
}

export default Loading
