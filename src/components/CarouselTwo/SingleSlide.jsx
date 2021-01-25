import React, { useContext } from 'react'
import useMedia from '../../hooks/useMedia'
import { Box, Image, Flex, Text, Button } from '@chakra-ui/react'
import { ThemeContext } from 'styled-components'
import Picture from '../../assets/Image1.jpg'

const SingleSlide = () => {
  const { fonts, colors } = useContext(ThemeContext)
  const small = useMedia('(max-width: 544px)')

  return (
    <Flex
      bg='#F1F1F1'
      borderRadius='16px'
      ml='1.25rem'
      direction={small && 'column'}>
      <Box maxWidth={small ? '100%' : '280px'}>
        <Image
          src={Picture}
          w='100%'
          boxSize='100%'
          objectFit='cover'
          borderLeftRadius={!small && '16px'}
          borderTopRadius={small && '16px'}
          borderTopLeftRadius='16px'
        />
      </Box>
      <Flex direction='column' justifyContent='space-between' m='2rem'>
        <Text fontSize='1.375rem' color={colors.subTitle} fontWeight='bold'>
          bacon e ovos
        </Text>
        <Text mt='1rem' fontSize='0.875rem'>
          resumo da receita resumo da receitaresumo da receita resumo da receita
          resumo da receita resumo resumo da receita resumo
        </Text>
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
            bgGradient: 'linear(262.91deg, #F73C2C -32.44%, #EE6737 136.54%)',
          }}>
          ver receita
        </Button>
      </Flex>
    </Flex>
  )
}

export default SingleSlide
