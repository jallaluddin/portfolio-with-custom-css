import React from 'react';
import Heading from './Heading';

const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A react and typescript based app. It helps users manage daily activities by creating, editing, and deleting tasks.",
    img: "/project_1.jpg",
    tags: ["typescript", "react", "node", "css"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A next.js and typescript based. Ideal for time management, reminders, and creating a sense of urgency, count",
    img: "/project_2.jpg",
    tags: ["typescript", "next.js", "node", "css"],
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A next.js and typescript based tool provides real-time weather updates and forecasts for your chosen location.",
    img: "/project_3.jpg",
    tags: ["typescript", "next.js", "node", "css"],
  },
  {
    id: 3,
    title: "Currency Converter Project",
    desc: "A HTML and typescript based tool that quickly converts amounts between different currencies using real-time exchange rates.",
    img: "/project_4.jpg",
    tags: ["typescript", "HTML", "node", "css"],
  },
  {
    id: 4,
    title: "Simple Calculator Project",
    desc: "A HTML, CSS and typescript based tool performs arithmetic operations like addition, subtraction, multiplication etc..",
    img: "/project_5.jpg",
    tags: ["typescript", "HTML", "node", "css"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title="Projects" />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data.map((project) => (
          <div
            key={project.id}
            className='bg-white shadow-md rounded-md p-4'
            data-aos="zoom-in-up" // Added data-aos attribute here
          >
            <img src={project.img} alt={project.title} className='w-full h-48 object-cover rounded-md mb-4' />
            <div className='bg-black p-4 rounded-md'>
              <h3 className='text-lg font-semibold text-white'>{project.title}</h3>
              <p className='text-gray-300'>{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tags">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
