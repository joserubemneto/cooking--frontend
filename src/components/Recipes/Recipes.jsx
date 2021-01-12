import React from 'react'
import CarouselOne from '../CarouselOne/CarouselOne'
import {TopTitle} from '../MainStyles'

const Recipes = () => {
  const title = [
    "Receitas mais acessadass"
  ]

  return (
    <>
      <CarouselOne title={title[0]}/>
      <TopTitle>Categorias</TopTitle>
    </>
  )
}

export default Recipes
