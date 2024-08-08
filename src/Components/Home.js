import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import CarouselSlides from "./CarouselSlides";
import ServicesDT from "./ServicesDT";
import { FiArrowRight } from "react-icons/fi";
import Testimonial from "./Testimonial";
import Testman from "./Testman"
import Services from "./Services";
import Aboutus from "./Aboutus";
const Home = () => {
  return (
  
    <div>
      <CarouselSlides />
      {/* <ServicesDT /> */}
      <Services />
      <Testimonial />
    
    </div>
  );
};

export default Home;