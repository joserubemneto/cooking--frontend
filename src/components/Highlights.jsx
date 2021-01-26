import React from 'react'
import { Grid, Flex, Heading, Box, Text, SimpleGrid } from '@chakra-ui/react'
import { Btn } from './MainStyles'

const Highlights = () => {
  return (
    <Flex
      justify='flex-start'
      align='center'
      direction='column'
      mt='12.5rem'
      mb='5rem'
      borderRadius='0 150px'
      bgGradient='linear(262.91deg, #F73C2C -32.44%, #EE6737 136.54%)'>
      <Heading mt='4rem' pl='0.6rem' pr='0.6rem' fontSize='2rem' color='#FFF'>
        Destaques
      </Heading>

      <SimpleGrid
        mb='5.5rem'
        mt='3rem'
        columns={{ sm: 1, md: 1, lg: 2 }}
        gap='5rem'>
        <Flex
          maxWidth='400px'
          direction='column'
          align='center'
          m='0rem 1rem'
          p='1.875rem 2.3rem'
          boxShadow='20px 20px 50px rgba(0, 0, 0, 0.3)'
          borderLeft='1px solid rgba(255, 255, 255, 0.7)'
          borderTop='1px solid rgba(255, 255, 255, 0.7)'
          borderRadius='10px'
          position='relative'
          zIndex='1'
          overflow='hidden'
          _before={{
            content: `""`,
            opacity: '40%',
            position: 'absolute',
            background: 'inherit',
            zIndex: '-1',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(223.82deg, #FFF 7.66%, #fff 86.15%)',
            filter: 'blur(10px)',
            margin: '-20px',
          }}>
          <Heading color='#FFF' fontSize='1.375rem'>
            Receitas de São João
          </Heading>
          <Text mt='1.75rem' textAlign='center' color='#FFF'>
            resumo resumo resumo resumo resumo resumo resumo resumo resumo
            resumo resumo resumo resumo resumo resumo
          </Text>
          <Box pt='1.8rem'>
            <Btn background='#fff' bgHover='#fff' color='#333'>
              ver destaque
            </Btn>
          </Box>
        </Flex>

        <Flex
          maxWidth='400px'
          direction='column'
          align='center'
          m='0rem 1rem'
          p='1.875rem 2.3rem'
          boxShadow='20px 20px 50px rgba(0, 0, 0, 0.3)'
          borderLeft='1px solid rgba(255, 255, 255, 0.7)'
          borderTop='1px solid rgba(255, 255, 255, 0.7)'
          borderRadius='10px'
          position='relative'
          zIndex='1'
          overflow='hidden'
          _before={{
            content: `""`,
            opacity: '40%',
            position: 'absolute',
            background: 'inherit',
            zIndex: '-1',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(223.82deg, #FFF 7.66%, #fff 86.15%)',
            filter: 'blur(10px)',
            margin: '-20px',
          }}>
          <Heading color='#FFF' fontSize='1.375rem'>
            Receitas de São João
          </Heading>
          <Text mt='1.75rem' textAlign='center' color='#FFF'>
            resumo resumo resumo resumo resumo resumo resumo resumo resumo
            resumo resumo resumo resumo resumo resumo
          </Text>
          <Box pt='1.8rem'>
            <Btn background='#fff' bgHover='#fff' color='#333'>
              ver destaque
            </Btn>
          </Box>
        </Flex>

        <Flex
          maxWidth='400px'
          direction='column'
          align='center'
          m='0rem 1rem'
          p='1.875rem 2.3rem'
          boxShadow='20px 20px 50px rgba(0, 0, 0, 0.3)'
          borderLeft='1px solid rgba(255, 255, 255, 0.7)'
          borderTop='1px solid rgba(255, 255, 255, 0.7)'
          borderRadius='10px'
          position='relative'
          zIndex='1'
          overflow='hidden'
          _before={{
            content: `""`,
            opacity: '40%',
            position: 'absolute',
            background: 'inherit',
            zIndex: '-1',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(223.82deg, #FFF 7.66%, #fff 86.15%)',
            filter: 'blur(10px)',
            margin: '-20px',
          }}>
          <Heading color='#FFF' fontSize='1.375rem'>
            Receitas de São João
          </Heading>
          <Text mt='1.75rem' textAlign='center' color='#FFF'>
            resumo resumo resumo resumo resumo resumo resumo resumo resumo
            resumo resumo resumo resumo resumo resumo
          </Text>
          <Box pt='1.8rem'>
            <Btn background='#fff' bgHover='#fff' color='#333'>
              ver destaque
            </Btn>
          </Box>
        </Flex>

        <Flex
          maxWidth='400px'
          direction='column'
          align='center'
          m='0rem 1rem'
          p='1.875rem 2.3rem'
          boxShadow='20px 20px 50px rgba(0, 0, 0, 0.3)'
          borderLeft='1px solid rgba(255, 255, 255, 0.7)'
          borderTop='1px solid rgba(255, 255, 255, 0.7)'
          borderRadius='10px'
          position='relative'
          zIndex='1'
          overflow='hidden'
          _before={{
            content: `""`,
            opacity: '40%',
            position: 'absolute',
            background: 'inherit',
            zIndex: '-1',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(223.82deg, #FFF 7.66%, #fff 86.15%)',
            filter: 'blur(10px)',
            margin: '-20px',
          }}>
          <Heading color='#FFF' fontSize='1.375rem'>
            Receitas de São João
          </Heading>
          <Text mt='1.75rem' textAlign='center' color='#FFF'>
            resumo resumo resumo resumo resumo resumo resumo resumo resumo
            resumo resumo resumo resumo resumo resumo
          </Text>
          <Box pt='1.8rem'>
            <Btn background='#fff' bgHover='#fff' color='#333'>
              ver destaque
            </Btn>
          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}

export default Highlights
