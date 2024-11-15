import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container pt-7 flex justify-between items-center'>
      {/* Left Side: Jalal */}
      <div className='text-xl font-medium' style={{ marginLeft: '-5rem' }}>Jalal</div>
      
      {/* Right Side: Navigation Links */}
      <ul className='gap-10 lg:gap-50 hidden md:flex'>
        <li className='menuLink'><a href='#hero'>Home</a></li>
        <li className='menuLink'><a href='#about'>About</a></li>
        <li className='menuLink'><a href='#projects'>Projects</a></li>
        <li className='menuLink'><a href='#skills'>Skills</a></li>
        <li className='menuLink'><a href='#contact'>Contact</a></li>
      </ul>
      
      {/* Menu Icon for Mobile */}
      <div className='md:hidden'>
        <AiOutlineMenu size={24} />
      </div>
    </div>
  );
}

export default Navbar;
