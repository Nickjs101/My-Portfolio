import React, { useState, useRef, useEffect } from "react";
import { Send, X, Minus, Maximize2 } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatBox({ isChatVisible, onClose, hideFab }) {
  const [messages, setMessages] = useState([
    { sender: 'AI', text: "Welcome to AI Terminal. Type your message to begin." },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const chatAreaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionID] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if(sessionId === 0){
      setSessionID(generateSessionId());
    }
  }, [sessionId]);

  const extractMessage = async (data) => {
    try {
      const outputs = data.output;
      const message = outputs || "No message found";
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

    const WEBHOOK_URL = process.env.REACT_APP_CHAT_WEBHOOK_URL;
    const BEARER_TOKEN = process.env.REACT_APP_CHAT_BEARER_TOKEN;

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
        updatedMessages[updatedMessages.length - 1] = {sender: "AI", text: "Chat is currently offline. Email me below for a demo."};
        return updatedMessages;
      });

    } finally {
      setLoading(false);
    }
  };

  if (!isChatVisible) return null;

  const containerClasses = isFullScreen
    ? "fixed inset-0 z-50"
    : "fixed bottom-0 right-0 sm:bottom-4 sm:right-4 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[450px] sm:h-[400px] z-50";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={`${containerClasses} rounded-none sm:rounded-lg overflow-hidden flex flex-col`}
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          border: '1px solid var(--accent-primary)',
          boxShadow: '0 0 20px rgba(130, 204, 0, 0.2)',
        }}
      >
        {/* Header */}
        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--accent-primary)',
          }}
        >
          <div className="flex items-center gap-2">
            <span className="font-code" style={{ color: 'var(--accent-primary)' }}>{">"}</span>
            <span className="font-code text-sm sm:text-base" style={{ color: 'var(--accent-primary)' }}>
              AI Terminal
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-1 rounded transition-colors duration-200 hover:opacity-80"
              style={{ color: 'var(--text-secondary)' }}
              aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded transition-colors duration-200 hover:opacity-80"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Minimize chat"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={() => { hideFab(); onClose(); }}
              className="p-1 rounded transition-colors duration-200 hover:opacity-80"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div
          ref={chatAreaRef}
          className="flex-1 overflow-y-auto p-4 font-code text-sm"
          style={{ backgroundColor: 'var(--bg-tertiary)' }}
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0" style={{ color: 'var(--accent-primary)' }}>
                  {message.sender === 'AI' ? ">" : "$"}
                </span>
                <div className="flex-1">
                  <span
                    className="whitespace-pre-wrap break-words"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {message.text}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSendMessage}
          className="h-14 sm:h-12"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--accent-primary)',
          }}
        >
          <div className="flex items-center px-4 h-full">
            <span className="mr-2 flex-shrink-0" style={{ color: 'var(--accent-primary)' }}>
              {">"}
            </span>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-transparent font-code text-sm sm:text-base focus:outline-none"
              style={{
                color: 'var(--accent-primary)',
              }}
            />
            <button
              type="submit"
              className="flex-shrink-0 p-2 rounded transition-opacity duration-200 hover:opacity-80 disabled:opacity-50"
              style={{ color: 'var(--accent-primary)' }}
              disabled={loading}
              aria-label="Send message"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin inline-block"
                      style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }} />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}
