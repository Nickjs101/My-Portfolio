import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';
import { footerContent } from '../data/content';

const HireFooter = ({ onBackToPortfolio }) => {
  return (
    <footer
      className="py-12 px-4"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Back to Portfolio */}
          <motion.button
            whileHover={{ x: -4 }}
            onClick={onBackToPortfolio}
            className="flex items-center gap-2 font-medium transition-colors hover:opacity-80"
            style={{ color: 'var(--text-primary)' }}
          >
            <ArrowLeft size={18} />
            {footerContent.backLink}
          </motion.button>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors hover:opacity-80"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
              aria-label="GitHub"
            >
              <Github size={20} style={{ color: 'var(--text-primary)' }} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors hover:opacity-80"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} style={{ color: 'var(--text-primary)' }} />
            </a>
            <a
              href="mailto:your@email.com"
              className="p-2 rounded-lg transition-colors hover:opacity-80"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
              aria-label="Email"
            >
              <Mail size={20} style={{ color: 'var(--text-primary)' }} />
            </a>
          </div>

          {/* Copyright */}
          <p
            className="text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HireFooter;
