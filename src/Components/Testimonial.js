import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import grad from "../Assets/grad.png";
import r1 from "../Assets/reviews/r1.png";
import r2 from "../Assets/reviews/r2.png";
import r3 from "../Assets/reviews/r3.png";
import r4 from "../Assets/reviews/r4.png";
import r5 from "../Assets/reviews/r5.png";
import r6 from "../Assets/reviews/r6.png";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonial = () => {
  return (
    <div className="testimonial-container">
       <div className="testimonial-gradient" style={{ backgroundImage: `url(${grad})` }}></div>
      <h1 style={{padding:'50px'}}>Testimonials</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={true}
        arrows={true}
      >
        
        <div>
          <img src={r1} alt="Review 1" className="testimonial-img" />
        </div>
        <div>
          <img src={r2} alt="Review 2" className="testimonial-img" />
        </div>
        <div>
          <img src={r3} alt="Review 3" className="testimonial-img" />
        </div>
        <div>
          <img src={r4} alt="Review 4" className="testimonial-img" />
        </div>
        <div>
          <img src={r5} alt="Review 5" className="testimonial-img" />
        </div>
        <div>
          <img src={r6} alt="Review 6" className="testimonial-img" />
        </div>
      </Carousel>
      <button className="btn-white">View More Testimonials</button>
    </div>
  );
};

export default Testimonial;
