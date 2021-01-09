import React from 'react'
import { Img, Chef } from './styles'
import { SlideTitle } from '../MainStyles'
import theme from '../../theme'


const SingleSlide = () => {

  return (
    <>
      <Img background={`../../assets/Image3.jpg`}>
        <SlideTitle color={theme.colors.slide}>bacon e ovos</SlideTitle>
        <Chef>Chef Lucas</Chef>
      </Img>
    </>
  )
}

export default SingleSlide
