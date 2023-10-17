import './App.css';
import Header from './components/header';
import Contact from './components/contact';
import Bio from './components/bio';
import Nav from './components/nav';
import Footer from './components/footer';
import About from './components/about';
import Resume from './components/resume';

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
          <Contact />
          <hr />
          <Bio />
          <hr />
          <Router>
            {/* <Nav /> */}
            {/* <hr /> */}
              <Routes>
                <Route path="/" element={<Resume />} />
                {/* <Route path="/resume" element={<Resume />} /> */}
              </Routes>
          </Router>
          <hr />
          <Footer />
      </div>
    </div>
  );
}

export default App;
