import React from 'react'
import { FaRobot } from 'react-icons/fa';

export default function AnimatedChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none focus:ring-2"
      style={{
        backgroundColor: 'var(--accent-primary)',
        opacity: 0.9,
        ':hover': { opacity: 0.8 },
        boxShadow: '0 0 20px var(--shadow-color)'
      }}
    >
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
            backgroundColor: 'var(--bg-secondary)',
            opacity: 0.2
          }}>
            <div className="text-2xl animate-pulse" style={{ color: 'var(--accent-primary)' }}>
              <FaRobot />
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}
