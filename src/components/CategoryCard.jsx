import React from 'react'
import theme from '../theme'
import { TopTitle } from '../components/MainStyles'
import { Box } from '../components/CarouselOne/styles'
import { Btn } from '../components/MainStyles'
import { Image, Flex, Text } from '@chakra-ui/react'
import { useRequest } from '../context/Request'
import { Link as ReachLink } from 'react-router-dom'

const CategoryCard = ({ data }) => {
  const { setLoading } = useRequest()
  return (
    <Flex flexDirection='column' alignItems='center' mb='3.5rem'>
      <TopTitle color={theme.colors.title}>{data.title}</TopTitle>
      <Box mobile={true} >
        <Image
          width="100px"
          boxSize='100%'
          objectFit='cover'
          src={data.img_url}
          alt={data.title || data.name}
          borderRadius='2rem'
        />
      </Box>
      <Text textAlign='center' m='1rem'>{data.resume}</Text>
      <ReachLink onClick={() => setLoading(true)} to={`/receita/${data.id}`}>
        <Btn>ver receita</Btn>
      </ReachLink>
    </Flex>
  )
}

export default CategoryCard
