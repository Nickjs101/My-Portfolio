import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Workflow, Brain, Bot } from 'lucide-react';

const iconMap = {
  Workflow: Workflow,
  Brain: Brain,
  Bot: Bot,
};

const ServiceCard = ({ service, onSelect }) => {
  const IconComponent = iconMap[service.icon] || Workflow;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative rounded-2xl p-6 sm:p-8 flex flex-col h-full ${
        service.popular ? 'ring-2' : ''
      }`}
      style={{
        backgroundColor: 'var(--card-bg)',
        border: service.popular ? 'none' : '1px solid var(--card-border)',
        ringColor: service.popular ? 'var(--accent-primary)' : 'transparent',
      }}
    >
      {/* Popular Badge */}
      {service.popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--bg-primary)',
          }}
        >
          MOST POPULAR
        </div>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--bg-tertiary)' }}
      >
        <IconComponent
          size={24}
          style={{ color: 'var(--accent-primary)' }}
        />
      </div>

      {/* Tier Name & Tagline */}
      <h3
        className="text-xl font-bold mb-1"
        style={{ color: 'var(--text-primary)' }}
      >
        {service.name}
      </h3>
      <p
        className="text-sm mb-4"
        style={{ color: 'var(--text-secondary)' }}
      >
        {service.tagline}
      </p>

      {/* Price */}
      <div className="mb-6">
        <span
          className="text-2xl sm:text-3xl font-bold"
          style={{ color: 'var(--accent-primary)' }}
        >
          {service.price}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm mb-6"
        style={{ color: 'var(--text-secondary)' }}
      >
        {service.description}
      </p>

      {/* Features */}
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check
                size={18}
                className="flex-shrink-0 mt-0.5"
                style={{ color: 'var(--accent-primary)' }}
              />
              <span
                className="text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Not Included */}
        {service.notIncluded.length > 0 && (
          <ul className="space-y-2">
            {service.notIncluded.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <X
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--text-secondary)', opacity: 0.5 }}
                />
                <span
                  className="text-sm"
                  style={{ color: 'var(--text-secondary)', opacity: 0.7 }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA Button */}
      <button
        onClick={() => onSelect(service)}
        className="mt-6 w-full py-3 px-6 rounded-lg font-semibold transition-all hover:scale-105"
        style={{
          backgroundColor: service.popular
            ? 'var(--accent-primary)'
            : 'var(--bg-tertiary)',
          color: service.popular
            ? 'var(--bg-primary)'
            : 'var(--text-primary)',
        }}
      >
        {service.ctaText}
      </button>
    </motion.div>
  );
};

export default ServiceCard;
