import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Player } from '@lottiefiles/react-lottie-player';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Hamburger toggle state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when a link is clicked (for better UX)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Player
            autoplay
            loop
            src="/12345.json"
            renderer="svg"
            style={{ height: '50px', width: '50px' }}
          />
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="intro" smooth duration={500} onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="achievements" smooth duration={500} onClick={handleLinkClick}>Achievements</Link></li>
          <li><Link to="certifications" smooth duration={500} onClick={handleLinkClick}>Certifications</Link></li> {/* 👈 ADDED */}
          <li><Link to="volunteer" smooth duration={500} onClick={handleLinkClick}>Volunteer Participation</Link></li> {/* 👈 ADDED */}
          <li><Link to="experience" smooth duration={500} onClick={handleLinkClick}>Experience</Link></li>
          <li><Link to="education" smooth duration={500} onClick={handleLinkClick}>Education</Link></li>
          <li><Link to="contact" smooth duration={500} onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;