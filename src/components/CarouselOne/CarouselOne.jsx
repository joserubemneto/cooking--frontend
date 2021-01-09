import React, {useContext} from 'react'
import Slider from './Slider'
import { TopTitle, GlobalStyle } from '../MainStyles'
import { ThemeContext } from 'styled-components'


const CarouselOne = () => {
  const {font, colors} = useContext(ThemeContext)

  return (
    <div>
      <GlobalStyle />
      <TopTitle>Receitas mais procuradas</TopTitle>
      <Slider />
    </div>
  )
}

export default CarouselOne
