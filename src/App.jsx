import React from 'react'
import { ThemeProvider } from 'styled-components'
import { TopTitle, HeadTitle, SlideTitle, GlobalStyle } from './components/MainStyles'
import theme from './theme'
import CarouselOne from './components/CarouselOne/CarouselOne'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle font={theme.fonts.body} />
    <TopTitle color={theme.colors.title}>Top Receitas</TopTitle>
    <SlideTitle color={theme.colors.subTitle}>Ovos e Bacon</SlideTitle>
    <HeadTitle color={theme.colors.subTitle}>Bolo de Trigo</HeadTitle>
    <CarouselOne />
  </ThemeProvider>
)

export default App
