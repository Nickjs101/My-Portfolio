import React from 'react'

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4" style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }}>
      <div className="relative rounded-lg max-w-3xl w-full border" style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--card-border)'
      }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 transition-colors duration-200"
          style={{ color: 'var(--text-secondary)' }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

