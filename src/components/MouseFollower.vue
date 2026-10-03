<script setup lang="ts">
import IconFlower6P from '@/icons/IconFlower6P.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const isTouchDevice = ref(false);
const isVisible = ref(false);
const isHoveringInteractive = ref(false);
const isMouseDown = ref(false);
const followerRef = ref<HTMLElement | null>(null);
const cursorDotRef = ref<HTMLElement | null>(null);
const cursorRingRef = ref<HTMLElement | null>(null);

let mouseX = -500;
let mouseY = -500;
let lastEventTarget: HTMLElement | null = null;
let currentX = -500;
let currentY = -500;
let targetScale = 1;
let currentScale = 1;
let rafId: number | null = null;
let pendingInteractiveCheck = false;

const INTERACTIVE_SELECTOR =
  'a, button, [action], .glass-card, .p-menuitem-content, input, textarea, select, .project-card, .article-card, [role="button"], [clickable]';

const onMouseMove = (e: MouseEvent) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  lastEventTarget = e.target as HTMLElement | null;
  pendingInteractiveCheck = true;
  if (!isVisible.value) isVisible.value = true;

  if (cursorDotRef.value) {
    cursorDotRef.value.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }
};

const onMouseDownHandler = () => {
  isMouseDown.value = true;
};

const onMouseUpHandler = () => {
  isMouseDown.value = false;
};

const onMouseLeave = () => {
  isVisible.value = false;
};

const onMouseEnter = () => {
  isVisible.value = true;
};

const tick = () => {
  if (pendingInteractiveCheck && lastEventTarget) {
    const interactive = lastEventTarget.closest(INTERACTIVE_SELECTOR);
    const nextInteractive = Boolean(interactive);
    if (nextInteractive !== isHoveringInteractive.value) {
      isHoveringInteractive.value = nextInteractive;
    }
    pendingInteractiveCheck = false;
  }

  const ease = 0.16;
  currentX += (mouseX - currentX) * ease;
  currentY += (mouseY - currentY) * ease;

  targetScale = isHoveringInteractive.value ? 1.3 : 1;
  currentScale += (targetScale - currentScale) * 0.12;

  if (followerRef.value) {
    followerRef.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${currentScale.toFixed(
      3
    )})`;
  }

  if (cursorRingRef.value) {
    cursorRingRef.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
  }

  rafId = requestAnimationFrame(tick);
};

onMounted(() => {
  if (typeof window === 'undefined') return;
  if (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(hover: none)').matches ||
    window.matchMedia('(max-width: 767.98px)').matches
  ) {
    isTouchDevice.value = true;
    return;
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  window.addEventListener('mousedown', onMouseDownHandler, { passive: true });
  window.addEventListener('mouseup', onMouseUpHandler, { passive: true });
  document.addEventListener('mouseleave', onMouseLeave);
  document.addEventListener('mouseenter', onMouseEnter);

  rafId = requestAnimationFrame(tick);
});

onUnmounted(() => {
  if (typeof window === 'undefined') return;
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mousedown', onMouseDownHandler);
  window.removeEventListener('mouseup', onMouseUpHandler);
  document.removeEventListener('mouseleave', onMouseLeave);
  document.removeEventListener('mouseenter', onMouseEnter);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<template>
  <template v-if="!isTouchDevice">
    <!-- Ambient radiant wash behind glass cards -->
    <div
      ref="followerRef"
      class="mouse-follower"
      :class="{ 'is-active': isVisible, 'is-interactive': isHoveringInteractive }"
      aria-hidden="true"
    >
      <div class="follower-ambient"></div>
      <div class="follower-core"></div>
    </div>

    <!-- Custom Viewport Mouse Pointer with Bespoke Iridescent Branding -->
    <div
      class="custom-cursor-layer"
      :class="{
        'is-active': isVisible,
        'is-interactive': isHoveringInteractive,
        'is-down': isMouseDown,
      }"
      aria-hidden="true"
    >
      <!-- Center Dot with Chromatic Glow -->
      <div ref="cursorDotRef" class="custom-cursor-dot"></div>

      <!-- Outer Iridescent Trailing Ring with Always-Present Brand 6P Flower -->
      <div ref="cursorRingRef" class="custom-cursor-ring">
        <div class="cursor-sheen-ring"></div>
        <!-- 6P flower brand mark: always present, blooms slightly larger on hover -->
        <span class="cursor-flower-glyph">
          <IconFlower6P color="var(--primary)" :size="16" :spin="true" />
        </span>
      </div>
    </div>
  </template>
</template>

<style scoped>
/* Ambient Backlight Follower */
.mouse-follower {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1; /* Sits beneath interactive elements, illuminating glass cards */
  opacity: 0;
  will-change: transform, opacity;
  transition: opacity 0.35s ease;
  contain: layout style;
}

.mouse-follower.is-active {
  opacity: 1;
}

.follower-ambient {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  top: -200px;
  left: -200px;
  background: radial-gradient(circle at center, rgb(from var(--primary) r g b / 10%) 0%, transparent 65%);
  filter: blur(45px);
  transform: translateZ(0);
}

body.dark .follower-ambient {
  background: radial-gradient(circle at center, rgb(from var(--primary) r g b / 14%) 0%, transparent 65%);
  filter: blur(50px);
}

.follower-core {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: -50px;
  background: radial-gradient(circle at center, rgb(from var(--primary) r g b / 16%) 0%, transparent 70%);
  filter: blur(18px);
  transform: translateZ(0);
  transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body.dark .follower-core {
  background: radial-gradient(circle at center, rgb(from var(--primary) r g b / 22%) 0%, transparent 70%);
  filter: blur(20px);
}

.mouse-follower.is-interactive .follower-core {
  transform: scale(1.3);
}

/* ================================================================
   Custom Viewport Cursor System with Bespoke Brand Touch
   ================================================================ */
.custom-cursor-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 99999;
  opacity: 0;
  transition: opacity 0.25s ease;
}

@media (pointer: coarse) or (hover: none) {
  .custom-cursor-layer {
    display: none !important;
  }
}

.custom-cursor-layer.is-active {
  opacity: 1;
}

.custom-cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--primary);
  box-shadow: 0 0 8px rgb(from var(--primary) r g b / 75%);
  pointer-events: none;
  will-change: transform;
  transition: width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.2s ease, opacity 0.2s ease;
}

.custom-cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1.5px solid rgb(from var(--primary) r g b / 65%);
  opacity: 0.75;
  pointer-events: none;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  transition: width 0.26s cubic-bezier(0.16, 1, 0.3, 1), height 0.26s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.2s ease, background-color 0.25s ease, opacity 0.2s ease;
}

/* Rotating iridescent sheen orbit */
.cursor-sheen-ring {
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  border: 1px dashed rgb(from var(--primary) r g b / 35%);
  animation: cursorSheenSpin 8s linear infinite;
  pointer-events: none;
  opacity: 0.6;
}

@keyframes cursorSheenSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Always-present 6P flower mark */
.cursor-flower-glyph {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.65;
  transform: scale(0.9);
  transition: transform 0.26s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, filter 0.25s ease;
}

/* Hovering interactive items: ring expands moderately (not too wide) and flower blooms larger */
.custom-cursor-layer.is-interactive .custom-cursor-ring {
  width: 44px;
  height: 44px;
  opacity: 0.85;
  background-color: rgb(from var(--primary) r g b / 10%);
  border-color: var(--primary);
  box-shadow: 0 0 14px rgb(from var(--primary) r g b / 25%), inset 0 0 6px rgb(from var(--primary) r g b / 12%);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.custom-cursor-layer.is-interactive .custom-cursor-dot {
  width: 6px;
  height: 6px;
  opacity: 0.95;
}

.custom-cursor-layer.is-interactive .cursor-flower-glyph {
  opacity: 0.95;
  transform: scale(1.3);
  filter: drop-shadow(0 0 6px rgb(from var(--primary) r g b / 60%));
}

/* Mouse Down Press feedback */
.custom-cursor-layer.is-down .custom-cursor-ring {
  width: 26px;
  height: 26px;
  opacity: 0.95;
  box-shadow: 0 0 16px rgb(from var(--primary) r g b / 50%);
}

.custom-cursor-layer.is-down .custom-cursor-dot {
  width: 4px;
  height: 4px;
}

.custom-cursor-layer.is-down .cursor-flower-glyph {
  transform: scale(0.75);
  opacity: 0.8;
}
</style>
