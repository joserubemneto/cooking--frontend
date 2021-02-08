import React, { Component } from 'react'
import Slider from 'react-slick'
import useMedia from '../../hooks/useMedia'
import SingleSlide from './SingleSlide'
import { Link as ReachLink } from 'react-router-dom'
import './Slider.css'

function SampleNextArrow(props) {
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

function SamplePrevArrow(props) {
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
        top: '357px',
        left: small ? '2%' : '15%',
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
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <>
        <Slider id='one' {...settings}>
          {this.props.data.map((data) => (
            <ReachLink
            to={`/receita/${data.id}`}
            >
              <SingleSlide
              titleSlide={data.title || data.name} mode="true" img={data.img_url} />
            </ReachLink>
          ))}
        </Slider>
      </>
    )
  }
}
