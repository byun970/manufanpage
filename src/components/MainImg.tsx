import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './MainImg.module.css';

const MainImg = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    `${process.env.PUBLIC_URL}/img/main1.jpg`,
    `${process.env.PUBLIC_URL}/img/main2.jpg`,
    `${process.env.PUBLIC_URL}/img/main3.jpg`,
    // Add more image URLs as needed
  ];
  return (
    <Slider {...settings} className={styles.main_img}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  )
}

export default MainImg