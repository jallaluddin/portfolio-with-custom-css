import React, { useState } from 'react';
import Navbar from './Navbar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../app/styles/hero.css'; // Adjusted path to two levels up


const Hero = () => {
  // State to handle menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div 
      id="hero"
      className="hero-container"
      style={{ 
        backgroundImage: "url('/bg.png')", 
        backgroundSize: "20%",
        backgroundPosition: "left 150px top 110px" // Adjusted for small screens
      }}
    >
      {/* Navbar with Toggle Button */}
      <div className="navbar-container">
        <Navbar />
        {/* Toggle button always in the top-right corner */}
        <div className="menu-toggle-button">
          <button onClick={toggleMenu} className="menu-icon">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      <div className="hero-content">
        {/* Background image container for small screens */}
        <div className="image-container"></div>
        {/* Text content */}
        <div className="text-container">
          <div className="text-content">
            <p data-aos="zoom-in-up" className="intro-text">I&apos;m</p>
            <p data-aos="zoom-in-up" className="name-text">Jalal</p>
            <p data-aos="zoom-in-up" className="name-text">Uddin</p>
          </div>
        </div>
      </div>

      {/* Responsive Menu for small screens */}
      {isMenuOpen && (
        <div className="responsive-menu">
          {/* Close button inside the menu */}
          <div className="menu-close-button">
            <button onClick={toggleMenu} className="close-icon">
              <AiOutlineClose />
            </button>
          </div>
          {/* Menu Items */}
          <ul className="menu-items">
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
