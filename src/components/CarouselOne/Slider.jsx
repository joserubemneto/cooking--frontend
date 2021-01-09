import React, { Component } from "react";
import Slider from "react-slick";
import SingleSlide from "./SingleSlide";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <>
        <Slider {...settings}>
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
