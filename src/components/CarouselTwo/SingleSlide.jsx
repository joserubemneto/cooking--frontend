import React, { useContext } from 'react'
import useMedia from '../../hooks/useMedia'
import { Box, Image, Flex, Text, Button, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { useRequest } from '../../context/Request'

const SingleSlide = ({ data }) => {
  const { colors } = useContext(ThemeContext)
  const small = useMedia('(max-width: 544px)')
  const { setLoading } = useRequest()

  return (
    <>
      <Flex
        bg='#F1F1F1'
        borderRadius='16px'
        ml='1.25rem'
        h={small ? '400px' : '240px'}
        direction={small && 'column'}
        position='relative'>
        <Box
          maxWidth={small ? '100%' : '280px'}
          maxHeight={small ? '50%' : '100%'}>
          <Image
            src={data.img_url}
            alt={data.title || data.name}
            w='100%'
            boxSize='100%'
            objectFit='cover'
            borderLeftRadius={!small && '16px'}
            borderTopRadius={small && '16px'}
            borderTopLeftRadius='16px'
          />
        </Box>
        <Flex direction='column' justifyContent='space-around' p='1rem 1.5rem'>
          <Text fontSize='1.375rem' color={colors.subTitle} fontWeight='bold' mt='.5rem'>
            {data && data.title}
          </Text>
          <Text>{data.resume}</Text>
          <Link
            as={ReactLink}
            onClick={() => setLoading(true)}
            to={`receita/${data && data.id}`}
            textDecoration='none'
            _hover={{ textDecoration: 'none' }}>
            <Button
              alignSelf='flex-start'
              bgGradient='linear(262.91deg, #EE6737 5.69%, #F73C2C 94.63%)'
              color='#FFF'
              fontWeight='bold'
              borderRadius='2rem'
              p='0.2rem 1rem'
              mt='1rem'
              minWidth='160px'
              transition='300ms'
              _hover={{
                transform: 'translateY(-5px)',
                bgGradient:
                  'linear(262.91deg, #F73C2C -32.44%, #EE6737 136.54%)',
              }}>
              ver receita
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  )
}

export default SingleSlide
