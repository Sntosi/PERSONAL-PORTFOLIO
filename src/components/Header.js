import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../App.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isVisible ? '' : 'hidden'}`}>
      <nav>
        <ul className="social-links">
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          <li><a href="mailto:example@example.com"><FaEnvelope /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        </ul>
      </nav>
      <div className="internal-links">
        <button onClick={() => handleSmoothScroll('projects')}>Projects</button>
        <button onClick={() => handleSmoothScroll('contact')}>Contact Me</button>
      </div>
    </header>
  );
};

export default Header;