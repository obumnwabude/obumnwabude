<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

export interface TimelineItem {
  id: string | number;
  date?: {
    month?: number;
    year: number;
  };
}

const props = defineProps<{
  items: TimelineItem[];
}>();

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

// State
const isVisible = ref(false);
const isDragging = ref(false);
const isHighVelocity = ref(false);
const scrollRatio = ref(0); // 0 to 1
const activeDate = ref<{ month?: number; year: number } | null>(null);

const trackRef = ref<HTMLElement | null>(null);
let hideTimer: number | undefined;
let velocityTimer: number | undefined;
let lastY = 0;
let lastTime = 0;
let lastYearCrossed = 0;

// Filter out items without date and precompute positions
const validItems = computed(() =>
  props.items.filter((item): item is TimelineItem & { date: { year: number; month?: number } } =>
    Boolean(item.date?.year)
  )
);

// Map unique years to their relative index on the timeline rail
const yearMarkers = computed(() => {
  if (!validItems.value.length) return [];
  const yearsMap = new Map<number, number>();

  validItems.value.forEach((item, index) => {
    if (item.date.year && !yearsMap.has(item.date.year)) {
      yearsMap.set(item.date.year, index);
    }
  });

  const total = Math.max(1, validItems.value.length - 1);
  return Array.from(yearsMap.entries()).map(([year, index]) => ({
    year,
    ratio: index / total,
    index,
  }));
});

// Format display label intelligently:
// High velocity (fast scrub) -> Year only (e.g. "2024") to prevent flickering
// Normal / slow -> "Nov 2024"
const displayDateLabel = computed(() => {
  if (!activeDate.value) return '';
  const { month, year } = activeDate.value;
  if (!year) return '';

  if (isHighVelocity.value || !month) {
    return `${year}`;
  }
  return `${monthNames[month - 1]} ${year}`;
});

function showBriefly() {
  isVisible.value = true;
  if (hideTimer) clearTimeout(hideTimer);
  if (!isDragging.value) {
    hideTimer = window.setTimeout(() => {
      isVisible.value = false;
    }, 1800);
  }
}

// Update scrubber thumb on natural page scroll
function updateOnScroll() {
  if (isDragging.value || !validItems.value.length) return;

  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
  scrollRatio.value = ratio;

  // Viewport focal point: ~30% from the top
  const focalPoint = window.innerHeight * 0.3;
  let active = validItems.value[0];

  for (let i = 0; i < validItems.value.length; i++) {
    const item = validItems.value[i];
    const el = document.getElementById(`timeline-item-${item.id}`);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= focalPoint) {
        active = item;
      } else {
        break;
      }
    }
  }

  if (active) {
    activeDate.value = active.date;
  }

  showBriefly();
}

// Pointer & Scrub Handlers
function onPointerDown(e: PointerEvent) {
  isDragging.value = true;
  isVisible.value = true;
  if (hideTimer) clearTimeout(hideTimer);

  const target = e.currentTarget as HTMLElement;
  try {
    target.setPointerCapture(e.pointerId);
  } catch (_) {}

  lastY = e.clientY;
  lastTime = performance.now();
  handleDrag(e.clientY, false);
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging.value) return;

  const now = performance.now();
  const dt = now - lastTime;
  const dy = Math.abs(e.clientY - lastY);

  if (dt > 16) {
    const velocity = dy / dt; // px per ms
    isHighVelocity.value = velocity > 1.2;

    if (velocityTimer) clearTimeout(velocityTimer);
    velocityTimer = window.setTimeout(() => {
      isHighVelocity.value = false;
    }, 180);

    lastY = e.clientY;
    lastTime = now;
  }

  handleDrag(e.clientY, false);
}

function onPointerUp(e: PointerEvent) {
  if (!isDragging.value) return;
  isDragging.value = false;
  isHighVelocity.value = false;

  const target = e.currentTarget as HTMLElement;
  try {
    target.releasePointerCapture(e.pointerId);
  } catch (_) {}

  showBriefly();
}

function handleDrag(clientY: number, isSmooth: boolean = false) {
  if (!trackRef.value || !validItems.value.length) return;

  const rect = trackRef.value.getBoundingClientRect();
  const clampedY = Math.max(0, Math.min(rect.height, clientY - rect.top));
  const ratio = clampedY / rect.height;
  scrollRatio.value = ratio;

  const total = validItems.value.length - 1;
  const targetIndex = Math.min(total, Math.max(0, Math.round(ratio * total)));
  const targetItem = validItems.value[targetIndex];

  if (targetItem) {
    activeDate.value = targetItem.date;

    // Haptic vibration on crossing year boundaries
    if (targetItem.date?.year && targetItem.date.year !== lastYearCrossed) {
      lastYearCrossed = targetItem.date.year;
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }

    scrollToItem(targetItem.id, isSmooth);
  }
}

function scrollToItem(id: string | number, isSmooth: boolean = false) {
  const el = document.getElementById(`timeline-item-${id}`);
  if (!el) return;

  const headerOffset = window.innerWidth >= 768 ? 90 : 75;
  const targetY = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: isSmooth ? 'smooth' : 'auto',
  });
}

function jumpToYear(markerRatio: number, itemId: string | number, e: MouseEvent) {
  e.stopPropagation();
  scrollRatio.value = markerRatio;
  scrollToItem(itemId, true);
  showBriefly();
}

onMounted(() => {
  window.addEventListener('scroll', updateOnScroll, { passive: true });
  if (validItems.value.length > 0) {
    activeDate.value = validItems.value[0].date;
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateOnScroll);
  if (hideTimer) clearTimeout(hideTimer);
  if (velocityTimer) clearTimeout(velocityTimer);
});
</script>

<template>
  <aside
    class="timeline-scroller"
    :class="{ 'is-active': isVisible || isDragging }"
    aria-label="Timeline Navigation"
  >
    <!-- Scrubber Track & Rail -->
    <div
      ref="trackRef"
      class="scrubber-track"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
    >
      <!-- Rail line -->
      <div class="rail-line"></div>

      <!-- Year Tick Markers along the Rail -->
      <div
        v-for="marker in yearMarkers"
        :key="marker.year"
        class="year-tick"
        :style="{ top: `${marker.ratio * 100}%` }"
        :title="`Jump to ${marker.year}`"
        @click="(e) => jumpToYear(marker.ratio, validItems[marker.index].id, e)"
      >
        <span class="tick-mark"></span>
        <span class="tick-label">{{ marker.year }}</span>
      </div>

      <!-- Scrubber Thumb with Floating Contextual Date Bubble -->
      <div
        class="scrubber-thumb"
        :class="{ dragging: isDragging }"
        :style="{ top: `${scrollRatio * 100}%` }"
      >
        <!-- Floating Google-Photos-style Date Bubble -->
        <div
          v-if="displayDateLabel"
          class="date-bubble"
          :class="{ 'high-velocity': isHighVelocity }"
        >
          <span class="bubble-text">{{ displayDateLabel }}</span>
        </div>

        <!-- Touch/Drag Handle Pill -->
        <div class="thumb-handle">
          <span class="handle-grip"></span>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.timeline-scroller {
  position: fixed;
  right: max(0.6rem, calc((100vw - 1440px) / 2 + 0.6rem));
  top: 14%;
  bottom: 14%;
  width: 2.75rem;
  z-index: 900;
  user-select: none;
  touch-action: none;
  opacity: 0;
  transform: translateX(10px);
  transition:
    opacity 0.28s cubic-bezier(0.2, 0, 0, 1),
    transform 0.28s cubic-bezier(0.2, 0, 0, 1);
  pointer-events: none;
}

.timeline-scroller.is-active,
.timeline-scroller:hover {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.scrubber-track {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

/* Background vertical rail */
.rail-line {
  position: absolute;
  right: 0.65rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: rgb(from var(--text) r g b / 12%);
  border-radius: 2px;
}

/* Year Ticks */
.year-tick {
  position: absolute;
  right: 0.4rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 0;
}

.tick-mark {
  width: 8px;
  height: 2px;
  background-color: var(--gray);
  border-radius: 1px;
  opacity: 0.55;
  transition:
    background-color 0.2s ease,
    width 0.2s ease,
    opacity 0.2s ease;
}

.tick-label {
  position: absolute;
  right: 1.35rem;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--gray);
  opacity: 0;
  transform: translateX(4px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    color 0.2s ease;
  white-space: nowrap;
}

.timeline-scroller:hover .tick-label,
.timeline-scroller.is-active .tick-label {
  opacity: 0.85;
  transform: translateX(0);
}

.year-tick:hover .tick-mark {
  background-color: var(--primary);
  width: 14px;
  opacity: 1;
}

.year-tick:hover .tick-label {
  color: var(--primary);
  font-weight: 600;
  opacity: 1;
}

/* Scrubber Thumb */
.scrubber-thumb {
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: grab;
}

.scrubber-thumb.dragging {
  cursor: grabbing;
}

.thumb-handle {
  width: 1.25rem;
  height: 2.75rem;
  background-color: var(--primary);
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgb(from var(--primary) r g b / 45%);
  transition: transform 0.16s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scrubber-thumb:hover .thumb-handle,
.scrubber-thumb.dragging .thumb-handle {
  transform: scale(1.15);
}

.handle-grip {
  width: 3px;
  height: 12px;
  background-color: var(--app-bg);
  border-radius: 2px;
  opacity: 0.85;
}

/*
 * Theme-Aware Contextual Date Bubble
 * Frosted glass container adapting to both light and dark modes
 */
.date-bubble {
  position: absolute;
  right: calc(100% + 0.85rem);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 5.5rem;
  padding: 0.45rem 1rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  pointer-events: none;
  background-color: rgb(from var(--app-bg) r g b / 88%);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  color: var(--text);
  border: 1px solid rgb(from var(--text) r g b / 16%);
  box-shadow: 0 6px 20px rgb(0 0 0 / 18%);
  transition:
    transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

/* Light mode specific styling */
body:not(.dark) .date-bubble {
  box-shadow:
    0 8px 24px rgb(16 30 159 / 14%),
    0 2px 6px rgb(0 0 0 / 6%);
  border-color: rgb(from var(--primary) r g b / 25%);
}

/* Dark mode glow */
body.dark .date-bubble {
  box-shadow:
    0 8px 24px rgb(0 0 0 / 65%),
    0 0 12px rgb(from var(--primary) r g b / 22%);
  border-color: rgb(from var(--primary) r g b / 38%);
}

/* Fast-velocity pill expansion */
.date-bubble.high-velocity {
  transform: scale(1.12);
  background-color: var(--primary);
  color: var(--app-bg);
  border-color: var(--primary);
  box-shadow: 0 8px 28px rgb(from var(--primary) r g b / 50%);
}

.scrubber-thumb.dragging .date-bubble {
  transform: scale(1.08);
}

.scrubber-thumb.dragging .date-bubble.high-velocity {
  transform: scale(1.16);
}

/* Mobile responsive styles */
@media (max-width: 767.98px) {
  .timeline-scroller {
    right: 0.4rem;
    top: 16%;
    bottom: 16%;
  }

  .tick-label {
    display: none;
  }

  .thumb-handle {
    width: 1rem;
    height: 2.2rem;
  }

  .date-bubble {
    font-size: 0.75rem;
    padding: 0.35rem 0.75rem;
    min-width: 4rem;
  }
}
</style>
