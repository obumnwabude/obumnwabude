<script setup lang="ts">
import { trackNavClick } from '@/utils/analytics';

// Learn → Build → Write → Speak → Mentor. A dot travels the path and each
// stop lights up as it passes. Build, Write and Speak link to their pages.
const steps = [
  { label: 'Learn', note: 'Every day', icon: 'book' },
  { label: 'Build', note: 'Projects', icon: 'code', to: '/projects' },
  { label: 'Write', note: 'Articles', icon: 'pen', to: '/articles' },
  { label: 'Speak', note: 'Talks', icon: 'mic', to: '/community' },
  { label: 'Mentor', note: 'Community', icon: 'users' },
] as const;

const icons: Record<string, string> = {
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
};

// Wavy line through the five stop centres (10%, 30%, 50%, 70%, 90% of the width).
const path = 'M100 32 C150 4 250 60 300 32 S450 4 500 32 S650 60 700 32 S850 4 900 32';
</script>

<template>
  <nav class="journey" aria-label="How I work: learn, build, write, speak, mentor">
    <svg class="journey-line" viewBox="0 0 1000 64" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path :d="path" class="track" pathLength="100" />
      <path :d="path" class="flow" pathLength="100" />
      <path :d="path" class="traveller" pathLength="100" />
    </svg>

    <ol class="journey-steps">
      <li v-for="(step, i) in steps" :key="step.label" :style="{ '--i': i }">
        <component
          :is="'to' in step ? 'router-link' : 'div'"
          v-bind="'to' in step ? { to: step.to } : {}"
          class="stop"
          @click="'to' in step && trackNavClick(step.label, 'journey_path')"
        >
          <span class="node">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              v-html="icons[step.icon]"
            ></svg>
          </span>
          <span class="label">{{ step.label }}</span>
          <span class="note">{{ step.note }}</span>
        </component>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.journey {
  --cycle: 8s;
  position: relative;
  margin: 2.5rem auto 5rem;
  max-width: 960px;
}

.journey-line {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 64px;
  overflow: visible;
  pointer-events: none;
}

.journey-line path {
  fill: none;
  vector-effect: non-scaling-stroke;
}

.track {
  stroke: rgb(from var(--primary) r g b / 14%);
  stroke-width: 6;
  stroke-linecap: round;
}

.flow {
  stroke: rgb(from var(--primary) r g b / 45%);
  stroke-width: 1.5;
  stroke-dasharray: 1 1.6;
  animation: journey-flow 6s linear infinite;
}

/* A zero-length dash with a round cap is a dot; moving the offset slides it along the path. */
.traveller {
  stroke: var(--accent-cyan);
  stroke-width: 9;
  stroke-linecap: round;
  stroke-dasharray: 0 100;
  filter: drop-shadow(0 0 6px rgb(from var(--accent-cyan) r g b / 80%));
  animation: journey-travel var(--cycle) linear infinite;
}

.journey-steps {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;
}

.stop {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--text);
  text-decoration: none;
  border-radius: 16px;
  padding-bottom: 0.25rem;
}

.node {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  margin-top: calc(32px - 1.5rem);
  border-radius: 50%;
  color: var(--primary);
  background: var(--glass-tint);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  animation: journey-light var(--cycle) ease-out infinite;
  animation-delay: calc(var(--i) * var(--cycle) * 0.1875);
  transition: transform 0.2s ease;
}

a.stop:hover .node,
a.stop:focus-visible .node {
  transform: translateY(-3px);
  border-color: var(--primary);
}

a.stop:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 4px;
}

.label {
  margin-top: 0.6rem;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}

.note {
  font-size: 0.8rem;
  color: var(--gray);
}

a.stop .label {
  text-decoration: underline;
  text-decoration-color: rgb(from var(--primary) r g b / 35%);
  text-underline-offset: 4px;
}

@keyframes journey-flow {
  to {
    stroke-dashoffset: -26;
  }
}

/* Dot travels 0 → 100% in the first 75% of the cycle, then fades out and restarts. */
@keyframes journey-travel {
  0% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
  4% {
    opacity: 1;
  }
  75% {
    stroke-dashoffset: -100;
    opacity: 1;
  }
  85%,
  100% {
    stroke-dashoffset: -100;
    opacity: 0;
  }
}

/* Each stop glows briefly as the dot reaches it. */
@keyframes journey-light {
  0% {
    box-shadow: 0 0 0 0 rgb(from var(--accent-cyan) r g b / 55%), 0 6px 20px rgba(0, 0, 0, 0.08);
    border-color: var(--accent-cyan);
  }
  12% {
    box-shadow: 0 0 0 10px rgb(from var(--accent-cyan) r g b / 0%), 0 6px 20px rgba(0, 0, 0, 0.08);
    border-color: var(--glass-border);
  }
  100% {
    box-shadow: 0 0 0 0 rgb(from var(--accent-cyan) r g b / 0%), 0 6px 20px rgba(0, 0, 0, 0.08);
  }
}

@media (max-width: 511.98px) {
  .node {
    width: 2.5rem;
    height: 2.5rem;
    margin-top: calc(32px - 1.25rem);
  }

  .node svg {
    width: 16px;
    height: 16px;
  }

  .label {
    font-size: 0.8rem;
  }

  .note {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .flow,
  .node {
    animation: none;
  }

  .traveller {
    display: none;
  }
}
</style>
