import React from 'react'
import CarouselOne from '../components/CarouselOne'
import RecipesComponent from '../components/Recipes'

const Recipes = () => {
  const title = [
    "Receitas mais acessadass"
  ]

  const categories = [
    "Bolos e Tortas", "Camarões", "Carnes", "Empanados", "Microondas", "Petiscos", "Bebidas", "Bolos e Tortas", "Camarões", "Carnes", "Empanados", "Doces", "Veganos"
  ]

  return (
    <>
      <CarouselOne title={title[0]}/>
      <RecipesComponent/>

    </>
  )
}

export default Recipes
