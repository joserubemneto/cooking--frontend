import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Cook from '../assets/Ilustração Banner.png'
import { Btn } from './MainStyles'
import useMedia from '../hooks/useMedia'
import { Link } from 'react-router-dom'

const Banner = () => {
  const { fonts, colors } = useContext(ThemeContext)
  const small = useMedia('(max-width: 410px)')
  const mobile = useMedia('(max-width: 48rem)')
  const large = useMedia('(min-width: 62.5rem)')
  const laptop = useMedia('(min-width: 1340px)')

  if (mobile) {
    return (
      <>
        <Grid
          mt='30px'
          templateColumns='9% 72% 9%'
          templateRows='repeat(4, auto)'
          fontFamily={fonts.body}
          textAlign='center'
          justifyContent='center'>
          <GridItem
            colStart={2}
            rowStart={1}
            fontSize={small ? '26px' : '30px'}
            fontWeight='bold'
            mb={small ? '26px' : '20px'}>
            <Text>Aprenda a cozinhar</Text>
            <Text color={colors.subTitle}>de verdade</Text>
          </GridItem>
          <GridItem
            colStart={2}
            rowStart={3}
            mt='30px'
            fontSize={small ? '16px' : '18px'}>
            <Text>
              Conectamos pessoas incríveis a{' '}
              <Text display='inline' fontWeight='bold'>
                receitas capazes de serem realizadas.
              </Text>{' '}
              Do avançado à quem mora sozinho e precisa cozinhar :){' '}
            </Text>
          </GridItem>
          <GridItem colStart={2} rowStart={4} mt='30px' mb='20px'>
            <Link to='/receitas'>
              <Btn>acessar receitas</Btn>
            </Link>
          </GridItem>
          <GridItem colStart={2} rowStart={2} maxW='635px'>
            <Image
              objectFit='cover'
              src={Cook}
              alt='Ilustração de um homem cozinhando.'
            />
          </GridItem>
        </Grid>
      </>
    )
  } else
    return (
      <>
        <Grid
          mt='30px'
          templateColumns={laptop ? '11% 30% 54% 11%' : '11% 40% 44% 11%'}
          templateRows='repeat(3, auto)'
          fontFamily={fonts.body}>
          <GridItem
            colStart={2}
            rowStart={1}
            fontSize={laptop ? '42px' : '30px'}
            fontWeight='bold'>
            <Text>Aprenda a cozinhar</Text>
            <Text color={colors.subTitle}>de verdade</Text>
          </GridItem>
          <GridItem
            colStart={2}
            rowStart={2}
            mr='75px'
            mt='30px'
            fontSize={large ? '18px' : '16px'}>
            <Text>
              Conectamos pessoas incríveis a{' '}
              <Text display='inline' fontWeight='bold'>
                receitas capazes de serem realizadas.
              </Text>{' '}
              Do avançado à quem mora sozinho e precisa cozinhar :){' '}
            </Text>
          </GridItem>
          <GridItem colStart={2} rowStart={3} mt={laptop ? '20px' : '30px'}>
            <Link to='/receitas'>
              <Btn>acessar receitas</Btn>
            </Link>
          </GridItem>
          <GridItem colStart={3} rowSpan={3} maxW='635px'>
            <Image
              objectFit='cover'
              src={Cook}
              alt='Ilustração de um homem cozinhando.'
            />
          </GridItem>
        </Grid>
      </>
    )
}

export default Banner
