import React from 'react';
import { FaTrophy, FaAward, FaStar, FaMedal } from 'react-icons/fa';
import './Achievments.css';

const achievementsData = [
  { icon: <FaTrophy />, title: 'RUNNER UP FYDP', desc: 'FYDP won runner up place at FYDP EXPO 2026 among 29 competing projects' },
  { icon: <FaAward />, title: 'FYDP INCUBATED', desc: 'FYDP idea incubated in NIC COHORT 15' },
  { icon: <FaStar />, title: 'SCHOLARSHIP RECEPIENT', desc: 'SEEF Scholarship 2025 Recepient ' },
];

const Achievements = () => {
  return (
    <section id="achievements">
      <h2 className="achievements-heading">Achievements</h2>
      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;