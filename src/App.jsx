import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyle } from './components/MainStyles'
import theme from './theme'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages'
import Recipes from './pages/Recipes'

const App = () => (
  <ChakraProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle font={theme.fonts.body} />
      <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Landing/>
            </Route>
            <Route path="/about"></Route>
            <Route path="/receitas">
              <Recipes />
            </Route>
            <Route path="recipe/:id"></Route>
            <Route path="highlights"></Route>
            <Route path="chefs"></Route>
            <Route path="chef/:id"></Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  </ChakraProvider>
)

export default App
