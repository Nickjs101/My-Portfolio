import React from 'react';
import { motion } from 'framer-motion';
import { processContent } from '../data/content';
import ProcessStep from '../components/ProcessStep';

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {processContent.sectionTitle}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {processContent.sectionSubtitle}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {processContent.steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === processContent.steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--bg-primary)',
            }}
          >
            Start with Step 1
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
