<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue';
import IconFlower6P from '@/icons/IconFlower6P.vue';

const years = new Date().getFullYear() - 2018;

const metrics = [
  {
    number: `${years}+`,
    label: 'Years Building',
    description: 'Engineering resilient production applications & cloud backends',
  },
  {
    number: 'GDE',
    label: 'Google Developer Expert',
    description: 'Official global recognition in Cloud AI & Dart/Flutter',
  },
  {
    number: '25+',
    label: 'Tech Talks & Workshops',
    description: 'Conferences, summits, university sessions & hackathons',
  },
  {
    number: '30+',
    label: 'Published Articles',
    description: 'Deep dives on CSS-Tricks, freeCodeCamp, LogRocket & Medium',
  },
];
</script>

<template>
  <div class="metrics-container" v-reveal>
    <div class="metrics-grid">
      <GlassCard
        v-for="(metric, idx) in metrics"
        :key="metric.label"
        variant="frost"
        :hoverable="true"
        :spotlight="true"
        class="metric-card"
        v-reveal="{ delay: idx * 80 }"
      >
        <div class="metric-inner">
          <div class="metric-top">
            <span class="metric-number">{{ metric.number }}</span>
            <span class="metric-flower">
              <IconFlower6P color="var(--primary)" :size="20" :spin="true" />
            </span>
          </div>
          <h3 class="metric-label">{{ metric.label }}</h3>
          <p class="metric-desc">{{ metric.description }}</p>
        </div>
      </GlassCard>
    </div>
  </div>
</template>

<style scoped>
.metrics-container {
  margin: 3.5rem auto 4.5rem;
  max-width: 1440px;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
}

@media (min-width: 600px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

.metric-card {
  padding: 1.75rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.metric-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.metric-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.metric-number {
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--text);
}

.metric-flower {
  opacity: 0.7;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.metric-card:hover .metric-flower {
  opacity: 1;
  transform: scale(1.15);
}

.metric-label {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.metric-desc {
  font-size: 0.875rem;
  color: var(--gray);
  line-height: 1.5;
  margin: 0;
  margin-top: auto;
}
</style>
