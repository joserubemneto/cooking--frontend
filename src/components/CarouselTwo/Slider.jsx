import React from 'react'
import Slider from 'react-slick'
import { Box } from '@chakra-ui/react'
import SingleSlide from './SingleSlide'
import '../CarouselOne/Slider.css'

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      id='oneNext'
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'relative',
        top: '47px',
        right: '-63%',
        padding: '0',
        margin: '0',
        zIndex: '2',
      }}
      onClick={onClick}
    />
  )
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      id='onePrev'
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'relative',
        top: '308px',
        left: '33%',
        padding: '0',
        margin: '0',
        zIndex: '2',
      }}
      onClick={onClick}
    />
  )
}

const MultipleItems = ({ data }) => {
  const settings = {
    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: 'transparent',
          padding: '0',
        }}>
        <ul id='oneDot' style={{ margin: '-10px' }}>
          {' '}
          {dots}{' '}
        </ul>
      </div>
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
        {data.map((recipe) => (
          <SingleSlide key={data.id} data={recipe} />
        ))}
      </Slider>
    </Box>
  )
}

export default MultipleItems
