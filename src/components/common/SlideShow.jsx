import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/carousel-img1.jpg';
import img2 from '../../img/carousel-img2.jpg';
import img3 from '../../img/carousel-img3.jpg';

function SlideShow(props) {
  return (
    <Carousel className="home__carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;
