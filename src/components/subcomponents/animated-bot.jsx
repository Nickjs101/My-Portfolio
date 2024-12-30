import React from 'react'

const AnimatedBot = () => {
  return (
    <div className="absolute opacity-30 inset-0 pointer-events-none flex items-center justify-center">
      <div className="relative w-40 h-40">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00ffff] rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${i * 18}deg) translate(60px) rotate(-${i * 18}deg)`,
              animation: `orbit ${20 + i * 0.5}s linear infinite`,
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-[#00ffff]/20 rounded-full flex items-center justify-center">
            <div className="text-[#00ffff] text-4xl animate-pulse">{'</>'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedBot

