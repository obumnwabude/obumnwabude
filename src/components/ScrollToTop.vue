<script setup lang="ts">
import { useGlobalScroll } from '@/composables/useGlobalScroll';
import { trackScrollToTop } from '@/utils/analytics';
import { onMounted, ref } from 'vue';

const isVisible = ref(false);

// Progress ring: fills as the page is scrolled (0 at top, full at bottom).
const RADIUS = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const progress = ref(0);

const checkScroll = () => {
  if (typeof window === 'undefined') return;
  const next = window.scrollY > 280;
  if (next !== isVisible.value) isVisible.value = next;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
};

const scrollToTop = () => {
  if (typeof window === 'undefined') return;
  const scrollY = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const percent = total > 0 ? (scrollY / total) * 100 : 0;
  trackScrollToTop(scrollY, percent, window.location.pathname);
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  checkScroll();
});

useGlobalScroll(checkScroll);
</script>

<template>
  <button
    @click="scrollToTop"
    class="scroll-to-top-btn"
    :class="{ 'is-visible': isVisible }"
    aria-label="Scroll to top of page"
    title="Scroll to top"
  >
    <div class="btn-glow-ring"></div>
    <svg class="progress-ring" viewBox="0 0 48 48" aria-hidden="true">
      <circle class="progress-track" cx="24" cy="24" :r="RADIUS" />
      <circle
        class="progress-value"
        cx="24"
        cy="24"
        :r="RADIUS"
        :stroke-dasharray="CIRCUMFERENCE"
        :stroke-dashoffset="CIRCUMFERENCE * (1 - progress)"
      />
    </svg>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="scroll-icon"
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>
</template>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: clamp(1.5rem, 3.5vw, 2.5rem);
  right: max(1.5rem, calc((100vw - 1440px) / 2 + 1.5rem));
  z-index: 45;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 1px solid var(--glass-border);
  background: var(--glass-tint);
  backdrop-filter: blur(10px) saturate(140%);
  -webkit-backdrop-filter: blur(10px) saturate(140%);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(16px) scale(0.85);
  pointer-events: none;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1), transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
    visibility 0.28s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

body.dark .scroll-to-top-btn {
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.scroll-to-top-btn.is-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.scroll-to-top-btn:hover {
  background: rgb(from var(--primary) r g b / 16%);
  border-color: rgb(from var(--primary) r g b / 50%);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.18), 0 0 16px rgb(from var(--primary) r g b / 35%);
  transform: translateY(-3px) scale(1.05);
}

.scroll-to-top-btn:active {
  transform: translateY(0) scale(0.96);
}

.scroll-icon {
  transition: transform 0.2s ease;
}

.scroll-to-top-btn:hover .scroll-icon {
  transform: translateY(-2px);
}

.progress-ring {
  position: absolute;
  inset: -3px;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  transform: rotate(-90deg);
  pointer-events: none;
  overflow: visible;
}

.progress-ring circle {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.5;
}

.progress-track {
  opacity: 0.15;
}

.progress-value {
  stroke-linecap: round;
  transition: stroke-dashoffset 0.15s linear;
}

@media (prefers-reduced-motion: reduce) {
  .scroll-to-top-btn {
    transition: opacity 0.2s ease;
  }

  .progress-value {
    transition: none;
  }
}
</style>
