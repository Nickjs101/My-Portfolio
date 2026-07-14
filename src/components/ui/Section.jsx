import React from 'react';
import { motion } from 'framer-motion';

const backgrounds = {
  primary: 'var(--bg-primary)',
  secondary: 'var(--bg-secondary)',
  tertiary: 'var(--bg-tertiary)',
};

export default function Section({
  id,
  children,
  bg = 'primary',
  className = '',
  ...props
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 lg:py-24 ${className}`}
      style={{ backgroundColor: backgrounds[bg] }}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-8 md:mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      <div
        className={`h-1 w-20 rounded-full ${centered ? 'mx-auto' : ''}`}
        style={{ backgroundColor: 'var(--button-bg)' }}
      />
      {subtitle && (
        <p
          className="mt-4 text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
