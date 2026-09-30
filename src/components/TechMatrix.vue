<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue';

const pillars = [
  {
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="m12 10.5 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"/><path d="m19 4 .5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5.5-1.2z"/></svg>`,
    title: 'Cloud & Generative AI',
    subtitle: 'Autonomous Agents & Multimodal Intelligence',
    description:
      'Designing robust agentic pipelines, LLM-orchestrated systems, and cloud-native backends using the Gemini API, Vertex AI, and Google Cloud Platform.',
    skills: ['Gemini API', 'Vertex AI', 'Agentic Workflows', 'GCP', 'Python', 'Cloud Run'],
  },
  {
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
    title: 'Mobile Architecture',
    subtitle: 'Cross-Platform & Offline-First',
    description:
      'Crafting silky-smooth, native-grade applications with Flutter & Dart. Extensive experience with reactive state management, offline sync, and custom platform channels.',
    skills: ['Flutter', 'Dart', 'Bloc / Riverpod', 'Offline Sync', 'iOS / Android', 'Animations'],
  },
  {
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
    title: 'Web3 & Blockchain',
    subtitle: 'Solana SVM & EVM Smart Contracts',
    description:
      'Architecting resilient on-chain programs on Solana with Rust/Anchor and EVM networks with Solidity. Specializing in prediction markets, DeFi protocols, and cross-chain bridges.',
    skills: ['Solana', 'Rust / Anchor', 'EVM / Solidity', 'Wormhole', 'Web3.js', 'dApps'],
  },
  {
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    title: 'Full-Stack & Systems',
    subtitle: 'Modern Web & Scalable Backends',
    description:
      'Building performant web applications and distributed APIs with Vue.js, React, TypeScript, and Node.js. Obsessed with sub-second response times and delightful user experience.',
    skills: ['Vue.js', 'React', 'TypeScript', 'Node.js', 'REST & GraphQL', 'PostgreSQL'],
  },
];
</script>

<template>
  <div class="tech-matrix-container">
    <div class="tech-matrix-grid">
      <GlassCard
        v-for="(pillar, idx) in pillars"
        :key="pillar.title"
        variant="frost"
        :hoverable="true"
        :spotlight="true"
        class="pillar-card"
        v-reveal="{ delay: idx * 90 }"
      >
        <div class="pillar-inner">
          <div class="pillar-header">
            <div class="pillar-icon-box" v-html="pillar.iconSvg"></div>
            <div>
              <h3 class="pillar-title">{{ pillar.title }}</h3>
              <span class="pillar-subtitle">{{ pillar.subtitle }}</span>
            </div>
          </div>

          <p class="pillar-desc">{{ pillar.description }}</p>

          <div class="pillar-skills">
            <span v-for="skill in pillar.skills" :key="skill" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </GlassCard>
    </div>
  </div>
</template>

<style scoped>
.tech-matrix-container {
  margin: 0 auto 3.5rem;
  max-width: 1440px;
}

.tech-matrix-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .tech-matrix-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.pillar-card {
  padding: 2rem 1.75rem;
  height: 100%;
}

.pillar-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.pillar-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.pillar-icon-box {
  width: 3rem;
  height: 3rem;
  border-radius: 14px;
  background: rgb(from var(--primary) r g b / 12%);
  border: 1px solid rgb(from var(--primary) r g b / 25%);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgb(from var(--primary) r g b / 15%);
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.pillar-card:hover .pillar-icon-box {
  transform: scale(1.08) rotate(3deg);
  background: rgb(from var(--primary) r g b / 18%);
}

.pillar-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1.2;
  margin-bottom: 0.25rem;
}

.pillar-subtitle {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--primary);
  letter-spacing: 0.02em;
}

.pillar-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text);
  opacity: 0.88;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.pillar-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.skill-tag {
  background: rgb(from var(--text) r g b / 6%);
  border: 1px solid var(--glass-border);
  color: var(--text);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.pillar-card:hover .skill-tag {
  border-color: rgb(from var(--primary) r g b / 30%);
}

.skill-tag:hover {
  background: rgb(from var(--primary) r g b / 12%);
  color: var(--primary);
}
</style>
