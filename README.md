# Saiful Islam — Principal Portfolio (`saifulhere.studio`)

Architectural noir design systems, tactile interactive prototypes, and creative frontend engineering showcase of Saiful Islam.

---

## 🚀 One-Click Vercel Deployment Guide

This project is fully configured for deployment on **[Vercel](https://vercel.com/)** as a high-performance modern static web application paired with a serverless Gemini AI concierge endpoint (`/api/chat`).

### Step 1: Push Code to GitHub / Git Provider
```bash
git init
git add .
git commit -m "feat: verified socials, mobile optimization, and vercel deployment readiness"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Import into Vercel
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." → "Project"**.
2. Select your imported repository.
3. Vercel automatically detects the project settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `vite build` (or `npm run build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install` (or `pnpm install` / `bun install`)

### Step 3: Add Environment Variables (Optional)
In **Project Settings → Environment Variables**, you can add:
| Variable Name | Description | Required? |
| ------------- | ----------- | --------- |
| `GEMINI_API_KEY` | Google Gemini API key for real-time generative copilot responses | Optional (graceful built-in studio concierge fallback is active if omitted) |

### Step 4: Click "Deploy"
Your portfolio will be live worldwide on Vercel's Edge CDN within ~60 seconds!

---

## 🛠 Local Development

**Prerequisites:** Node.js 18+ (or Bun / pnpm)

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Configure environment:**
   Create a `.env` file (see `.env.example`):
   ```env
   PORT=3000
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Production Build & Verification:**
   ```bash
   npm run build
   npm run lint
   ```

---

## 🔗 Verified Socials & Direct Channels

- **Primary Email**: `zen.saifulhere@gmail.com`
- **LinkedIn**: [linkedin.com/in/saifulhere](https://linkedin.com/in/saifulhere)
- **Instagram**: [instagram.com/dead_siyam](https://www.instagram.com/dead_siyam/)
- **Facebook**: [facebook.com/saifulheree](https://www.facebook.com/saifulheree)
- **X (Twitter)**: [x.com/home](https://x.com/home)
- **Fiverr**: [fiverr.com/saifulhere](https://www.fiverr.com/saifulhere)
- **Dribbble**: [dribbble.com/saifulislam](https://dribbble.com/saifulislam)
- **Behance**: [behance.net/saifulislam](https://behance.net/saifulislam)
- **GitHub**: [github.com/sifulabdullah](https://github.com/sifulabdullah)
