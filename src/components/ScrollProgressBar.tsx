/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 450,
    damping: 45,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none bg-white/[0.04] backdrop-blur-xs"
    >
      {/* Crimson Reading Progress Bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-[#c92030] via-[#e32b3c] to-[#ff4d5e] origin-left relative shadow-[0_0_12px_rgba(227,43,60,0.9),0_0_3px_#ffffff]"
        style={{ scaleX }}
      >
        {/* Glow Pip at Leading Edge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white shadow-[0_0_8px_#ffffff,0_0_12px_#e32b3c]" />
      </motion.div>
    </div>
  );
};
