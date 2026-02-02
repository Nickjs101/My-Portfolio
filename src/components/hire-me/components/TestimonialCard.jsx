import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl p-6 h-full flex flex-col"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
      }}
    >
      {/* Quote Icon */}
      <Quote
        size={32}
        className="mb-4 opacity-20"
        style={{ color: 'var(--accent-primary)' }}
      />

      {/* Content */}
      <p
        className="text-sm sm:text-base mb-6 flex-grow italic"
        style={{ color: 'var(--text-primary)' }}
      >
        "{testimonial.content}"
      </p>

      {/* Result Badge */}
      {testimonial.result && (
        <div
          className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold mb-4"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--bg-primary)',
            opacity: 0.9,
          }}
        >
          {testimonial.result}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
          style={{
            backgroundColor: 'var(--bg-tertiary)',
            color: 'var(--accent-primary)',
          }}
        >
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            getInitials(testimonial.name)
          )}
        </div>

        {/* Name & Role */}
        <div>
          <p
            className="font-semibold text-sm"
            style={{ color: 'var(--text-primary)' }}
          >
            {testimonial.name}
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--text-secondary)' }}
          >
            {testimonial.role}, {testimonial.company}
          </p>
        </div>

        {/* Stars */}
        <div className="ml-auto flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill="var(--accent-primary)"
              style={{ color: 'var(--accent-primary)' }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
