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
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 5,
          partialVisibilityGutter: 40,
        },

        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 5,
          partialVisibilityGutter: 30,
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
