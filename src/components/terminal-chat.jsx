'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from 'ai/react'
import { Bot, User, ChevronRight, Terminal } from 'lucide-react'
import AnimatedBot from '../components/subcomponents/animated-bot'

export default function TerminalChat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const messagesEndRef = useRef(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className=" rounded-lg shadow-xl border border-[#00ff00]/20">
        {/* Terminal Header */}
        <div className="bg-[#161b22] p-3 border-b border-[#00ff00]/20 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-emerald-500" />
          <span className="text-emerald-500 font-mono">AI Terminal Chat</span>
          <div className="flex gap-2 ml-auto">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-[#00ff00]/80" />
          </div>
        </div>

        <AnimatedBot />

        {/* Chat Messages */}
        <div className="h-[600px] overflow-y-auto p-4 space-y-4 relative scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
         
          {messages.map((message, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`
                flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                ${message.role === 'user' ? 'bg-emerald-500' : 'bg-[#00ffff]'}
              `}>
                {message.role === 'user' ? (
                  <User className="w-5 h-5 text-emerald-900" />
                ) : (
                  <Bot className="w-5 h-5 text-[#0d1117]" />
                )}
              </div>
              <div className={` 
                relative max-w-[80%] px-4 py-2 rounded-lg bg-slate-700
                ${message.role === 'user' 
                  ? 'text-white' 
                  : 'text-[#00ffff]'
                }
                before:absolute before:inset-0 before:rounded-lg
                before:bg-gradient-to-r
                ${message.role === 'user'
                  ? 'before:from-[#00ff00]/10 before:to-[#00ff00]/20'
                  : 'before:from-[#00ffff]/10 before:to-[#00ffff]/20'
                }
                before:-z-10 before:blur-sm break-words
              `}>
                <div className="font-mono">
                  {' '}{message.content}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form 
          onSubmit={handleSubmit}
          className="border-t border-[#00ff00]/20 p-4 bg-[#161b22]"
        >
          <div className="flex items-center gap-2 bg-[#0d1117] rounded-lg px-3 py-2 border border-[#00ff00]/20">
            <ChevronRight className="w-4 h-4 text-[#00ff00]" />
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your command..."
              className="flex-1 bg-transparent border-none outline-none text-[#00ff00] placeholder-[#00ff00]/50 font-mono"
            />
          </div>
        </form>
      </div>
    </section>
  )
}

