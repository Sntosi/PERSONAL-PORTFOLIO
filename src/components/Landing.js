import React from 'react';
import avatar from './avatar.jpg'; // Add your avatar image
import './App.css';

const Landing = () => {
  return (
    <section id="landing" className="landing">
      <img src={avatar} alt="Avatar" className="avatar" />
      <h1>Your Name</h1>
      <p>Short bio about yourself. Highlight your skills and interests.</p>
    </section>
  );
};

export default Landing;