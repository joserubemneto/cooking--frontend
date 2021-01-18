import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyle } from './components/MainStyles'
import theme from './theme'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages'
<<<<<<< HEAD
import Highlights from './pages/highlights'
=======
import About from './pages/about'
>>>>>>> 44f09e288277e6e8c98fc33f7252e096083f29ad

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
<<<<<<< HEAD
            <Route path="/about"></Route>
            <Route path="/recipes"></Route>
            <Route path="/recipe/:id"></Route>
            <Route path="/highlights">
              <Highlights/>
            </Route>
            <Route path="/chefs"></Route>
            <Route path="/chef/:id"></Route>
=======
            <Route path="/about">
              <About/>
            </Route>
            <Route path="recipes"></Route>
            <Route path="recipe/:id"></Route>
            <Route path="highlights"></Route>
            <Route path="chefs"></Route>
            <Route path="chef/:id"></Route>
>>>>>>> 44f09e288277e6e8c98fc33f7252e096083f29ad
          </Switch>
          <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  </ChakraProvider>
)

export default App
