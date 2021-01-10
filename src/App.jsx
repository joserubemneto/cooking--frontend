import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer/index'
import Header from './components/Header/index'
import { GlobalStyle } from './components/MainStyles'
import theme from './theme'

const App = () => (
  <ChakraProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle font={theme.fonts.body} />
      <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/"/>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  </ChakraProvider>
)

export default App
