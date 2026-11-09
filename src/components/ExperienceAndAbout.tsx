/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const ExperienceAndAbout: React.FC = () => {
  const { identity, experience } = siteConfig;

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SECTION 1: CAREER TIMELINE */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32b3c] mb-2">
                <span>04 / Experience</span>
                <span aria-hidden="true">·</span>
                <span>Career History</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
                PROVEN EXPERIENCE
              </h2>
            </div>

            <p className="text-sm text-[#a09c9a] max-w-md font-sans">
              6+ years leading design systems, crafting interactive prototypes, and driving frontend architecture across global product teams.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-white/[0.08] hover:border-white/20 transition-all space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div>
                    <h3 className="font-display text-2xl text-white tracking-wide">
                      {item.role}
                    </h3>
                    <p className="text-sm text-[#e32b3c] font-sans font-medium mt-0.5">
                      {item.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#a09c9a] whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-[#a09c9a] font-sans leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase text-white/50 block">
                    Key Achievements:
                  </span>
                  <ul className="space-y-2">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#f2efeb]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e32b3c] shrink-0 mt-0.5" />
                        <span className="font-sans leading-normal">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: ABOUT & DESIGN PHILOSOPHY */}
        <div id="about" className="pt-12 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Bio Prose (col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32b3c]">
                <span>05 / Philosophy</span>
                <span aria-hidden="true">·</span>
                <span>About Saiful</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
                BRIDGING DESIGN AESTHETICS & FRONTEND RIGOR
              </h2>

              <div className="space-y-4 text-base text-[#a09c9a] font-sans leading-relaxed">
                {identity.aboutParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#a09c9a]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e32b3c]" />
                  <span>{identity.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#e32b3c]" />
                  <span>{identity.availability}</span>
                </div>
              </div>
            </div>

            {/* Design Principles Box (col-span-5) */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0e0e11] border border-white/10 space-y-6">
              <h3 className="font-display text-2xl text-white tracking-wide">
                MY THREE DESIGN INVARIANTS
              </h3>

              <div className="space-y-5">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                    <span className="text-[#e32b3c]">01.</span>
                    <span>Zero Handoff Ambiguity</span>
                  </h4>
                  <p className="text-xs text-[#a09c9a] font-sans leading-relaxed">
                    Components and tokens are engineered together in parallel, eliminating the classic "lost in translation" gap between design files and web code.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                    <span className="text-[#e32b3c]">02.</span>
                    <span>Sensory Micro-Interactions</span>
                  </h4>
                  <p className="text-xs text-[#a09c9a] font-sans leading-relaxed">
                    Interfaces should feel alive. Tactile hover curves, spring physics, and keyboard responsiveness make software memorable.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                    <span className="text-[#e32b3c]">03.</span>
                    <span>Accessible Without Compromise</span>
                  </h4>
                  <p className="text-xs text-[#a09c9a] font-sans leading-relaxed">
                    Stunning typography and dark-mode elegance must never sacrifice 4.5:1 WCAG contrast, screen-reader semantics, or keyboard focus visibility.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
