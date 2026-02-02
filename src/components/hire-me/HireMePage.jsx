import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import HireNavbar from './components/HireNavbar';

// Sections
import HireHero from './sections/HireHero';
import ProblemSection from './sections/ProblemSection';
import ServicesSection from './sections/ServicesSection';
import SocialProof from './sections/SocialProof';
import ProcessSection from './sections/ProcessSection';
import FAQSection from './sections/FAQSection';
import FinalCTA from './sections/FinalCTA';
import HireFooter from './sections/HireFooter';

const HireMePage = ({ setCurrentContent }) => {
  const [selectedService, setSelectedService] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToPortfolio = () => {
    // Clear the hash and go back to main
    window.history.pushState(null, '', window.location.pathname);
    setCurrentContent('Main');
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service.tier);
    // Scroll to contact section
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <HireNavbar onBackToPortfolio={handleBackToPortfolio} />

      <main>
        <HireHero />
        <ProblemSection />
        <ServicesSection onServiceSelect={handleServiceSelect} />
        <SocialProof />
        <ProcessSection />
        <FAQSection />
        <FinalCTA preSelectedService={selectedService} />
      </main>

      <HireFooter onBackToPortfolio={handleBackToPortfolio} />
    </motion.div>
  );
};

export default HireMePage;
