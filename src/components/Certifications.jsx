import React from 'react';
import './Certifications.css';
import awsEssentialsBadge from '../assets/Certificates/aws-certificate.png'; 
import metaDatabasesBadge from '../assets/Certificates/database-certificate.png'; 
import googlePythonBadge from '../assets/Certificates/python-certificate.png';
const certifications = [
  {
    id: 1,
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services',
    link: 'https://coursera.org/share/ac9e52fc1b390f9fae4e78d2591f95ec',
    imageUrl: awsEssentialsBadge, // Now using PDF
    icon: '☁️',
    date: '2024',
    description: 'Gained practical cloud skills covering AWS compute, storage, database, networking, security, and IAM.'
  },
  {
    id: 2,
    title: 'Introduction to Databases for Backend Development',
    issuer: 'Meta',
    link: 'https://www.coursera.org/account/accomplishments/verify/XRHYK643MQEG',
    imageUrl: metaDatabasesBadge, // Now using PDF
    date: '2024',
    description: 'Learned the fundamentals of databases, including SQL, NoSQL, and database design principles.'
 
  },
  {
    id: 3,
    title: 'Crash Course with Python',
    issuer: 'Google',
    link: 'https://www.coursera.org/account/accomplishments/certificate/QFT2NN23V2PC',
    imageUrl: googlePythonBadge, 
    date: '2024',
    description: 'Learned the fundamentals of Python programming, including variables, functions, and data structures.'
    
  }
  // Add more certifications here...
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            {cert.imageUrl ? (
              <img 
                src={cert.imageUrl} 
                alt={cert.title} 
                className="cert-image" 
                loading="lazy"
              />
            ) : (
              <div className="cert-icon">{cert.icon}</div>
            )}
            
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <span className="cert-verify">🔗 Verify Credential</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;