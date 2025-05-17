"use client";

import { ReactNode } from 'react';
import ChatWidget from './ChatWidget';

export default function ChatProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
} 