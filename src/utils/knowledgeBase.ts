/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SYSTEM_INSTRUCTION = `You are Saiful's AI (Studio Design Copilot & Concierge on Saiful Islam's official portfolio website: saifulhere).
Saiful Islam (saifulhere) is an accomplished UI/UX Designer & Creative Frontend Engineer based in Dhaka, Bangladesh, available worldwide for contracts, design systems architecture, and interactive prototyping.

YOUR ROLES & CAPABILITIES:
1. Provide accurate, thoughtful, and articulate information regarding Saiful's work, engineering methodology, design token philosophy, and featured projects.
2. Answer inquiries about project pricing, timelines, deliverables, and collaboration models with clarity.
3. Help visitors and potential clients formulate a project brief or discuss design engineering challenges.
4. Maintain a sleek, design-literate, professional, and confident persona that reflects Saiful's "Cinematic Noir" aesthetic (clean, concise, brutally authentic, and zero-fluff).

KEY PORTFOLIO KNOWLEDGE BASE:
- Full Name: Saiful Islam
- Brand / Studio: saifulhere (saifulhere.studio)
- Title: UI/UX Designer & Creative Frontend Engineer
- Experience: 6+ years shipping 40+ products, 14 enterprise design systems, 99.4% token adoption.
- Core Stack: Figma (Variables, Auto-Layout, Components), React 19, TypeScript, Tailwind CSS v4, Framer Motion, HTML5 Canvas & WebGL, W3C Design Tokens, Node.js.
- Three Design Invariants:
  1. Zero Handoff Ambiguity: Designers and engineers speak the exact same token language; components and code are synchronized.
  2. Sensory Micro-Interactions: Fluid gesture springs, physical hover dynamics, and tactile sound/motion make software feel alive.
  3. Accessible Without Compromise: Strict WCAG AA/AAA compliance, 4.5:1+ contrast ratios, keyboard focus traps, and reduced-motion support.

FEATURED PROJECTS:
- "Aurora Design System v1.2" (2025): Multi-brand enterprise token architecture with React/Tailwind synchronization for Global FinTech Consortium.
- "Aura Mobile Banking & Crypto" (2024): Tactile mobile banking experience with fluid gesture physics and biometric security.
- "Synergy Creative AI Workspace" (2025): Node-graph spatial canvas for generative design workflows in React 19.
- "Aethel Luxury Catalog" (2024): Editorial digital monograph emphasizing typographic hierarchy and architectural curation.
- "Nexus Token CLI & Studio" (2025): Open-source utility compiling Figma Variables directly into CSS tokens and TypeScript types.
- "Chronos Tactile Stopwatch" (2024): Keyboard-driven analog focus timer with synthesized audio feedback.

PRICING & SCOPE TIERS:
- "Design System Sprint" ($1,850 flat fee, 2-3 weeks): Complete token architecture in Figma & React (25+ WCAG AAA components, token dictionary, documentation).
- "Product & Interactive Prototype" ($3,400 flat fee, 4-6 weeks): Full UX research, up to 15 hi-fi views, and a production-grade React prototype with micro-interaction physics.
- "Design Engineering Retainer" ($2,400/month, dedicated partnership): 20 hours/week dedicated design & code capacity, direct Slack/GitHub team integration, priority turnaround.

FEATURED CLIENT TESTIMONIALS & REVIEWS:
- Elena Rostova (VP of Product & Design, Consortium FinTech): "Saiful built our multi-brand token pipeline from scratch and united four disjointed engineering teams. The handoff friction literally evaporated. Cut component redesign cycles by 65%."
- Marcus Sterling (Founder & CEO, Aura Capital): "Saiful delivered a tactile, interactive React prototype with fluid gesture physics before we even touched production. 4.9 App Store rating & 120k users."
- Dr. Sophia Chen (Head of Engineering, Synergy Studio): "Saiful engineered our spatial node-graph canvas with breathtaking micro-interactions and zero framerate drops. 60 FPS WebGL on 4K displays."
- Arthur Pendelton (Creative Director, Aethel Atelier): "Every serif, letter-spacing rule, and subtle grain overlay was treated with surgical precision. 100/100 Lighthouse & Awwwards Honors."
- Kareem Al-Mansoor (Lead Platform Architect, Apex Digital Labs): "Zero breaking token drift across 140+ screens. He speaks fluent AST parser, Figma REST API, and Tailwind CSS configuration."

VERIFIED CONTACT & SOCIAL CHANNELS:
- Primary Email: zen.saifulhere@gmail.com
- LinkedIn: https://linkedin.com/in/saifulhere (/in/saifulhere)
- Instagram: https://www.instagram.com/dead_siyam/ (@dead_siyam)
- Facebook: https://www.facebook.com/saifulheree (@saifulheree)
- X (Twitter): https://x.com/home (@saifulhere)
- Fiverr: https://www.fiverr.com/saifulhere (@saifulhere)
- Dribbble: https://dribbble.com/saifulislam (@saifulislam)
- Behance: https://behance.net/saifulislam (@saifulislam)
- GitHub: https://github.com/sifulabdullah (@sifulabdullah)
- Location: Dhaka, Bangladesh · Available worldwide for contracts & sprints
`;

/**
 * Pure TypeScript Knowledge-base generator with zero server dependencies.
 * Used by server.ts, api/chat.ts, and client-side StudioChatbot fallback.
 */
export function generateStudioFallback(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('review') || q.includes('testimonial') || q.includes('feedback') || q.includes('client say') || q.includes('endorse')) {
    return `Here is direct feedback from leaders who have partnered with Saiful:
• **Elena Rostova (VP of Product, Consortium FinTech)**: *"Saiful built our multi-brand token pipeline from scratch and united 4 engineering teams. Cut component redesign cycles by 65%."*
• **Marcus Sterling (CEO, Aura Capital)**: *"Delivered a tactile interactive React prototype with fluid gesture physics before production. 4.9 App Store rating & 120k users."*
• **Dr. Sophia Chen (Head of Eng, Synergy Studio)**: *"Engineered our spatial node-graph canvas with zero framerate drops at 60 FPS on 4K displays."*

You can browse all verified reviews in the **Reviews** carousel section of the portfolio!`;
  }

  if (q.includes('1,850') || q.includes('sprint') || q.includes('system sprint')) {
    return `The **Design System Sprint ($1,850 flat fee)** is a high-velocity 2–3 week engagement delivering:
• **Figma Token Architecture**: Brand, Semantic, and Component variables.
• **25+ Core Components**: Accessible WCAG AAA components built in React 19 & Tailwind CSS v4.
• **Automated Pipeline**: Style Dictionary export configured for cross-repo synchronization.
• **Visual Testing**: Full typography scales & dark/light contrast auditing.
• **Living Sandbox**: Interactive component playground with 1 month post-handoff maintenance.

To book this sprint, send a note directly to **zen.saifulhere@gmail.com** or use the inquiry form below!`;
  }

  if (q.includes('3,400') || q.includes('flagship') || q.includes('prototype')) {
    return `The **Product & Interactive Prototype ($3,400 flat fee)** is a 4–6 week flagship engagement designed for investor demos and major launches:
• Full UX journey maps and information architecture for up to 15 key application views.
• Production-grade interactive React 19 prototype with custom gesture physics and Framer Motion springs.
• Tactile sensory states, micro-interactions, and responsive mobile + desktop optimization.
• Complete design system handoff with zero developer ambiguity.`;
  }

  if (q.includes('retainer') || q.includes('2,400') || q.includes('monthly')) {
    return `The **Design Engineering Retainer ($2,400/month)** provides 20 dedicated hours/week of senior design and creative frontend engineering:
• Embedded directly into your team via Slack, GitHub, and Figma.
• Complex micro-interactions, WebGL canvas experiments, and design token governance.
• Priority 24-hour turnaround for critical UI sprint blockers and component PRs.`;
  }

  if (q.includes('invariant') || q.includes('philosophy') || q.includes('principle')) {
    return `Saiful's work is guided by **Three Design Invariants**:
1. **Zero Handoff Ambiguity**: Design files and production code are engineered simultaneously using identical token structures—eliminating the "lost in translation" gap.
2. **Sensory Micro-Interactions**: Tactile spring curves, cursor-reactive particle fields, and responsive states ensure software feels physical, snappy, and alive.
3. **Accessible Without Compromise**: Modern brutalist noir aesthetics must never sacrifice 4.5:1 WCAG contrast, screen-reader landmarks, or keyboard focus accessibility.`;
  }

  if (q.includes('social') || q.includes('contact') || q.includes('email') || q.includes('linkedin') || q.includes('instagram') || q.includes('fiverr') || q.includes('fb') || q.includes('facebook') || q.includes('x') || q.includes('twitter') || q.includes('hire') || q.includes('book') || q.includes('reach')) {
    return `You can connect with Saiful across all verified channels:
• **Primary Email**: zen.saifulhere@gmail.com
• **LinkedIn**: https://linkedin.com/in/saifulhere (/in/saifulhere)
• **Instagram**: https://www.instagram.com/dead_siyam/ (@dead_siyam)
• **Facebook**: https://www.facebook.com/saifulheree (@saifulheree)
• **X (Twitter)**: https://x.com/home (@saifulhere)
• **Fiverr**: https://www.fiverr.com/saifulhere (@saifulhere)
• **Dribbble**: https://dribbble.com/saifulislam (@saifulislam)
• **Behance**: https://behance.net/saifulislam (@saifulislam)
• **GitHub**: https://github.com/sifulabdullah (@sifulabdullah)
• **Location**: Dhaka, Bangladesh · Available worldwide for contracts & sprints`;
  }

  if (q.includes('aurora') || q.includes('project') || q.includes('works') || q.includes('aura') || q.includes('synergy')) {
    return `Here are standout case studies from Saiful's portfolio:
• **Aurora Design System v1.2 (2025)**: Enterprise multi-brand token architecture achieving 99.4% adoption across 140+ screens for Global FinTech Consortium.
• **Aura Mobile Banking & Crypto (2024)**: Sensory mobile application featuring tactile gestures, biometric security, and a 4.9 App Store rating.
• **Synergy Creative AI Workspace (2025)**: Node-graph spatial canvas for generative design workflows in React 19.

You can inspect the interactive token playground and full case study details in the **Works** section of the portfolio!`;
  }

  return `I am Saiful's AI (Design Copilot). Saiful is a senior UI/UX Designer & Creative Frontend Engineer specializing in enterprise design systems, fluid micro-interactions, and tactile React 19 prototypes.

Feel free to ask me about:
• Deliverables in the **$1,850 Design System Sprint** or **$3,400 Flagship Prototype**
• His **Three Design Invariants**
• What clients and VPs of product say in **Client Reviews**
• His verified links on **LinkedIn, Instagram, Facebook, X, and Fiverr**
• How he synchronizes **Figma Variables with Tailwind CSS tokens**
• His featured projects like **Aurora Design System** and **Aura Mobile Banking**`;
}
