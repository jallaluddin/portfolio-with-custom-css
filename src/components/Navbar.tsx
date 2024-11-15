import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  // State to handle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='container pt-7 flex justify-between items-center'>
      {/* Left Side: Jalal */}
      <div className='text-xl font-medium'>Jalal</div>
      
      {/* Right Side: Navigation Links (for larger screens) */}
      <ul className='gap-10 lg:gap-50 hidden md:flex'>
        <li className='menuLink'><a href='#hero'>Home</a></li>
        <li className='menuLink'><a href='#about'>About</a></li>
        <li className='menuLink'><a href='#projects'>Projects</a></li>
        <li className='menuLink'><a href='#skills'>Skills</a></li>
        <li className='menuLink'><a href='#contact'>Contact</a></li>
      </ul>
      
      {/* Menu Icon for Mobile (only visible on small screens) */}
      <div className='md:hidden' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Menu (only visible when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className='absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center text-white md:hidden'>
          <ul className='space-y-8 text-2xl'>
            <li className='menuLink'><a href='#hero' onClick={toggleMobileMenu}>Home</a></li>
            <li className='menuLink'><a href='#about' onClick={toggleMobileMenu}>About</a></li>
            <li className='menuLink'><a href='#projects' onClick={toggleMobileMenu}>Projects</a></li>
            <li className='menuLink'><a href='#skills' onClick={toggleMobileMenu}>Skills</a></li>
            <li className='menuLink'><a href='#contact' onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
