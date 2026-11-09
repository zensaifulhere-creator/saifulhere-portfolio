/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { executeChatQuery } from './src/server/chatService';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Port configuration: AI Studio apps bind to 3000.
// When process.env.PORT is 8080 (Cloud Run container port used by nginx), bind to 3000 instead.
const portArgIndex = process.argv.indexOf('--port');
const portFromArg =
  portArgIndex !== -1 && process.argv[portArgIndex + 1]
    ? parseInt(process.argv[portArgIndex + 1], 10)
    : null;
const port = portFromArg || (process.env.PORT && process.env.PORT !== '8080' ? parseInt(process.env.PORT, 10) : 3000);

app.use(express.json());

// POST /api/chat - Multi-turn conversational endpoint (shared with Vercel serverless handler)
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, model = 'gemini-3.8-flash' } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    const result = await executeChatQuery({ messages, model });
    return res.json(result);
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    return res.status(500).json({ error: error?.message || 'Chat service error' });
  }
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Portfolio server with Gemini AI copilot running on http://localhost:${port}`);
  });
}

startServer();
