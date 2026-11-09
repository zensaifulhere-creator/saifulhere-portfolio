/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface SuggestedPrompt {
  id: string;
  label: string;
  prompt: string;
  category: 'pricing' | 'engineering' | 'projects' | 'process';
}

export function validateChatMessage(text: string): { isValid: boolean; error?: string } {
  const trimmed = text.trim();
  if (!trimmed) {
    return { isValid: false, error: 'Message cannot be empty.' };
  }
  if (trimmed.length > 2000) {
    return { isValid: false, error: 'Message exceeds 2,000 character limit.' };
  }
  return { isValid: true };
}

export function createChatMessage(
  role: 'user' | 'assistant',
  content: string
): ChatMessage {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return {
    id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    role,
    content: content.trim(),
    timestamp: timeStr,
  };
}

export const SUGGESTED_PROMPTS: SuggestedPrompt[] = [
  {
    id: 'p-1',
    label: '$525 System Sprint',
    prompt: 'What deliverables are included in the $525 Design System Sprint?',
    category: 'pricing',
  },
  {
    id: 'p-2',
    label: 'Design Invariants',
    prompt: 'What are Saiful\'s three core design invariants and how do they shape his code?',
    category: 'process',
  },
  {
    id: 'p-3',
    label: 'Interactive Prototypes',
    prompt: 'How does Saiful turn Figma prototypes into production React & Framer Motion applications?',
    category: 'engineering',
  },
  {
    id: 'p-4',
    label: 'Aurora Design System',
    prompt: 'Tell me about the Aurora Design System v1.2 case study and token architecture.',
    category: 'projects',
  },
];
