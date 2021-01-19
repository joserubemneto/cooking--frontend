import React from 'react'
import { Grid, GridItem, Image, Flex, Spacer, Text } from "@chakra-ui/react"
import {TopTitle, HeadTitle} from '../components/MainStyles'
import theme from '../theme'
import Back from '../assets/back.svg'
import Photo from '../assets/Image5.jpg'
import Elipse from '../assets/Ellipse75.svg'
import CarouselOne from '../components/CarouselOne'
import { Link } from 'react-router-dom'

const Recipe = (id) => {

  const category = ["Amores"];

  const recipe = "Paz";

  const ingredients = [
    {
      id: "1",
      name: "amor",
      tag: "yes"
    },
    {
      id: "2",
      name: "carinho",
      tag: "yes"
    },
    {
      id: "3",
      name: "dengo",
      tag: "yes"
    },
    {
      id: "4",
      name: "paciencia",
      tag: "yes"
    },
    {
      id: "5",
      name: "calma",
      tag: "yes"
    },
    {
      id: "6",
      name: "fé",
      tag: "yes"
    }
  ]

  const preparation = [
    {
      id: "1",
      name: "perai po faz com calma",
      tag: "yes"
    },
    {
      id: "2",
      name: "pensa no outro c carinho",
      tag: "yes"
    },
    {
      id: "3",
      name: "evita briga pq isso so vai te desgastar",
      tag: "yes"
    },
    {
      id: "4",
      name: "e #fé pq tu tem q seguir em frente",
      tag: "yes"
    },
    {
      id: "5",
      name: "é sobre isso empatia",
      tag: "yes"
    },
  ]

  return (
    <>
    <Grid
    templateColumns="11% 51% 27% 11%"
    templateRows="repeat(6, auto)"
    >
      <GridItem
      colStart={2}
      colSpan={2}
      >
        <Flex

        >
          <TopTitle color={theme.colors.title}>{recipe}</TopTitle>
          <Spacer />
          <Flex
          alignItems="center"
          >
              <p>voltar para </p><p style={{display: 'inline-block', marginLeft: '7px', color:`${theme.colors.subTitle}`}} >{category[0]}</p>
              <Link to="/recipes">
              <Image
                boxSize="35px"
                objectFit="cover"
                src={Back}
                alt="Dan Abramov"
                zIndex="-1"
                cursor="pointer"
                borderRadius="2rem"
                ml='10px'
              />
              </Link>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem
      colSpan={2}
      colStart={2}
      >
        <Image
                mt="30px"
                boxSize="75%"
                height="400px"
                objectFit="cover"
                src={Photo}
                alt="Dan Abramov"
                zIndex="-1"
                cursor="pointer"
              />
      </GridItem>
      <GridItem
      colStart={2}
      >
        <TopTitle Talign="left" color={theme.colors.subTitle}>Resumo</TopTitle>
        <Text fontSize="18px" lineHeight="27px">resumo do resumo do resumo do resumo resumo do resumo do resumo do resumoresumo do resumo do resumo do resumoresumo do resumo do resumo do resumoresumo do resumo do resumo do resumoresumo do resumo do resumo do resumoresumo do resumo do resumo do resumoresumo do resumo do resumo do resumo</Text>
      </GridItem>
      <GridItem
      colStart={2}
      mt='20px'
      >
      <TopTitle Talign="left" color={theme.colors.subTitle}>Ingredientes</TopTitle>
      <div>
      {ingredients.map((ingredient) => (
            <Flex
              key={ingredient.id}
              align="center"
              mt="5px"
            >
              <Image
                src={Elipse}
                alt={"Elipse"}
                p="0 1rem"
              />
              <Text
                fontWeight="medium"
                fontSize="1.3rem"
              >
                {ingredient.name}
              </Text>
            </Flex>
          ))}
      </div>
      </GridItem>
      <GridItem
      colStart={2}
      >
        <TopTitle Talign="left" color={theme.colors.subTitle}>Modo de Preparo</TopTitle>
        <div>
        {preparation.map((preparation, index) => (
            <Flex
              key={preparation.id}
              align="center"
              mt="20px"
              ml="15px"
            >
              <Text fontSize="1.7rem" color={theme.colors.title}>{index + 1}.</Text>
              <Text
                fontSize="1.3rem"
                ml="20px"
                fontWeight="light"
              >
                {preparation.name}
              </Text>
            </Flex>
          ))}
        </div>
      </GridItem>
    </Grid>
    <CarouselOne title="Outras Receitas"/>
    </>
  )
}

export default Recipe
