import React, { useContext } from 'react'
import useMedia from '../hooks/useMedia'
import { Flex, Box, Heading, Link, Text } from '@chakra-ui/react'
import { ThemeContext } from 'styled-components'
import { Logo } from '../components/MainStyles'
import { ReactComponent as Mail } from '../assets/Mail.svg'

const About = () => {
  const { fonts, colors } = useContext(ThemeContext)
  const mobile = useMedia('(max-width: 48rem)')

  return (
    <Flex
      maxWidth='740px'
      direction='column'
      justify='center'
      align='center'
      m={mobile ? '0 3rem' : '0 auto'}>
      <Logo font={fonts.logo}>Cooking</Logo>
      <Box mt='3rem'>
        <Heading fontSize='1.625rem' color={colors.subTitle}>
          Quem Somos
        </Heading>
        <Text fontSize='1.125rem' mt='2rem' lineHeight='27px'>
          texto sobre nós texto sobre nós texto sobre nós texto sobre nós texto
          sobre nós texto sobre nós texto sobre nós texto sobre nós texto sobre
          nós texto sobre nós texto sobre nós texto sobre nós texto sobre nós
          texto sobre nós texto sobre nós texto sobre nós texto sobre nós texto
          sobre nós texto sobre nós texto sobre nós texto sobre nós
        </Text>
      </Box>
      <Box mt='3rem'>
        <Heading fontSize='1.625rem' color={colors.subTitle}>
          Termos de uso e política de privacidade
        </Heading>
        <Text fontSize='1.125rem' mt='2rem'>
          texto sobre nós texto sobre nós texto sobre nós texto sobre nós texto
          sobre nós texto sobre nós texto sobre nós texto sobre nós texto sobre
          nós texto sobre nós texto sobre nós texto OU LISTA DESORDENADA nós
          texto sobre nós texto sobre nós texto sobre nós texto sobre nós texto
          sobre nós texto sobre nós texto sobre nós texto sobre nós texto sobre
          nós
        </Text>
      </Box>
      <Box mt='3rem'>
        <Heading fontSize='1.625rem' color={colors.subTitle}>
          Contato
        </Heading>
        <Text fontSize='1.125rem' mt='2rem'>
          textinho p/ contato textinho p/ contato textinho p/ contato textinho
          p/ contato textinho p/ contato
        </Text>
      </Box>
      <Flex alignSelf='flex-start' mt='2rem'>
        <Mail />
        <Link to='/' color={colors.subTitle} ml='1.25rem'>
          email@cooking.com
        </Link>
      </Flex>
    </Flex>
  )
}

export default About
