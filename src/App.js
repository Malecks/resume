import './App.css';
import './projects/Projects.css'

import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import About from './components/about';
import Resume from './components/resume';

import Projects from './components/projects';
import ShopifyBFCMProject from './projects/shopify-bfcm/ShopifyBFCM'
import InboxOnboardingProject from './projects/shopify-inbox-onboarding/InboxOnboarding';
import CounterProject from './projects/origami-counter/OrigamiCounter';
import ServiceBookingProject from './projects/service-booking/ServiceBooking';
import PaletteCamProject from './projects/palette-cam/PaletteCam';
import NudgeAnalyticsDashboardProject from './projects/nudge-analytics-dashboard/nudgeAnalytics';
import NudgeDesignSystemProject from './projects/nudge-design-system/NudgeDesignSystem';

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
                <Route path="projects/shopify-bfcm" element={<ShopifyBFCMProject />} />
                <Route path="projects/shopify-inbox-onboarding" element={<InboxOnboardingProject />} />
                <Route path="projects/origami-counter" element={<CounterProject />} />
                <Route path="projects/league-service-booking" element={<ServiceBookingProject />} />
                <Route path="projects/palette-cam" element={<PaletteCamProject />} />
                <Route path="projects/nudge-analytics-dashboard" element={<NudgeAnalyticsDashboardProject />} />
                <Route path="projects/nudge-design-system" element={<NudgeDesignSystemProject />} />
              </Routes>
          </Router>
          <hr />
          <Footer />
      </div>
    </div>
  );
}

export default App;
