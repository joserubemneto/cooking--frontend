import React, { useState, useCallback, useEffect } from 'react'
import CategoryCard from '../CategoryCard'
import { Grid, GridItem, Flex, Spacer } from "@chakra-ui/react"
import {TopTitle} from '../MainStyles'
import theme from '../../theme'
import {Select} from '../MainStyles'
import Loading from '../Loading'
import Error from '../Error'
import { useRequest } from '../../context/Request'
import { getRecipes, getRecipesByCategory } from '../../services/api'

const RecipeMobile = ({ categories}) => {
  const [recipes, setRecipes] = useState([]);
  const [categoryTarget, setCategoryTarget] = useState([]);
  const { loading, setLoading, error, setError } = useRequest()

  const requestData = useCallback(async (target) => {
    try {
      const { data: recipeData } = await getRecipes()
      const { data: recipeByCategoryData } = await getRecipesByCategory(target)
      { target ? setRecipes(recipeData) : setRecipes(recipeByCategoryData) }
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  })

  useEffect(() => {
    requestData(categoryTarget)
  }, [categoryTarget])

  return (
    <>
      {!loading && !error && (
        <>
        <Grid
        templateColumns="9% 82% 9%"

        >
          <GridItem
          colStart={2}
          >
            <Flex
            alignItems="center"
            >
            <TopTitle color={theme.colors.title}>Nossas Receitas</TopTitle>
            <Spacer />
            <Select

            >
              <option disabled selected>Filtros</option>
              <option option="none">Nenhum</option>
              {categories.map((category) => (
                <option onChange={() => {
                  setCategoryTarget(category.id);
                  console.log(categoryTarget);
                }}
                value={category}
                >{category.name}</option>
              ))}
            </Select>
            </Flex>
          </GridItem>
          <GridItem
          colStart={2}
          colSpan={1}
          >
            {recipes.map((recipe) => (
              <CategoryCard data={recipe}/>
            ))}
          </GridItem>
        </Grid>
      </>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </>
  )
}

export default RecipeMobile
