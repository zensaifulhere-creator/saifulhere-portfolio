/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from '@google/genai';
import { SYSTEM_INSTRUCTION, generateStudioFallback } from '../utils/knowledgeBase.ts';

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
          timeout: 7000,
          retryOptions: { attempts: 1 },
          headers: {
            'User-Agent': 'saifulhere-portfolio',
          },
        },
      });

      const validModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-3.7-flash'];
      const selectedModel = validModels.includes(model) ? model : 'gemini-3.8-flash';
      const modelFallback = 'gemini-3.7-flash';

      const contents = messages.map((m) => ({
        role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

      const modelsToTry = selectedModel === modelFallback
        ? [selectedModel]
        : [selectedModel, modelFallback];

      for (const candidateModel of modelsToTry) {
        try {
          const response = await ai.models.generateContent({
            model: candidateModel,
            contents,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
              abortSignal: AbortSignal.timeout(7000),
            },
          });
          const replyText = response.text?.trim();
          if (replyText) return { text: replyText, modelUsed: candidateModel };
        } catch (err: any) {
          console.warn(`Gemini model ${candidateModel} failed:`, err?.message || err);
        }
      }

      return {
        text: generateStudioFallback(latestUserMsg),
        modelUsed: 'studio-concierge-fallback',
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
