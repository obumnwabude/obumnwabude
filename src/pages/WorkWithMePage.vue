<script setup lang="ts">
import BookCall from '@/components/BookCall.vue';
import ContactMe from '@/components/ContactMe.vue';
import GlassCard from '@/components/GlassCard.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import { LINKS } from '@/content/links';
import { AI_TOOLS, CURRENCY_NOTE, formatUsd, OFFERS, STACKS, type OfferCategory } from '@/content/offers';
import IconFlower6P from '@/icons/IconFlower6P.vue';
import { trackEvent, trackSectionView } from '@/utils/analytics';
import { onMounted } from 'vue';

const years = new Date().getFullYear() - 2018;

const categoryLabels: Record<OfferCategory, string> = {
  call: '1:1 call',
  review: 'Code review',
  rescue: 'App rescue',
};

const steps = [
  {
    title: 'Pick an offer and pay',
    body: 'Choose a call, a review or a rescue on my Selar page. Calls let you pick a time on my calendar right there.',
  },
  {
    title: 'Send your code or question',
    body: `Write to ${LINKS.email} with your repo (or a zip), a short note on the problem and what you want out of it.`,
  },
  {
    title: 'Get your answer',
    body: 'We meet on Google Meet, or you get a written report with ranked fixes. Reviews and rescues come with a call to go through it.',
  },
];

const faqs = [
  {
    q: 'Which stacks do you cover?',
    a: `Flutter and Dart, TypeScript (Vue, Nuxt, React, Next.js, Node, NestJS), Firebase and Google Cloud, Gemini and Vertex AI, Solidity, and Solana with Rust and Anchor. Not sure if yours fits? Book a 30-minute call or send me a message.`,
  },
  {
    q: 'How do I share a private repo?',
    a: 'Invite my GitHub account (obumnwabude) as a read-only collaborator, or send a zip of the code. I am happy to sign an NDA first, just ask before you share.',
  },
  {
    q: 'What does "AI-built app" mean?',
    a: `Apps made mostly with AI coding tools such as ${AI_TOOLS.join(
      ', '
    )}. They often work at first and then break as they grow. I find the real causes and give you a fix plan you or I can follow.`,
  },
  {
    q: 'What happens after the diagnosis?',
    a: 'You get a ranked list of fixes with effort estimates. You can do them yourself with the plan, hand them to your team, or ask me to do them. Fixes are quoted separately, usually from about $800.',
  },
  {
    q: 'My codebase is bigger than 20,000 lines. Can you still review it?',
    a: 'Yes. Book a 30-minute call first so I can look at the size and shape of it, then I will send you a fixed quote.',
  },
  {
    q: 'When are calls available?',
    a: 'Tuesdays and Thursdays from 4pm to 9pm, and Saturdays from 10am to 4pm, Lagos time (WAT, UTC+1). The booking page shows every open slot.',
  },
  {
    q: 'Can I pay in my own currency, or in naira?',
    a: `Yes. Prices here are in US dollars, and Selar shows you the price in your currency at checkout. You can pay by card, and bank transfer is available too.`,
  },
  {
    q: 'Do you take on bigger projects?',
    a: 'Yes: MVP builds, Flutter apps, smart contracts and Web3 protocols, and AI systems on Google Cloud. Book a call first so we can scope it together.',
  },
];

const onFaqToggle = (q: string, e: Event) => {
  if ((e.target as HTMLDetailsElement).open) {
    trackEvent('faq_open', { question: q, page_path: '/work-with-me' });
  }
};

onMounted(() => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = (entry.target as HTMLElement).dataset.section;
          if (id) trackSectionView(id, '/work-with-me');
        }
      }
    },
    { threshold: 0.25 }
  );
  document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
});
</script>

<template>
  <h1 page-heading>WORK WITH ME</h1>
  <div page-intro class="wwm-page-intro">
    <p>
      I'm Obum. I have been building software for {{ years }} years: Flutter apps, web apps, cloud backends, AI features
      and smart contracts, for startups and teams in Nigeria and abroad.
    </p>
    <p>
      If you are stuck on a problem, want a second pair of eyes on your code, or built an app with AI tools that no
      longer works, here is how I can help. Pick an offer below and pay on my Selar page.
    </p>
    <div class="intro-ctas">
      <BookCall label="Book a call" location="wwm_intro" />
      <ContactMe label="Ask a question first" color="var(--primary)" location="wwm_intro" />
    </div>
  </div>

  <section data-section="offers" aria-labelledby="offers-heading">
    <h2 id="offers-heading">OFFERS &amp; PRICES</h2>
    <div class="offer-grid">
      <GlassCard
        v-for="(offer, idx) in OFFERS"
        :key="offer.id"
        :id="offer.id"
        as="article"
        variant="frost"
        :hoverable="true"
        :spotlight="true"
        class="offer-card"
        v-reveal="{ delay: (idx % 3) * 80 }"
      >
        <div class="offer-top">
          <span class="offer-cat">{{ categoryLabels[offer.category] }}</span>
          <span class="offer-detail">{{ offer.detail }}</span>
        </div>
        <h3 class="offer-title">{{ offer.title }}</h3>
        <p class="offer-tagline">{{ offer.tagline }}</p>
        <p class="offer-price">
          <span class="price">{{ formatUsd(offer.priceUsd) }}</span>
          <span class="price-unit">USD</span>
        </p>
        <ul class="offer-list">
          <li v-for="item in offer.includes" :key="item">
            <span class="check" aria-hidden="true">✓</span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <p v-if="offer.note" class="offer-note">{{ offer.note }}</p>
        <BookCall
          class="offer-cta"
          :label="offer.category === 'call' ? 'Pick a time' : 'Get started'"
          :href="offer.link"
          :offer-id="offer.id"
          location="wwm_offers"
        />
      </GlassCard>

      <GlassCard variant="frost" :hoverable="true" :spotlight="true" class="offer-card offer-card-custom" v-reveal>
        <div class="offer-top">
          <span class="offer-cat">Projects</span>
          <span class="offer-detail">Scoped together</span>
        </div>
        <h3 class="offer-title">Something bigger</h3>
        <p class="offer-tagline">
          MVP builds, Flutter apps, smart contracts and Web3 protocols, AI systems on Google Cloud, team training and
          talks.
        </p>
        <p class="offer-price"><span class="price price-quote">Custom quote</span></p>
        <ul class="offer-list">
          <li><span class="check" aria-hidden="true">✓</span><span>Start with a call to scope the work</span></li>
          <li><span class="check" aria-hidden="true">✓</span><span>Fixed price or hourly, your choice</span></li>
          <li><span class="check" aria-hidden="true">✓</span><span>Also available on Upwork</span></li>
        </ul>
        <div class="custom-ctas">
          <BookCall class="offer-cta" label="Book a call" offer-id="project" location="wwm_offers_custom" />
          <a
            :href="LINKS.upwork"
            target="_blank"
            rel="noopener noreferrer"
            outlined
            class="offer-cta"
            @click="() => trackEvent('upwork_profile_click', { trigger_location: 'wwm_offers_custom' })"
            >Hire me on Upwork</a
          >
        </div>
      </GlassCard>
    </div>
    <p class="currency-note">{{ CURRENCY_NOTE }}</p>
  </section>

  <section data-section="how_it_works" aria-labelledby="how-heading">
    <h2 id="how-heading">HOW IT WORKS</h2>
    <ol class="steps">
      <li v-for="(step, idx) in steps" :key="step.title" class="step" v-reveal="{ delay: idx * 90 }">
        <span class="step-num" aria-hidden="true">{{ idx + 1 }}</span>
        <div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-body">{{ step.body }}</p>
        </div>
      </li>
    </ol>
    <div class="stacks" v-reveal>
      <p class="stacks-label">Stacks I cover</p>
      <div class="chips">
        <span v-for="stack in STACKS" :key="stack" class="chip">{{ stack }}</span>
      </div>
      <p class="stacks-label">AI tools I rescue apps from</p>
      <div class="chips">
        <span v-for="tool in AI_TOOLS" :key="tool" class="chip">{{ tool }}</span>
      </div>
    </div>
  </section>

  <section data-section="testimonials" aria-labelledby="reviews-heading">
    <h2 id="reviews-heading">WHAT PEOPLE SAY</h2>
    <TestimonialsSection location="work_with_me" />
  </section>

  <section data-section="faq" aria-labelledby="faq-heading">
    <h2 id="faq-heading">QUESTIONS</h2>
    <div class="faq">
      <details
        v-for="faq in faqs"
        :key="faq.q"
        class="faq-item glass-surface glass-frost"
        @toggle="(e: Event) => onFaqToggle(faq.q, e)"
      >
        <summary>
          <span>{{ faq.q }}</span>
          <span class="faq-icon" aria-hidden="true">+</span>
        </summary>
        <p>{{ faq.a }}</p>
      </details>
    </div>
  </section>

  <div closing class="wwm-closing" v-reveal>
    <div class="closing-card glass-surface glass-frost">
      <span leading-flower><IconFlower6P color="var(--primary)" :size="32" :spin="true" :glow="true" /></span>
      <h2>READY WHEN YOU ARE</h2>
      <p text>Book a call, tell me what you are working on, and we will take it from there.</p>
      <div contact>
        <BookCall label="Book a call" location="wwm_closing" />
        <ContactMe color="var(--primary)" label="Contact Me" location="wwm_closing" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wwm-page-intro p {
  max-width: 760px;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.wwm-page-intro {
  margin-bottom: 4.5rem;
}

.intro-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

section {
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 6rem;
  scroll-margin-top: 5.5rem;
}

section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 2.25rem;
}

section h2::after {
  background: var(--gradient-divider);
  content: '';
  display: block;
  height: 2px;
  border-radius: 2px;
}

@media (max-width: 511.98px) {
  section h2::after {
    margin-top: 1rem;
    width: 100%;
  }
}

@media (min-width: 512px) {
  section h2 {
    display: flex;
    align-items: center;
  }

  section h2::after {
    flex-grow: 1;
    margin-left: 1.5rem;
  }
}

/* Offers */
.offer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .offer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1140px) {
  .offer-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.offer-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem 1.5rem;
  height: 100%;
  scroll-margin-top: 6rem;
}

.offer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.offer-cat {
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

.offer-detail {
  font-size: 0.78rem;
  opacity: 0.72;
  text-align: right;
}

.offer-title {
  font-size: 1.25rem;
  font-weight: 650;
  letter-spacing: -0.01em;
  margin-bottom: 0.4rem;
}

.offer-tagline {
  font-size: 0.93rem;
  line-height: 1.55;
  opacity: 0.88;
  margin-bottom: 1rem;
}

.offer-price {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--primary);
  line-height: 1;
}

.price-quote {
  font-size: 1.45rem;
}

.price-unit {
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.6;
}

.offer-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid var(--glass-border);
  padding-top: 1rem;
  margin-bottom: 1rem;
}

.offer-list li {
  display: flex;
  gap: 0.5rem;
  font-size: 0.87rem;
  line-height: 1.45;
  opacity: 0.92;
}

.check {
  color: var(--primary);
  font-weight: 700;
}

.offer-note {
  font-size: 0.82rem;
  font-style: italic;
  opacity: 0.75;
  margin-bottom: 1rem;
}

.offer-cta {
  margin-top: auto;
  width: 100%;
}

.custom-ctas {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.currency-note {
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.75;
  margin-top: 1.5rem;
}

/* How it works */
.steps {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 900px) {
  .steps {
    grid-template-columns: repeat(3, 1fr);
  }
}

.step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-num {
  flex-shrink: 0;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--primary-fg);
  background: var(--primary);
  box-shadow: var(--shadow-button-filled);
}

.step-title {
  font-size: 1.05rem;
  font-weight: 650;
  margin-bottom: 0.3rem;
}

.step-body {
  font-size: 0.93rem;
  line-height: 1.6;
  opacity: 0.88;
}

.stacks-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 0.6rem;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.chip {
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  background: var(--glass-tint);
  border: 1px solid var(--glass-border);
}

/* FAQ */
.faq {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 860px;
}

.faq-item {
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  padding: 0;
  box-shadow: var(--shadow-sm);
}

.faq-item summary {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  font-weight: 600;
  font-size: 0.98rem;
  cursor: pointer;
  border-radius: 16px;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.faq-icon {
  flex-shrink: 0;
  font-size: 1.35rem;
  line-height: 1;
  color: var(--primary);
  transition: transform 0.2s ease;
}

.faq-item[open] .faq-icon {
  transform: rotate(45deg);
}

.faq-item p {
  padding: 0 1.25rem 1.15rem;
  font-size: 0.93rem;
  line-height: 1.65;
  opacity: 0.9;
}

/* Closing */
.wwm-closing {
  padding-bottom: 5rem;
}

.closing-card {
  border-radius: 24px;
  padding: 3rem 2rem;
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  box-shadow: var(--shadow-glass);
}

.closing-card h2 {
  font-size: 1.85rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.closing-card [text] {
  font-size: 1.15rem;
  line-height: 1.65;
  margin: 0 auto 2rem;
  max-width: 520px;
  opacity: 0.9;
}

.closing-card [contact] {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

[leading-flower] {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 0.85rem;
}

[leading-flower]::before,
[leading-flower]::after {
  background-color: var(--glass-border);
  content: '';
  height: 1px;
  width: 4rem;
}

[leading-flower]::before {
  margin-right: 0.75rem;
}

[leading-flower]::after {
  margin-left: 0.75rem;
}

@media (prefers-reduced-motion: reduce) {
  .faq-icon {
    transition: none;
  }
}
</style>
