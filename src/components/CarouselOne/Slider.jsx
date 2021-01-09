import React, { Component } from "react";
import Slider from "react-slick";
import SingleSlide from "./SingleSlide";
import Right from '../../assets/Arrow Right.svg'
import './Slider.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: "block",
        background: "red",
        position: "relative",
        top: "45px",
        }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: "block",
        background: "red",
        position: "relative",
        top: "355px",
        }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "transparent",
            padding: "0"
          }}
        >
          <ul id="one" style={{ margin: "-10px" }}> {dots} </ul>
        </div>
      ),
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <>
        <Slider id="one" {...settings}>
          <SingleSlide />
          <SingleSlide />
          <SingleSlide />
          <SingleSlide />
          <SingleSlide />
          <SingleSlide />
          <SingleSlide />
          <SingleSlide />
          <SingleSlide />
        </Slider>
      </>
    );
  }
}
