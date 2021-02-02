import React from 'react'
import Slider from 'react-slick'
import { Box, UnorderedList, css, Button } from '@chakra-ui/react'
import SingleSlide from './SingleSlide'
import '../CarouselOne/Slider.css'
import ArrowLeft from '../../assets/Arrow Left.svg'
import ArrowRight from '../../assets/Arrow Right.svg'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <Box
      display='block'
      bg='transparent'
      w='40px'
      h='20px'
      position='absolute'
      top='18.2rem'
      left='29%'
      bgImage={`url("${ArrowRight}")`}
      onClick={onClick}
      bgSize='cover'
      m='0'
      p='0'
      zIndex='2'
      cursor='pointer'
      _before={{
        content: `""`,
      }}
    />
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <Box
      display='block'
      bg='transparent'
      w='40px'
      h='20px'
      position='absolute'
      top='18.2em'
      left='25%'
      bgImage={`url("${ArrowLeft}")`}
      onClick={onClick}
      bgSize='cover'
      zIndex='2'
      m='0'
      p='0'
      cursor='pointer'
      _before={{
        content: `""`,
      }}
    />
  )
}

const CenterMode = () => {
  const settings = {
    dots: true,
    appendDots: (dots) => (
      <Box
        display='flex'
        position='absolute'
        top='18.2rem'
        bgColor='transparent'
        p='0'
        m='-5px'
        ml='5rem'>
        <UnorderedList id='oneDot'>{dots}</UnorderedList>
      </Box>
    ),
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 2,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Box>
      <Slider {...settings}>
      {this.props.data.map((data, index) => (
            <SingleSlide data={data.recipes[index]} />
          ))}
      </Slider>
    </Box>
  )
}

export default CenterMode
