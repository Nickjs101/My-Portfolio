import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Layers, GitBranch, Sparkles, Code } from 'lucide-react';
import { heroContent } from '../data/content';
import { toolLogos } from '../data/services';

const iconMap = {
  Zap: Zap,
  Layers: Layers,
  GitBranch: GitBranch,
  Sparkles: Sparkles,
  Code: Code,
};

const HireHero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--accent-primary)',
          }}
        >
          <Sparkles size={16} />
          AI & Automation Services
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {heroContent.headline.split('AI').map((part, index, arr) => (
            <React.Fragment key={index}>
              {part}
              {index < arr.length - 1 && (
                <span style={{ color: 'var(--accent-primary)' }}>AI</span>
              )}
            </React.Fragment>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {heroContent.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--bg-primary)',
            }}
          >
            {heroContent.ctaPrimary}
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
            }}
          >
            {heroContent.ctaSecondary}
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            {heroContent.trustText}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {toolLogos.map((tool) => {
              const IconComponent = iconMap[tool.icon] || Code;
              return (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <IconComponent
                    size={20}
                    style={{ color: 'var(--text-secondary)' }}
                  />
                  <span
                    className="text-sm font-medium hidden sm:inline"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireHero;
