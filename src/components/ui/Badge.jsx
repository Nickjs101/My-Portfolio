import React from 'react';

const variants = {
  default: {
    backgroundColor: 'var(--bg-tertiary)',
    color: 'var(--text-secondary)',
  },
  accent: {
    backgroundColor: 'var(--accent-primary)',
    color: 'var(--bg-primary)',
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'var(--accent-primary)',
    border: '1px solid var(--accent-primary)',
  },
  muted: {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-muted)',
  },
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-medium rounded-full
        whitespace-nowrap
        ${sizes[size]}
        ${className}
      `}
      style={variants[variant]}
      {...props}
    >
      {children}
    </span>
  );
}
