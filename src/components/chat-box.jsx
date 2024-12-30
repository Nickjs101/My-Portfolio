import React, { useState } from 'react'
import { Send, X } from 'lucide-react'

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help you today?",
      time: "12:44 AM",
      isAi: true
    }
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isVisible, setIsVisible] = useState(true)

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const newMessage = {
      text: inputMessage,
      time: new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric',
        minute: 'numeric',
        hour12: true 
      }),
      isAi: false
    }

    setMessages([...messages, newMessage])
    setInputMessage("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        text: "I'm here to help! What would you like to know?",
        time: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }),
        isAi: true
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  const actionButtons = [
    "Tell a joke",
    "Weather",
    "Help options",
    "Your name",
    "Current time"
  ]

  return (
    <>
    {isVisible && (
    <div className="fixed bottom-4 right-4 w-[440px] h-[600px] bg-[#1a1f2d] rounded-lg shadow-xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-white">AI Assistant</h3>
            <p className="text-sm text-green-500">Online</p>
          </div>
        </div>
        <button 
          className="text-gray-400 hover:text-white"
          onClick={() => setIsVisible(false)}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              message.isAi ? 'items-start' : 'items-end'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isAi
                ? 'bg-[#2a2f3d] text-white'
                : 'bg-green-500 text-white'
              }`}
            >
              {message.text}
              <div className={`text-xs mt-1 ${
                message.isAi ? 'text-gray-400' : 'text-green-100'
              }`}>
                {message.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="p-4 gap-2 flex flex-wrap">
        {actionButtons.map((button, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-[#2a2f3d] text-white rounded-lg text-sm hover:bg-[#3a3f4d] transition-colors"
          >
            {button}
          </button>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
        <div className="relative">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-[#2a2f3d] text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500 hover:text-green-400"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
    )}
    {!isVisible && (
  <button
    onClick={() => setIsVisible(true)}
    className="fixed bottom-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
  >
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      />
    </svg>
  </button>
)}
    </>
  )
}

