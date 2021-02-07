import React, { useState, useEffect, useCallback } from 'react'
import { getChefs, getRecipes } from '../services/api'
import useMedia from '../hooks/useMedia'
import { useRequest } from '../context/Request'
import { SimpleGrid, Box } from '@chakra-ui/react'
import CarouselOne from '../components/CarouselOne'
import ChefCard from '../components/ChefCard'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { ReactComponent as BackToTop } from '../assets/back to top.svg'

const Chefs = () => {
  const [chefs, setChefs] = useState([])
  const { loading, setLoading, error, setError } = useRequest()

  const requestChefs = useCallback(async () => {
    try {
      setLoading(true)
      const { data: chefsData } = await getChefs()
      setChefs(chefsData)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    requestChefs()
  }, [])

  const large = useMedia('(min-width: 62.5rem)')

  return (
    <>
      {!loading && !error && (
        <Box>
          <CarouselOne title='Top Chefs' data={chefs} url={'chef'} />
          <SimpleGrid columns={large ? 2 : 1} gap='6rem' m='10rem 2rem'>
            {chefs.map((chef) => (
              <ChefCard
                key={chef.id}
                chefName={chef.name}
                description={'Gosta de fazer hambúrguer'}
                id={chef.id}
                img={chef.img_url}
              />
            ))}
          </SimpleGrid>
        </Box>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </>
  )
}

export default Chefs
