import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';

export default function ChatBox({ isChatVisible, onClose, hideFab }) {

  const [messages, setMessages] = useState([
    { sender: 'AI', text: "Welcome to AI Terminal. Type your message to begin." },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const chatAreaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionID] = useState(-1);

  // Auto-scroll chat to the bottom when messages are updated
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const extractMessage= async (data) => {
    try {
      const outputs = data.output;
      // const jsonText = JSON.parse(outputs);
      const message = outputs || "No message found";
      // const cleanedText = cleanMarkup(message);
      return message;
    } catch (error) {
      console.error("Error extracting data:", error);
      return "An error occurred while processing the response. Please try again.";
    }
  };
  
  const simulateTypingEffect = async (fullMessage) => {
    if (!fullMessage || typeof fullMessage !== "string") {
      console.error("simulateTypingEffect: Received invalid message:", fullMessage);
      return;
    }

    return new Promise((resolve) => {
      const typingSpeed = 10;
      let currentText = "";
  
      const interval = setInterval(() => {
        if (currentText.length < fullMessage.length) {
          currentText += fullMessage[currentText.length];
          setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1] = {
              sender: 'AI',
              text: currentText,
            };
            return updatedMessages;
          });
        } else {
          clearInterval(interval);
          resolve();
        }
      }, typingSpeed);
    });
  };

  const generateSessionId = () => {
    return uuidv4();
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { sender: 'user', text: inputMessage };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage("");

    
    const placeholderMessage = { sender: 'AI', text: "...." };
    setMessages((prevMessages) => [...prevMessages, placeholderMessage]);
    setLoading(true);

    const WEBHOOK_URL = 'https://nickjs.app.n8n.cloud/webhook/3c974edd-aa4b-481d-a0b5-24c303a57cc0';
    const BEARER_TOKEN = 'NickjsAISolutions';

    if(sessionId === -1) {
      setSessionID(generateSessionId());
    }

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'sessionId' : sessionId,
          'chatInput' : inputMessage
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const message = await extractMessage(data);
      await simulateTypingEffect(message);

    } catch (e) {
      console.log("ERROR: " + e.message);

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = {sender: "AI", text: "An error occurred. Please try again."};
        return updatedMessages;
      });
      
    } finally {
      setLoading(false);
    }
  };

  if (!isChatVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 sm:w-[400px] md:w-[500px] lg:w-[600px] h-[400px] bg-[#0a0b14] rounded-lg overflow-hidden border border-[#00ff00] shadow-lg shadow-[#00ff00]/20 flex flex-col">
      {/* Header */}
      <div className="bg-[#1a1b26] px-4 py-2 flex items-center justify-between border-b border-[#00ff00]">
        <div className="flex items-center gap-2">
          <span className="text-[#00ff00] font-code">{">"}</span>
          <span className="text-[#00ff00] font-code text-xs sm:text-base">AI Terminal</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></button>
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></button>
          <button onClick={() => { hideFab(); onClose(); }} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></button>
        </div>
      </div>
      {/* Chat Messages */}
      <div ref={chatAreaRef} className="flex-1 overflow-y-auto p-4 font-code sm:text-sm text-xs">
        {messages.map((message, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-start gap-2">
              <span className="text-[#00ff00] flex-shrink-0">
                {message.sender === 'AI' ? ">" : "$"}
              </span>
              <div className="flex-1">
                <span className="text-neutral-100 whitespace-pre-wrap break-words">{message.text}</span>
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
            className="flex-1 bg-transparent text-[#00ff00] font-code text-sm sm:text-base placeholder-[#00ff00]/50 focus:outline-none"
          />
          <button type="submit" className="text-[#00ff00] hover:text-[#00ff00]/80 flex-shrink-0" disabled={loading}>
            {loading ? "..." : <Send className="w-4 h-4" />}
          </button>
        </div>
      </form>
    </div>
  );
}
