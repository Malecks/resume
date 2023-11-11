import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import About from './components/about';
import Resume from './components/resume';
import Skills from './components/skills';

import Projects from './components/projects';
import PaletteCamProject from './projects/palette-cam/PaletteCam';

import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className='content'>
          <Header />
          <hr />
          <Router>
            <Nav />
            <hr />
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="projects/palette-cam" element={<PaletteCamProject />} />
              </Routes>
          </Router>
          <hr />
          <Skills />
          <hr />
          <Footer />
      </div>
    </div>
  );
}

export default App;
