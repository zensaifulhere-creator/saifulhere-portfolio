/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProjectItem, TestimonialItem } from '../utils/portfolio';

export interface VerifiedSocialChannel {
  id: string;
  platform: string;
  username: string;
  url: string;
  brandColor: string;
  badge: string;
  description: string;
  iconType: 'linkedin' | 'instagram' | 'facebook' | 'x' | 'fiverr' | 'dribbble' | 'behance' | 'github';
}

export interface SiteConfig {
  identity: {
    fullName: string;
    displayName: string;
    profession: string;
    roleLine2: string;
    location: string;
    availability: string;
    headline: string;
    intro: string;
    aboutParagraphs: string[];
    portrait: string;
    email: string;
    resumeUrl: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    x: string;
    fiverr: string;
    dribbble: string;
    behance: string;
  };
  verifiedSocials: VerifiedSocialChannel[];
  metrics: Array<{
    value: string;
    label: string;
    detail: string;
  }>;
  processSteps: Array<{
    number: string;
    title: string;
    description: string;
    deliverables: string[];
  }>;
  skillsHierarchy: Array<{
    category: string;
    skills: string[];
  }>;
  tools: Array<{
    name: string;
    role: string;
  }>;
  experience: Array<{
    period: string;
    role: string;
    company: string;
    description: string;
    highlights: string[];
  }>;
  pricingTiers: Array<{
    id: string;
    title: string;
    price: string;
    localPrice: string;
    billingType: 'project' | 'monthly';
    period: string;
    description: string;
    targetFor: string;
    deliverables: string[];
    featured?: boolean;
    ctaLabel: string;
    serviceName: string;
    budgetValue: string;
  }>;
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
}

export const siteConfig: SiteConfig = {
  identity: {
    fullName: 'Saiful Islam',
    displayName: 'SAIFULHERE',
    profession: 'UI/UX Designer & Creative Frontend Engineer',
    roleLine2: 'Designing Scalable Design Systems & Engineering High-Fidelity Prototypes',
    location: 'Dhaka, Bangladesh · Available Worldwide',
    availability: 'Available for new projects & contracts',
    headline: 'BRIDGING INTENTIONAL DESIGN WITH PRODUCTION CODE',
    intro:
      'I craft enterprise design systems, fluid micro-interactions, and high-fidelity interactive prototypes. Balancing brutalist typographic grit with pixel-perfect frontend engineering.',
    aboutParagraphs: [
      'With over 6 years of experience working at the intersection of product design and frontend engineering, I specialize in eliminating the gap between what designers imagine in Figma and what engineers ship in production.',
      'My approach is grounded in design token discipline, accessible WCAG standards, and sensory micro-interactions. Whether architecting a 60-component multi-brand system or crafting an experimental WebGL canvas, every interaction is engineered for speed, clarity, and tactile delight.',
    ],
    portrait: '/assets/aistudio/image_7a10922a.png',
    email: 'zen.saifulhere@gmail.com',
    resumeUrl: '#contact',
  },
  socialLinks: {
    github: 'https://github.com/sifulabdullah',
    linkedin: 'https://linkedin.com/in/saifulhere',
    instagram: 'https://www.instagram.com/dead_siyam/',
    facebook: 'https://www.facebook.com/saifulheree',
    x: 'https://x.com/home',
    fiverr: 'https://www.fiverr.com/saifulhere',
    dribbble: 'https://dribbble.com/saifulislam',
    behance: 'https://behance.net/saifulislam',
  },
  verifiedSocials: [
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      username: '/in/saifulhere',
      url: 'https://linkedin.com/in/saifulhere',
      brandColor: '#0a66c2',
      badge: 'Verified Pro',
      description: 'Design systems architecture & enterprise frontend engineering leadership',
      iconType: 'linkedin',
    },
    {
      id: 'instagram',
      platform: 'Instagram',
      username: '@dead_siyam',
      url: 'https://www.instagram.com/dead_siyam/',
      brandColor: '#e1306c',
      badge: 'Active Studio',
      description: 'Visual explorations, interaction studies & behind-the-scenes craft',
      iconType: 'instagram',
    },
    {
      id: 'facebook',
      platform: 'Facebook',
      username: '@saifulheree',
      url: 'https://www.facebook.com/saifulheree',
      brandColor: '#1877f2',
      badge: 'Official Profile',
      description: 'Direct messenger channel & community interaction updates',
      iconType: 'facebook',
    },
    {
      id: 'x',
      platform: 'X (Twitter)',
      username: '@saifulhere',
      url: 'https://x.com/home',
      brandColor: '#ffffff',
      badge: 'Design Thoughts',
      description: 'Micro-interactions, W3C token updates & frontend dev observations',
      iconType: 'x',
    },
    {
      id: 'fiverr',
      platform: 'Fiverr',
      username: '@saifulhere',
      url: 'https://www.fiverr.com/saifulhere',
      brandColor: '#1dbf73',
      badge: 'Top Rated Seller',
      description: 'High-impact UI/UX sprint deliveries, design system audits & orders',
      iconType: 'fiverr',
    },
    {
      id: 'dribbble',
      platform: 'Dribbble',
      username: '@saifulislam',
      url: 'https://dribbble.com/saifulislam',
      brandColor: '#ea4c89',
      badge: 'Pro Showcase',
      description: 'High-res component states, mobile flows & interactive shot previews',
      iconType: 'dribbble',
    },
    {
      id: 'behance',
      platform: 'Behance',
      username: '@saifulislam',
      url: 'https://behance.net/saifulislam',
      brandColor: '#0057ff',
      badge: 'Curated Cases',
      description: 'In-depth visual case studies, typography rhythm & design systems',
      iconType: 'behance',
    },
    {
      id: 'github',
      platform: 'GitHub',
      username: '@sifulabdullah',
      url: 'https://github.com/sifulabdullah',
      brandColor: '#f2efeb',
      badge: 'Open Source',
      description: 'Figma token CLI engines, React 19 sandboxes & accessible primitives',
      iconType: 'github',
    },
  ],
  metrics: [
    {
      value: '6+',
      label: 'Years Crafting',
      detail: 'UI/UX design & creative engineering',
    },
    {
      value: '40+',
      label: 'Shipped Products',
      detail: 'Enterprise SaaS, mobile & web apps',
    },
    {
      value: '99.4%',
      label: 'Token Adoption',
      detail: 'Across cross-functional dev teams',
    },
    {
      value: '14',
      label: 'Design Systems',
      detail: 'Tokens, component specs & governance',
    },
  ],
  processSteps: [
    {
      number: '01',
      title: 'Strategic Discovery & UX Mapping',
      description:
        'Auditing product friction, identifying mental models, and interviewing stakeholders to define concrete UX success metrics.',
      deliverables: ['User journey maps', 'Problem statements', 'Interaction benchmarks'],
    },
    {
      number: '02',
      title: 'Information Architecture & Wireframes',
      description:
        'Structuring layouts with low-fidelity blueprints to test spatial hierarchy, scan paths, and cognitive load before visual styling.',
      deliverables: ['Clickable wireframes', 'Information hierarchy', 'Navigation flows'],
    },
    {
      number: '03',
      title: 'Design Tokens & Multi-Theme Systems',
      description:
        'Authoring mathematical color scales, fluid typographic ladders, and semantic elevation tokens synchronizable across Figma and code.',
      deliverables: ['Figma variables library', 'W3C token exports', 'Accessibility matrix'],
    },
    {
      number: '04',
      title: 'Creative Code & Functional Prototyping',
      description:
        'Building high-fidelity interactive sandboxes using React, Tailwind CSS, and Framer Motion to validate gesture physics and tactile feedback.',
      deliverables: ['Live React prototypes', 'Storybook components', 'Micro-interaction physics'],
    },
    {
      number: '05',
      title: 'Edge-Case Polish & Sensory Tuning',
      description:
        'Stress-testing dark mode contrast, zero-latency states, keyboard focus traps, screen reader landmarks, and fluid responsive reflow.',
      deliverables: ['WCAG AA compliance audit', 'Reduced-motion fallbacks', 'Touch target optimization'],
    },
    {
      number: '06',
      title: 'Production Ship & Engineering Handoff',
      description:
        'Packaging production-ready code repositories with semantic documentation, zero dead clicks, and seamless developer onboarding.',
      deliverables: ['Clean Git repositories', 'Figma spec inspections', 'Component documentation'],
    },
  ],
  skillsHierarchy: [
    {
      category: 'UI/UX & Product Design',
      skills: [
        'Design Systems Architecture',
        'Figma Variables & Components',
        'High-Fidelity Wireframing',
        'Information Architecture',
        'WCAG AA/AAA Accessibility',
        'User Journey Mapping',
      ],
    },
    {
      category: 'Creative Frontend Engineering',
      skills: [
        'React 19 & Next.js',
        'TypeScript Architecture',
        'Tailwind CSS v4',
        'Framer Motion & Micro-Interactions',
        'HTML5 Canvas & Particle Swarms',
        'Responsive Fluid Layouts',
      ],
    },
    {
      category: 'Prototyping & Sensory UX',
      skills: [
        'Interactive Code Sandboxes',
        'Haptic & Sound-Assisted UI',
        'Design Token Pipelines',
        'Keyboard Navigation & Focus Traps',
        'Gesture Physics & Springs',
        'State Machine Modeling',
      ],
    },
    {
      category: 'UX Research & Product Strategy',
      skills: [
        'UX Audits & Usability Reviews',
        'User Flows & Information Architecture',
        'Journey Mapping & Competitive Reviews',
        'MVP Scope & Product Roadmaps',
        'Accessibility Reviews',
        'Stakeholder Workshops',
      ],
    },
  ],
  tools: [
    { name: 'Figma', role: 'Design Systems & Variables' },
    { name: 'React 19', role: 'Component Architecture' },
    { name: 'TypeScript', role: 'Type-Safe Logic & Interfaces' },
    { name: 'Tailwind CSS v4', role: 'Design Tokens & Utility Layouts' },
    { name: 'Next.js', role: 'Full-Stack Web Architecture' },
    { name: 'Framer Motion', role: 'Gesture Physics & Springs' },
    { name: 'Framer', role: 'Interactive Visual Prototyping' },
    { name: 'WebGL & Three.js', role: 'Spatial 3D & Shaders' },
    { name: 'HTML5 Canvas API', role: 'Generative Particle Engines' },
    { name: 'Style Dictionary', role: 'W3C Token Compilation' },
    { name: 'Storybook', role: 'Component Isolation & Testing' },
    { name: 'VS Code', role: 'Daily Engineering Environment' },
    { name: 'Git & GitHub', role: 'Version Control & CI/CD' },
    { name: 'Node.js & Express', role: 'Server API Middleware' },
    { name: 'Postman', role: 'API Contract Testing' },
    { name: 'Docker', role: 'Containerized Deployment' },
  ],
  experience: [
    {
      period: '2023 — Present',
      role: 'Lead Design Systems Engineer',
      company: 'Apex Product Studio',
      description:
        'Directing the core design token infrastructure and reusable component libraries powering 6 enterprise SaaS products across web and mobile.',
      highlights: [
        'Unified 4 separate design silos into a single W3C token repository with automated CI exports.',
        'Mentored 18 designers and frontend engineers in design token governance and accessible React practices.',
        'Achieved 99.4% design token adoption across 140+ active screens.',
      ],
    },
    {
      period: '2021 — 2023',
      role: 'Senior UI/UX & Interactive Prototype Designer',
      company: 'Vanguard Digital Lab',
      description:
        'Spearheaded creative prototyping and micro-interaction design for high-growth fintech, crypto, and commerce clients.',
      highlights: [
        'Designed and prototyped the Aura Mobile Banking application, earning 4.9 App Store rating.',
        'Created interactive React sandboxes that reduced user testing cycle time from 3 weeks to 4 days.',
        'Wrote custom spring-physics interaction libraries using Framer Motion and WebGL.',
      ],
    },
    {
      period: '2019 — 2021',
      role: 'UI/UX Designer & Creative Frontend Developer',
      company: 'Omnia Creative Agency',
      description:
        'Collaborated directly with founders and artistic directors to deliver award-winning brand websites, digital editorial platforms, and design systems.',
      highlights: [
        'Delivered 22 client web applications with 100/100 Lighthouse performance scores.',
        'Co-created editorial layouts recognized on Awwwards and CSS Design Awards.',
      ],
    },
  ],
  pricingTiers: [
    {
      id: 'ux-audit-roadmap',
      title: 'UX Audit & Roadmap',
      price: '$350',
      localPrice: '৳45,000',
      billingType: 'project',
      period: '1 Week Delivery',
      description: 'A focused review of your product flows, interface, and accessibility with a clear plan for what to improve next.',
      targetFor: 'Ideal for teams that need expert direction before investing in a redesign or new feature.',
      deliverables: [
        'Review of up to 10 key screens or flows',
        'Usability and accessibility findings',
        'Prioritized issue list with severity levels',
        'Annotated screenshots and recommendations',
        '45-minute walkthrough with your team',
      ],
      featured: false,
      ctaLabel: 'Book a UX Audit',
      serviceName: 'Design Audit & Consulting',
      budgetValue: '$300–$400 / ৳40,000–৳50,000',
    },
    {
      id: 'landing-page-sprint',
      title: 'Landing Page Sprint',
      price: '$500',
      localPrice: '৳60,000',
      billingType: 'project',
      period: '1 — 2 Weeks Delivery',
      description: 'A conversion-focused landing page designed for desktop and mobile, with a clickable prototype and developer-ready handoff.',
      targetFor: 'Ideal for a startup launch, a new product, or a focused campaign page.',
      deliverables: [
        'Page structure and content hierarchy',
        'High-fidelity desktop and mobile design',
        'Clickable Figma prototype',
        'Reusable design tokens and components',
        'Two focused revision rounds',
      ],
      featured: false,
      ctaLabel: 'Start a Landing Page',
      serviceName: 'UI/UX & Product Design',
      budgetValue: '$450–$600 / ৳55,000–৳75,000',
    },
    {
      id: 'design-system-sprint',
      title: 'Design System Sprint',
      price: '$525',
      localPrice: '৳65,000',
      billingType: 'project',
      period: '2 — 3 Weeks Delivery',
      description: 'Establish unified design tokens, accessible color scales, and a 25+ core component library in Figma & React.',
      targetFor: 'Ideal for early-stage teams & products looking to eliminate UI debt and scale consistently.',
      deliverables: [
        'Figma token architecture (Brand, Semantic, Component)',
        '25+ WCAG AAA React & Tailwind CSS components',
        'Automated Style Dictionary token export pipeline',
        'Typography scales & dark/light contrast auditing',
        'Living component playground & documentation',
        '1 month post-handoff token maintenance & QA',
      ],
      featured: false,
      ctaLabel: 'Book System Sprint',
      serviceName: 'Design Systems Architecture',
      budgetValue: '$500–$650 / ৳60,000–৳80,000',
    },
    {
      id: 'product-prototype-flagship',
      title: 'Product & Interactive Prototype',
      price: '$950',
      localPrice: '৳120,000',
      billingType: 'project',
      period: '4 — 6 Weeks Delivery',
      description: 'Full-cycle product design from user flows to a production-grade, tactile React prototype with custom gesture physics.',
      targetFor: 'Ideal for funded startups launching flagship products, investor demos, or major UX overhauls.',
      deliverables: [
        'Full UX journey maps & information architecture',
        'High-fidelity design for up to 15 key application views',
        'Interactive React 19 / Framer Motion prototype sandbox',
        'Micro-interactions, haptic feedback & sensory states',
        'Responsive mobile (iOS/Android) & desktop optimization',
        'Design system handoff with zero developer ambiguity',
        'Weekly strategy reviews & stakeholder walkthroughs',
      ],
      featured: true,
      ctaLabel: 'Start Flagship Project',
      serviceName: 'Interactive Prototype Development',
      budgetValue: '$900–$1,200 / ৳110,000–৳150,000',
    },
    {
      id: 'design-engineering-retainer',
      title: 'Design Engineering Retainer',
      price: '$650',
      localPrice: '৳80,000',
      billingType: 'monthly',
      period: 'Monthly Dedicated Partnership',
      description: 'Continuous senior design leadership and creative frontend engineering capacity integrated directly into your sprint team.',
      targetFor: 'Ideal for scale-ups needing dedicated design token governance, rapid prototyping, and senior code reviews.',
      deliverables: [
        '20 dedicated hours/week of design & code execution',
        'Direct Slack, GitHub & Figma team integration',
        'Complex micro-interaction & WebGL shader engineering',
        'Priority 24-hour turnaround for token requests & UI fixes',
        'Quarterly design audit & accessibility compliance check',
        'Async loom updates & weekly roadmap prioritization',
      ],
      featured: false,
      ctaLabel: 'Inquire for Retainer',
      serviceName: 'Full-Stack Creative Frontend',
      budgetValue: '$550–$750 / ৳70,000–৳90,000 per month',
    },
  ],
  projects: [
    {
      id: 'aurora-design-system',
      title: 'Aurora Design System v1.2',
      category: 'systems',
      categoryLabel: 'Design System',
      year: '2025',
      summary:
        'Comprehensive multi-brand enterprise design system with token architecture, dark/light contrast auditing, and React/Tailwind synchronization.',
      description:
        'Aurora is an enterprise design system engineered for high-density fintech and analytics platforms. Built with strict token hierarchy (Brand, Semantic, Component), it includes 60+ fully accessible components, automated dark mode optical compensation, and a synchronized Figma variables pipeline that eliminates design debt.',
      role: 'Lead Design Systems Architect',
      client: 'Global FinTech Consortium',
      outcomeMetric: 'Reduced UI regression bugs by 68% and accelerated sprint velocity by 3.2x across 40 engineers.',
      tools: ['Figma', 'React 19', 'Tailwind CSS', 'TypeScript', 'Tokens Studio'],
      coverImage: '/assets/images/design_system_preview_1794041725106.jpg',
      aspectRatio: '16:9',
      featured: true,
      keyHighlights: [
        '60+ WCAG AAA accessible components',
        'Figma Variables synced directly to Tailwind v4 CSS variables',
        'Built-in contrast checker and interactive token playground',
        'Zero-dependency headless primitive foundations',
      ],
      tokens: {
        primaryColor: '#3b82f6',
        radius: '12px',
        fontFamily: 'Inter & JetBrains Mono',
        contrastRatio: '7.8:1 (AAA High Contrast)',
      },
    },
    {
      id: 'aura-mobile-fintech',
      title: 'Aura Mobile Banking & Crypto',
      category: 'mobile',
      categoryLabel: 'Mobile UI/UX',
      year: '2024',
      summary:
        'Sensory mobile banking experience with fluid tactile animations, biometric wallet security, and high-frequency portfolio tracking.',
      description:
        'Aura redefines mobile banking with ambient dark-mode interfaces and tactile gesture physics. Designed for cryptocurrency investors and daily banking users, the app integrates real-time candlestick charts, one-thumb quick transfers, and biometric security confirmations with sensory visual feedback.',
      role: 'Principal UI/UX Product Designer',
      client: 'Aura Capital',
      outcomeMetric: '+42% 30-day user retention and a 4.9 App Store rating across 12,000+ reviews.',
      tools: ['Framer', 'Figma', 'SwiftUI', 'Micro-Interactions', 'Motion'],
      coverImage: '/assets/images/fintech_app_preview_1794041724777.jpg',
      aspectRatio: '4:3',
      featured: true,
      keyHighlights: [
        'Glanceable card metrics engineered for high-frequency traders',
        'Custom interactive gesture physics and haptic curves',
        'Seamless fiat-to-crypto checkout flow completed in 3 taps',
        'Biometric authentication with ambient neon confirmation ring',
      ],
      tokens: {
        primaryColor: '#10b981',
        radius: '24px (Tactile Rounded)',
        fontFamily: 'Plus Jakarta Sans',
        contrastRatio: '9.2:1 (Extreme Contrast)',
      },
    },
    {
      id: 'synergy-ai-canvas',
      title: 'Synergy Creative AI Workspace',
      category: 'prototypes',
      categoryLabel: 'Interactive Prototype',
      year: '2025',
      summary:
        'Spatial node-graph workspace empowering creative teams to chain AI workflows, generate visual ideas, and curate multimodal assets.',
      description:
        'Synergy provides a frictionless infinite canvas where designers and engineers chain multimodal generative models into interconnected visual graphs. Designed with keyboard-first ergonomics, smooth bezier connection lines, and responsive node inspectors.',
      role: 'Creative Frontend & Interaction Designer',
      client: 'Synergy Studio',
      outcomeMetric: 'Adopted by 1,800+ creative directors during private beta, running over 50,000 workflow nodes.',
      tools: ['React 19', 'WebGL', 'TypeScript', 'Tailwind CSS', 'Figma'],
      coverImage: '/assets/images/ai_workspace_preview_1794041725532.jpg',
      aspectRatio: '16:9',
      featured: true,
      keyHighlights: [
        'Infinite 60fps pan-and-zoom canvas with hardware acceleration',
        'Interactive node connection wires with dynamic bezier curves',
        'Contextual command palette (Cmd+K) with instant fuzzy search',
        'Real-time multi-user cursor awareness and state synchronization',
      ],
      tokens: {
        primaryColor: '#6366f1',
        radius: '14px',
        fontFamily: 'Manrope & Space Mono',
        contrastRatio: '6.5:1 (AA Contrast)',
      },
    },
    {
      id: 'aethel-luxury-commerce',
      title: 'Aethel Monograph & Luxury Catalog',
      category: 'web',
      categoryLabel: 'Web Architecture',
      year: '2024',
      summary:
        'High-end editorial digital showroom for an architectural atelier, emphasizing typography rhythm and cinematic image curation.',
      description:
        'Aethel blends the pacing of a coffee table art monograph with high-conversion headless commerce. Built with oversized editorial serif typography, stark monochrome contrast, and subtle cinematic parallax transitions that elevate each garment and sculpture.',
      role: 'Creative Lead & Frontend Developer',
      client: 'Aethel Atelier',
      outcomeMetric: 'Awarded Awwwards Site of the Day and generated a +38% increase in average order value.',
      tools: ['React 19', 'Next.js', 'Tailwind CSS', 'Motion', 'Figma'],
      coverImage: '/assets/images/editorial_commerce_preview_1794041726777.jpg',
      aspectRatio: '4:3',
      featured: true,
      keyHighlights: [
        'Awwwards Site of the Day recognition',
        '100/100 Lighthouse Performance and Best Practices',
        'Editorial monograph grid with fluid clamp() typography scaling',
        'Zero-layout-shift image loader with bespoke placeholder meshes',
      ],
      tokens: {
        primaryColor: '#e32b3c',
        radius: '0px (Architectural Razor)',
        fontFamily: 'Editorial Serif & Manrope',
        contrastRatio: '14.1:1 (Pure Paper Contrast)',
      },
    },
    {
      id: 'nexus-token-engine',
      title: 'Nexus Design Token CLI & Studio',
      category: 'systems',
      categoryLabel: 'Design System Tool',
      year: '2025',
      summary:
        'Developer utility translating Figma Variables into W3C Design Tokens, CSS Custom Properties, and typed TypeScript packages.',
      description:
        'Nexus solves the token translation friction between design and engineering. Built as both a CLI tool and an interactive web previewer, it validates color contrast mathematically and formats tokens into Tailwind, CSS variables, iOS Swift, and Android XML.',
      role: 'Author & Core Developer',
      outcomeMetric: 'Over 2,400 monthly downloads on npm with 40+ active contributors.',
      tools: ['TypeScript', 'Node.js', 'Figma REST API', 'Tailwind CSS'],
      coverImage: '/assets/images/design_system_preview_1794041725106.jpg',
      aspectRatio: '16:9',
      featured: false,
      keyHighlights: [
        'W3C Community Group Design Token spec compliance',
        'Instant AST code generation for React and CSS',
        'Automated WCAG contrast compliance testing during CI build',
      ],
      tokens: {
        primaryColor: '#0ea5e9',
        radius: '8px',
        fontFamily: 'JetBrains Mono',
        contrastRatio: '8.4:1',
      },
    },
    {
      id: 'chronos-tactile-tracker',
      title: 'Chronos Tactile Focus & Stopwatch',
      category: 'prototypes',
      categoryLabel: 'Interactive Prototype',
      year: '2024',
      summary:
        'A keyboard-first time-blocking tool with tactile synthesized clicks and analog stopwatch visual aesthetics.',
      description:
        'Chronos explores skeuomorphic sensory feedback inside a brutalist minimal interface. Users control time blocks entirely via keyboard shortcuts with synthesized audio clicks generated using Web Audio API oscillators.',
      role: 'Creator & Engineer',
      outcomeMetric: 'Featured in Interaction Design Weekly with 15k prototype plays.',
      tools: ['React 19', 'Web Audio API', 'Tailwind CSS', 'Framer Motion'],
      coverImage: '/assets/images/fintech_app_preview_1794041724777.jpg',
      aspectRatio: '4:3',
      featured: false,
      keyHighlights: [
        'Zero-sample procedural Web Audio synthesis for tactile key clicks',
        'Analog mechanical stopwatch dial rendered in SVG',
        'Pure keyboard shortcut navigation with Esc/Space/J/K bindings',
      ],
      tokens: {
        primaryColor: '#f59e0b',
        radius: '6px',
        fontFamily: 'Space Mono',
        contrastRatio: '11.2:1',
      },
    },
  ],
  testimonials: [
    {
      id: 'testimonial-elena',
      author: 'Elena Rostova',
      role: 'VP of Product & Design',
      company: 'Consortium FinTech',
      project: 'Aurora Multi-Brand Design System',
      impact: 'Cut component redesign cycles by 65%',
      quote:
        'Saiful is that rare hybrid: a designer with impeccable taste and an engineer who writes strict, production-grade TypeScript. He built our multi-brand token pipeline from scratch and united four disjointed engineering teams. The handoff friction literally evaporated.',
      avatarInitials: 'ER',
      avatarImage: '/assets/images/client_elena_rostova_1794107707846.jpg',
      verified: false,
      year: '2025',
      rating: 5,
    },
    {
      id: 'testimonial-marcus',
      author: 'Marcus Sterling',
      role: 'Founder & CEO',
      company: 'Aura Capital',
      project: 'Aura Mobile Banking & Crypto',
      impact: '4.9 App Store Rating & 120k Users',
      quote:
        'Most agencies deliver static Figma files that fall apart in code. Saiful delivered a tactile, interactive React prototype with fluid gesture physics before we even touched production. Our investors were blown away, and our engineering team saved months of guesswork.',
      avatarInitials: 'MS',
      avatarImage: '/assets/images/client_marcus_sterling_1794107721263.jpg',
      verified: false,
      year: '2024',
      rating: 5,
    },
    {
      id: 'testimonial-sophia',
      author: 'Dr. Sophia Chen',
      role: 'Head of Engineering',
      company: 'Synergy Studio',
      project: 'Synergy Node-Graph Workspace',
      impact: '60 FPS WebGL Canvas on 4K Displays',
      quote:
        'Saiful engineered our spatial node-graph canvas with breathtaking micro-interactions and zero framerate drops. His discipline with WCAG contrast, keyboard navigation, and custom spring curves sets a new standard for creative frontend software.',
      avatarInitials: 'SC',
      avatarImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      verified: false,
      year: '2025',
      rating: 5,
    },
    {
      id: 'testimonial-arthur',
      author: 'Arthur Pendelton',
      role: 'Creative Director',
      company: 'Aethel Atelier',
      project: 'Aethel Luxury Digital Showroom',
      impact: '100/100 Lighthouse & Awwwards Honors',
      quote:
        'Saiful possesses a brutalist cinematic eye that few engineers can translate into web code. Every serif, letter-spacing rule, and subtle grain overlay was treated with surgical precision. Our digital catalogue became a benchmark in the luxury architectural space.',
      avatarInitials: 'AP',
      avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      verified: false,
      year: '2024',
      rating: 5,
    },
    {
      id: 'testimonial-kareem',
      author: 'Kareem Al-Mansoor',
      role: 'Lead Platform Architect',
      company: 'Apex Digital Labs',
      project: 'Nexus Token CLI & Governance',
      impact: 'Zero breaking token drift across 140+ screens',
      quote:
        'Working with Saiful on our design token architecture was a revelation. He speaks fluent AST parser, Figma REST API, and Tailwind CSS configuration. If you need someone who bridges intentional design and high-scale code, Saiful is the engineer to hire.',
      avatarInitials: 'KA',
      avatarImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      verified: false,
      year: '2025',
      rating: 5,
    },
    {
      id: 'sample-liam-vance',
      author: 'Liam Vance',
      role: 'VP Product',
      company: 'Arc Studio · sample profile',
      project: 'Product design collaboration (sample)',
      impact: 'Sample outcome · replace with a confirmed result',
      quote: 'The design work gave our team a clearer direction and a practical handoff to move the product forward.',
      avatarInitials: 'LV',
      avatarImage: '/assets/images/sample_liam_vance.jpg',
      verified: false,
      year: 'Sample',
      rating: 5,
    },
    {
      id: 'sample-camilla-rossi',
      author: 'Camilla Rossi',
      role: 'Design Director',
      company: 'Hyperion Lab · sample profile',
      project: 'Brand and interface systems (sample)',
      impact: 'Sample outcome · replace with a confirmed result',
      quote: 'The visual system feels cohesive, and the interaction details make the experience easier to understand.',
      avatarInitials: 'CR',
      avatarImage: '/assets/images/sample_camilla_rossi.jpg',
      verified: false,
      year: 'Sample',
      rating: 5,
    },
    {
      id: 'sample-maya-lindqvist',
      author: 'Maya Lindqvist',
      role: 'Principal',
      company: 'Nordic Design Studio · sample profile',
      project: 'Interactive product prototype (sample)',
      impact: 'Sample outcome · replace with a confirmed result',
      quote: 'The prototype helped us discuss the product with a shared picture of the flow, details, and next steps.',
      avatarInitials: 'ML',
      avatarImage: '/assets/images/sample_maya_lindqvist.jpg',
      verified: false,
      year: 'Sample',
      rating: 5,
    },
    {
      id: 'sample-julian-becker',
      author: 'Julian Becker',
      role: 'Product Lead',
      company: 'Becker Ventures · sample profile',
      project: 'SaaS interface design (sample)',
      impact: 'Sample outcome · replace with a confirmed result',
      quote: 'Communication stayed clear through each design decision, and the finished screens felt ready for implementation.',
      avatarInitials: 'JB',
      avatarImage: '/assets/images/sample_julian_becker.jpg',
      verified: false,
      year: 'Sample',
      rating: 5,
    },
    {
      id: 'sample-siddharth-patel',
      author: 'Siddharth Patel',
      role: 'Product Lead',
      company: 'Omniflow · sample profile',
      project: 'Product experience refresh (sample)',
      impact: 'Sample outcome · replace with a confirmed result',
      quote: 'The project made the interface easier to follow and gave our team a useful foundation for the next release.',
      avatarInitials: 'SP',
      avatarImage: '/assets/images/sample_siddharth_patel.jpg',
      verified: false,
      year: 'Sample',
      rating: 5,
    },
  ],
};
