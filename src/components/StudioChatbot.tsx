/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  Sparkles,
  Trash2,
  Copy,
  Check,
  ChevronDown,
  AlertCircle,
  Cpu,
} from 'lucide-react';
import {
  ChatMessage,
  createChatMessage,
  validateChatMessage,
  SUGGESTED_PROMPTS,
} from '../utils/chat';
import { generateStudioFallback } from '../utils/knowledgeBase';

interface StudioChatbotProps {
  onNavigateToSection?: (sectionId: string) => void;
}

export const StudioChatbot: React.FC<StudioChatbotProps> = ({ onNavigateToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome-01',
      role: 'assistant',
      content:
        "Welcome to Saiful's Studio. I'm Saiful's AI powered by Gemini. Ask me about design token architecture, interactive prototyping in React 19, sprint pricing ($1,850 / $3,400), or scheduling project work.",
      timestamp: 'Now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'gemini-3.8-flash' | 'gemini-3.1-flash-lite'>(
    'gemini-3.8-flash'
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // On non-touch screens or desktop, autofocus input
      if (typeof window !== 'undefined' && window.innerWidth >= 640) {
        setTimeout(() => inputRef.current?.focus(), 150);
      }
    }
  }, [isOpen, messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const rawText = textToSend || inputValue;
    const validation = validateChatMessage(rawText);
    if (!validation.isValid) return;

    const userMessage = createChatMessage('user', rawText);
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    if (!textToSend) setInputValue('');
    setIsLoading(true);
    setApiError(null);

    try {
      const payloadMessages = updatedMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: payloadMessages,
          model: selectedModel,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();
      const aiReply = createChatMessage('assistant', data.text);
      setMessages((prev) => [...prev, aiReply]);
    } catch (err: any) {
      console.warn('Network / API issue, using local studio concierge fallback:', err);
      // Graceful fallback guarantees 100% uptime on Vercel or offline
      const fallbackText = generateStudioFallback(rawText);
      const aiReply = createChatMessage('assistant', fallbackText);
      setMessages((prev) => [...prev, aiReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading) {
        handleSendMessage();
      }
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content:
          "Conversation cleared. How can I help you explore Saiful's design systems and engineering works?",
        timestamp: 'Now',
      },
    ]);
    setApiError(null);
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Floating Launcher Button - Renamed to Saiful's AI with Responsive Mobile Footprint */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 bg-[#111111]/95 backdrop-blur-md border ${
            isOpen
              ? 'border-[#e32b3c] shadow-[0_0_24px_rgba(227,43,60,0.4)]'
              : 'border-[#262626] hover:border-[#e32b3c]/60 shadow-[0_4px_20px_rgba(0,0,0,0.7)]'
          } text-[#f2efeb] cursor-pointer transition-colors duration-200 group`}
          aria-label={isOpen ? "Close Saiful's AI chat" : "Open Saiful's AI chat"}
          aria-expanded={isOpen}
        >
          {/* Status Beacon */}
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-none bg-[#e32b3c] opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-none h-2 w-2 bg-[#e32b3c]" />
          </span>

          <div className="text-left">
            <span className="block font-mono text-[9px] sm:text-[10px] text-[#888888] tracking-widest uppercase">
              STUDIO COPILOT
            </span>
            <span className="block font-display text-xs sm:text-sm tracking-wider text-[#f2efeb] group-hover:text-[#e32b3c] transition-colors">
              {isOpen ? 'MINIMIZE CHAT' : "SAIFUL'S AI"}
            </span>
          </div>

          <div className="ml-0.5 sm:ml-1 pl-1.5 sm:pl-2 border-l border-[#262626] text-[#888888] group-hover:text-[#e32b3c] transition-colors">
            {isOpen ? <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </div>
        </motion.button>
      </div>

      {/* Responsive Cinematic Noir Chat Terminal (Bottom Sheet on Mobile, Floating Drawer on Desktop) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 sm:bottom-22 sm:right-6 sm:inset-x-auto z-50 w-full sm:w-[440px] h-[88vh] sm:h-[580px] sm:max-h-[82vh] flex flex-col bg-[#0b0b0b]/98 backdrop-blur-2xl border-t sm:border border-[#262626] shadow-[0_24px_64px_rgba(0,0,0,0.9)] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Saiful's AI Design Copilot"
          >
            {/* Mobile Sheet Drag Indicator Bar */}
            <div className="sm:hidden pt-2 pb-1 bg-[#121212]/90 flex justify-center">
              <div className="w-10 h-1 bg-white/20 rounded-none" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-3.5 sm:px-4 py-3 border-b border-[#222222] bg-[#121212]/95 select-none shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-none bg-[#e32b3c] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-none h-2 w-2 bg-[#e32b3c]" />
                </span>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-display tracking-wider text-sm sm:text-base text-[#f2efeb]">
                      SAIFUL'S AI
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                      / COPILOT
                    </span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#666666] tracking-wider">
                    ONLINE · {selectedModel === 'gemini-3.8-flash' ? 'GEMINI 3.8 FLASH' : 'GEMINI 3.1 LITE'}
                  </div>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-1">
                {/* Model Speed Selector */}
                <div className="flex items-center bg-[#181818] border border-[#2a2a2a] p-0.5 mr-1">
                  <button
                    onClick={() => setSelectedModel('gemini-3.8-flash')}
                    className={`px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      selectedModel === 'gemini-3.8-flash'
                        ? 'bg-[#e32b3c] text-white font-semibold'
                        : 'text-[#888888] hover:text-[#f2efeb]'
                    }`}
                    title="Gemini 3.8 Flash (General reasoning)"
                  >
                    3.8 Flash
                  </button>
                  <button
                    onClick={() => setSelectedModel('gemini-3.1-flash-lite')}
                    className={`px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      selectedModel === 'gemini-3.1-flash-lite'
                        ? 'bg-[#e32b3c] text-white font-semibold'
                        : 'text-[#888888] hover:text-[#f2efeb]'
                    }`}
                    title="Gemini 3.1 Flash Lite (Ultra-fast)"
                  >
                    3.1 Lite
                  </button>
                </div>

                <button
                  onClick={handleClearHistory}
                  className="p-1.5 text-[#888888] hover:text-[#f2efeb] hover:bg-[#1f1f1f] transition-colors cursor-pointer"
                  title="Clear conversation history"
                  aria-label="Clear chat"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-[#888888] hover:text-[#e32b3c] hover:bg-[#1f1f1f] transition-colors cursor-pointer"
                  title="Close chat terminal"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Thread */}
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 sm:space-y-4 scroll-smooth">
              {messages.map((message) => {
                const isUser = message.role === 'user';
                return (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-center gap-2 mb-1 px-1">
                      <span className="font-mono text-[9px] sm:text-[10px] text-[#666666] tracking-widest uppercase">
                        {isUser ? 'YOU' : "SAIFUL'S AI"}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-[#444444] font-mono">
                        {message.timestamp}
                      </span>
                    </div>

                    <div
                      className={`relative group max-w-[90%] sm:max-w-[88%] p-3 sm:p-3.5 text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? 'bg-[#181818] border-l-2 border-[#e32b3c] text-[#f2efeb]'
                          : 'bg-[#121212] border border-[#222222] text-[#e0deda]'
                      }`}
                    >
                      <div className="whitespace-pre-wrap break-words">{message.content}</div>

                      {/* Copy Message Action Button */}
                      {!isUser && (
                        <button
                          onClick={() => handleCopyMessage(message.id, message.content)}
                          className="absolute bottom-2 right-2 p-1 text-[#666666] hover:text-[#f2efeb] opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer bg-[#181818]"
                          title="Copy message"
                          aria-label="Copy message text"
                        >
                          {copiedId === message.id ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 p-2.5 sm:p-3 bg-[#121212] border border-[#222222] max-w-[200px]">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#888888] tracking-widest uppercase animate-pulse">
                    SYNTHESIZING...
                  </span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-none bg-[#e32b3c] animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 rounded-none bg-[#e32b3c] animate-bounce"
                      style={{ animationDelay: '0.15s' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-none bg-[#e32b3c] animate-bounce"
                      style={{ animationDelay: '0.3s' }}
                    />
                  </div>
                </div>
              )}

              {/* API Error Notification */}
              {apiError && (
                <div className="p-3 bg-[#1f1214] border border-[#e32b3c]/50 text-xs text-[#f2a2a8] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-[#e32b3c] shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold">{apiError}</p>
                    <button
                      onClick={() => handleSendMessage()}
                      className="mt-1 text-[11px] underline text-[#f2efeb] hover:text-[#e32b3c] cursor-pointer"
                    >
                      Retry last message
                    </button>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Quick Starters */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-3.5 sm:px-4 py-2 bg-[#0e0e0e] border-t border-[#1a1a1a] shrink-0">
                <div className="text-[9px] sm:text-[10px] font-mono text-[#666666] tracking-widest uppercase mb-1.5">
                  SUGGESTED INQUIRIES
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_PROMPTS.map((sp) => (
                    <button
                      key={sp.id}
                      onClick={() => handleSendMessage(sp.prompt)}
                      className="text-[10px] sm:text-[11px] px-2 py-1 bg-[#141414] hover:bg-[#1c1c1c] border border-[#262626] hover:border-[#e32b3c]/60 text-[#a8a5a0] hover:text-[#f2efeb] transition-colors cursor-pointer text-left"
                    >
                      {sp.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Composer (Mobile Touch Optimized) */}
            <div className="p-2.5 sm:p-3 border-t border-[#222222] bg-[#121212]/98 shrink-0 pb-safe">
              <div className="relative flex items-center bg-[#090909] border border-[#262626] focus-within:border-[#e32b3c] transition-colors">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about design tokens, prototypes, pricing ($1,850)..."
                  rows={1}
                  disabled={isLoading}
                  className="w-full bg-transparent px-3 py-2.5 text-base sm:text-xs text-[#f2efeb] placeholder-[#555555] resize-none focus:outline-none disabled:opacity-50"
                  aria-label="Message prompt for Saiful's AI copilot"
                />

                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2.5 text-[#888888] hover:text-[#e32b3c] disabled:opacity-30 disabled:hover:text-[#888888] transition-colors cursor-pointer shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Sub-bar disclaimer */}
              <div className="flex items-center justify-between mt-2 px-1 text-[9px] sm:text-[10px] font-mono text-[#555555]">
                <span>PRESS [ENTER] TO DISPATCH</span>
                <span className="flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-[#e32b3c]" />
                  SAIFUL'S AI COPILOT
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
