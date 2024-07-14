import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import CarouselSlides from "./CarouselSlides";
import ServicesDT from "./ServicesDT";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
  
    <div>
      <CarouselSlides />
      <ServicesDT />
    </div>
  );
};

export default Home;