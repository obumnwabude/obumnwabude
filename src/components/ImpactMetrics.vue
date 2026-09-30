<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue';
import { articles } from '@/content/articles';
import { community } from '@/content/community';
import IconFlower6P from '@/icons/IconFlower6P.vue';
import IconCode from '@/icons/IconCode.vue';
import IconAward from '@/icons/IconAward.vue';
import IconPresentation from '@/icons/IconPresentation.vue';
import IconDocument from '@/icons/IconDocument.vue';
import { onMounted, onUnmounted, ref } from 'vue';

// Dynamic calculation of years building snapping from 2018
const currentYear = new Date().getFullYear();
const yearsTarget = Math.max(1, currentYear - 2018);

// Band of latest fives helper: rounds down to nearest multiple of 5
const bandOfFives = (count: number) => Math.max(5, Math.floor(count / 5) * 5);

const talksTarget = bandOfFives(community.length);
const articlesTarget = bandOfFives(articles.length);

interface MetricItem {
  id: string;
  targetNum?: number;
  suffix?: string;
  text?: string;
  label: string;
  description: string;
}

const metrics: MetricItem[] = [
  {
    id: 'years',
    targetNum: yearsTarget,
    suffix: '+',
    label: 'Years Building',
    description: 'Engineering resilient production applications & cloud backends',
  },
  {
    id: 'gde',
    text: 'GDE',
    label: 'Google Developer Expert',
    description: 'Official global recognition in Cloud AI & Dart/Flutter',
  },
  {
    id: 'talks',
    targetNum: talksTarget,
    suffix: '+',
    label: 'Tech Talks & Workshops',
    description: 'Conferences, summits, university sessions & hackathons',
  },
  {
    id: 'articles',
    targetNum: articlesTarget,
    suffix: '+',
    label: 'Published Articles',
    description: 'Deep dives on CSS-Tricks, freeCodeCamp, LogRocket & Medium',
  },
];

const metricIcons: Record<string, any> = {
  years: IconCode,
  gde: IconAward,
  talks: IconPresentation,
  articles: IconDocument,
};

const containerRef = ref<HTMLElement | null>(null);
const isClient = ref(false);
const hasAnimated = ref(false);

const displayedValues = ref<Record<string, number>>({
  years: yearsTarget,
  talks: talksTarget,
  articles: articlesTarget,
});

const getDisplayValue = (metric: MetricItem) => {
  if (metric.text) return metric.text;
  if (!isClient.value) return metric.targetNum;
  return displayedValues.value[metric.id] ?? metric.targetNum ?? 0;
};

const animateMetrics = () => {
  if (hasAnimated.value) return;
  hasAnimated.value = true;

  metrics.forEach((metric, index) => {
    if (metric.targetNum === undefined) return;
    const target = metric.targetNum;
    const duration = 1200 + index * 100;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic curve for smooth decelerating rolling count
      const ease = 1 - Math.pow(1 - progress, 3);
      displayedValues.value[metric.id] = Math.round(ease * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        displayedValues.value[metric.id] = target;
      }
    };

    setTimeout(() => {
      requestAnimationFrame(step);
    }, index * 80);
  });
};

let observerInstance: IntersectionObserver | null = null;

onMounted(() => {
  isClient.value = true;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    hasAnimated.value = true;
    return;
  }

  // Initialize display to 0 on client before intersection fires
  displayedValues.value = {
    years: 0,
    talks: 0,
    articles: 0,
  };

  observerInstance = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animateMetrics();
          observerInstance?.disconnect();
          break;
        }
      }
    },
    { threshold: 0.15 }
  );

  if (containerRef.value) {
    observerInstance.observe(containerRef.value);
  }
});

onUnmounted(() => {
  if (observerInstance) {
    observerInstance.disconnect();
  }
});
</script>

<template>
  <div ref="containerRef" class="metrics-container" v-reveal>
    <div class="metrics-grid">
      <GlassCard
        v-for="(metric, idx) in metrics"
        :key="metric.label"
        variant="frost"
        :hoverable="true"
        :spotlight="true"
        class="metric-card"
        :class="{ 'has-rolled': hasAnimated }"
        :style="{ '--card-stagger': `${idx * 90}ms` }"
        v-reveal="{ delay: idx * 80 }"
      >
        <div class="metric-inner">
          <div class="metric-top">
            <span class="metric-number">
              <span class="metric-val">{{ getDisplayValue(metric) }}</span>
              <span class="metric-plus" v-if="metric.suffix">{{ metric.suffix }}</span>
            </span>
            <span class="metric-icon-wrap" aria-hidden="true">
              <component :is="metricIcons[metric.id]" :size="20" color="var(--primary)" />
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
  display: inline-flex;
  align-items: baseline;
  font-variant-numeric: tabular-nums;
  perspective: 800px;
}

.metric-val {
  display: inline-block;
  will-change: transform, opacity;
}

.metric-card.has-rolled .metric-val {
  animation: rollInPlace 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--card-stagger, 0ms);
}

.metric-plus {
  color: var(--primary);
  margin-left: 2px;
  font-size: 1.85rem;
  font-weight: 600;
  display: inline-block;
}

.metric-card.has-rolled .metric-plus {
  animation: popInPlus 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: calc(var(--card-stagger, 0ms) + 260ms);
}

@keyframes rollInPlace {
  0% {
    opacity: 0;
    transform: translateY(18px) rotateX(-30deg);
    filter: blur(4px);
  }
  60% {
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

@keyframes popInPlus {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(4px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.metric-icon-wrap {
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 12px;
  background: rgb(from var(--primary) r g b / 8%);
  border: 1px solid rgb(from var(--primary) r g b / 18%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
  flex-shrink: 0;
}

.metric-card:hover .metric-icon-wrap {
  transform: scale(1.08);
  background: rgb(from var(--primary) r g b / 14%);
  border-color: rgb(from var(--primary) r g b / 28%);
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
