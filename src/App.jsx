import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import SocialHandles from './components/SocialHandles';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import Volunteer from './components/Volunteer';
import Blog from './components/Blog';
import Education from './components/Education';
function App() {
  return (
    <>
      {/* 👇 Main content - stays centered at 1200px */}
      <div className="App">
        <Navbar />
        <Intro />
        <Achievements />
        <Experience />
        <Certifications/>
        <Volunteer/>
        <Blog/>
        <Education/>
        <SocialHandles />
        <ContactForm />
      </div>
      
      {/* 👇 Footer - OUTSIDE the container, so it can be 100% width! */}
      <Footer />
    </>
  );
}

export default App;