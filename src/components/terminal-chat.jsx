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
      <div className="rounded-lg shadow-xl border" style={{
        borderColor: 'var(--accent-primary)',
        opacity: 0.2
      }}>
        {/* Terminal Header */}
        <div className="p-3 border-b flex items-center gap-2" style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--accent-primary)',
          opacity: 0.2
        }}>
          <Terminal style={{ color: 'var(--accent-primary)' }} className="w-5 h-5" />
          <span style={{ color: 'var(--accent-primary)' }} className="font-mono">AI Terminal Chat</span>
          <div className="flex gap-2 ml-auto">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: 'var(--accent-primary)',
              opacity: 0.8
            }} />
          </div>
        </div>

        <AnimatedBot />

        {/* Chat Messages */}
        <div className="h-[600px] overflow-y-auto p-4 space-y-4 relative scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
          {messages.map((message, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{
                backgroundColor: message.role === 'user' ? 'var(--accent-primary)' : 'var(--accent-secondary)'
              }}>
                {message.role === 'user' ? (
                  <User className="w-5 h-5" style={{ color: 'var(--bg-primary)' }} />
                ) : (
                  <Bot className="w-5 h-5" style={{ color: 'var(--bg-primary)' }} />
                )}
              </div>
              <div className="relative max-w-[80%] px-4 py-2 rounded-lg" style={{
                backgroundColor: 'var(--bg-secondary)',
                color: message.role === 'user' ? 'var(--text-primary)' : 'var(--accent-primary)'
              }}>
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
          className="border-t p-4" 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--accent-primary)',
            opacity: 0.2
          }}
        >
          <div className="flex items-center gap-2 rounded-lg px-3 py-2 border" style={{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--accent-primary)',
            opacity: 0.2
          }}>
            <ChevronRight className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your command..."
              className="flex-1 bg-transparent border-none outline-none font-mono"
              style={{
                color: 'var(--accent-primary)',
                '::placeholder': { color: 'var(--text-secondary)' }
              }}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

