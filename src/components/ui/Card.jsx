import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: {
    backgroundColor: 'var(--card-bg)',
    borderColor: 'var(--card-border)',
  },
  elevated: {
    backgroundColor: 'var(--card-bg)',
    borderColor: 'var(--card-border)',
    boxShadow: '0 4px 6px -1px var(--shadow-color)',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: 'var(--card-border)',
  },
};

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  className = '',
  onClick,
  ...props
}) {
  const Component = hoverable ? motion.div : 'div';
  const motionProps = hoverable ? {
    whileHover: { scale: 1.02, y: -4 },
    transition: { duration: 0.2 },
  } : {};

  return (
    <Component
      onClick={onClick}
      className={`
        rounded-lg border
        transition-colors duration-200
        ${paddings[padding]}
        ${hoverable ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={variants[variant]}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3
      className={`text-lg font-semibold ${className}`}
      style={{ color: 'var(--text-primary)' }}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '' }) {
  return (
    <p
      className={`text-sm mt-1 ${className}`}
      style={{ color: 'var(--text-secondary)' }}
    >
      {children}
    </p>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-4 pt-4 border-t ${className}`} style={{ borderColor: 'var(--card-border)' }}>
      {children}
    </div>
  );
}
