/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/site';
import { SocialIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { identity, verifiedSocials } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 border-t border-white/[0.08] bg-[#070709] text-xs font-mono text-[#a09c9a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Wordmark & Brand Attribution */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-mono font-bold text-lg text-white tracking-wider lowercase">
              saifulhere<span className="text-[#e32b3c]">.</span>
            </span>
            <span aria-hidden="true" className="text-white/20 hidden sm:inline">·</span>
            <span className="text-[11px] text-[#888888]">
              {identity.fullName} · UI/UX Designer & Creative Frontend Engineer
            </span>
          </div>

          {/* Copyright & Location */}
          <div className="flex items-center gap-3 text-[11px] text-[#666666]">
            <span>© {new Date().getFullYear()} saifulhere.studio</span>
            <span aria-hidden="true">·</span>
            <span>Dhaka, Bangladesh</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 border border-white/10 hover:border-[#e32b3c] text-white bg-white/[0.02] hover:bg-white/[0.08] transition-all cursor-pointer font-mono text-[11px] uppercase tracking-wider active:scale-95"
            aria-label="Scroll back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#e32b3c]" />
          </button>
        </div>

        {/* Footer Verified Social Strip with Icons */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          <span className="text-[10px] uppercase tracking-widest text-[#555555]">
            Verified Channels:
          </span>
          {verifiedSocials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#888888] hover:text-white transition-colors group"
              title={`${social.platform} (${social.username})`}
            >
              <span className="text-white/40 group-hover:text-[#e32b3c] transition-colors">
                <SocialIcon type={social.iconType} size={13} />
              </span>
              <span>{social.platform}</span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};
