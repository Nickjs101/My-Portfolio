import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Workflow, ThumbsUp, Zap } from 'lucide-react';
import { testimonials, resultMetrics } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';

const iconMap = {
  Clock: Clock,
  Workflow: Workflow,
  ThumbsUp: ThumbsUp,
  Zap: Zap,
};

const SocialProof = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            Trusted by Business Leaders
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            See what clients say about working with me
          </p>
        </motion.div>

        {/* Metrics Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {resultMetrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon] || Clock;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-xl"
                style={{ backgroundColor: 'var(--card-bg)' }}
              >
                <IconComponent
                  size={24}
                  className="mx-auto mb-3"
                  style={{ color: 'var(--accent-primary)' }}
                />
                <div
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {metric.value}
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
