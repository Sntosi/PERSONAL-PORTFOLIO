import React from 'react';
import avatar from './avatar.jpg'; // Ensure this file exists
import '../App.css'; // Updated path

const Landing = () => {
  return (
    <section id="landing" className="landing">
      <img src={avatar} alt="Avatar" className="avatar" />
      <h1>LION</h1>
      <p>I am the king of the jungle.</p>
    </section>
  );
};

export default Landing;