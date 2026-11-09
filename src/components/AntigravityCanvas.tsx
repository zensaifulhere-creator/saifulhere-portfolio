/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { resolveParticleCollision, CollidableParticle } from '../utils/portfolio';

interface Particle extends CollidableParticle {
  id: number;
  originX: number;
  originY: number;
  baseAlpha: number;
  isReactive: boolean; // true = reactive spring swarm, false = ambient cosmic drift
  driftVx: number;
  driftVy: number;
  collisionEnergy: number; // 0 to 1, spikes on collision and smoothly decays
}

interface AntigravityCanvasProps {
  motionEnabled: boolean;
}

export const AntigravityCanvas: React.FC<AntigravityCanvasProps> = ({ motionEnabled }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initScatteredParticles();
    };

    const initScatteredParticles = () => {
      // High density yet optimal for spatial collision checks (~320 desktop, ~140 mobile)
      const count = Math.min(Math.floor((width * height) / 3400), 380);
      const particles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const isReactive = Math.random() < 0.68; // 68% reactive, 32% drifting ambient
        const radius = isReactive ? 1.2 + Math.random() * 1.4 : 1.0 + Math.random() * 1.6;

        particles.push({
          id: i,
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          originX: x,
          originY: y,
          radius,
          mass: radius * radius,
          baseAlpha: isReactive ? 0.16 + Math.random() * 0.15 : 0.1 + Math.random() * 0.22,
          isReactive,
          driftVx: (Math.random() - 0.5) * 0.35,
          driftVy: (Math.random() - 0.5) * 0.35,
          collisionEnergy: 0,
        });
      }

      particlesRef.current = particles;
    };

    initScatteredParticles();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchend', handleMouseLeave);

    // Spatial hash grid parameters for efficient collision detection (O(N) vs O(N^2))
    const CELL_SIZE = 38;
    const SPACING_MARGIN = 2.2;
    const RESTITUTION = 0.86; // Bouncy kinetic coefficient

    const render = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const repulsionRadius = 175;
      const repulsionRadiusSq = repulsionRadius * repulsionRadius;
      const agitatedParticles: Particle[] = [];

      if (motionEnabled) {
        // STEP 1: Update individual forces (mouse repulsion, spring anchors, ambient drift)
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          if (p.isReactive) {
            // Anchor spring towards origin coordinate
            const dxOrigin = p.originX - p.x;
            const dyOrigin = p.originY - p.y;
            p.vx += dxOrigin * 0.024;
            p.vy += dyOrigin * 0.024;

            // Cursor kinetic repulsion
            if (mouse.x !== null && mouse.y !== null) {
              const dxMouse = p.x - mouse.x;
              const dyMouse = p.y - mouse.y;
              const distSq = dxMouse * dxMouse + dyMouse * dyMouse;

              if (distSq < repulsionRadiusSq && distSq > 0.01) {
                const dist = Math.sqrt(distSq);
                const force = (1 - dist / repulsionRadius) * 1.5;
                p.vx += (dxMouse / dist) * force * 4.8;
                p.vy += (dyMouse / dist) * force * 4.8;
              }
            }

            // Viscous damping
            p.vx *= 0.92;
            p.vy *= 0.92;
          } else {
            // Ambient drift particle
            p.vx = p.driftVx;
            p.vy = p.driftVy;

            // Gentle curve when cursor sweeps through
            if (mouse.x !== null && mouse.y !== null) {
              const dxMouse = p.x - mouse.x;
              const dyMouse = p.y - mouse.y;
              const distSq = dxMouse * dxMouse + dyMouse * dyMouse;

              if (distSq < repulsionRadiusSq && distSq > 0.01) {
                const dist = Math.sqrt(distSq);
                const wakeForce = (1 - dist / repulsionRadius) * 0.8;
                p.vx += (dxMouse / dist) * wakeForce * 2.2;
                p.vy += (dyMouse / dist) * wakeForce * 2.2;
              }
            }

            // Screen boundary wrapping
            if (p.x < -15) p.x = width + 15;
            else if (p.x > width + 15) p.x = -15;
            if (p.y < -15) p.y = height + 15;
            else if (p.y > height + 15) p.y = -15;
          }

          // Positional update
          p.x += p.vx;
          p.y += p.vy;

          // Decay collision energy
          p.collisionEnergy *= 0.89;
          if (p.collisionEnergy < 0.005) {
            p.collisionEnergy = 0;
          }
        }

        // STEP 2: Spatial Partitioning for Particle-to-Particle Collision & Bounce
        const grid = new Map<string, Particle[]>();

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const cellX = Math.floor(p.x / CELL_SIZE);
          const cellY = Math.floor(p.y / CELL_SIZE);
          const key = `${cellX},${cellY}`;

          let bucket = grid.get(key);
          if (!bucket) {
            bucket = [];
            grid.set(key, bucket);
          }
          bucket.push(p);
        }

        // Check pairs in same cell and neighboring cells (right, bottom-left, bottom, bottom-right)
        const neighborOffsets = [
          [0, 0],
          [1, 0],
          [-1, 1],
          [0, 1],
          [1, 1],
        ];

        for (const [key, bucket] of grid.entries()) {
          const commaIdx = key.indexOf(',');
          const cellX = parseInt(key.substring(0, commaIdx), 10);
          const cellY = parseInt(key.substring(commaIdx + 1), 10);

          for (let oi = 0; oi < neighborOffsets.length; oi++) {
            const [ox, oy] = neighborOffsets[oi];
            const isSelf = ox === 0 && oy === 0;
            const neighborKey = `${cellX + ox},${cellY + oy}`;
            const targetBucket = isSelf ? bucket : grid.get(neighborKey);

            if (!targetBucket) continue;

            for (let i = 0; i < bucket.length; i++) {
              const pA = bucket[i];
              const startJ = isSelf ? i + 1 : 0;

              for (let j = startJ; j < targetBucket.length; j++) {
                const pB = targetBucket[j];

                // Detect and resolve physical elastic collision
                const collided = resolveParticleCollision(pA, pB, RESTITUTION, SPACING_MARGIN);

                if (collided) {
                  // Boost collision excitation for bouncy visual micro-sheen
                  pA.collisionEnergy = Math.min(pA.collisionEnergy + 0.75, 1.0);
                  pB.collisionEnergy = Math.min(pB.collisionEnergy + 0.75, 1.0);
                }
              }
            }
          }
        }
      }

      // STEP 3: Render particles and visual bouncy feedback
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = p.x - p.originX;
        const dy = p.y - p.originY;
        const displacement = Math.sqrt(dx * dx + dy * dy);
        const cursorAgitation = p.isReactive ? Math.min(displacement / 24, 1) : 0;
        const isBouncing = p.collisionEnergy > 0.05;

        if (cursorAgitation > 0.15 || isBouncing) {
          agitatedParticles.push(p);

          // Dynamic radius expansion during energetic bounce
          const bounceScale = 1 + p.collisionEnergy * 0.45;
          const currentRadius = (p.radius + cursorAgitation * 1.4) * bounceScale;

          // Energetic crimson collision aura ring
          if (p.collisionEnergy > 0.2) {
            ctx.fillStyle = `rgba(227, 43, 60, ${p.collisionEnergy * 0.35})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, currentRadius * 1.8, 0, Math.PI * 2);
            ctx.fill();
          }

          // Glowing crimson core
          const alpha = Math.min(0.4 + cursorAgitation * 0.5 + p.collisionEnergy * 0.4, 0.95);
          ctx.fillStyle = `rgba(227, 43, 60, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Ambient warm star points
          ctx.fillStyle = p.isReactive
            ? `rgba(242, 239, 235, ${p.baseAlpha})`
            : `rgba(227, 43, 60, ${p.baseAlpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw subtle connecting filaments between agitated/colliding particles near cursor
      if (agitatedParticles.length > 1 && mouse.x !== null && mouse.y !== null) {
        ctx.lineWidth = 0.65;
        for (let a = 0; a < agitatedParticles.length; a++) {
          for (let b = a + 1; b < Math.min(a + 5, agitatedParticles.length); b++) {
            const pA = agitatedParticles[a];
            const pB = agitatedParticles[b];
            const distSq = (pA.x - pB.x) ** 2 + (pA.y - pB.y) ** 2;

            if (distSq < 3800) {
              const alpha = (1 - Math.sqrt(distSq) / 62) * 0.32;
              ctx.strokeStyle = `rgba(227, 43, 60, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(pA.x, pA.y);
              ctx.lineTo(pB.x, pB.y);
              ctx.stroke();
            }
          }
        }
      }

      if (motionEnabled) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchend', handleMouseLeave);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [motionEnabled]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-500"
      aria-hidden="true"
    />
  );
};
