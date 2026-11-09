/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Send, AlertCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';
import { validateInquiryForm, InquiryFormData } from '../utils/portfolio';
import { SocialIcon } from './SocialIcons';

interface ContactSectionProps {
  selectedService?: string;
  selectedBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  selectedBudget,
}) => {
  const { identity, verifiedSocials } = siteConfig;
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    service: selectedService || 'Design Systems Architecture',
    budget: selectedBudget || '$5,000 - $10,000',
    message: '',
  });

  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService,
        budget: selectedBudget || prev.budget,
      }));
    }
  }, [selectedService, selectedBudget]);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(identity.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(formData);

    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setSubmitted(true);

    // Prepare direct mailto draft URL
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} (${formData.name})`);
    const body = encodeURIComponent(
      `Hello Saiful,\n\nMy name is ${formData.name} (${formData.email}).\n` +
      `Service Needed: ${formData.service}\n` +
      `Estimated Budget: ${formData.budget}\n\n` +
      `Project Details:\n${formData.message}\n\n` +
      `Looking forward to connecting!`
    );

    // Trigger user mail client fallback cleanly
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative border-b border-white/[0.08] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32b3c]">
            <span className="w-2 h-2 bg-[#e32b3c] animate-pulse" aria-hidden="true" />
            <span>06 / Collaboration & Channels</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span className="text-white/60">Worldwide Availability</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.95]">
            LET'S CRAFT SOMETHING MEMORABLE
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#a09c9a] max-w-2xl font-sans leading-relaxed">
            Have an enterprise design system to architect, a high-velocity sprint, or a creative frontend engineering challenge? Reach out directly or dispatch a proposal below.
          </p>
        </div>

        {/* Primary Contact Split: Left = Direct Info & Highlights, Right = Proposal Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Connect (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="p-6 sm:p-8 bg-[#101012] border border-white/[0.1] shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e32b3c]/[0.05] blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide">
                  DIRECT CHANNELS
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none animate-ping" />
                  Available Now
                </span>
              </div>

              {/* Primary Email Card */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#a09c9a] tracking-wider block">
                  Primary Correspondence
                </span>
                <div className="flex items-center justify-between gap-2 p-3 sm:p-3.5 bg-white/[0.03] border border-white/10 hover:border-[#e32b3c]/50 transition-colors">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="w-4 h-4 text-[#e32b3c] shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-white select-all truncate">
                      {identity.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-white/10 hover:bg-[#e32b3c] text-white transition-all flex items-center gap-1 shrink-0 cursor-pointer active:scale-95"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Location & Response Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                    Location & Hub
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-white font-medium">
                    {identity.location}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                    Response SLA
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-emerald-400 font-medium">
                    Within 24 Hours
                  </p>
                </div>
              </div>

              {/* Quick Jump Links to Top Verified Channels */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                  Priority Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {verifiedSocials.slice(0, 4).map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.08] hover:border-[#e32b3c]/50 hover:bg-[#151214] transition-all"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-white/70 group-hover:text-white transition-colors">
                          <SocialIcon type={social.iconType} size={15} />
                        </span>
                        <span className="text-xs font-mono text-[#a09c9a] group-hover:text-white truncate">
                          {social.platform}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#e32b3c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Proposal Form (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 bg-[#101012] border border-white/[0.1] shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl text-white tracking-wide">
                    INQUIRY DISPATCHED!
                  </h3>
                  <p className="text-sm text-[#a09c9a] max-w-md mx-auto font-sans leading-relaxed">
                    Your email client has been opened with your structured proposal. If your mail client didn't trigger automatically, feel free to email directly to{' '}
                    <span className="text-white font-mono">{identity.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    type="button"
                    className="mt-4 px-5 py-2.5 text-xs font-mono uppercase tracking-widest bg-white/10 hover:bg-[#e32b3c] text-white transition-all cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide">
                        PROJECT INQUIRY FORM
                      </h3>
                      <p className="text-xs text-[#888888] font-sans mt-0.5">
                        Structured brief automatically pre-fills your email
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-[#e32b3c] uppercase tracking-widest hidden xs:inline">
                      100% PRIVATE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#a09c9a] block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Sterling"
                        className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#e32b3c] focus:outline-none text-base sm:text-sm text-white placeholder-white/20 font-sans transition-colors"
                      />
                      {formErrors.name && (
                        <p className="text-xs text-[#e32b3c] flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#a09c9a] block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#e32b3c] focus:outline-none text-base sm:text-sm text-white placeholder-white/20 font-sans transition-colors"
                      />
                      {formErrors.email && (
                        <p className="text-xs text-[#e32b3c] flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#a09c9a] block">
                        Service Scope
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#e32b3c] focus:outline-none text-base sm:text-sm text-white font-sans transition-colors"
                      >
                        <option value="Design Systems Architecture">Design Systems Architecture</option>
                        <option value="Interactive Prototype Development">Interactive Prototype Development</option>
                        <option value="Full-Stack Creative Frontend">Full-Stack Creative Frontend</option>
                        <option value="Mobile App UI/UX Design">Mobile App UI/UX Design</option>
                        <option value="Design Audit & Consulting">Design Audit & Consulting</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#a09c9a] block">
                        Target Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#e32b3c] focus:outline-none text-base sm:text-sm text-white font-sans transition-colors"
                      >
                        <option value="$1,500 - $3,000">$1,500 - $3,000 (Sprint Tier)</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000 (Flagship Prototype)</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000 (Dedicated Retainer)</option>
                        <option value="$10,000+">$10,000+ (Custom Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#a09c9a] block">
                      Project Goals & Context *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your timeline, product ambitions, and key deliverables..."
                      className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#e32b3c] focus:outline-none text-base sm:text-sm text-white placeholder-white/20 font-sans resize-none transition-colors"
                    />
                    {formErrors.message && (
                      <p className="text-xs text-[#e32b3c] flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#e32b3c] hover:bg-[#c92030] text-white font-mono text-xs uppercase tracking-widest border border-[#ff4d5e]/30 shadow-[0_0_20px_rgba(227,43,60,0.35)] hover:shadow-[0_0_28px_rgba(227,43,60,0.55)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <span>Dispatch Proposal Via Email</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* VERIFIED SOCIALS & PLATFORM MATRIX: Full Architectural Showcase */}
        <div className="pt-12 sm:pt-16 border-t border-white/[0.08] space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32b3c] mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#e32b3c]" />
                <span>Verified Socials & Creative Networks</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
                AUTHENTIC CHANNELS & PROFILES
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#888888] font-sans max-w-md">
              Connect directly across all official design showcases, code repositories, and freelance storefronts.
            </p>
          </div>

          {/* 8-Card Responsive Cinematic Grid (1 col on mobile, 2 cols on tablet, 4 cols on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {verifiedSocials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 sm:p-5 bg-[#101012] border border-white/[0.08] hover:border-[#e32b3c]/60 hover:bg-[#141214] transition-all duration-200 flex flex-col justify-between space-y-4 cursor-pointer overflow-hidden"
              >
                {/* Subtle Brand Ambient Backlight on Hover */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                  style={{ backgroundColor: social.brandColor }}
                />

                {/* Card Top: Logo + Username Pill + External Arrow */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    {/* Company Logo in Ambient Square */}
                    <div
                      className="w-10 h-10 flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:border-white/30 text-white transition-all shrink-0"
                      style={{ color: social.brandColor === '#ffffff' ? '#ffffff' : undefined }}
                    >
                      <SocialIcon type={social.iconType} size={20} />
                    </div>

                    {/* Status Badge */}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white/70 bg-white/[0.04] border border-white/10 group-hover:border-[#e32b3c]/40 group-hover:text-[#e32b3c] transition-colors">
                      <span className="w-1 h-1 bg-[#e32b3c] rounded-none" />
                      {social.badge}
                    </span>
                  </div>

                  {/* Platform Title */}
                  <h4 className="font-display text-lg text-white tracking-wide group-hover:text-white transition-colors">
                    {social.platform}
                  </h4>

                  {/* Username Handle Pill */}
                  <div className="mt-1 inline-flex items-center px-2 py-0.5 bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#e32b3c] tracking-wider">
                    {social.username}
                  </div>

                  {/* Context Description */}
                  <p className="mt-2.5 text-xs text-[#888888] font-sans leading-relaxed group-hover:text-[#a09c9a] transition-colors">
                    {social.description}
                  </p>
                </div>

                {/* Card Bottom: Clickable Action Cue */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#a09c9a] group-hover:text-white transition-colors">
                  <span className="uppercase text-[11px] tracking-wider">Visit Profile</span>
                  <ArrowUpRight className="w-4 h-4 text-[#e32b3c] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
