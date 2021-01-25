import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useMedia from '../hooks/useMedia'
import { SimpleGrid, Box } from '@chakra-ui/react'
import CarouselOne from '../components/CarouselOne'
import ChefCard from '../components/ChefCard'
import { ReactComponent as BackToTop } from '../assets/back to top.svg'

const Chefs = () => {
  const [chefs, setChefs] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await axios.get(
        'https://cooking--api.herokuapp.com/chefs'
      )
      const data = await response.data
      setChefs(data)
    })()
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
            avatar_url={chef.avatar_url}
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
