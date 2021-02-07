import React, { useCallback, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import Banner from '../components/Banner'
import CarrouselOne from '../components/CarouselOne'
import Highlights from '../components/Highlights'
import { useRequest } from '../context/Request'
import { getHighlights, getChefs, getRecipes } from '../services/api'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Landing = () => {
  const [highlights, setHighlights] = useState([])
  const [chefs, setChefs] = useState([])
  const [recipes, setRecipes] = useState([])
  const { loading, setLoading, error, setError } = useRequest()

  const requestData = useCallback(async () => {
    try {
      setLoading(true)
      const { data: highlightsData } = await getHighlights()
      setHighlights(highlightsData)
      const { data: chefsData } = await getChefs()
      setChefs(chefsData)
      const { data: recipesData } = await getRecipes()
      setRecipes(recipesData)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    requestData()
    setLoading(true)
  }, [])

  return (
    <>
      {!loading && !error && (
        <Box position="relative">
          <Banner />
          <CarrouselOne title='Top Receitas' data={recipes} url={'receita'} />
          <Highlights position='absolute' data={highlights} />
          <CarrouselOne title='Top Chefs' data={chefs} url={'chef'} />
        </Box>
      )}
      {loading && !error && <Loading />}
      {error && <Error />}
    </>
  )
}

export default Landing
