import React from 'react';
import Heading from './Heading';
import Image from 'next/image'; // Import Image from next/image

const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A react and typescript based app. It helps users manage daily activities by creating, editing, and deleting tasks.",
    image: "/project_1.jpg",
    tags: ["typescript", "react", "node", "css"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A next.js and typescript based. Ideal for time management, reminders, and creating a sense of urgency, count",
    image: "/project_2.jpg",
    tags: ["typescript", "next.js", "node", "css"],
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A next.js and typescript based tool provides real-time weather updates and forecasts for your chosen location.",
    image: "/project_3.jpg",
    tags: ["typescript", "next.js", "node", "css"],
  },
  {
    id: 3,
    title: "Currency Converter Project",
    desc: "A HTML and typescript based tool that quickly converts amounts between different currencies using real-time exchange rates.",
    image: "/project_4.jpg",
    tags: ["typescript", "HTML", "node", "css"],
  },
  {
    id: 4,
    title: "Simple Calculator Project",
    desc: "A HTML, CSS and typescript based tool performs arithmetic operations like addition, subtraction, multiplication etc..",
    image: "/project_5.jpg",
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
            data-aos="zoom-in-up"
          >
            <div className='relative w-full h-48 mb-4'>
              <Image
                src={project.image}
                alt={project.title}
                layout="fill" // Adjusts the image to cover the container
                objectFit="cover" // Ensures image covers the space properly
                className='rounded-md'
              />
            </div>
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

