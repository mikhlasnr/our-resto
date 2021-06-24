import React from "react";
import Carousel from "react-multi-carousel";
import "./kategori-menu.styles.scss";

const KategoriMenuCarousel = ({ children }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="kategori-menu-carousel-container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass="kategori-menu-carousel-item"
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
        },
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1440,
          },
          items: 5,
          partialVisibilityGutter: 40,
        },

        tablet: {
          breakpoint: {
            max: 1440,
            min: 464,
          },
          items: 4,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      }}
      showDots={false}
      sliderClass="kategori-menu-carousel-slider"
      slidesToSlide={1}
      swipeable
    >
      {children}
    </Carousel>
  );
};

export default KategoriMenuCarousel;
