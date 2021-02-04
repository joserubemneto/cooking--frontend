import React, {useState, useCallback, useEffect} from 'react'
import CarouselOne from '../components/CarouselOne'
import Loading from '../components/Loading'
import RecipesComponent from '../components/Recipes'
import RecipeMobile from '../components/Recipes/RecipeMobile'
import { useRequest } from '../context/Request'
import useMedia from '../hooks/useMedia'
import { getCategories, getRecipes } from '../services/api'
import Error from '../components/Error'

const Recipes = () => {
  const large = useMedia('(min-width: 62.5rem)');
  const [categories, setCategories] = useState([])
  const [recipes, setRecipes] = useState([]);
  const { loading, setLoading, error, setError } = useRequest()

  const requestChef = useCallback(async () => {
    try {
      setLoading(true)
      const { data: categoryData } = await getCategories()
      setCategories(categoryData)
      const { data: recipeData } = await getRecipes()
      console.log(recipes);
      console.log(categories);
      setRecipes(recipeData)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  })

  useEffect(() => {
    requestChef()
  }, [])

  return (
    <>
      {!loading && !error && (
          large ? (<>
            <CarouselOne title="Receitas mais acessadas" page="receitas" data={recipes} />
            <RecipesComponent data={categories} />
          </>) :
          <RecipeMobile recipes={recipes} categories={categories} />
      )}
      {loading && !error && <Loading />}
      {error && <Error />}
    </>
  )
}

export default Recipes
