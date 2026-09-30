<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import GlassCard from '@/components/GlassCard.vue';
import { trackServiceInquiryClick } from '@/utils/analytics';

const services = [
  {
    badge: '0-to-1 Product Build',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    title: 'MVP Architecture & Engineering',
    description:
      'Translating ambitious product visions into production-grade, highly resilient web and mobile applications with battle-tested system architecture and rapid iteration cycles.',
    highlights: [
      'Rapid prototype-to-production engineering',
      'Cross-platform Flutter apps with 60fps polish',
      'Cloud-native backends on GCP & Cloud Run',
      'Offline-first sync & reactive state patterns',
    ],
    tags: ['Flutter', 'Dart', 'Vue.js', 'Node.js', 'GCP'],
    cta: 'Discuss Your MVP',
  },
  {
    badge: 'Decentralized Systems',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Smart Contracts & Web3 Protocols',
    description:
      'Architecting battle-tested on-chain programs on Solana and EVM networks with bespoke indexers, automated testing harnesses, and seamless frontend integrations.',
    highlights: [
      'Solana program dev with Rust & Anchor',
      'EVM smart contracts with Solidity & Foundry',
      'Prediction markets & DeFi liquidity primitives',
      'Cross-chain bridges (Wormhole) & wallet UX',
    ],
    tags: ['Solana', 'Rust / Anchor', 'Solidity', 'Wormhole', 'dApps'],
    cta: 'Architect Web3 Solution',
  },
  {
    badge: 'GDE & Strategic Advisory',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'AI Systems, Keynotes & Advisory',
    description:
      'Designing multimodal Generative AI agent pipelines, delivering global conference keynotes, and providing fractional technical advisory to engineering leadership.',
    highlights: [
      'Agentic AI pipelines with Gemini & Vertex AI',
      'International developer keynotes & masterclasses',
      'Architecture audits & technical roadmap advisory',
      'Engineering mentorship & team upskilling',
    ],
    tags: ['Gemini API', 'Vertex AI', 'Cloud AI', 'Keynotes', 'Advisory'],
    cta: 'Book Keynote or Advisory',
  },
];
</script>

<template>
  <div class="services-container">
    <div class="services-grid">
      <GlassCard
        v-for="(service, idx) in services"
        :key="service.title"
        variant="frost"
        :hoverable="true"
        :spotlight="true"
        class="service-card"
        v-reveal="{ delay: idx * 90 }"
        @mouseenter.once="() => trackServiceInquiryClick(service.title, service.badge)"
      >
        <div class="service-inner">
          <div class="service-meta-top">
            <div class="service-icon" v-html="service.icon"></div>
            <span class="service-badge">{{ service.badge }}</span>
          </div>

          <div class="service-content-body">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-desc">{{ service.description }}</p>
          </div>

          <div class="service-details-box">
            <ul class="service-highlights">
              <li v-for="item in service.highlights" :key="item">
                <span class="check-bullet">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="service-tags">
              <span v-for="t in service.tags" :key="t" class="service-tag">{{ t }}</span>
            </div>

            <div class="service-action-row">
              <ContactMe
                :label="service.cta"
                color="var(--primary)"
                class="service-card-cta"
                :location="'service_' + service.title.toLowerCase().replace(/[^a-z0-9]+/g, '_')"
              />
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  </div>
</template>

<style scoped>
.services-container {
  margin: 0 auto 3.5rem;
  max-width: 1440px;
}

/* Progressive Responsive Grid:
   1 column below tablet (< 768px) with centered max-width constraint
   2 columns on tablet & medium screens (768px to 1139px)
   3 columns on widescreen (>= 1140px) */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.25rem;
}

@media (max-width: 767.98px) {
  .service-card {
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1140px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service-card {
  padding: 2rem 1.75rem;
  height: 100%;
}

.service-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-meta-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.service-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 14px;
  background: rgb(from var(--primary) r g b / 8%);
  border: 1px solid rgb(from var(--primary) r g b / 18%);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
  flex-shrink: 0;
}

.service-card:hover .service-icon {
  transform: scale(1.06);
  background: rgb(from var(--primary) r g b / 14%);
  border-color: rgb(from var(--primary) r g b / 28%);
}

.service-badge {
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

.service-title {
  font-size: 1.22rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1.3;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.service-desc {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text);
  opacity: 0.88;
  margin-bottom: 1.25rem;
}

.service-details-box {
  margin-top: auto;
  border-top: 1px solid var(--glass-border);
  padding-top: 1.1rem;
}

.service-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1.1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.service-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.45;
  color: var(--text);
  opacity: 0.9;
}

.check-bullet {
  color: var(--primary);
  font-weight: 700;
  line-height: 1.2;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.service-tag {
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  background: rgb(from var(--text) r g b / 5%);
  border: 1px solid var(--glass-border);
  color: var(--text);
  opacity: 0.82;
}

.service-action-row {
  margin-top: 1.15rem;
  padding-top: 0.85rem;
  border-top: 1px dashed var(--glass-border);
}

.service-card-cta {
  display: block;
}

.service-card-cta :deep(button) {
  width: 100%;
  justify-content: center;
  font-size: 0.8125rem;
  height: 2.15rem;
  padding: 0 0.85rem;
  opacity: 0.9;
  transition: opacity 0.2s ease, transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

.service-card-cta :deep(button:hover) {
  opacity: 1;
}

/* Tablet refinement: Card 3 spans 2 columns gracefully with balanced 2-column layout */
@media (min-width: 768px) and (max-width: 1139.98px) {
  .service-card:nth-child(3) {
    grid-column: span 2;
  }

  .service-card:nth-child(3) .service-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    align-items: center;
  }

  .service-card:nth-child(3) .service-meta-top {
    grid-column: 1;
    margin-bottom: 0.75rem;
  }

  .service-card:nth-child(3) .service-content-body {
    grid-column: 1;
  }

  .service-card:nth-child(3) .service-details-box {
    grid-column: 2;
    grid-row: 1 / span 2;
    margin-top: 0;
    border-top: none;
    border-left: 1px solid var(--glass-border);
    padding-top: 0;
    padding-left: 2rem;
  }
}

.services-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  padding: 1.5rem;
}

@media (min-width: 600px) {
  .services-cta {
    flex-direction: row;
    gap: 1.5rem;
  }
}

.cta-prompt {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text);
  opacity: 0.95;
}
</style>
