import React, { useState, useEffect, useCallback } from 'react'
import { Box } from '@chakra-ui/react'
import CarouselTwo from '../components/CarouselTwo'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useRequest } from '../context/Request'
import { getHighlights } from '../services/api'

const Highlights = () => {
  const [highlights, setHighlights] = useState([])
  const { loading, setLoading, error, setError } = useRequest()

  const requestData = useCallback(async () => {
    try {
      setLoading(true)
      const { data: highlightsData } = await getHighlights()
      setHighlights(highlightsData)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    requestData()
  }, [])

  return (
    <>
      {!loading && !error && (
        <Box>
          {highlights.map((highlight, index) => (
            <CarouselTwo first={index === 0 ? true : false} data={highlight} />
          ))}
        </Box>
      )}
      {loading && !error && <Loading />}
      {error && <Error />}
    </>
  )
}

export default Highlights
