import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalStyle, Container } from './components/MainStyles'
import theme from './theme'

const App = () => (
  <ChakraProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle font={theme.fonts.body} />
      <BrowserRouter>
        <Container>
          <Header />
          <Switch>
            <Route path="/"/>
          </Switch>
          <Footer/>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  </ChakraProvider>
)

export default App
