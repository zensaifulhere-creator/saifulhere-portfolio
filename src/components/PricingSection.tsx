/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles, Clock, Calendar } from 'lucide-react';
import { siteConfig } from '../config/site';

interface PricingSectionProps {
  onSelectTier: (serviceName: string, budgetValue: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const { pricingTiers } = siteConfig;
  const [activeTab, setActiveTab] = useState<'all' | 'sprint' | 'retainer'>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredTiers = pricingTiers.filter((tier) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'sprint') return tier.id !== 'design-engineering-retainer';
    if (activeTab === 'retainer') return tier.id === 'design-engineering-retainer';
    return true;
  });

  return (
    <section id="pricing" className="py-20 md:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32b3c] mb-2">
              <span>03 / Investment</span>
              <span aria-hidden="true">·</span>
              <span>Market-Standard Rates</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              TRANSPARENT PRICING & SCOPE
            </h2>
          </div>

          <p className="text-sm text-[#a09c9a] max-w-md font-sans">
            Competitive senior rates based on market standards for independent design system engineers and product architects. No hidden agency markup.
          </p>
        </div>

        {/* Animated Motion Tabs for Pricing Models */}
        <div className="flex justify-center sm:justify-start overflow-x-auto scrollbar-none pb-2">
          <div className="inline-flex p-1 bg-white/[0.03] border border-white/10 backdrop-blur-md gap-1">
            <button
              onClick={() => setActiveTab('all')}
              type="button"
              className={`px-3.5 sm:px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#e32b3c] text-white shadow-lg shadow-[#e32b3c]/25 font-bold'
                  : 'text-[#a09c9a] hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              All Models ({pricingTiers.length})
            </button>

            <button
              onClick={() => setActiveTab('sprint')}
              type="button"
              className={`px-3.5 sm:px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'sprint'
                  ? 'bg-[#e32b3c] text-white shadow-lg shadow-[#e32b3c]/25 font-bold'
                  : 'text-[#a09c9a] hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Fixed Sprints</span>
            </button>

            <button
              onClick={() => setActiveTab('retainer')}
              type="button"
              className={`px-3.5 sm:px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'retainer'
                  ? 'bg-[#e32b3c] text-white shadow-lg shadow-[#e32b3c]/25 font-bold'
                  : 'text-[#a09c9a] hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Monthly Retainer</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid with Motion Hover Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredTiers.map((tier) => {
            const isHovered = hoveredCard === tier.id;

            return (
              <div
                key={tier.id}
                onMouseEnter={() => setHoveredCard(tier.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 relative ${
                  tier.featured
                    ? 'bg-[#151518] border-2 border-[#e32b3c] shadow-2xl shadow-[#e32b3c]/15 lg:-translate-y-2.5'
                    : 'bg-[#121214] border border-white/[0.08] hover:border-white/25 hover:-translate-y-1'
                } ${isHovered && !tier.featured ? 'border-[#e32b3c]/40 shadow-xl' : ''}`}
              >
                {/* Luminous Animated Aura for Featured Tier */}
                {tier.featured && (
                  <>
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#e32b3c]/30 to-amber-500/20 opacity-40 blur-xl pointer-events-none -z-10 animate-pulse" />
                    <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-[#e32b3c] text-white text-[10px] font-mono uppercase tracking-widest font-bold shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
                      <span>Flagship / Most Requested</span>
                    </div>
                  </>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2 border-b border-white/[0.06] pb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-[#a09c9a] tracking-wider">
                        {tier.period}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-white tracking-wide">
                      {tier.title}
                    </h3>

                    <div className="flex items-baseline gap-2 pt-2">
                      <span className="font-display text-4xl sm:text-5xl text-white tabular-nums tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs font-mono text-[#a09c9a]">
                        {tier.id === 'design-engineering-retainer' ? '/ month' : 'flat fee'}
                      </span>
                    </div>

                    <p className="text-xs text-[#a09c9a] font-sans pt-1 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Target Audience Note */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs text-[#f2efeb]/80 font-sans">
                    <span className="text-[#e32b3c] font-semibold">Fit: </span>
                    {tier.targetFor}
                  </div>

                  {/* Deliverables Checklist with Micro-Interactions */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-mono uppercase text-white/50 tracking-wider block">
                      Scope & Included Deliverables:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-[#f2efeb] group/item transition-colors"
                        >
                          <Check className="w-4 h-4 text-[#e32b3c] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <span className="font-sans leading-relaxed text-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-8 mt-6 border-t border-white/[0.06]">
                  <button
                    onClick={() => onSelectTier(tier.serviceName, tier.budgetValue)}
                    type="button"
                    className={`w-full py-3.5 px-6 rounded-lg font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group/btn ${
                      tier.featured
                        ? 'bg-[#e32b3c] hover:bg-[#c92232] text-white shadow-lg shadow-[#e32b3c]/30 hover:shadow-[#e32b3c]/50'
                        : 'bg-white/10 hover:bg-[#e32b3c] hover:text-white text-white'
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantees & Values Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e11] border border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#e32b3c] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider">
                100% IP & Code Ownership
              </h4>
              <p className="text-xs text-[#a09c9a] mt-1 font-sans">
                Full copyright, Figma design libraries, tokens, and React repositories transferred with zero licensing strings attached.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-[#e32b3c] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider">
                Direct Principal Access
              </h4>
              <p className="text-xs text-[#a09c9a] mt-1 font-sans">
                You work directly with Saiful—no account managers, junior delegates, or middle layers between design and code.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#e32b3c] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider">
                Continuous Milestone Demos
              </h4>
              <p className="text-xs text-[#a09c9a] mt-1 font-sans">
                Weekly interactive sandbox links and video async recaps ensure complete alignment before final production handoff.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
