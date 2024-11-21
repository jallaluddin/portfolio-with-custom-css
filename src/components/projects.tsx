import React from 'react';
import Heading from './Heading';
import Image from 'next/image'; // Import Image from next/image
import '../app/styles/projects.css';
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
    <div id='projects' className='projects-container'>
      <Heading title="Projects" />
      <div className='projects-grid'>
        {data.map((project) => (
          <div
            key={project.id}
            className='project-card'
            data-aos="zoom-in-up"
          >
            <div className='project-image-container'>
              <Image
                src={project.image}
                alt={project.title}
                layout="fill" // Adjusts the image to cover the container
                objectFit="cover" // Ensures image covers the space properly
                className='project-image'
              />
            </div>
            <div className='project-info'>
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-desc'>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
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
