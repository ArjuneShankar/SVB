import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './App.css';
import Home from './Components/Home';
import About from './Components/Aboutus';

import Contact from './Components/Contact';
import CarouselSlides from './Components/CarouselSlides.js';
import Footer from './Components/Footer';
import TestimonialDT from './Components/TestimonialDT.js';
import Navbar from './Components/Navbar'; // Import Navbar component
import ServicesDT from './Components/ServicesDT.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar /> {/* Render Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonial" element={<TestimonialDT />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
