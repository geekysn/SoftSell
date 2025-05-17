"use client";

import { useState, useEffect } from 'react';
import { generateChatResponse } from '../lib/llama';

export type Message = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export function useChat() {
  // Chat visibility state
  const [isOpen, setIsOpen] = useState<boolean>(true);
  // Message history
  const [messages, setMessages] = useState<Message[]>([]);
  // Loading state for API calls
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Error state
  const [error, setError] = useState<string | null>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const storedMessages = localStorage.getItem('chat-messages');
    if (storedMessages) {
      try {
        setMessages(JSON.parse(storedMessages));
      } catch (e) {
        console.error('Failed to parse stored messages');
      }
    }

    // Get chat visibility state
    const storedVisibility = localStorage.getItem('chat-visibility');
    if (storedVisibility !== null) {
      setIsOpen(storedVisibility === 'true');
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chat-messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Save visibility state
  useEffect(() => {
    localStorage.setItem('chat-visibility', isOpen.toString());
  }, [isOpen]);

  // Function to toggle chat visibility
  const toggleChat = () => setIsOpen(prev => !prev);

  // Function to send a new message
  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Create new user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };

    // Add message to state
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Format messages for API
      const apiMessages = messages
        .filter(msg => msg.role !== 'system')
        .map(msg => ({
          role: msg.role,
          content: msg.content
        }));

      // Add the new user message
      apiMessages.push({
        role: 'user',
        content: userMessage.content
      });

      // Send messages to API
      const response = await generateChatResponse(apiMessages);

      // Handle response
      if (response.error) {
        setError(response.error);
      } else if (response.message) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response.message,
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error in sendMessage:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to clear chat history
  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('chat-messages');
  };

  return {
    messages,
    isLoading,
    error,
    isOpen,
    toggleChat,
    sendMessage,
    clearChat,
  };
} 