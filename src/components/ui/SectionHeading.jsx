import React from 'react'
import { motion } from 'framer-motion'

/**
 * Premium section header: mono eyebrow label + display heading + optional subline.
 * align: 'center' (default) | 'left'
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${alignment} mb-10 sm:mb-14 ${className}`}
    >
      {eyebrow && <span className="eyebrow mb-3">{`// ${eyebrow}`}</span>}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      <div
        className={`h-1 w-16 rounded-full mt-4 ${align === 'left' ? '' : 'mx-auto'}`}
        style={{ backgroundColor: 'var(--accent-primary)' }}
      />
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl ${align === 'left' ? '' : 'mx-auto'}`}
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
