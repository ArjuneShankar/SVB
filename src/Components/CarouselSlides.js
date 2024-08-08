import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import g1 from '../Assets/g1.jpeg';
import roadtest from '../Assets/roadtest.png';
import slider2 from '../Assets/slider2.png'
import AboutBackground from "../Assets/bg2.png";

const CarouselSlides = () => {
  return (
    <div style={{marginTop:''}}>
       {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={roadtest}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlides;
