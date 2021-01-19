import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Flex, Box, Heading, Text, Link } from '@chakra-ui/react'
import { Link as ReactLink, useParams } from 'react-router-dom'
import CarouselOne from '../components/CarouselOne'
import { ReactComponent as Back } from '../assets/back.svg'

const Chef = () => {
  const [chef, setChef] = useState([])
  const { id } = useParams()

  useEffect(() => {
    (async() => {
      const response = await axios.get(`https://cooking--api.herokuapp.com/chef/${id}`)
      setChef(response.data)
    })()
  }, [])

  return (
    <Box>
      <Flex
        direction="column"
        align="flex-start"
        justify="flex-start"
        p={["4rem 2rem", "4rem 2rem", "4rem 5rem", "4rem 8rem"]}
      >

        <Flex
          w="100%"
          justify="space-between"
          align="center"
        >

          <Heading
            color="#F73C2C"
            fontSize="1.5rem"
          >
            {chef.name}
          </Heading>

          <Flex
            justify="center"
            align="center"
            direction={["column-reverse", "column-reverse", "row", "row"]}
          >
            <Box
              fontSize="1.125rem"
              mr={"2rem"}
              display={["none", "none", "block", "block"]}
              visibility={["hidden", "hidden", "visible", "visible"]}
            >
              voltar para <Text color="#D64D27" display="inline">Chefs</Text>
            </Box>
            <Link
              as={ReactLink}
              to="/chefs"
            >
             <Back/>
            </Link>
          </Flex>

        </Flex>

        <Box
          mt="2rem"
          w="170px"
          h="170px"
          bg="#C5C5C5"
          borderRadius="50%"
          />

          <Text
            mt="3rem"
            maxWidth="500px"
          >
            resumodochefresumdochef  resumo dochef resumo do chef  resumo dochef resumo do chef
            resumo do chef resumo do chef resumo do chefresumodochefresumdochef
          </Text>

          <Flex
            mt="1.25rem"
            justify="center"
            align="center"
          >
            <Box
              position="relative"
              bgGradient="linear(201.73deg, #EE6737 -7.35%, #F73C2C 103.6%)"
              borderRadius="50%"
            >
              <Text
                p="0.5rem 1rem"
                fontSize="1.25rem"
                color="#FFF"
                fontWeight="bold"
                textAlign="center"
              >
                {chef.recipes}
              </Text>
            </Box>

            <Text
              ml="1rem"
              fontSize="1.25rem"
              color="#D64D27"
              fontWeight="bold"
            >
              Receitas no cooking
            </Text>
          </Flex>

      </Flex>

      <CarouselOne title="Receitas do chef"/>
    </Box>
  )
}

export default Chef
