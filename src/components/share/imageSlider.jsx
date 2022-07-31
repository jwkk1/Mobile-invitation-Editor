import React from "react";
import styles from "./imageSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ img }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      {img &&
        Object.keys(img).map((key) => {
          return (
            <div className={styles.imgBox}>
              <img className={styles.img} src={img[key]} />
            </div>
          );
        })}
    </Slider>
  );
};

export default ImageSlider;
