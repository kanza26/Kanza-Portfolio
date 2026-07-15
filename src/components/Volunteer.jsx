import React from 'react';
import './Volunteer.css';

// 👇 Import your images (JPG/PNG)
import volunteer1 from '../assets/Volunteers/Volunteer-1.jpg';
import volunteer2 from '../assets/Volunteers/Volunteer-2.jpg';

const volunteer = [
  {
    id: 1,
    title: 'Certificate of Appreciation',
    organization: 'NEDUET SOFTWARE ENGINEERING DEPARTMENT',
    image: volunteer1, 
    date: '2024',
    description: "Organized and hosted a hands-on Flutter & Firebase workshop for 90+ final-year Software Engineering students. Managed venue setup, Certificate distribution, speaker coordination, and student registration, ensuring an engaging and impactful learning experience. The event received outstanding feedback and fostered strong student engagement."
  },
  {
    id: 2,
    title: 'Certificate of Appreciation',
    organization: 'NEDUET SOFTWARE ENGINEERING DEPARTMENT',
    image: volunteer2, // 👈 Now using 'image' instead of 'pdf'
    date: '2023',
    description: 'Organized a hands on workshop on manual and automation testing within the Software Engineering department under the supervision of Class Advisor for 100+ undergraduate Software Engineering students. The event taught students about career opportunities in the field of software testing and provided them with practical skills to enhance their employability. The workshop received positive feedback from students and faculty.'
  }
];

const Volunteer = () => {
  return (
    <section id="volunteer" className="volunteer-section">
      <h2>Volunteer Work</h2>
      <div className="volunteer-grid">
        {volunteer.map((item) => (
          <div key={item.id} className="volunteer-card">
            {/* 👇 Display image instead of iframe */}
            <div className="volunteer-image-wrapper">
              <img 
                src={item.image} 
                alt={item.title} 
                className="volunteer-image" 
                loading="lazy"
              />
            </div>
            
            <h3>{item.title}</h3>
            <h4>{item.organization}</h4>
            <span className="volunteer-date">{item.date}</span>
            <p>{item.description}</p>
            
            {/* Optional: View Image Button */}
            <a 
              href={item.image} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="volunteer-download"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteer;