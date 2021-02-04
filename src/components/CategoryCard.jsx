import React from 'react'
import theme from '../theme'
import { TopTitle } from '../components/MainStyles'
import { Box } from '../components/CarouselOne/styles'
import Back from '../assets/Image1.jpg'
import { Btn } from '../components/MainStyles'
import { Image, Flex } from '@chakra-ui/react'
import { useRequest } from '../context/Request'
import { Link as ReachLink } from 'react-router-dom'

const CategoryCard = ({ data }) => {
  const { setLoading } = useRequest()
  return (
    <Flex flexDirection='column' alignItems='center'>
      <TopTitle color={theme.colors.title}>{data.title}</TopTitle>
      <Box mobile={true} bg='transparent'>
        <Image
          boxSize='100%'
          objectFit='cover'
          src={Back}
          alt='Dan Abramov'
          position='absolute'
          zIndex='-1'
          borderRadius='2rem'
        />
      </Box>
      <ReachLink onClick={() => setLoading(true)} to={`/receita/${data.id}`}>
        <Btn margin='20px'>ver receita</Btn>
      </ReachLink>
    </Flex>
  )
}

export default CategoryCard
