import React from 'react'
import Slider from 'react-slick'
import useMedia from '../../hooks/useMedia'
import SingleSlide from './SingleSlide'
import '../CarouselOne/Slider.css'

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props
  const small = useMedia('(max-width: 410px)')

  return (
    <div
      id='oneNext'
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'relative',
        top: '47px',
        right: small ? '-83%' : '-75%',
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
  const small = useMedia('(max-width: 410px)')

  return (
    <div
      id='onePrev'
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'relative',
        top: '468px',
        left: small ? '2%' : '15%',
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {data &&
          data.map((recipe) => <SingleSlide key={data.id} data={recipe} />)}
      </Slider>
    </>
  )
}

export default MultipleItems
