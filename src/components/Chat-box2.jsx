import React, { useState } from 'react'
import { Send } from 'lucide-react'

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      text: "Welcome to AI Terminal. Type your message to begin.",
      time: "12:44 AM",
      isAi: true
    }
  ])
  const [inputMessage, setInputMessage] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);
  

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
        text: "Processing your request...",
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

  return (
    <>
      {isChatVisible && (
        <div className="fixed bottom-4 right-4 w-[600px] h-[400px] rounded-lg overflow-hidden border border-[#00ff00] shadow-lg shadow-[#00ff00]/20">
          {/* Terminal Header */}
          <div className="bg-[#1a1b26] px-4 py-2 flex items-center justify-between border-b border-[#00ff00]">
            <div className="flex items-center gap-2">
              <span className="text-[#00ff00] font-mono">{'>'}</span>
              <span className="text-[#00ff00] font-mono">AI Terminal Chat</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsChatVisible(false)} 
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
              ></button>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="bg-[#0a0b14] h-[calc(100%-96px)] overflow-y-auto p-4 font-mono">
            {messages.map((message, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff00]">{message.isAi ? '>' : '$'}</span>
                  <div className="flex-1">
                    <span className="text-white whitespace-pre-wrap break-words">{message.text}</span>
                    <div className="text-[#666] text-xs mt-1">{message.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="bg-[#1a1b26] h-12 border-t border-[#00ff00]">
            <div className="flex items-center px-4 h-full">
              <span className="text-[#00ff00] mr-2">{'>'}</span>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your command..."
                className="flex-1 bg-transparent text-[#00ff00] font-mono placeholder-[#00ff00]/50 focus:outline-none"
              />
              <button
                type="submit"
                className="text-[#00ff00] hover:text-[#00ff00]/80"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
      
      {!isChatVisible && (
        <button
          onClick={() => setIsChatVisible(true)}
          className="fixed bottom-4 right-4 w-12 h-12 bg-[#00ff00] rounded-full flex items-center justify-center shadow-lg hover:bg-[#00ff00]/80 transition-colors"
        >
          <span className="text-black font-mono text-xl">{'>'}</span>
        </button>
      )}
    </>
  )
}

