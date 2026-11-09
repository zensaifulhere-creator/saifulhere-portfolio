/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowDown, Mail, Check } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const { identity, metrics } = siteConfig;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(identity.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="top" className="relative pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid: Left = Typographic Content, Right = Authentic Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Content (col-span-7) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Availability Line */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#a09c9a]">
              <span className="w-2 h-2 rounded-none bg-[#e32b3c] animate-pulse" aria-hidden="true" />
              <span>{identity.availability}</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-white/50">{identity.location}</span>
            </div>

            {/* Oversized Anton Display Headline - Updated to Saiful Islam */}
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs text-[#e32b3c] font-bold tracking-widest lowercase">
                  saifulhere<span className="text-white/40">.studio</span>
                </span>
                <span className="text-white/20">·</span>
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest">
                  Principal Portfolio
                </span>
              </div>
              <h1 className="font-display text-4xl xs:text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.92] break-words">
                SAIFUL ISLAM
              </h1>
              <p className="mt-2 text-lg sm:text-2xl font-light tracking-wide text-[#e32b3c] font-sans">
                {identity.profession}
              </p>
            </div>

            {/* Handwritten Caveat Accent Annotation */}
            <div className="flex items-center gap-2 text-base sm:text-xl font-script text-white/70">
              <span className="text-[#e32b3c]">✦</span>
              <span>"Turning Figma architectures into pixel-perfect, tactile reality."</span>
            </div>

            {/* Intro Lead Paragraph */}
            <p className="text-sm sm:text-lg text-[#a09c9a] leading-relaxed max-w-2xl font-sans">
              {identity.intro}
            </p>

            {/* CTA Actions */}
            <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-mono font-bold tracking-widest uppercase bg-[#e32b3c] text-white hover:bg-[#c92030] border border-[#ff4d5e]/30 shadow-[0_0_15px_rgba(227,43,60,0.35)] transition-all active:scale-95 text-center"
              >
                <span>Explore Selected Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 text-xs font-mono tracking-wider uppercase border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:border-white/30 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-[#e32b3c]" />}
                <span className="truncate max-w-[220px] sm:max-w-none">{copied ? 'Email Copied!' : identity.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Portrait Framing (col-span-5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[300px] sm:max-w-sm md:max-w-md aspect-[4/5] p-1 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl group">
              <div className="relative w-full h-full overflow-hidden bg-[#121214]">
                {/* User's authenticated portrait image */}
                <img
                  src={identity.portrait}
                  alt="Portrait photograph of Saiful Islam in a suit and tie"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Ambient vignette and subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-60" />

                {/* Overlaid architectural meta tag */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 bg-[#090909]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                      {identity.fullName} (@saifulhere)
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#a09c9a]">
                      Creative Frontend & Design Systems
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-none bg-[#e32b3c]" title="Verified Profile" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Proof Metrics Strip Below Hero Split */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl sm:text-5xl text-white tracking-tight tabular-nums">
                  {metric.value}
                </span>
                <span className="text-[#e32b3c] font-display text-xl sm:text-2xl">·</span>
              </div>
              <h3 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white font-medium">
                {metric.label}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#a09c9a] font-sans">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
