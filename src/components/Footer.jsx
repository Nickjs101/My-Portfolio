import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import resume from '../assets/NICK_JOSHUA_MONTEMAYOR_RESUME.pdf';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
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
            <a
              href="https://github.com/Nickjs101"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nickjmont"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:nick@example.com"
              className="transition-transform hover:scale-110"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              style={{ color: 'var(--text-secondary)' }}
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}