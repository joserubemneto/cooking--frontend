import React from 'react'
import { Flex, Text, Link, Box } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { useRequest } from '../context/Request'

const Error = () => {
  const { setError } = useRequest()
  return (
    <Flex justify='center' align='center' direction='column'>
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
      </Box>
      <Text mt='1rem'>
        Caso o erro persista pedimos sua compreensão e vamos resolver em breve.
      </Text>
    </Flex>
  )
}

export default Error
