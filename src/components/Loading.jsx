import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import loading from '../assets/loading.json'

const Loading = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Flex justify='center' align='center' direction='column'>
      <Box maxWidth='100vh'>
        <Lottie width='100%' options={options} />
      </Box>
    </Flex>
  )
}

export default Loading
