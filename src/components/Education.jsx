import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Software Engineering',
      institution: 'NED University of Engineering & Technology',
      year: '2022 – 2026',
      grade: 'CGPA: 3.6 / 4.0',
     
    },
    {
      id: 2,
      degree: 'Intermediate (H.S.C)',
      field: 'Pre-Engineering',
      institution: 'BAMM Pechs Govt Girls College',
      year: '2020 – 2022',
      grade: 'Grade: 92%',
      achievements: [
        'Major in Pre-Engineering',
      ]
      
    },
    {
      id: 3,
      degree: 'Matriculation (S.S.C)',
      field: 'Computer Science',
      institution: 'Army Public School',
      year: '2020',
      grade: 'Grade: 91%',
      achievements: [
        'Major in Computer Science',
        'Mentioned in School Topper List for 2019 Board Exams',
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationData.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-icon">{edu.icon}</div>
            <div className="education-content">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="education-year">{edu.year}</span>
              </div>
              <h4>{edu.field}</h4>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-location">{edu.location}</p>
              <span className="education-grade">{edu.grade}</span>
              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="education-achievements">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index}>✨ {achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;