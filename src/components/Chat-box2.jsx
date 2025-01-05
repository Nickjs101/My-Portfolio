import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

export default function ChatBox({ isChatVisible, onClose, hideFab }) {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Welcome to AI Terminal. Type your message to begin." },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const chatAreaRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // Auto-scroll chat to the bottom when messages are updated
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const extractMessageAndSender = (data) => {
    try {
      const outputs = data.outputs[0]?.outputs[0]?.results?.message;
      const message = outputs?.text || "No message found";
      const senderName = outputs?.sender_name || "No sender name found";
      return { message, senderName };
    } catch (error) {
      console.error("Error extracting data:", error);
      return { message: "Error", senderName: "Error" };
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { sender: 'user', text: inputMessage };
    setMessages([...messages, userMessage]);
    setInputMessage("");
    setLoading(true);

    try {
      const res = await fetch('https://624h4zvccge7jvb5i5s7ff5lzi0dalzq.lambda-url.ap-northeast-1.on.aws/send_message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'message' : inputMessage}),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const { message, sender } = extractMessageAndSender(data);
      const aiMessage = { sender: sender, text: message };
      setMessages([...messages, aiMessage]);
      console.log(data["outputs"]);
    } catch (e) {
      console.log("ERROR: " + e.message);
    }
  };

  if (!isChatVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 sm:w-[400px] md:w-[500px] lg:w-[600px] h-[400px] bg-[#0a0b14] rounded-lg overflow-hidden border border-[#00ff00] shadow-lg shadow-[#00ff00]/20 flex flex-col">
      {/* Header */}
      <div className="bg-[#1a1b26] px-4 py-2 flex items-center justify-between border-b border-[#00ff00]">
        <div className="flex items-center gap-2">
          <span className="text-[#00ff00] font-mono">{">"}</span>
          <span className="text-[#00ff00] font-mono text-sm sm:text-base">AI Terminal Chat</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></button>
          <button onClick={() => alert("Yellow button clicked!")} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></button>
          <button onClick={() => { hideFab(); onClose(); }} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></button>
        </div>
      </div>
      {/* Chat Messages */}
      <div ref={chatAreaRef} className="flex-1 overflow-y-auto p-4 font-mono text-sm sm:text-base">
        {messages.map((message, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-start gap-2">
              <span className="text-[#00ff00] flex-shrink-0">
                {message.sender === 'bot' ? ">" : "$"}
              </span>
              <div className="flex-1">
                <span className="text-white whitespace-pre-wrap break-words">{message.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="bg-[#1a1b26] h-12 border-t border-[#00ff00]">
        <div className="flex items-center px-4 h-full">
          <span className="text-[#00ff00] mr-2 flex-shrink-0">{">"}</span>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-transparent text-[#00ff00] font-mono text-sm sm:text-base placeholder-[#00ff00]/50 focus:outline-none"
          />
          <button type="submit" className="text-[#00ff00] hover:text-[#00ff00]/80 flex-shrink-0" disabled={loading}>
            {loading ? "..." : <Send className="w-4 h-4" />}
          </button>
        </div>
      </form>
    </div>
  );
}
