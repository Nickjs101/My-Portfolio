import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: {
    backgroundColor: 'var(--button-bg)',
    color: 'var(--text-primary)',
  },
  secondary: {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    border: '1px solid var(--accent-primary)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--text-secondary)',
  },
  accent: {
    backgroundColor: 'var(--accent-primary)',
    color: 'var(--bg-primary)',
  },
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      className={`
        inline-flex items-center justify-center gap-2
        font-medium rounded-md
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizes[size]}
        ${className}
      `}
      style={{
        ...variants[variant],
        '--tw-ring-color': 'var(--accent-primary)',
      }}
      {...props}
    >
      {loading ? (
        <>
          <span className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
                style={{ borderColor: 'currentColor', borderTopColor: 'transparent' }} />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
        </>
      )}
    </motion.button>
  );
}
