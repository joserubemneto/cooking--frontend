import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Flex justify='center' direction='column' align='center'>
      <Text>Página não encontrada.</Text>
      <Link to='/receitas' style={{
            marginTop: '8px',
          }} >Voltar para
      <span style={{
            marginLeft: '5px',
            color: '#F73C2C'
          }}>Receitas.
      </span>
      </Link>
    </Flex>
  )
}

export default PageNotFound
