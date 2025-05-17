"use client";

import { useState, useEffect, useRef } from 'react';
import { useChat, Message } from '../../hooks/useChat';
import { MessageSquare, Send, X, MinusIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const { 
    messages, 
    isLoading, 
    error, 
    isOpen, 
    toggleChat, 
    sendMessage 
  } = useChat();
  
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-medium text-gray-800">Chat with AI</h3>
              <div className="flex gap-2">
                <button 
                  onClick={toggleChat} 
                  className="p-1 rounded-md hover:bg-gray-100"
                  aria-label="Minimize chat"
                >
                  <MinusIcon className="h-5 w-5 text-gray-500" />
                </button>
                <button 
                  onClick={toggleChat} 
                  className="p-1 rounded-md hover:bg-gray-100"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500 text-sm">
                    Ask me anything about this website!
                  </p>
                </div>
              ) : (
                messages.map((msg: Message) => (
                  <div 
                    key={msg.id}
                    className={`mb-4 max-w-[85%] ${
                      msg.role === 'user' ? 'ml-auto' : 'mr-auto'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-blue-500 text-white rounded-br-none'
                          : 'bg-gray-200 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              )}
              {error && (
                <div className="p-3 bg-red-100 text-red-800 rounded-lg mb-4">
                  {error}
                </div>
              )}
              <div ref={messagesEndRef}></div>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={`px-4 py-2 bg-blue-500 text-white rounded-r-md ${
                  isLoading || !input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                }`}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 