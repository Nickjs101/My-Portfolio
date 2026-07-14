import React, { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  error,
  required = false,
  type = 'text',
  className = '',
  ...props
}, ref) => {
  const inputId = props.id || props.name;

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium mb-1.5"
          style={{ color: 'var(--text-primary)' }}
        >
          {label}
          {required && <span style={{ color: 'var(--accent-primary)' }}> *</span>}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        type={type}
        className={`
          w-full px-4 py-3 rounded-md
          transition-colors duration-200
          focus:outline-none focus:ring-2
          ${error ? 'ring-2 ring-red-500' : ''}
        `}
        style={{
          backgroundColor: 'var(--input-bg)',
          borderColor: error ? '#ef4444' : 'var(--input-border)',
          color: 'var(--text-primary)',
          '--tw-ring-color': error ? '#ef4444' : 'var(--accent-primary)',
        }}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1.5 text-sm text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

export const Textarea = forwardRef(({
  label,
  error,
  required = false,
  rows = 4,
  className = '',
  ...props
}, ref) => {
  const inputId = props.id || props.name;

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium mb-1.5"
          style={{ color: 'var(--text-primary)' }}
        >
          {label}
          {required && <span style={{ color: 'var(--accent-primary)' }}> *</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-md resize-none
          transition-colors duration-200
          focus:outline-none focus:ring-2
          ${error ? 'ring-2 ring-red-500' : ''}
        `}
        style={{
          backgroundColor: 'var(--input-bg)',
          borderColor: error ? '#ef4444' : 'var(--input-border)',
          color: 'var(--text-primary)',
          '--tw-ring-color': error ? '#ef4444' : 'var(--accent-primary)',
        }}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1.5 text-sm text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';
