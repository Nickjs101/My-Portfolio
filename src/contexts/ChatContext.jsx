import { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ChatContext = createContext(null);

const INITIAL_MESSAGE = {
  sender: 'AI',
  text: "Welcome to AI Terminal. Type your message to begin.",
};

export function ChatProvider({ children }) {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isFabVisible, setIsFabVisible] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [sessionId, setSessionId] = useState(() => uuidv4());
  const [isLoading, setIsLoading] = useState(false);

  const openChat = useCallback(() => {
    setIsFabVisible(true);
    setIsChatVisible(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsChatVisible(false);
  }, []);

  const hideFab = useCallback(() => {
    setIsFabVisible(false);
    setIsChatVisible(false);
  }, []);

  const showFab = useCallback(() => {
    setIsFabVisible(true);
  }, []);

  const addMessage = useCallback((message) => {
    setMessages(prev => [...prev, message]);
  }, []);

  const updateLastMessage = useCallback((text) => {
    setMessages(prev => {
      const updated = [...prev];
      updated[updated.length - 1] = { ...updated[updated.length - 1], text };
      return updated;
    });
  }, []);

  const resetChat = useCallback(() => {
    setMessages([INITIAL_MESSAGE]);
    setSessionId(uuidv4());
  }, []);

  const value = {
    isChatVisible,
    setIsChatVisible,
    isFabVisible,
    setIsFabVisible,
    messages,
    setMessages,
    sessionId,
    isLoading,
    setIsLoading,
    openChat,
    closeChat,
    hideFab,
    showFab,
    addMessage,
    updateLastMessage,
    resetChat,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

export default ChatContext;
