import React from 'react';
import './Experience.css';

const experiences = [
  {
    type: 'internship',
    title: 'Software Engineer Intern',
    company: 'Teresol Private Limited',
    period: 'December 2024 – January 2025',
    desc: 'Built an interactive, real-time dashboard with Streamlit to visualize key NASDAQ market trends. Additionally, debugged and refactored a banking audit application by implementing strategic database indexing and optimizing image assets, resulting in a 20% performance uplift.'
  },
  {
    type: 'project',
    title: 'AI Powered Help Desk Support',
    company: 'Personal Project',
    period: '2025',
    desc: 'Built and deployed complete backend for a help desk support system using Node.js, Express, and MySQL. Implemented RESTful APIs for ticket management, user authentication, and real-time notifications. Integrated Azure AI Cognitive Services for Urdu language processing in Ticket Module. Used Docker for containerization and deployed the application on AWS EC2 with CI/CD pipelines using GitHub Actions.'
  },
  {
    type: 'internship',
    title: 'Frontend Engineer Intern',
    company: 'Doaz',
    period: 'June 2025 - February 2026',  // 👈 FIXED: Typo corrected
    desc: 'Maintained Frontend for multiple Production Grade Projects including a Korean Real Estate AI Chatbot, Korean Press and Posco AI. Integrated Backend APIs with Frontend, improved performance by applying pagination and lazy loading techniques, and enhanced user experience by implementing responsive design and accessibility features. Dockerized the frontend applications for better developer support'
  },
  {
    type: 'internship',
    title: 'Internship Project',
    company: 'Doaz',
    period: 'June 2025 - February 2026',  // 👈 FIXED: Typo corrected
    desc: 'Rebuilt outdated company website into a modern, fully functional site from a no-code reference prototype. Deployed the website on AWS S3 with CloudFront for global distribution and integrated CI/CD pipeline for automated deployment.',
    url: 'https://doaz.ai',               // 👈 FIXED: Changed to simple string
    linkText: '🔗 Visit Doaz AI'          // 👈 FIXED: Added link text
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className='experience-heading'>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className={`exp-item ${exp.type}`} key={index}>
            <div className="exp-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="exp-period">{exp.period}</span>
              <p>{exp.desc}</p>
              
              {/* 👇 FIXED: Correctly rendering external link */}
              {exp.url && (
                <a 
                  href={exp.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="exp-link"
                >
                  {exp.linkText || 'Visit Website'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;