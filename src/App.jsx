import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { ChakraProvider } from "@chakra-ui/react"
import { GlobalStyle } from "./components/MainStyles"
import theme from "./theme"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Landing from "./pages"
import Recipes from "./pages/recipes"
import Recipe from "./pages/recipe"
import Highlights from "./pages/highlights"
import About from "./pages/about"
import Chefs from "./pages/chefs"
import Chef from "./pages/chef"
import Category from "./pages/category"

const App = () => (
  <ChakraProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle font={theme.fonts.body} />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/sobre">
            <About />
          </Route>
          <Route path="/receitas">
            <Recipes />
          </Route>
          <Route path="/categoria/:id">
            <Category />
          </Route>
          <Route path="/receita/:id">
            <Recipe />
          </Route>
          <Route path="/destaques">
            <Highlights />
          </Route>
          <Route path="/chefs">
            <Chefs />
          </Route>
          <Route path="/chef/:id">
            <Chef />
          </Route>
          <Route path="/chef/:id"></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </ChakraProvider>
)

export default App
