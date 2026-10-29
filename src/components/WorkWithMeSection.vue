<script setup lang="ts">
import BookCall from '@/components/BookCall.vue';
import GlassCard from '@/components/GlassCard.vue';
import { AI_TOOLS, CURRENCY_NOTE, formatUsd, offerById, type Offer } from '@/content/offers';
import IconRight from '@/icons/IconRight.vue';
import { trackNavClick, trackServiceInquiryClick } from '@/utils/analytics';

interface Group {
  key: string;
  badge: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
  chips?: string[];
  options: { offer: Offer; label: string; sub: string; cta: string }[];
  highlight?: string;
}

const groups: Group[] = [
  {
    key: 'calls',
    badge: 'From $25',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
    title: '1:1 calls',
    description: 'Pick a time that suits you and we talk it through on Google Meet.',
    points: ['Bugs, architecture and tooling choices', 'AI features, smart contracts and dApps', 'Tech career advice'],
    options: [
      { offer: offerById('call-30'), label: '30-minute call', sub: 'Get unstuck fast', cta: 'Book 30 min' },
      {
        offer: offerById('call-60'),
        label: '60-minute deep dive',
        sub: 'Code walkthroughs and planning',
        cta: 'Book 60 min',
      },
    ],
  },
  {
    key: 'review',
    badge: 'Written review',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>`,
    title: 'Code review',
    description: 'I read your code and send back a clear report with fixes, ranked by how much they matter.',
    points: [
      'Bugs, architecture and state management',
      'Performance and security mistakes',
      'A suggested fix for every issue',
    ],
    options: [
      { offer: offerById('review-pr'), label: 'One PR or feature', sub: '3 working days', cta: 'Get a PR review' },
      {
        offer: offerById('review-app'),
        label: 'Full app, up to ~20k lines',
        sub: '7 working days + call',
        cta: 'Get an app review',
      },
    ],
  },
  {
    key: 'rescue',
    badge: 'Diagnosis + fix plan',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    title: 'AI-built app rescue',
    description: "Built your app with an AI tool and now it breaks, slows down or won't ship? I find out why.",
    points: [
      'I read the code and run the app',
      'A plain explanation of what broke',
      'A ranked fix plan and a 30-minute call',
    ],
    chips: AI_TOOLS,
    options: [
      {
        offer: offerById('ai-rescue'),
        label: 'Diagnosis and fix plan',
        sub: 'Fixes from about $800',
        cta: 'Rescue my app',
      },
    ],
  },
];
</script>

<template>
  <div class="wwm">
    <p class="wwm-intro">
      Book time with me, get your code reviewed, or get your AI-built app working again. Flutter, web, backend, Cloud AI
      and Web3.
    </p>

    <div class="wwm-grid">
      <GlassCard
        v-for="(group, idx) in groups"
        :key="group.key"
        variant="frost"
        :hoverable="true"
        :spotlight="true"
        class="wwm-card"
        :class="{ 'is-highlight': group.highlight }"
        v-reveal="{ delay: idx * 90 }"
        @mouseenter.once="() => trackServiceInquiryClick(group.title, 'work_with_me')"
      >
        <div class="wwm-inner">
          <div class="wwm-top">
            <div class="wwm-icon" v-html="group.icon" aria-hidden="true"></div>
            <span class="wwm-badge">{{ group.highlight ?? group.badge }}</span>
          </div>

          <h3 class="wwm-title">{{ group.title }}</h3>
          <p class="wwm-desc">{{ group.description }}</p>

          <ul class="wwm-points">
            <li v-for="point in group.points" :key="point">
              <span class="check" aria-hidden="true">✓</span>
              <span>{{ point }}</span>
            </li>
          </ul>

          <div v-if="group.chips" class="wwm-chips" aria-label="AI tools covered">
            <span v-for="chip in group.chips" :key="chip" class="wwm-chip">{{ chip }}</span>
          </div>

          <div class="wwm-options">
            <div v-for="option in group.options" :key="option.offer.id" class="wwm-option">
              <div class="wwm-option-text">
                <span class="wwm-option-label">{{ option.label }}</span>
                <span class="wwm-option-sub">{{ option.sub }}</span>
              </div>
              <span class="wwm-price">{{ formatUsd(option.offer.priceUsd) }}</span>
              <BookCall
                class="wwm-cta"
                :label="option.cta"
                :href="option.offer.link"
                :offer-id="option.offer.id"
                :filled="group.options.length === 1 || option.offer.id === group.options[0].offer.id"
                :icon="false"
                location="home_work_with_me"
              />
            </div>
          </div>
        </div>
      </GlassCard>
    </div>

    <div class="wwm-foot">
      <p class="wwm-note">{{ CURRENCY_NOTE }}</p>
      <div class="wwm-foot-links">
        <router-link
          to="/work-with-me"
          outlined
          class="wwm-more"
          @click="() => trackNavClick('Work With Me details', 'work_with_me')"
        >
          <span>How it works, FAQ and reviews</span>
          <IconRight class="wwm-more-icon" />
        </router-link>
        <a href="#services" class="wwm-bigger" @click="() => trackNavClick('Bigger project', 'work_with_me')">
          Bigger project? MVPs, smart contracts and AI systems
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wwm {
  max-width: 1440px;
  margin: 0 auto;
}

.wwm-intro {
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 720px;
  margin-bottom: 2.5rem;
  opacity: 0.92;
}

.wwm-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (max-width: 767.98px) {
  .wwm-card {
    max-width: 560px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  .wwm-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1140px) {
  .wwm-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.wwm-card {
  padding: 2rem 1.75rem 1.5rem;
  height: 100%;
}

@media (max-width: 511.98px) {
  .wwm-card {
    padding: 1.6rem 1.25rem 1.1rem;
  }
}

.wwm-card.is-highlight {
  border-color: rgb(from var(--primary) r g b / 35%);
  box-shadow: var(--shadow-glass), 0 0 0 1px rgb(from var(--primary) r g b / 12%);
}

.wwm-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.wwm-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.35rem;
}

.wwm-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 14px;
  background: rgb(from var(--primary) r g b / 8%);
  border: 1px solid rgb(from var(--primary) r g b / 18%);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.wwm-card:hover .wwm-icon {
  transform: scale(1.06);
}

.wwm-badge {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  background: rgb(from var(--primary) r g b / 7%);
  border: 1px solid rgb(from var(--primary) r g b / 18%);
  color: var(--primary);
  white-space: nowrap;
}

.is-highlight .wwm-badge {
  background: var(--primary);
  color: var(--primary-fg);
  border-color: transparent;
}

.wwm-title {
  font-size: 1.3rem;
  font-weight: 650;
  letter-spacing: -0.01em;
  margin-bottom: 0.5rem;
}

.wwm-desc {
  font-size: 0.95rem;
  line-height: 1.65;
  opacity: 0.88;
  margin-bottom: 1.25rem;
}

.wwm-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-bottom: 1.35rem;
}

.wwm-points li {
  display: flex;
  gap: 0.5rem;
  font-size: 0.85rem;
  line-height: 1.45;
  opacity: 0.9;
}

.check {
  color: var(--primary);
  font-weight: 700;
}

.wwm-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.wwm-chip {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.18rem 0.5rem;
  border-radius: 6px;
  background: rgb(from var(--text) r g b / 5%);
  border: 1px solid var(--glass-border);
  opacity: 0.85;
}

.wwm-options {
  margin-top: auto;
  border-top: 1px solid var(--glass-border);
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column;
}

.wwm-option {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'text price'
    'cta cta';
  align-items: center;
  gap: 0.7rem 0.75rem;
  padding: 0.95rem 0;
}

.wwm-option + .wwm-option {
  border-top: 1px dashed var(--glass-border);
}

.wwm-option-text {
  grid-area: text;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.wwm-option-label {
  font-size: 0.92rem;
  font-weight: 600;
}

.wwm-option-sub {
  font-size: 0.78rem;
  opacity: 0.72;
}

.wwm-price {
  grid-area: price;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--primary);
}

.wwm-cta {
  grid-area: cta;
  width: 100%;
  height: 2.2rem;
  font-size: 0.82rem;
}

.wwm-foot {
  margin-top: 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.wwm-note {
  font-size: 0.85rem;
  opacity: 0.75;
}

.wwm-foot-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem 1.5rem;
}

.wwm-more-icon {
  width: 0.95rem;
}

.wwm-bigger {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--primary);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.wwm-bigger:focus-visible,
.wwm-more:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
}

/* Tablet: third card spans both columns */
@media (min-width: 768px) and (max-width: 1139.98px) {
  .wwm-card:nth-child(3) {
    grid-column: span 2;
  }
}
</style>
