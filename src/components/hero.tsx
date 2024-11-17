import React, { useState } from 'react';
import Navbar from './Navbar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Hero = () => {
  // State to handle menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div 
      id="hero"
      className="relative min-h-screen bg-no-repeat bg-cover flex flex-col justify-center"
      style={{ 
        backgroundImage: "url('/bg.png')", 
        backgroundSize: "20%",
        backgroundPosition: "left 150px top 110px" // Adjusted for small screens
      }}
    >
      {/* Navbar with Toggle Button */}
      <div className="relative">
        <Navbar />
        {/* Toggle button always in the top-right corner */}
        <div className="absolute top-4 right-4 lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row items-center justify-center h-[calc(100vh-60px)] lg:justify-between px-4">
        {/* Background image container for small screens */}
        <div className="lg:flex-1"></div>
        {/* Text content with additional top margin for small screens */}
        <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-0 lg:flex-1 mb-12 sm:mb-16 mt-[450px] lg:mt-0 lg:ml-[190px]">
          <div className="text-center lg:text-left">
            {/* Responsive text placement */}
            <p 
              data-aos="zoom-in-up" 
              className="text-yellow-500 text-6xl sm:text-4xl md:text-5xl lg:text-[100px] xl:text-[80px] font-bold leading-tight mb-3 sm:mb-5"
            >
              I&apos;m
            </p>
            <p 
              data-aos="zoom-in-up" 
              className="text-6xl sm:text-4xl md:text-5xl lg:text-[100px] xl:text-[80px] font-bold leading-tight mb-3 sm:mb-5"
            >
              Jalal
            </p>
            <p 
              data-aos="zoom-in-up" 
              className="text-6xl sm:text-4xl md:text-5xl lg:text-[100px] xl:text-[80px] font-bold leading-tight mb-3 sm:mb-5"
            >
              Uddin
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Menu for small screens */}
      {isMenuOpen && (
        <div 
          className="absolute bg-gray-800 p-4 z-10 rounded-lg shadow-lg"
          style={{ top: 'calc(2vh / 2)', right: '9px' }} // Adjust top and left to position under "Jalal"
        >
          {/* Close button inside the menu */}
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-3xl mb-4 text-white">
              <AiOutlineClose />
            </button>
          </div>
          {/* Menu Items displayed under "Jalal" */}
          <ul className="text-white space-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hero;
