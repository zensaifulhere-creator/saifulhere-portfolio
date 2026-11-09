/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Vercel Serverless Function Handler for /api/chat
 */

import { executeChatQuery } from '../src/server/chatService';

export default async function handler(req: any, res: any) {
  // Set CORS headers for seamless deployment
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { messages, model } = body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    const result = await executeChatQuery({ messages, model });
    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Error in Vercel /api/chat:', error);
    return res.status(500).json({ error: error?.message || 'Chat service error' });
  }
}
