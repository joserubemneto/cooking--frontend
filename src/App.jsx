import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyle } from './components/MainStyles'
import theme from './theme'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages'
import Recipes from './pages/recipes'
import Recipe from './pages/recipe'
import Highlights from './pages/highlights'
import About from './pages/about'
import Chefs from './pages/chefs'

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
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/recipes">
              <Recipes/>
            </Route>
            <Route path="/recipe/:id">
              <Recipe/>
            </Route>
            <Route path="/highlights">
              <Highlights/>
            </Route>
            <Route path="/chefs">
              <Chefs/>
            </Route>
            <Route path="/chef/:id">

            </Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  </ChakraProvider>
)

export default App
