import React, { useState, useEffect, useCallback } from 'react'
import { getChefs } from '../services/api'
import useMedia from '../hooks/useMedia'
import { SimpleGrid, Box } from '@chakra-ui/react'
import CarouselOne from '../components/CarouselOne'
import ChefCard from '../components/ChefCard'
import { ReactComponent as BackToTop } from '../assets/back to top.svg'

const Chefs = () => {
  const [chefs, setChefs] = useState([])

  const requestChefs = useCallback(async () => {
    const { data: chefsData } = await getChefs()
    setChefs(chefsData)
  })

  useEffect(() => {
    requestChefs()
  }, [])

  const large = useMedia('(min-width: 62.5rem)')

  return (
    <>
      <CarouselOne title='Top Chefs' />
      <SimpleGrid columns={large ? 2 : 1} gap='6rem' m='10rem 2rem'>
        {chefs.map((chef) => (
          <ChefCard
            key={chef.id}
            chefName={chef.name}
            description={'Gosta de fazer hambúrguer'}
            id={chef.id}
          />
        ))}
      </SimpleGrid>
      <Box position='fixed' bottom='10' right='5' cursor='pointer'>
        <BackToTop />
      </Box>
    </>
  )
}

export default Chefs
