import React from 'react';
import { motion } from 'framer-motion';

// Sections
import HireHero from './sections/HireHero';
import ProblemSection from './sections/ProblemSection';
import ServicesSection from './sections/ServicesSection';
import SocialProof from './sections/SocialProof';
import ProcessSection from './sections/ProcessSection';
import FAQSection from './sections/FAQSection';
import FinalCTA from './sections/FinalCTA';
import HireFooter from './sections/HireFooter';

// Standalone Navbar (no back button needed for separate site)
import HireNavbarStandalone from './components/HireNavbarStandalone';

function HireMeApp() {
  const [selectedService, setSelectedService] = React.useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service.tier);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="HireMeApp" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <HireNavbarStandalone />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <HireHero />
        <ProblemSection />
        <ServicesSection onServiceSelect={handleServiceSelect} />
        <SocialProof />
        <ProcessSection />
        <FAQSection />
        <FinalCTA preSelectedService={selectedService} />
      </motion.main>

      <HireFooter onBackToPortfolio={() => {
        // Link to main portfolio site
        window.location.href = 'https://your-portfolio-url.com';
      }} />
    </div>
  );
}

export default HireMeApp;
