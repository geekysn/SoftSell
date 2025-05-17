"use server"

import endent from "endent";

// System prompt for the chat assistant
const systemPrompt = endent`
You are an AI assistant for this website. You are friendly, helpful, and knowledgeable.

Instructions:
- Answer user questions clearly and concisely
- If asked about the website or its services, provide helpful information
- If you don't know the answer, politely say so and offer to direct them to human support
- Be conversational but professional
- Keep responses brief and to the point
- Do not make up information that you don't know
`;

// Function to generate chat response
export async function generateChatResponse(
  messages: { role: 'user' | 'assistant' | 'system'; content: string }[],
  model: string = "llama3-8b-8192"
) {
  try {
    // Create messages array with system prompt
    const messagesWithSystem = [
      { role: 'system', content: systemPrompt },
      ...messages
    ];
    
    // Direct fetch to GROQ API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: model,
        messages: messagesWithSystem,
        temperature: 0.7,
        max_tokens: 1024
      })
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    
    // Return just the content
    return { 
      message: data.choices[0].message.content, 
      error: null 
    };
  } catch (error) {
    console.error('Error generating chat response:', error);
    return { 
      message: null, 
      error: 'Failed to generate response. Please try again later.' 
    };
  }
} 