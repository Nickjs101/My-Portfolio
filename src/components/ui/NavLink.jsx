import React from 'react';
import { motion } from 'framer-motion';

export default function NavLink({
  href,
  children,
  isActive = false,
  onClick,
  className = '',
  ...props
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        relative px-3 py-2 rounded-md text-sm font-medium
        transition-colors duration-300
        ${className}
      `}
      style={{
        color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
      }}
      {...props}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
          style={{ backgroundColor: 'var(--accent-primary)' }}
          initial={false}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </a>
  );
}

export function MobileNavLink({
  href,
  children,
  isActive = false,
  onClick,
  className = '',
  ...props
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        block px-3 py-2 rounded-md text-base font-medium
        transition-colors duration-300
        ${className}
      `}
      style={{
        color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
        backgroundColor: isActive ? 'var(--hover-bg)' : 'transparent',
      }}
      {...props}
    >
      {children}
    </a>
  );
}
