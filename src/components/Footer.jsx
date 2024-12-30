import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import resume from '../assets/NICK_JOSHUA_MONTEMAYOR_RESUME.pdf'

const Footer = () => {
  const gotoSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    
    window.scrollTo({
      top: section.offsetTop, // adjust the scroll position
      behavior: 'smooth',
    });
  }

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Nickjs101', 
      onclick: () => {},
      label: 'GitHub Profile',
      color: 'hover:text-emerald-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/nickjmont', 
      onclick: () => {},
      label: 'LinkedIn Profile',
      color: 'hover:text-emerald-400'
    },
    { 
      icon: Mail, 
      href: 'mailto:nick@example.com', 
      onclick: (e) => gotoSection(e, 'Contact'),
      label: 'Email Contact',
      color: 'hover:text-emerald-400'
    },
    { 
      icon: Download, 
      href: resume,
      onclick: () => {},
      label: 'Download Resume',
      color: 'hover:text-emerald-400'
    }
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-emerald-400 mb-2">Nick.Js</h2>
            <p className="text-sm text-center md:text-left">Crafting digital solutions with code and creativity</p>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={link.onclick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className=" my-auto text-center text-sm">
            <p>&copy; {currentYear} Nick Joshua Montemayor. All rights reserved.</p>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;

