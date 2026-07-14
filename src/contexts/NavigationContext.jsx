import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

const NavigationContext = createContext(null);

const SECTIONS = ['Home', 'Services', 'Work', 'Skills', 'Certifications', 'About', 'Experience', 'Education', 'Contact'];

export function NavigationProvider({ children }) {
  const [activeSection, setActiveSection] = useState('Home');
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);
  const observerRef = useRef(null);

  // Setup IntersectionObserver to track active section
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0.3, 0.5, 0.7],
    });

    // Observe all sections
    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Handle navbar visibility on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const scrolledPastThreshold = currentScrollY > 100;

      if (scrolledPastThreshold) {
        setIsNavbarVisible(!scrollingDown);
      } else {
        setIsNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; // Fixed navbar height
      const offsetTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      setActiveSection(sectionId);
    }
  }, []);

  const value = {
    activeSection,
    setActiveSection,
    isNavbarVisible,
    scrollToSection,
    sections: SECTIONS,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

export default NavigationContext;
