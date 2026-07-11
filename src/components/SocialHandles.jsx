import React from 'react';
import { FaLinkedin, FaMedium, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './SocialHandles.css';

const SocialHandles = () => {
  return (
    <section id="social">
      <h2>Connect with Me</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/kanza-fatima-1b8a28253/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://medium.com/@kanzafatima9211" target="_blank" rel="noopener noreferrer" className="social-link medium">
          <FaMedium /> Medium
        </a>
        <a href="mailto:kanzafatima9211@gmail.com" className="social-link email">
          <FaEnvelope /> Email
        </a>
       
      </div>
    </section>
  );
};

export default SocialHandles;