import React from 'react';
import avatar from './avatar.jpg'; // Ensure this file exists
import '../App.css';

const Landing = () => {
  return (
    <section id="landing" className="landing">
      <div className="landing-content">
        <img src={avatar} alt="Avatar" className="avatar" />
        <h1>Hello, I am santoshi !!!</h1>
        <p className="bio">A frontend developer specialised in React.</p>
      </div>
    </section>
  );
};

export default Landing;