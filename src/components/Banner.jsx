import React, {useContext} from 'react'
import { ThemeContext } from 'styled-components'
import { Grid, GridItem, Image, Text } from "@chakra-ui/react"
import Cook from '../assets/Ilustração Banner.png'
import { Btn } from './MainStyles'


const Banner = () => {
  const { fonts, colors } = useContext(ThemeContext)

  return (
    <>
      <Grid
      mt="30px"
      templateColumns="11% 30% 54% 11%"
      templateRows="repeat(3, auto)"
      fontFamily={fonts.body}
      >
        <GridItem
        colStart={2}
        rowStart={1}
        fontSize="42px"
        fontWeight="bold"
        >
          <Text>Aprenda a cozinhar</Text>
          <Text color={colors.subTitle}>de verdade</Text>
        </GridItem>
        <GridItem
        colStart={2}
        rowStart={2}
        mr="75px"
        mt="30px"
        mb="15px"
        >
          <Text>Conectamos pessoas incríveis a <Text display="inline" fontWeight="bold">receitas capazes de serem realizadas.</Text> Do avançado à quem mora sozinho e precisa cozinhar :) </Text>
        </GridItem>
        <GridItem
        colStart={2}
        rowStart={3}
        >
          <Btn>acessar receitas</Btn>
        </GridItem>
        <GridItem
        colStart={3}
        rowSpan={3}
        maxW="635px"
        >
          <Image
            objectFit="cover"
            src={Cook}
            alt="Ilustração de um homem cozinhando."
          />
        </GridItem>
      </Grid>
    </>
  )
}

export default Banner
