import React, { Component } from 'react'
import Slider from 'react-slick'
import { Link as ReachLink } from 'react-router-dom'
import SingleSlide from './SingleSlide'
import './Slider.css'

function SampleNextArrow(props) {
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

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      id='onePrev'
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'relative',
        top: '357px',
        left: '33%',
        padding: '0',
        margin: '0',
        zIndex: '2',
      }}
      onClick={onClick}
    />
  )
}

export default class MultipleItems extends Component {
  render() {
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
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <>
        <Slider id='one' {...settings}>
          {this.props.data.map((data) => (
            <ReachLink
            to={`receita/${data.id}`}
            >
              <SingleSlide titleSlide={data.title || data.name} />
            </ReachLink>
          ))}
        </Slider>
      </>
    )
  }
}
