import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../app/styles/navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Navbar content (brand and menu icon) */}
      <div className="navbar-content">
        {/* Brand (Jalal Uddin) */}
        <div className="navbar-brand yellow-text">Jalal</div>

        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Navigation Links (for larger screens) */}
      <ul className="navbar-links">
        <li className="menuLink"><a href="#hero">Home</a></li>
        <li className="menuLink"><a href="#about">About</a></li>
        <li className="menuLink"><a href="#projects">Projects</a></li>
        <li className="menuLink"><a href="#skills">Skills</a></li>
        <li className="menuLink"><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Menu (only visible when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            <li className="menuLink"><a href="#hero" onClick={toggleMobileMenu}>Home</a></li>
            <li className="menuLink"><a href="#about" onClick={toggleMobileMenu}>About</a></li>
            <li className="menuLink"><a href="#projects" onClick={toggleMobileMenu}>Projects</a></li>
            <li className="menuLink"><a href="#skills" onClick={toggleMobileMenu}>Skills</a></li>
            <li className="menuLink"><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
