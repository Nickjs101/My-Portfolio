import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, FileText, Wrench, Rocket } from 'lucide-react';

const iconMap = {
  PhoneCall: PhoneCall,
  FileText: FileText,
  Wrench: Wrench,
  Rocket: Rocket,
};

const ProcessStep = ({ step, index, isLast }) => {
  const IconComponent = iconMap[step.icon] || PhoneCall;

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline Line */}
      {!isLast && (
        <div
          className="absolute left-5 sm:left-6 top-12 w-0.5 h-full -mb-4"
          style={{ backgroundColor: 'var(--card-border)' }}
        />
      )}

      {/* Step Number Circle */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg"
        style={{
          backgroundColor: 'var(--accent-primary)',
          color: 'var(--bg-primary)',
        }}
      >
        {step.number}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.1 }}
        className="flex-grow pb-8 sm:pb-12"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4
              className="text-lg sm:text-xl font-bold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {step.title}
            </h4>
            <p
              className="text-sm sm:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {step.description}
            </p>
          </div>

          {/* Icon & Duration */}
          <div className="hidden sm:flex flex-col items-end gap-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <IconComponent
                size={20}
                style={{ color: 'var(--accent-primary)' }}
              />
            </div>
            <span
              className="text-xs font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              {step.duration}
            </span>
          </div>
        </div>

        {/* Mobile Duration */}
        <div className="sm:hidden mt-3 flex items-center gap-2">
          <IconComponent
            size={16}
            style={{ color: 'var(--accent-primary)' }}
          />
          <span
            className="text-xs font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            {step.duration}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessStep;
