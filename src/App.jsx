import React from 'react'
import { ThemeProvider } from 'styled-components'
import { TopTitle, HeadTitle, SlideTitle, GlobalStyle } from './components/MainStyles'
import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle font={theme.fonts.body} />
    <TopTitle color={theme.colors.title}>Top Receitas</TopTitle>
    <SlideTitle color={theme.colors.subTitle}>Ovos e Bacon</SlideTitle>
    <HeadTitle color={theme.colors.subTitle}>Bolo de Trigo</HeadTitle>
  </ThemeProvider>
)

export default App
