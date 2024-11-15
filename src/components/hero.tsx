import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      id="hero"
      className="min-h-screen bg-no-repeat bg-cover flex flex-col justify-center"
      style={{ 
        backgroundImage: "url('/bg.png')", 
        backgroundSize: "20%",
        backgroundPosition: "left 250px top 110px" // Adjusted for small screens
      }}
    >
      <Navbar />
      <div className="container flex flex-col lg:flex-row items-center justify-center h-[calc(100vh-60px)] lg:justify-between px-4">
        {/* Background image container for small screens */}
        <div className="lg:flex-1"></div>
        {/* Text content with additional top margin for small screens */}
        <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-0 lg:flex-1 mb-12 sm:mb-16 mt-[450px] lg:mt-0 lg:ml-[190px]">
          <div className="text-center lg:text-left">
            {/* Responsive text placement */}
            <p 
              data-aos="zoom-in-up" 
              className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl lg:text-[100px] xl:text-[80px] font-bold leading-tight mb-3 sm:mb-5"
            >
              I&apos;m
            </p>
            <p 
              data-aos="zoom-in-up" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[100px] xl:text-[80px] font-bold leading-tight mb-3 sm:mb-5"
            >
              Jalal
            </p>
            <p 
              data-aos="zoom-in-up" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[100px] xl:text-[80px] font-bold leading-tight mb-3 sm:mb-5"
            >
              uddin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;