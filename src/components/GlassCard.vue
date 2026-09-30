<script setup lang="ts">
import { ref, computed } from 'vue';

export interface GlassCardProps {
  variant?: 'frost' | 'refract' | 'dense' | 'solid';
  hoverable?: boolean;
  spotlight?: boolean;
  borderBeam?: boolean;
  tilt?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<GlassCardProps>(), {
  variant: 'frost',
  hoverable: true,
  spotlight: true,
  borderBeam: false,
  tilt: false,
  as: 'div',
});

const cardRef = ref<HTMLElement | null>(null);
const isHovered = ref(false);
const tiltTransform = ref('');

const variantClass = computed(() => `glass-${props.variant}`);

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return;
  const rect = cardRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  cardRef.value.style.setProperty('--spotlight-x', `${x}px`);
  cardRef.value.style.setProperty('--spotlight-y', `${y}px`);

  if (props.tilt) {
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    tiltTransform.value = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  }
}

function handleMouseEnter() {
  isHovered.value = true;
}

function handleMouseLeave() {
  isHovered.value = false;
  tiltTransform.value = '';
}
</script>

<template>
  <component
    :is="props.as"
    ref="cardRef"
    class="glass-card glass-surface"
    :class="[
      variantClass,
      {
        'glass-hover-lift': hoverable,
        'glass-border-beam': borderBeam,
        'has-spotlight': spotlight,
        'is-hovered': isHovered,
      },
    ]"
    :style="{ transform: tiltTransform ? tiltTransform : undefined }"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Top-Down Specular Light Sheen -->
    <span class="glass-sheen" aria-hidden="true"></span>

    <!-- Cursor Following Spotlight Glow -->
    <span v-if="spotlight" class="glass-spotlight-glow" aria-hidden="true"></span>

    <!-- Content slot with isolated stacking layer -->
    <div class="glass-content">
      <slot />
    </div>
  </component>
</template>

<style scoped>
.glass-card {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition:
    transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1),
    border-color 260ms ease,
    box-shadow 260ms ease;
}

.glass-content {
  position: relative;
  z-index: 2;
  height: 100%;
}

/* Dynamic Cursor-Following Spotlight Glow */
.glass-spotlight-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  transition: opacity 300ms ease;
  background: radial-gradient(
    380px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
    rgb(from var(--primary) r g b / 9%),
    transparent 65%
  );
}

body.dark .glass-spotlight-glow {
  background: radial-gradient(
    380px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
    rgb(from var(--primary) r g b / 7%),
    transparent 65%
  );
}

.glass-card.is-hovered .glass-spotlight-glow {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .glass-card {
    transform: none !important;
  }
}
</style>
