import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import Projects from './Projects';
import Blog from './Blog';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Contact from './Contact';
import About from './About';
import Links from './Links';
import SolutionParadox from './articles/SolutionParadox';
import OpenSourceRevolution from './articles/OpenSourceRevolution';
import ATProtocol from './articles/ATProtocol';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Projects />
            <Blog />
            <Testimonials />
            <Newsletter />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/links" element={<Links />} />
        <Route path="/blog/solution-paradox" element={<SolutionParadox />} />
        <Route path="/blog/open-source-revolution" element={<OpenSourceRevolution />} />
        <Route path="/blog/atprotocol" element={<ATProtocol />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
