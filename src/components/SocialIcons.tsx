/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Pixel-perfect vector company logos for verified social channels
 */

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const LinkedInLogo: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const InstagramLogo: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const FacebookLogo: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const XLogo: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const FiverrLogo: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {/* Clean Fiverr emblem circle with 'fi' monogram & dot */}
    <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
    <path d="M8 8h3v1.8H9.6v1.4H11V13H9.6v4H8V8zm5.5 0h1.8v9h-1.8V8zm0-2.8h1.8v1.6h-1.8V5.2z" />
    <circle cx="17.2" cy="16.2" r="1" />
  </svg>
);

export const DribbbleLogo: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
);

export const BehanceLogo: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 7h-7v2h7V7zm1.726 10c-.442 1.297-1.646 2-3.176 2-2.121 0-3.55-1.558-3.55-3.844 0-2.222 1.488-3.843 3.518-3.843 2.152 0 3.399 1.492 3.399 3.593v.81h-5.227c.071 1.07.822 1.761 1.944 1.761.859 0 1.48-.415 1.724-1.127l1.368.65zm-4.992-3.167h3.585c-.073-.918-.752-1.503-1.74-1.503-1.025 0-1.751.585-1.845 1.503zM8.384 12.518c1.385-.436 2.241-1.47 2.241-2.894 0-2.133-1.691-3.624-4.225-3.624H0v14h6.721c2.75 0 4.549-1.547 4.549-3.953 0-1.673-.974-2.883-2.886-3.529zM3.456 8.24h2.721c1.233 0 1.996.657 1.996 1.71 0 1.094-.784 1.765-2.037 1.765H3.456V8.24zm3.037 9.479H3.456v-3.799h3.037c1.464 0 2.378.711 2.378 1.884 0 1.189-.894 1.915-2.378 1.915z" />
  </svg>
);

export const GitHubLogo: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const SocialIcon: React.FC<{
  type: 'linkedin' | 'instagram' | 'facebook' | 'x' | 'fiverr' | 'dribbble' | 'behance' | 'github';
  className?: string;
  size?: number;
}> = ({ type, className, size }) => {
  switch (type) {
    case 'linkedin':
      return <LinkedInLogo className={className} size={size} />;
    case 'instagram':
      return <InstagramLogo className={className} size={size} />;
    case 'facebook':
      return <FacebookLogo className={className} size={size} />;
    case 'x':
      return <XLogo className={className} size={size} />;
    case 'fiverr':
      return <FiverrLogo className={className} size={size} />;
    case 'dribbble':
      return <DribbbleLogo className={className} size={size} />;
    case 'behance':
      return <BehanceLogo className={className} size={size} />;
    case 'github':
    default:
      return <GitHubLogo className={className} size={size} />;
  }
};
