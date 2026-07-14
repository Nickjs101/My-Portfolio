import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { useNavigation } from '../contexts'

export default function Navbar() {
  const { activeSection, scrollToSection } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [showNavbar, setShowNavbar] = useState(true);

  // Handle scroll direction for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const scrolledPastThreshold = currentScrollY > 100;

      if (scrolledPastThreshold) {
        setShowNavbar(!scrollingDown);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'Home' },
    { name: 'Services', id: 'Services' },
    { name: 'Work', id: 'Work' },
    { name: 'Skills', id: 'Skills' },
    { name: 'Certifications', id: 'Certifications' },
    { name: 'About', id: 'About' },
    { name: 'Experience', id: 'Experience' },
    { name: 'Education', id: 'Education' },
  ];

  const mobileMenuButtonClass = "inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200";

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'var(--nav-bg)',
        borderBottom: '1px solid var(--nav-border)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'Home')}
              className="transition-colors duration-300 text-xl font-bold"
              style={{ color: 'var(--accent-primary)' }}
            >
              Nick.Js
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  style={{
                    color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-1 right-1 h-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'Contact')}
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              style={{
                backgroundColor: 'var(--button-bg)',
                color: 'var(--button-text)'
              }}
            >
              Contact Me
            </a>
          </div>

          <div className='flex items-center gap-2'>
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={mobileMenuButtonClass}
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Open main menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden"
          >
            <div
              className="px-2 pt-2 pb-3 space-y-1"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderTop: '1px solid var(--nav-border)'
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  style={{
                    color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    backgroundColor: activeSection === item.id ? 'var(--hover-bg)' : 'transparent',
                  }}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--button-bg)',
                  color: 'var(--button-text)'
                }}
                onClick={(e) => handleNavClick(e, 'Contact')}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
