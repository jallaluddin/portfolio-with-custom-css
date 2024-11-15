import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      id="hero"
      className="min-h-screen bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: "url('/bg.png')", 
        backgroundSize: "20%",
        backgroundPosition: "left 165px top 135px" // 2.5 inch from the left, centered vertically
      }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[90px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up" className="text-yellow-500">I&apos;m</p> {/* Changed color to yellow */}
            <p data-aos="zoom-in-up">Jalal</p>
            <p data-aos="zoom-in-up">uddin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;



