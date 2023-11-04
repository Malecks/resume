import './App.css';
import Header from './components/header';
import Contact from './components/contact';
import Bio from './components/bio';
// import Nav from './components/nav';
import Footer from './components/footer';
// import About from './components/about';
import Resume from './components/resume';
import Skills from './components/skills';

import React from "react";
// import {
//   HashRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='content'>
          <Header />
          <hr />
          <Contact />
          <hr />
          <Bio />
          <hr />
          {/* <Router>
            <Nav />
            <hr />
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
          </Router> */}
          <Resume />
          <hr />
          <Skills skills={["UI / UX", "Mobile design", "Prototyping", "Design systems", "User research", "Project management", "Figma", "Origami studio", "Sketch", "Adobe"]} />
          <Skills skills={["iOS Development", "Web development", "React", "HTML", "CSS", "Swift", "Swift UI", "Objective C", "UI Kit", "Git", "GitHub"]} />
          <hr />
          <Footer />
      </div>
    </div>
  );
}

export default App;
