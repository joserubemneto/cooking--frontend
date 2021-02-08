import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { RequestProvider } from './context/Request'
import { GlobalStyle } from './components/MainStyles'
import theme from './theme'
import Routes from './routes'

const App = () => (
  <ChakraProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle font={theme.fonts.body} />
      <RequestProvider>
        <Box maxWidth='1440px' m='0 auto' h='100%' >
          <Routes />
        </Box>
      </RequestProvider>
    </ThemeProvider>
  </ChakraProvider>
)

export default App
