import React, { useContext } from 'react'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { ReactComponent as Lupa } from '../../assets/Lupa.svg'

export const SearchBar = () => {
  const { colors } = useContext(ThemeContext)
  const history = useHistory()

  return (
    <InputGroup alignItems='center' maxWidth={'300px'}>
      <Input
        backgroundColor={'#FFF'}
        border={'none'}
        boxShadow={'0px 5px 5px rgba(75, 93, 104, 0.1)'}
        borderRadius={'50px'}
        borderRadius={'2rem'}
        placeholder='O que você quer cozinhar?'
        _focus={{ boxShadow: `6px 4px 12px #cbced1`, color: `${colors.text}` }}
      />
      <InputRightElement p={'.7rem'}>
        <Lupa
          cursor='pointer'
          onClick={() => {
            history.push('/receitas')
          }}
        />
      </InputRightElement>
    </InputGroup>
  )
}
