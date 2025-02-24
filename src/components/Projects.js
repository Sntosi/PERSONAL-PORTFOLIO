import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../App.css';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1', image: 'project1.jpg', link: '#' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2', image: 'project2.jpg', link: '#' },
  { id: 3, title: 'Project 3', description: 'Description of Project 3', image: 'project3.jpg', link: '#' },
  { id: 4, title: 'Project 4', description: 'Description of Project 4', image: 'project4.jpg', link: '#' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>See more <FaArrowRight /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;