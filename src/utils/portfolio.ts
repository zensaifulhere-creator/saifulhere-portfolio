/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: 'systems' | 'prototypes' | 'mobile' | 'web';
  categoryLabel: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  client?: string;
  outcomeMetric?: string;
  tools: string[];
  coverImage: string;
  aspectRatio?: '16:9' | '4:3';
  liveUrl?: string;
  figmaUrl?: string;
  githubUrl?: string;
  featured: boolean;
  keyHighlights: string[];
  tokens?: {
    primaryColor: string;
    radius: string;
    fontFamily: string;
    contrastRatio: string;
  };
}

export function filterProjects(
  projects: ProjectItem[],
  category: string,
  searchQuery: string
): ProjectItem[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'all' || project.category === category;

    if (!matchesCategory) return false;

    if (!query) return true;

    const inTitle = project.title.toLowerCase().includes(query);
    const inSummary = project.summary.toLowerCase().includes(query);
    const inCategory = project.categoryLabel.toLowerCase().includes(query);
    const inTools = project.tools.some((t) => t.toLowerCase().includes(query));
    const inRole = project.role.toLowerCase().includes(query);

    return inTitle || inSummary || inCategory || inTools || inRole;
  });
}

export interface InquiryFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateInquiryForm(data: InquiryFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name (minimum 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please share a brief note about your project (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface SwarmParticleState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
}

export function updateSwarmParticle(
  particle: SwarmParticleState,
  mouseX: number | null,
  mouseY: number | null,
  friction: number = 0.94,
  returnSpring: number = 0.03,
  repulsionForce: number = 0.8,
  repulsionRadius: number = 100
): SwarmParticleState {
  let vx = particle.vx;
  let vy = particle.vy;

  // Spring back to origin
  const dxOrigin = particle.originX - particle.x;
  const dyOrigin = particle.originY - particle.y;
  vx += dxOrigin * returnSpring;
  vy += dyOrigin * returnSpring;

  // Mouse repulsion if active
  if (mouseX !== null && mouseY !== null) {
    const dxMouse = particle.x - mouseX;
    const dyMouse = particle.y - mouseY;
    const distSq = dxMouse * dxMouse + dyMouse * dyMouse;
    const radiusSq = repulsionRadius * repulsionRadius;

    if (distSq < radiusSq && distSq > 0.01) {
      const dist = Math.sqrt(distSq);
      const force = (1 - dist / repulsionRadius) * repulsionForce;
      vx += (dxMouse / dist) * force * 5;
      vy += (dyMouse / dist) * force * 5;
    }
  }

  vx *= friction;
  vy *= friction;

  return {
    ...particle,
    x: particle.x + vx,
    y: particle.y + vy,
    vx,
    vy,
  };
}

export interface CollidableParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass?: number;
}

/**
 * Resolves an elastic or semi-elastic collision between two 2D particles.
 * Returns true if a collision was detected and resolved.
 */
export function resolveParticleCollision(
  p1: CollidableParticle,
  p2: CollidableParticle,
  restitution: number = 0.85,
  spacingMargin: number = 2.0
): boolean {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const distSq = dx * dx + dy * dy;
  const minDist = p1.radius + p2.radius + spacingMargin;

  if (distSq >= minDist * minDist || distSq <= 0.0001) {
    return false;
  }

  const dist = Math.sqrt(distSq);
  const nx = dx / dist;
  const ny = dy / dist;

  // Positional correction to resolve penetration
  const overlap = (minDist - dist) * 0.5;
  p1.x -= nx * overlap;
  p1.y -= ny * overlap;
  p2.x += nx * overlap;
  p2.y += ny * overlap;

  // Relative velocity along collision normal
  const rvx = p2.vx - p1.vx;
  const rvy = p2.vy - p1.vy;
  const velAlongNormal = rvx * nx + rvy * ny;

  // Do not resolve impulse if particles are already separating
  if (velAlongNormal > 0) {
    return true;
  }

  const m1 = p1.mass || (p1.radius * p1.radius);
  const m2 = p2.mass || (p2.radius * p2.radius);

  // Impulse scalar
  const impulse = (-(1 + restitution) * velAlongNormal) / (1 / m1 + 1 / m2);

  p1.vx -= (impulse / m1) * nx;
  p1.vy -= (impulse / m1) * ny;
  p2.vx += (impulse / m2) * nx;
  p2.vy += (impulse / m2) * ny;

  return true;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
  impact: string;
  avatarInitials: string;
  avatarImage: string;
  verified: boolean;
  year: string;
  rating: number;
}

export function getNextSlideIndex(currentIndex: number, totalSlides: number): number {
  if (totalSlides <= 0) return 0;
  return (currentIndex + 1) % totalSlides;
}

export function getPrevSlideIndex(currentIndex: number, totalSlides: number): number {
  if (totalSlides <= 0) return 0;
  return (currentIndex - 1 + totalSlides) % totalSlides;
}

export function calculateProgressPercentage(currentIndex: number, totalSlides: number): number {
  if (totalSlides <= 1) return 100;
  return Math.round(((currentIndex + 1) / totalSlides) * 100);
}
