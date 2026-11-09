/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles, Clock, Calendar, X } from 'lucide-react';
import { siteConfig } from '../config/site';

interface PricingSectionProps {
  onSelectTier: (serviceName: string, budgetValue: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const { pricingTiers } = siteConfig;
  const [activeTab, setActiveTab] = useState<'all' | 'project' | 'retainer'>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeTier, setActiveTier] = useState<(typeof pricingTiers)[number] | null>(null);

  const pricingOrder = ['ux-audit-roadmap', 'landing-page-sprint', 'product-prototype-flagship', 'design-system-sprint', 'design-engineering-retainer'];
  const filteredTiers = pricingTiers.filter((tier) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'project') return tier.billingType === 'project';
    if (activeTab === 'retainer') return tier.billingType === 'monthly';
    return true;
  }).sort((a, b) => pricingOrder.indexOf(a.id) - pricingOrder.indexOf(b.id));
  const packageLabels: Record<string, string> = {
    'ux-audit-roadmap': 'Affordable',
    'landing-page-sprint': 'Standard',
    'product-prototype-flagship': 'Premium',
    'design-system-sprint': 'Popular',
    'design-engineering-retainer': 'Starter',
  };
  const cardHeights = ['xl:min-h-[340px]', 'xl:min-h-[405px]', 'xl:min-h-[485px]', 'xl:min-h-[405px]', 'xl:min-h-[340px]'];

  return (
    <section id="pricing" className="py-20 md:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32b3c] mb-2">
              <span>03 / Investment</span>
              <span aria-hidden="true">·</span>
              <span>International & Local · USD / BDT</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              TRANSPARENT PRICING & SCOPE
            </h2>
          </div>

          <p className="text-sm text-[#a09c9a] max-w-md font-sans">
            USD is the headline price; local BDT prices and inquiry budgets are shown alongside it. Final scope is agreed before work begins.
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
              onClick={() => setActiveTab('project')}
              type="button"
              className={`px-3.5 sm:px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'project'
                  ? 'bg-[#e32b3c] text-white shadow-lg shadow-[#e32b3c]/25 font-bold'
                  : 'text-[#a09c9a] hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Projects</span>
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

        {/* Five-card, stepped pricing layout inspired by the supplied reference */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${filteredTiers.length === 5 ? 'xl:grid-cols-5' : 'xl:grid-cols-4'} gap-4 xl:gap-3 items-center`}>
          {filteredTiers.map((tier, index) => {
            const isHovered = hoveredCard === tier.id;
            const isFeatured = tier.featured;

            return (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onMouseEnter={() => setHoveredCard(tier.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 relative overflow-hidden ${cardHeights[index] || 'xl:min-h-[380px]'} ${
                  isFeatured
                    ? 'bg-[#171417] border-2 border-[#e32b3c] shadow-2xl shadow-[#e32b3c]/20 xl:scale-[1.03]'
                    : 'bg-[#121214] border border-white/[0.10] hover:border-[#e32b3c]/50 hover:-translate-y-1'
                } ${isHovered && !isFeatured ? 'shadow-xl shadow-[#e32b3c]/10' : ''}`}
              >
                {isFeatured && <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e32b3c] via-amber-300 to-[#e32b3c]" />}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[10px] font-mono uppercase tracking-[0.18em] ${isFeatured ? 'text-[#ff6472]' : 'text-[#a09c9a]'}`}>
                      {packageLabels[tier.id] || tier.period}
                    </span>
                    {isFeatured && <Sparkles className="w-4 h-4 text-[#e32b3c]" />}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide leading-tight min-h-[3.5rem]">
                    {tier.title}
                  </h3>
                  <div className="flex items-baseline gap-1.5 pt-3">
                    <span className="font-display text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-[10px] font-mono text-[#a09c9a]">
                      {tier.billingType === 'monthly' ? '/ month' : 'one-time'}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-[#e32b3c] mt-1">Local BDT: {tier.localPrice}</p>
                  <p className="text-xs text-[#a09c9a] font-sans mt-4 leading-relaxed line-clamp-3">
                    {tier.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/[0.08]">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">Includes</p>
                    <p className="text-xs text-white/80 leading-relaxed line-clamp-2">{tier.deliverables.slice(0, 2).join(' · ')}</p>
                  </div>
                </div>
                <div className="space-y-2 mt-5">
                  <button
                    type="button"
                    onClick={() => setActiveTier(tier)}
                    className="w-full py-2.5 px-3 border border-white/15 hover:border-[#e32b3c]/70 text-[#d4d1cc] hover:text-white text-[10px] font-mono uppercase tracking-widest transition-colors"
                  >
                    View Full Scope
                  </button>
                  <button
                    onClick={() => onSelectTier(tier.serviceName, tier.budgetValue)}
                    type="button"
                    className={`w-full py-3 px-3 font-semibold text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group/btn ${
                      isFeatured ? 'bg-[#e32b3c] hover:bg-[#c92232] text-white' : 'bg-white/10 hover:bg-[#e32b3c] hover:text-white text-white'
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <AnimatePresence>
          {activeTier && (
            <motion.div
              className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveTier(null); }}
            >
              <motion.section
                role="dialog" aria-modal="true" aria-labelledby="pricing-detail-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto p-6 sm:p-9 bg-[#101012] border border-white/15 shadow-2xl"
              >
                <button type="button" onClick={() => setActiveTier(null)} aria-label="Close package details" className="absolute top-4 right-4 p-2 text-white/60 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
                <p className="text-xs font-mono uppercase tracking-widest text-[#e32b3c] mb-3">{packageLabels[activeTier.id]} / {activeTier.period}</p>
                <h3 id="pricing-detail-title" className="font-display text-3xl sm:text-4xl text-white pr-8">{activeTier.title}</h3>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-4">
                  <span className="font-display text-4xl text-white">{activeTier.price}</span>
                  <span className="text-sm text-[#a09c9a]">{activeTier.billingType === 'monthly' ? 'per month' : 'one-time'}</span>
                  <span className="text-sm font-mono text-[#e32b3c]">Local BDT: {activeTier.localPrice}</span>
                </div>
                <p className="text-sm text-[#cfccc9] leading-relaxed mt-5">{activeTier.description}</p>
                <div className="mt-5 p-4 bg-white/[0.03] border border-white/[0.08] text-sm text-white/80 leading-relaxed">
                  <span className="text-[#e32b3c] font-semibold">Best for: </span>{activeTier.targetFor}
                </div>
                <h4 className="mt-7 mb-3 text-xs font-mono uppercase tracking-widest text-white/60">Scope & deliverables</h4>
                <ul className="space-y-3">
                  {activeTier.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-white/90 leading-relaxed">
                      <Check className="w-4 h-4 text-[#e32b3c] shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => { onSelectTier(activeTier.serviceName, activeTier.budgetValue); setActiveTier(null); }}
                  className="w-full sm:w-auto mt-8 px-6 py-3 bg-[#e32b3c] hover:bg-[#c92232] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {activeTier.ctaLabel} <ArrowRight className="inline w-4 h-4 ml-2" />
                </button>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Guarantees & Values Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e11] border border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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

          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#e32b3c] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider">
                Clear Scope & Milestones
              </h4>
              <p className="text-xs text-[#a09c9a] mt-1 font-sans">
                Deliverables, timing, and any scope changes are agreed before work moves forward.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
