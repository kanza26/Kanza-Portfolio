import React from 'react';
import { FaReact, FaNode, FaLinux, FaAws, FaCogs } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';   // K8s ka icon
import './Intro.css';


const Intro = () => {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">
        <div className="intro-content">
          <h1>I'm <span className="highlight">Kanza Fatima</span></h1>
          <p className="tagline"> DevOps & Cloud Enthusiast</p>
          <div className="education">
            <div className="edu-item edu-1">
              <strong>B.E. Software Engineering</strong> – NEDUET, 2026
            </div>
            <div className="edu-item edu-2">
              <strong>GRADE</strong> – 3.6
            </div>
            <div className="edu-item edu-3">
              <strong>DOMAIN</strong> – DEVOPS & CLOUD
            </div>
          </div>


          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
        <div className="intro-3d">
          <div className="cube-container">
            <div className="cube">
              <div className="face front" style={{ background: '#61DAFB' }}>
                <FaReact size={50} color="#fff" />
                <span>React</span>
              </div>
              <div className="face back" style={{ background: '#339933' }}>
                <FaNode size={50} color="#fff" />
                <span>Node</span>
              </div>
              <div className="face right" style={{ background: '#FCC624' }}>
                <FaLinux size={50} color="#333" />
                <span>Linux</span>
              </div>
              <div className="face left" style={{ background: '#FF9900' }}>
                <FaAws size={50} color="#fff" />
                <span>AWS</span>
              </div>
              <div className="face top" style={{ background: '#007ACC' }}>
                <FaCogs size={50} color="#fff" />
                <span>CI/CD</span>
              </div>
              <div className="face bottom" style={{ background: '#326CE5' }}>
                <SiKubernetes size={50} color="#fff" />
                <span>K8s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;