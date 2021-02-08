import React, { useContext, useEffect } from 'react'
import useMedia from '../hooks/useMedia'
import { Flex, Box, Heading, Link, Text } from '@chakra-ui/react'
import { ThemeContext } from 'styled-components'
import { Logo } from '../components/MainStyles'
import { ReactComponent as Mail } from '../assets/Mail.svg'

const About = () => {
  const { fonts, colors } = useContext(ThemeContext)
  const mobile = useMedia('(max-width: 48rem)')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          Olá! Somos <span style={{fontWeight: '700', color: '#F73C2C'}}><a href="https://github.com/Joserubemn31" target="_blank">José Rubem</a></span> e <span style={{fontWeight: '700', color: '#F73C2C'}}><a href="https://github.com/lucasgmelo" target="_blank">Lucas Melo</a></span>, dois desenvolvedores que idealizaram esse projeto para estudar e aprimorar habilidades. Você pode encontrar mais informações técnicas sobre o projeto acessando nosso <span style={{fontWeight: '700', color: '#F73C2C'}}><a href="https://github.com/Joserubemn31/cooking--frontend" target="_blank">repositório.</a></span>
        </Text>
      </Box>
      <Box mt='3rem'>
        <Heading fontSize='1.625rem' color={colors.subTitle}>
          Contato
        </Heading>
        <Text fontSize='1.125rem' mt='2rem'>
          Para mais informações técnicas sobre o Cooking, entre em contato conosco. Feedbacks, comentários e avaliações são sempre bem vindos!
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
