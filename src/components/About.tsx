import React from 'react';
import '../app/styles/about.css'; // Import your custom CSS file

const About = () => {
  return (
    <div id='about' className='about-container'>
      <h2 className='about-title' data-aos="zoom-in-up">About Me</h2>
      <p className='about-text' data-aos="zoom-in-up">
        I am currently a student at GIAIC, specializing in a course focused on Artificial Intelligence, Web 3.0, and the Metaverse. I am passionate about technology and committed to continuously expanding my skill set to keep pace with the latest innovations. In addition to my academic pursuits, I actively engage in projects that allow me to apply theoretical knowledge to real-world scenarios. My goal is to develop a deep understanding of emerging technologies and their potential applications. I am eager to contribute to forward-thinking initiatives that drive technological advancements and shape the future.
      </p>
    </div>
  );
};

export default About;
