import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FAQsSection from './components/FAQsSection';

function App() {
  // Change page title
  useEffect(() => {
    document.title = "BioSim | Antibiotic Simulation Platform";
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/faqs" element={<FAQsSection />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;