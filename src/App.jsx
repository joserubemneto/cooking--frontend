import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import { GlobalStyle } from './components/MainStyles'
import theme from './theme'
import CarouselOne from './components/CarouselOne/CarouselOne'

const App = () => (
  <ChakraProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle font={theme.fonts.body} />
      <BrowserRouter>
        <Header />
        <CarouselOne />
        <Switch>
          <Route path="/"/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </ChakraProvider>
)

export default App
