import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getFeaturedProducts } from "../../redux/PagesReducer/action";
import { HomeDis } from "../HomeDisplay/HomeDisplay";
const Trending = () => {
  const dispatch = useDispatch();
  const mensD = useSelector((store) => store.pagesReducer.mensD);

  useEffect(() => {
    if (mensD?.length === 0) {
      dispatch(getFeaturedProducts());
    }
  }, [dispatch, mensD?.length]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Box border="1px solid beige">
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Heading align={"left"} textTransform={"uppercase"} my={5}>
          Try Something Deferent
        </Heading>
        <Slider {...settings}>
          {mensD?.length > 0 &&
            mensD.map((item) => {
              return <HomeDis key={item.key} item={item} />;
            })}
        </Slider>
      </Box>
    </div>
  );
};

export default Trending;
