/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from '@google/genai';
import { SYSTEM_INSTRUCTION, generateStudioFallback } from '../utils/knowledgeBase';

export { SYSTEM_INSTRUCTION, generateStudioFallback };

export interface ChatRequestPayload {
  messages: Array<{ role: string; content: string }>;
  model?: string;
}

export interface ChatResponsePayload {
  text: string;
  modelUsed: string;
}

/**
 * Shared executor for chat queries across server.ts and Vercel serverless functions.
 */
export async function executeChatQuery(
  payload: ChatRequestPayload,
  apiKeyEnv?: string
): Promise<ChatResponsePayload> {
  const { messages, model = 'gemini-3.8-flash' } = payload;
  const latestUserMsg = [...messages].reverse().find((m) => m.role === 'user')?.content || '';

  const rawKey = apiKeyEnv || process.env.GEMINI_API_KEY || '';
  const cleanApiKey = rawKey.trim() !== '' && !rawKey.includes('MY_GEMINI_API_KEY') ? rawKey : '';

  if (cleanApiKey) {
    try {
      const ai = new GoogleGenAI({
        apiKey: cleanApiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'saifulhere-portfolio',
          },
        },
      });

      const validModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-4-argon'];
      const selectedModel = validModels.includes(model) ? model : 'gemini-3.8-flash';

      const contents = messages.map((m) => ({
        role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

      const apiPromise = ai.models.generateContent({
        model: selectedModel,
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Gemini API request timed out')), 3500)
      );

      const response: any = await Promise.race([apiPromise, timeoutPromise]);
      const replyText = response.text || generateStudioFallback(latestUserMsg);

      return {
        text: replyText,
        modelUsed: selectedModel,
      };
    } catch (err: any) {
      console.warn('Gemini API call returned fallback:', err?.message || err);
      return {
        text: generateStudioFallback(latestUserMsg),
        modelUsed: 'studio-concierge-fallback',
      };
    }
  }

  return {
    text: generateStudioFallback(latestUserMsg),
    modelUsed: 'studio-concierge',
  };
}
