import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import { RequestProvider } from './context/Request'
import { GlobalStyle } from './components/MainStyles'
import theme from './theme'
import Routes from './routes'

const App = () => (
  <ChakraProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle font={theme.fonts.body} />
      <RequestProvider>
        <Routes />
      </RequestProvider>
    </ThemeProvider>
  </ChakraProvider>
)

export default App
