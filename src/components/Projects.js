import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../App.css';

const projects = [
  { id: 1, title: 'ChatApp', description: 'This project is a realtime chat application developed using Spring Boot and WebSocket. The application allows users to join, chat, and leave chat rooms in real-time.', image: 'project1.jpg', link: 'git@github.com:Sntosi/ChatApp.git' },
  { id: 2, title: 'Pygame-space-shooter', description: 'A Pygame Space Shooter is a simple 2D shooting game built using Pygame, a Python library for game development. In this game, the player controls a spaceship that moves left and right while shooting bullets to destroy incoming enemies (like asteroids or alien ships).', image: 'project2.jpg', link: '#' },
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