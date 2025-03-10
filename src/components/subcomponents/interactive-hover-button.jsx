import React from "react"
import { FaRobot } from 'react-icons/fa';


const InteractiveHoverButton = React.forwardRef(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`group relative w-32 cursor-pointer overflow-hidden rounded-full border border-card-border p-2 text-center font-semibold ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute left-0 top-0 z-20 flex h-full w-full translate-x-full items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{text}</span>
        <FaRobot className="h-4 w-4" />
      </div>
      <div className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-primary transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:translate-y-0 group-hover:left-0 group-hover:top-0"></div>
    </button>
  )
})

InteractiveHoverButton.displayName = "InteractiveHoverButton"

export { InteractiveHoverButton }

