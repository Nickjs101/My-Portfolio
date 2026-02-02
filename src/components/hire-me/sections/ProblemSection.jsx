import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Unplug, TrendingDown } from 'lucide-react';
import { problemContent } from '../data/content';

const iconMap = {
  Clock: Clock,
  Unplug: Unplug,
  TrendingDown: TrendingDown,
};

const ProblemSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container mx-auto max-w-6xl">
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
            {problemContent.sectionTitle}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {problemContent.sectionSubtitle}
          </p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problemContent.problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon] || Clock;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                >
                  <IconComponent
                    size={24}
                    style={{ color: 'var(--accent-primary)' }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {problem.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm mb-6"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {problem.description}
                </p>

                {/* Stat */}
                <div
                  className="pt-4"
                  style={{ borderTop: '1px solid var(--card-border)' }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {problem.stat}
                  </span>
                  <p
                    className="text-xs mt-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {problem.statLabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
