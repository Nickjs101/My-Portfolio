import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
const resume = 'https://example.com/resume.pdf';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const gotoSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }

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
        href: '#contact', 
        onclick: (e) => gotoSection(e, 'Contact'),
        label: 'Email Contact',
        color: 'hover:text-emerald-400'
      },
      { 
        icon: FileText, 
        href: resume,
        onclick: () => {},
        label: 'Download Resume',
        color: 'hover:text-emerald-400'
      }
  ]

  return (
    <footer className="py-8" style={{ backgroundColor: 'var(--nav-bg)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
              Nick.Js
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Crafting digital solutions with code and creativity
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
              © {currentYear} Nick Joshua Montemayor. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={social.onclick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-400 transition-colors duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}