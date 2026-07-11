import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="closing">
          <p> Thanks for visiting! Let’s build something amazing together.</p>
        </div>
        <div className="services">
          <h4>Services</h4>
          <ul>
            <li>DEVOPS</li>
            <li>Cloud AWS</li>
            <li>WEB DEVELOPMENT</li>
            <li>R&D</li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Kanza Fatima. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;