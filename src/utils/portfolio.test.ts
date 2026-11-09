import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  validateInquiryForm,
  updateSwarmParticle,
  resolveParticleCollision,
  getNextSlideIndex,
  getPrevSlideIndex,
  calculateProgressPercentage,
  ProjectItem,
} from './portfolio';
import { validateChatMessage, createChatMessage } from './chat';
import { generateStudioFallback } from './knowledgeBase';
import { siteConfig } from '../config/site';

const mockProjects: ProjectItem[] = [
  {
    id: 'p-1',
    title: 'Aurora Design System',
    category: 'systems',
    categoryLabel: 'Design System',
    year: '2025',
    summary: 'A dark-mode enterprise component architecture with strict token discipline.',
    description: 'Detailed description',
    role: 'Lead Design Systems Engineer',
    tools: ['Figma', 'React', 'Tailwind CSS'],
    coverImage: '/test.jpg',
    featured: true,
    keyHighlights: ['99.4% token adoption'],
  },
  {
    id: 'p-2',
    title: 'Aura Fintech Wallet',
    category: 'mobile',
    categoryLabel: 'Mobile UI/UX',
    year: '2024',
    summary: 'Next-gen crypto wallet interface and micro-interaction suite.',
    description: 'A mobile crypto wallet with micro-interactions.',
    role: 'Principal Product Designer',
    tools: ['Framer', 'iOS', 'SwiftUI'],
    coverImage: '/test2.jpg',
    featured: true,
    keyHighlights: ['40k active users'],
  },
];

test('filterProjects correctly filters by category and search term', () => {
  // Category filter
  const systems = filterProjects(mockProjects, 'systems', '');
  assert.equal(systems.length, 1);
  assert.equal(systems[0].id, 'p-1');

  // Search term filter
  const searchFigma = filterProjects(mockProjects, 'all', 'Figma');
  assert.equal(searchFigma.length, 1);
  assert.equal(searchFigma[0].id, 'p-1');

  const searchCrypto = filterProjects(mockProjects, 'all', 'crypto');
  assert.equal(searchCrypto.length, 1);
  assert.equal(searchCrypto[0].id, 'p-2');

  // No match
  const none = filterProjects(mockProjects, 'all', 'NonExistentXYZ');
  assert.equal(none.length, 0);
});

test('validateInquiryForm correctly validates input data', () => {
  // Valid submission
  const valid = validateInquiryForm({
    name: 'Sarah Connor',
    email: 'sarah@skynet-defense.com',
    service: 'Design System Architecture',
    budget: '৳70,000 - ৳90,000 / month',
    message: 'We want to collaborate on our core enterprise design library.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);

  // Invalid email and short message
  const invalid = validateInquiryForm({
    name: 'S',
    email: 'invalid-email',
    service: '',
    budget: '',
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);
});

test('updateSwarmParticle calculates spring back and repulsion physics', () => {
  const initialParticle = {
    x: 50,
    y: 50,
    vx: 0,
    vy: 0,
    originX: 100,
    originY: 100,
  };

  // Without mouse, should accelerate towards origin (100, 100)
  const step1 = updateSwarmParticle(initialParticle, null, null);
  assert.ok(step1.x > initialParticle.x, 'Particle should move towards origin on X');
  assert.ok(step1.y > initialParticle.y, 'Particle should move towards origin on Y');

  // With mouse close to particle, should repulse
  const repulsed = updateSwarmParticle(
    { x: 100, y: 100, vx: 0, vy: 0, originX: 100, originY: 100 },
    95,
    95
  );
  assert.ok(repulsed.vx > 0, 'Particle should be repulsed away from mouse in positive direction');
});

test('resolveParticleCollision detects overlap and applies elastic bouncy bounce', () => {
  // Two particles moving towards each other along X-axis
  const p1 = {
    x: 10,
    y: 20,
    vx: 3,
    vy: 0,
    radius: 4,
    mass: 16,
  };
  const p2 = {
    x: 17, // distance is 7, minDist is 4 + 4 + 2 = 10, so they overlap by 3
    y: 20,
    vx: -3,
    vy: 0,
    radius: 4,
    mass: 16,
  };

  const collided = resolveParticleCollision(p1, p2, 0.9, 2.0);
  assert.equal(collided, true, 'Collision should be detected');

  // Positional overlap should be resolved (p1 pushed left, p2 pushed right)
  assert.ok(p1.x < 10, 'p1 should be shifted left to resolve overlap');
  assert.ok(p2.x > 17, 'p2 should be shifted right to resolve overlap');

  // Bouncy velocity reversal
  assert.ok(p1.vx < 0, 'p1 velocity should reverse to negative X');
  assert.ok(p2.vx > 0, 'p2 velocity should reverse to positive X');

  // Far apart particles should not collide
  const p3 = { x: 100, y: 100, vx: 0, vy: 0, radius: 2 };
  const p4 = { x: 200, y: 200, vx: 0, vy: 0, radius: 2 };
  const collidedFar = resolveParticleCollision(p3, p4, 0.9, 2.0);
  assert.equal(collidedFar, false, 'Far particles should not collide');
});

test('validateChatMessage correctly checks message content and bounds', () => {
  const empty = validateChatMessage('   ');
  assert.equal(empty.isValid, false);
  assert.equal(empty.error, 'Message cannot be empty.');

  const valid = validateChatMessage('What is your rate for a design system sprint?');
  assert.equal(valid.isValid, true);
  assert.equal(valid.error, undefined);

  const tooLong = validateChatMessage('a'.repeat(2500));
  assert.equal(tooLong.isValid, false);
  assert.ok(tooLong.error?.includes('2,000'));
});

test('createChatMessage formats message with unique id and timestamp', () => {
  const msg = createChatMessage('user', 'Hello Saiful AI');
  assert.equal(msg.role, 'user');
  assert.equal(msg.content, 'Hello Saiful AI');
  assert.ok(msg.id.startsWith('msg-'));
  assert.ok(msg.timestamp.length > 0);
});

test('carousel slide helpers calculate circular wrap and progress percentages', () => {
  const total = 5;
  // Next slide wraps around
  assert.equal(getNextSlideIndex(0, total), 1);
  assert.equal(getNextSlideIndex(4, total), 0);
  assert.equal(getNextSlideIndex(2, total), 3);

  // Prev slide wraps around
  assert.equal(getPrevSlideIndex(0, total), 4);
  assert.equal(getPrevSlideIndex(3, total), 2);
  assert.equal(getPrevSlideIndex(4, total), 3);

  // Bounds checks with 0 or 1
  assert.equal(getNextSlideIndex(0, 0), 0);
  assert.equal(getPrevSlideIndex(0, 0), 0);

  // Progress percentage
  assert.equal(calculateProgressPercentage(0, 5), 20);
  assert.equal(calculateProgressPercentage(2, 5), 60);
  assert.equal(calculateProgressPercentage(4, 5), 100);
  assert.equal(calculateProgressPercentage(0, 1), 100);
});

test('generateStudioFallback provides accurate knowledge base responses', () => {
  // Social inquiries
  const socialReply = generateStudioFallback('What are your social links and instagram?');
  assert.ok(socialReply.includes('instagram.com/dead_siyam/'));
  assert.ok(socialReply.includes('linkedin.com/in/saifulhere'));
  assert.ok(socialReply.includes('fiverr.com/saifulhere'));
  assert.ok(socialReply.includes('facebook.com/saifulheree'));

  // Pricing inquiries
  const pricingReply = generateStudioFallback('Tell me about the 65,000 sprint');
  assert.ok(pricingReply.includes('৳65,000'));
  assert.ok(pricingReply.includes('Design System Sprint'));

  // Invariant inquiries
  const invariantReply = generateStudioFallback('What are your design invariants?');
  assert.ok(invariantReply.includes('Zero Handoff Ambiguity'));
  assert.ok(invariantReply.includes('Sensory Micro-Interactions'));
  assert.ok(invariantReply.includes('Accessible Without Compromise'));
});

test('siteConfig contains all verified social channels with valid URLs', () => {
  const expectedPlatforms = ['linkedin', 'instagram', 'facebook', 'x', 'fiverr', 'dribbble', 'behance', 'github'];
  const channelIds = siteConfig.verifiedSocials.map((s: any) => s.id);
  
  for (const platform of expectedPlatforms) {
    assert.ok(channelIds.includes(platform), `Missing verified channel: ${platform}`);
    const channel = siteConfig.verifiedSocials.find((s: any) => s.id === platform);
    assert.ok(channel, `Channel object for ${platform} was not found`);
    assert.ok(channel.url.startsWith('https://'), `Channel ${platform} has invalid URL: ${channel.url}`);
    assert.ok(channel.username.length > 0, `Channel ${platform} has empty username`);
  }
});



