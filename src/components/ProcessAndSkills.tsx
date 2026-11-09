/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { siteConfig } from '../config/site';

export const ProcessAndSkills: React.FC = () => {
  const { processSteps, skillsHierarchy, tools } = siteConfig;

  return (
    <div className="border-b border-white/[0.08]">
      {/* SECTION 1: SERVICES & CAPABILITIES MATRIX (id="services") */}
      <section id="services" className="py-16 sm:py-20 md:py-28 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32b3c] mb-2">
                <span>02 / Services & Stack</span>
                <span aria-hidden="true">·</span>
                <span>Core Capabilities</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
                SERVICES & CRAFT
              </h2>
            </div>

            <p className="text-sm text-[#a09c9a] max-w-md font-sans leading-relaxed">
              High-leverage engineering skills and enterprise design systems backed by 6+ years of active production practice.
            </p>
          </div>

          {/* Four Core Service Domains */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {skillsHierarchy.map((group, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-[#121214]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#e32b3c]/40 transition-colors space-y-6 group"
              >
                <div className="border-b border-white/[0.08] pb-4 flex items-center justify-between">
                  <h3 className="font-display text-2xl text-white tracking-wide group-hover:text-[#e32b3c] transition-colors">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-[#e32b3c] tracking-widest uppercase">
                    0{idx + 1}
                  </span>
                </div>

                <ul className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-sm text-[#a09c9a] group-hover:text-[#e0deda] transition-colors">
                      <span className="w-1.5 h-1.5 rounded-none bg-[#e32b3c] shrink-0" />
                      <span className="font-sans font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* EXPANDED TOOLING SUITE WITH FROSTED GLASS & LOW RED ACCENT */}
          <div className="p-6 sm:p-8 md:p-10 bg-[#0e0e11]/80 backdrop-blur-xl border border-white/[0.08] relative overflow-hidden">
            {/* Low Ambient Red Accent Glow in Background */}
            <div
              className="absolute -top-24 -right-24 w-96 h-96 bg-[#e32b3c]/[0.05] rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#e32b3c]/[0.03] rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 relative z-10">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                  Engineering Stack & Creative Software
                </h4>
                <p className="text-xs text-[#888888] font-sans mt-0.5">
                  Production-grade tools leveraged for design systems, code architecture, and prototyping.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#e32b3c] tracking-widest uppercase self-start sm:self-auto">
                16 VERIFIED TOOLS
              </span>
            </div>

            {/* Frosted Glass Grid with Low Red Accent */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="group relative p-3.5 sm:p-4 bg-[#141416]/50 backdrop-blur-md border border-white/[0.07] hover:border-[#e32b3c]/45 hover:bg-[#1a1214]/65 transition-all duration-200 overflow-hidden"
                >
                  {/* Subtle Low Red Top-Corner Accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-[#e32b3c]/15 -translate-y-8 translate-x-8 rotate-45 border-b border-[#e32b3c]/40" />
                  </div>

                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-xs sm:text-sm font-semibold text-white font-mono tracking-tight group-hover:text-[#f2efeb] transition-colors">
                      {tool.name}
                    </p>
                    <span className="w-1.5 h-1.5 rounded-none bg-[#e32b3c]/40 group-hover:bg-[#e32b3c] transition-colors" />
                  </div>

                  <p className="text-[11px] text-[#888888] group-hover:text-[#a09c9a] font-sans leading-snug transition-colors">
                    {tool.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: 6-STEP DESIGN ENGINEERING WORKFLOW (id="process") */}
      <section id="process" className="py-16 sm:py-20 md:py-28 relative scroll-mt-20 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32b3c] mb-2">
                <span>03 / Methodology</span>
                <span aria-hidden="true">·</span>
                <span>The Workflow</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
                HOW I DESIGN & CODE
              </h2>
            </div>

            <p className="text-sm text-[#a09c9a] max-w-md font-sans leading-relaxed">
              From initial user research to production React deployment, every phase is engineered to eliminate handoff friction and maximize adoption.
            </p>
          </div>

          {/* Continuous cinematic workflow loop: four cards in view on wide screens */}
          <div className="relative">
            <div className="flex items-center justify-between gap-4 mb-4 text-[10px] font-mono uppercase tracking-[0.18em] text-[#888888]">
              <span>Six phases · continuous workflow</span>
              <span className="text-[#e32b3c]">Moving left · hover to pause</span>
            </div>
            <div
              className="process-marquee-viewport relative overflow-hidden"
              role="region"
              aria-label="Six-step design workflow, moving left continuously. Hover to pause."
              style={{ '--process-card-width': 'calc((min(100vw, 80rem) - 8.5rem) / 4)' } as React.CSSProperties}
            >
              <div className="process-marquee-track flex w-max gap-6 py-3">
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    className={`process-marquee-sequence flex gap-6 ${copy === 1 ? 'process-marquee-duplicate' : ''}`}
                    aria-hidden={copy === 1 ? 'true' : undefined}
                  >
                    {processSteps.map((step, idx) => (
                      <article
                        key={`${copy}-${step.number}`}
                        className="w-[min(82vw,340px)] xl:w-[var(--process-card-width)] shrink-0 min-h-[390px] p-6 sm:p-8 bg-[#121214]/90 backdrop-blur-md border border-white/[0.10] hover:border-[#e32b3c]/50 transition-colors flex flex-col justify-between space-y-6"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="font-display text-3xl text-[#e32b3c] tracking-tight">{step.number}</span>
                            <span className="text-[11px] font-mono text-[#a09c9a] uppercase">Phase {idx + 1}</span>
                          </div>
                          <h3 className="font-display text-xl text-white tracking-wide">{step.title}</h3>
                          <p className="text-sm text-[#a09c9a] leading-relaxed font-sans">{step.description}</p>
                        </div>
                        <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                          <span className="text-[11px] font-mono uppercase text-white/50 block">Core Deliverables:</span>
                          <div className="text-xs text-[#f2efeb] font-sans flex flex-wrap gap-x-2 gap-y-1">
                            {step.deliverables.map((del, dIdx) => (
                              <span key={dIdx} className="inline-flex items-center">
                                {dIdx > 0 && <span className="text-white/20 mr-2">·</span>}{del}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
              <div aria-hidden="true" className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#090909] to-transparent pointer-events-none" />
              <div aria-hidden="true" className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#090909] to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
