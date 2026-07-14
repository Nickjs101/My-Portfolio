import React from 'react';

const variants = {
  text: 'h-4 rounded',
  title: 'h-8 rounded',
  avatar: 'rounded-full',
  card: 'rounded-lg',
  image: 'rounded-lg aspect-video',
};

export default function SkeletonLoader({
  variant = 'text',
  width,
  height,
  className = '',
  ...props
}) {
  return (
    <div
      className={`
        animate-pulse
        ${variants[variant]}
        ${className}
      `}
      style={{
        backgroundColor: 'var(--bg-tertiary)',
        width: width || '100%',
        height: variant === 'avatar' ? (height || width || '40px') : height,
      }}
      {...props}
    />
  );
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonLoader
          key={i}
          variant="text"
          width={i === lines - 1 ? '60%' : '100%'}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = '' }) {
  return (
    <div
      className={`p-4 rounded-lg ${className}`}
      style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
    >
      <SkeletonLoader variant="image" className="mb-4" />
      <SkeletonLoader variant="title" width="70%" className="mb-2" />
      <SkeletonText lines={2} />
    </div>
  );
}

export function LoadingSpinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizes[size]} border-4 border-t-transparent rounded-full animate-spin`}
        style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}
      />
    </div>
  );
}
