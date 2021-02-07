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
           <ReachLink
           to={`/receita/${this.props.data[0].id}`}
           >
             <SingleSlide titleSlide={this.props.data[0].title} mode="true" img={this.props.data[0].img_url} />
            </ReachLink>
            <ReachLink
           to={`/receita/${this.props.data[1].id}`}
           >
             <SingleSlide titleSlide={this.props.data[1].title} mode="true" img={this.props.data[1].img_url} />
            </ReachLink>
            <ReachLink
           to={`/receita/${this.props.data[2].id}`}
           >
             <SingleSlide titleSlide={this.props.data[2].title} mode="true" img={this.props.data[2].img_url} />
            </ReachLink>
            {this.props.data[3] && <ReachLink
           to={`/receita/${this.props.data[3].id}`}
           >
             <SingleSlide titleSlide={this.props.data[3].title} mode="true" img={this.props.data[3].img_url} />
            </ReachLink>}
            {this.props.data[4] && <ReachLink
           to={`/receita/${this.props.data[4].id}`}
           >
             <SingleSlide titleSlide={this.props.data[4].title} mode="true" img={this.props.data[4].img_url} />
            </ReachLink>}
        </Slider>
      </>
    )
  }
}
