import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      {/* Skills Section Heading */}
      <h1 className='text-5xl font-bold text-center mb-12' data-aos="fade-up">Skills</h1>
      
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Tech Stack and Expertise</h2>
          <p className='text-gray-500 pt-2'>
            As a web developer, I am passionate about creating dynamic and responsive websites that provide seamless user experiences. My expertise spans modern front-end frameworks like React and Next.js, alongside a strong foundation in HTML, CSS, and JavaScript. I enjoy turning complex problems into intuitive solutions, focusing on clean, efficient, and maintainable code. With a keen eye for detail, I aim to build web applications that are both visually appealing and highly functional.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 gap-8 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
            </div>
            <div className='space-y-2'>
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

