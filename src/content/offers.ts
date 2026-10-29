/**
 * Paid offers sold through the Selar store.
 * Single source of truth for every offer card, price and booking link on the site
 * (homepage "Work With Me" section, /work-with-me page, command palette, JSON-LD).
 */
import { LINKS } from '@/content/links';

export type OfferCategory = 'call' | 'review' | 'rescue';

export interface Offer {
  id: 'call-30' | 'call-60' | 'review-pr' | 'review-app' | 'ai-rescue';
  category: OfferCategory;
  title: string;
  /** One sentence shown under the title. */
  tagline: string;
  /** Price in US dollars. Selar converts to the visitor's currency at checkout. */
  priceUsd: number;
  /** Short label for duration or delivery time. */
  detail: string;
  /** What the buyer gets. */
  includes: string[];
  /** Optional extra note shown under the list. */
  note?: string;
  link: string;
}

export const OFFERS: Offer[] = [
  {
    id: 'call-30',
    category: 'call',
    title: '30-minute call',
    tagline: 'A focused video call to get you unstuck.',
    priceUsd: 25,
    detail: '30 min on Google Meet',
    includes: [
      'A Flutter, web or backend bug you are stuck on',
      'A quick architecture or tooling decision',
      'AI features with Gemini or Vertex AI',
      'Smart contract or dApp questions, or tech career advice',
    ],
    link: LINKS.bookCall30,
  },
  {
    id: 'call-60',
    category: 'call',
    title: '60-minute deep dive',
    tagline: 'For problems that need real time together.',
    priceUsd: 40,
    detail: '60 min on Google Meet',
    includes: [
      'Walk through your codebase together',
      'Plan an app or backend architecture',
      'Review a smart contract design',
      'Scope an AI feature before you build it',
    ],
    link: LINKS.bookCall60,
  },
  {
    id: 'review-pr',
    category: 'review',
    title: 'Code review: one PR or feature',
    tagline: 'A written review of one pull request or feature.',
    priceUsd: 150,
    detail: 'Delivered in 3 working days',
    includes: [
      'Bugs, architecture and state management',
      'Performance and common security mistakes, like exposed keys',
      'Every issue ranked by how much it matters',
      'A suggested fix for each issue',
    ],
    link: LINKS.codeReviewPr,
  },
  {
    id: 'review-app',
    category: 'review',
    title: 'Code review: full app',
    tagline: 'A written review of your whole app, up to about 20,000 lines.',
    priceUsd: 400,
    detail: 'Delivered in 7 working days',
    includes: ['A written report on the whole codebase', 'A prioritised fix plan', 'A 30-minute walkthrough call'],
    note: 'Bigger codebase? Book a call and I will quote it.',
    link: LINKS.codeReviewApp,
  },
  {
    id: 'ai-rescue',
    category: 'rescue',
    title: 'AI-built app rescue',
    tagline: "For apps built with AI tools that now break, slow down or won't ship.",
    priceUsd: 300,
    detail: 'Diagnosis in 5 working days',
    includes: [
      'I read the code and run the app',
      'A plain explanation of what broke and why',
      'A ranked fix plan with effort estimates',
      'A 30-minute call to go through it',
    ],
    note: 'Fixes are quoted separately, from about $800.',
    link: LINKS.aiAppRescue,
  },
];

export const offerById = (id: Offer['id']): Offer => OFFERS.find((o) => o.id === id)!;

/** AI coding tools whose output I rescue. */
export const AI_TOOLS = ['Cursor', 'Claude Code', 'Lovable', 'Bolt', 'Replit', 'v0', 'FlutterFlow'];

/** Stacks I review and fix. */
export const STACKS = [
  'Flutter & Dart',
  'TypeScript',
  'Vue / Nuxt',
  'React / Next.js',
  'Node / NestJS',
  'Firebase',
  'Google Cloud',
  'Gemini & Vertex AI',
  'Solidity',
  'Solana (Rust, Anchor)',
];

export const formatUsd = (amount: number) => `$${amount.toLocaleString('en-US')}`;

export const CURRENCY_NOTE = 'Prices in USD. You can pay in your local currency at checkout.';
