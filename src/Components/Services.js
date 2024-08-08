import React from 'react';
import a1 from '../Assets/a2.jpg';
import a3 from '../Assets/a3.png';
import a4 from '../Assets/a4.jpeg';

import AboutBackground from "../Assets/bg1.png";

const Services = () => {
  return (
    
    <div className=" py-5">
        <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <h2 className="text-center mb-5">Services customized for you</h2>
      <div className="row">
        {/* First Card */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <img
              src={a1}
              className="card-img-top"
              alt="Induvidual Driving Lessons"
            />
            <div className="card-body">
              <h5 className="card-title">Induvidual Driving Lessons</h5>
              <p className="card-text text-left text-dark">
                Improve your driving skills and knowledge in a supportive environment with our tailored driving lessons suited to your goals, skill level, and timetable.
              </p>
              <a href="#" className="btn btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <img
              src={a4}
              className="card-img-top"
              alt="Car Rentals for Driving Exam"
            />
            <div className="card-body">
              <h5 className="card-title">Car Rentals for Driving Exam</h5>
              <p className="card-text text-left text-dark">
                Hire one of our dual-control practice cars that comes with a Supervisor for your practical driving test.
              </p>
              <a href="#" className="btn btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <img
              src={a3}
              className="card-img-top"
              alt="Road Test Preparation"
            />
            <div className="card-body">
              <h5 className="card-title">Road Test Preparation</h5>
              <p className="card-text text-left text-dark">
                It includes in-car practice with a certified instructor and use of the instructor's vehicle for the test. We also schedule the road test and can accompany students on the test day to reduce stress.
              </p>
              <a href="#" className="btn btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
