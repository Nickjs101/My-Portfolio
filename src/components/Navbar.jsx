import React, { useState } from 'react'

export default function Navbar({setIsChatVisible}) {
    const gotoSection = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        
        window.scrollTo({
          top: section.offsetTop, // adjust the scroll position
          behavior: 'smooth',
        });
    }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home', onclick: (e) => gotoSection(e, 'Home') },
    { name: 'Skills', href: '#skills', onclick: (e) => gotoSection(e, 'Skills') },
    { name: 'Certifications', href: '#certifications', onclick: (e) => gotoSection(e, 'Certifications') },
    { name: 'About', href: '#about', onclick: (e) => gotoSection(e, 'About') },
    { name: 'Experience', href: '#experience', onclick: (e) => gotoSection(e, 'Experience') },
    { name: 'Education', href: '#education', onclick: (e) => gotoSection(e, 'Education') },
    { name: 'Work', href: '#work', onclick: (e) => gotoSection(e, 'Work') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => gotoSection(e, 'Home')}
              className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-xl font-bold"
            >
              Nick.Js
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => item.onclick(e)}
                  className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setIsChatVisible(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Want to know More?
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-emerald-400 focus:outline-none"
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
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/90 backdrop-blur-md border-t border-slate-700">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={(e) => {
                setIsMenuOpen(false); 
                if (item.onclick) item.onclick(e);
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-emerald-500 hover:bg-emerald-600 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => {
              setIsMenuOpen(false);
              setIsChatVisible(true);
            }}
          >
            Want to know More?
          </a>
        </div>
      </div>
    </nav>
  )
}
