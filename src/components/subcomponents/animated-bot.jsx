import React from 'react'
import { FaRobot } from 'react-icons/fa';


const AnimatedChatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#00ff00] focus:ring-opacity-50"
    >
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-[#00ff00]/20 rounded-full flex items-center justify-center">
            <div className="text-[#00ff00] text-2xl animate-pulse"><FaRobot /></div>
          </div>
        </div>
      </div>
    </button>
  )
}

export default AnimatedChatButton
