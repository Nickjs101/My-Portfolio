"use client"

import React from 'react'

const AnimatedChatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#00ff00] focus:ring-opacity-50"
    >
      <div className="relative w-20 h-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff00] rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${i * 18}deg) translate(40px) rotate(-${i * 18}deg)`,
              animation: `orbit ${5 + i * 0.5}s linear infinite`,
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-[#00ff00]/20 rounded-full flex items-center justify-center">
            <div className="text-[#00ff00] text-2xl animate-pulse">{'</>'}</div>
          </div>
        </div>
      </div>
    </button>
  )
}

export default AnimatedChatButton
