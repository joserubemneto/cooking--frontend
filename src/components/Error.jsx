import React from 'react'
import { Flex, Text, Link, Box } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { useRequest } from '../context/Request'

const Error = () => {
  const { setError } = useRequest()
  return (
    <Flex justify='center' align='center' direction='column' textAlign='center' minHeight='50vh'>
      <Box>
        Algo correu errado,
        <Link
          color='#D64D27'
          as={ReactLink}
          to='/'
          onClick={() => {
            setError(false)
          }}>
          {' '}
          clique aqui!
        </Link>
      <Text mt='1rem' maxWidth="400px">
        Caso o erro persista pedimos sua compreensão e resolveremos em breve.
      </Text>
      </Box>
    </Flex>
  )
}

export default Error
