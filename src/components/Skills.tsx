import React from 'react';
import '../app/styles/skills.css'
const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      {/* Skills Section Heading */}
      <h1 className='skills-heading' data-aos="fade-up">Skills</h1>
      
      <div className='skills-grid'>
        <div data-aos="zoom-in-up">
          <h2 className='skills-subheading'>Tech Stack and Expertise</h2>
          <p className='skills-description'>
            As a web developer, I am passionate about creating dynamic and responsive websites that provide seamless user experiences. My expertise spans modern front-end frameworks like React and Next.js, alongside a strong foundation in HTML, CSS, and JavaScript. I enjoy turning complex problems into intuitive solutions, focusing on clean, efficient, and maintainable code. With a keen eye for detail, I aim to build web applications that are both visually appealing and highly functional.
          </p>
        </div>
        <div>
          <div className='skills-list'>
            <div className='skills-column'>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
            </div>
            <div className='skills-column'>
              <h2 data-aos="zoom-in-up">Node.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
