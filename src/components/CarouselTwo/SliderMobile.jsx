import React from "react";
import Slider from "react-slick";
import useMedia from "../../hooks/useMedia";
import SingleSlide from "./SingleSlide";
import '../CarouselOne/Slider.css'
import { Box, UnorderedList } from "@chakra-ui/react";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  const small = useMedia('(max-width: 410px)')
  const medium = useMedia('(max-width: 544px)')
  const break1 = useMedia('(min-width: 495px)')
  const break2 = useMedia('(min-width: 540px)')
  const break3 = useMedia('(max-width: 478px)')
  const break4 = useMedia('(max-width: 400px)')
  const break5 = useMedia('(min-width: 610px)')

  return (
    <Box
      id="oneNext"
      display="block"
      position="absolute"
      top={ break4 && "29rem" || break3 && "31rem" || medium && "33.7rem" || break5 && "17rem" || break2 && "18.4rem" || break1 && "18.4rem"}
      right={small ? "6%" : "10%"}
      p="0"
      m="0"
      zIndex="2"
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  const small = useMedia('(max-width: 410px)')
  const medium = useMedia('(max-width: 544px)')
  const break1 = useMedia('(min-width: 495px)')
  const break2 = useMedia('(min-width: 540px)')
  const break3 = useMedia('(max-width: 478px)')
  const break4 = useMedia('(max-width: 400px)')
  const break5 = useMedia('(min-width: 610px)')

  return (
    <Box
      id="onePrev"
      display="block"
      position="absolute"
      top={ break4 && "29rem" || break3 && "31rem" || medium && "33.7rem" || break5 && "17rem" || break2 && "18.4rem" || break1 && "18.4rem"}
      left={small ? "6%" : "10%"}
      p="0"
      m="0"
      zIndex="1"
      onClick={onClick}
    />
  );
}

const Component = () => {
  const medium = useMedia('(max-width: 544px)')
  const break1 = useMedia('(min-width: 495px)')
  const break2 = useMedia('(min-width: 540px)')
  const break3 = useMedia('(max-width: 478px)')
  const break4 = useMedia('(max-width: 400px)')
  const break5 = useMedia('(min-width: 610px)')

  const settings = {
    dots: true,
    appendDots: dots => (
      <Box
        bgColor="transparent"
        p="0"
        position="absolute"
        top={ break4 && "29rem" || break3 && "31rem" || medium && "33.7rem" || break5 && "17rem" || break2 && "18.4rem" || break1 && "18.4rem"}
      >
        <UnorderedList
          id="oneDot"
          m="-10px"
        >
          {dots}
        </UnorderedList>
      </Box>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  return (
    <>
      <Slider id="one" {...settings}>
        <SingleSlide mode="true"/>
        <SingleSlide mode="true"/>
        <SingleSlide mode="true"/>
        <SingleSlide mode="true"/>
        <SingleSlide mode="true"/>
        <SingleSlide mode="true"/>
      </Slider>
    </>
  )
}

export default Component
