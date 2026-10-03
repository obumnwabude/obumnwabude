<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick, watch } from 'vue';

interface Props {
  filters: string[];
  modelValue: string[];
  counts?: Record<string, number>;
  totalCount?: number;
  label?: string;
  sticky?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Filter content',
  sticky: true,
  counts: () => ({}),
  totalCount: 0,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void;
}>();

function toggle(filter: string) {
  const current = props.modelValue;
  const alreadyPicked = current.includes(filter);
  let next = alreadyPicked ? current.filter((f) => f !== filter) : [...current, filter];
  // Picking the last missing filter is semantically the same as "All" — collapse to empty.
  if (!alreadyPicked && next.length === props.filters.length) {
    next = [];
  }
  emit('update:modelValue', next);
}

function clearAll() {
  emit('update:modelValue', []);
}

const isAllActive = computed(() => props.modelValue.length === 0);
const activeCount = computed(() => props.modelValue.length);

function countFor(filter: string): number {
  return props.counts?.[filter] ?? 0;
}

const isPinned = ref(false);
const wrapperRef = ref<HTMLElement | null>(null);
const rowRef = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

function onPageScroll() {
  if (!wrapperRef.value || !props.sticky) return;
  const rect = wrapperRef.value.getBoundingClientRect();
  isPinned.value = rect.top <= 72;
}

function updateScrollEdges() {
  const row = rowRef.value;
  if (!row) {
    canScrollLeft.value = false;
    canScrollRight.value = false;
    return;
  }
  const SLACK = 2;
  canScrollLeft.value = row.scrollLeft > SLACK;
  canScrollRight.value = row.scrollLeft + row.clientWidth < row.scrollWidth - SLACK;
}

function scrollByDirection(dir: 'left' | 'right') {
  const row = rowRef.value;
  if (!row) return;
  const amount = Math.max(140, Math.round(row.clientWidth * 0.7));
  row.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
}

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  if (props.sticky) {
    window.addEventListener('scroll', onPageScroll, { passive: true });
    onPageScroll();
  }
  nextTick(updateScrollEdges);
  if (rowRef.value) {
    rowRef.value.addEventListener('scroll', updateScrollEdges, { passive: true });
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(updateScrollEdges);
      resizeObserver.observe(rowRef.value);
    }
  }
  window.addEventListener('resize', updateScrollEdges, { passive: true });
});

onUnmounted(() => {
  if (props.sticky) {
    window.removeEventListener('scroll', onPageScroll);
  }
  if (rowRef.value) {
    rowRef.value.removeEventListener('scroll', updateScrollEdges);
  }
  window.removeEventListener('resize', updateScrollEdges);
  if (resizeObserver) resizeObserver.disconnect();
});

watch(
  () => [props.filters, props.counts],
  () => nextTick(updateScrollEdges),
  { deep: true }
);
</script>

<template>
  <div
    ref="wrapperRef"
    class="content-filter-wrapper"
    :class="{ 'is-sticky': props.sticky, 'is-pinned': isPinned && props.sticky }"
    :aria-label="props.label"
    role="group"
  >
    <div class="content-filter-scroller">
      <Transition name="scroll-cue">
        <button
          v-if="canScrollLeft"
          type="button"
          class="scroll-cue scroll-cue-left"
          aria-label="Scroll filters left"
          tabindex="-1"
          @click="scrollByDirection('left')"
        >
          <span class="scroll-cue-arrow" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </span>
        </button>
      </Transition>

      <div class="content-filter-row" ref="rowRef">
        <button
          type="button"
          class="filter-pill filter-pill-all"
          :class="{ 'is-active': isAllActive }"
          @click="clearAll"
          :aria-pressed="isAllActive"
        >
          <span>All</span>
          <span class="pill-count">{{ isAllActive ? totalCount : activeCount }}</span>
        </button>
        <button
          v-for="filter in props.filters"
          :key="filter"
          type="button"
          class="filter-pill"
          :class="{
            'is-active': props.modelValue.includes(filter),
            'is-empty': countFor(filter) === 0,
          }"
          :disabled="countFor(filter) === 0"
          @click="toggle(filter)"
          :aria-pressed="props.modelValue.includes(filter)"
        >
          <span class="pill-check" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span>{{ filter }}</span>
          <span class="pill-count">{{ countFor(filter) }}</span>
        </button>
      </div>

      <Transition name="scroll-cue">
        <button
          v-if="canScrollRight"
          type="button"
          class="scroll-cue scroll-cue-right"
          aria-label="Scroll filters right"
          tabindex="-1"
          @click="scrollByDirection('right')"
        >
          <span class="scroll-cue-arrow" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </button>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.content-filter-wrapper {
  width: 100%;
  margin-bottom: 1.5rem;
  z-index: 40;
}

.content-filter-wrapper.is-sticky {
  position: sticky;
  top: 60px;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  background: transparent;
  transition:
    background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    backdrop-filter 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-filter-wrapper.is-sticky.is-pinned {
  background: var(--glass-tint);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--glass-border);
  border-top: none;
  border-radius: 0 0 14px 14px;
  box-shadow: 0 6px 18px rgb(0 0 0 / 6%);
  padding-left: 0.85rem;
  padding-right: 0.85rem;
}

@media (min-width: 768px) {
  .content-filter-wrapper.is-sticky {
    top: 64px;
  }
}

.content-filter-scroller {
  position: relative;
}

.content-filter-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0.25rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  overscroll-behavior-x: contain;
}

.content-filter-row::-webkit-scrollbar {
  display: none;
}

/* ── Edge scroll cues ───────────────────────────────────────────── */
.scroll-cue {
  position: absolute;
  top: 0;
  bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.35rem;
  width: 2.75rem;
  border: none;
  cursor: pointer;
  z-index: 2;
  color: var(--text);
  pointer-events: auto;
  background: transparent;
}

.scroll-cue-left {
  left: 0;
  justify-content: flex-start;
  background: linear-gradient(
    to right,
    var(--app-bg, #ffffff) 0%,
    rgb(from var(--app-bg, #ffffff) r g b / 92%) 45%,
    rgb(from var(--app-bg, #ffffff) r g b / 0%) 100%
  );
}

.scroll-cue-right {
  right: 0;
  justify-content: flex-end;
  background: linear-gradient(
    to left,
    var(--app-bg, #ffffff) 0%,
    rgb(from var(--app-bg, #ffffff) r g b / 92%) 45%,
    rgb(from var(--app-bg, #ffffff) r g b / 0%) 100%
  );
}

/* When the sticky bar is pinned, the fades should blend against the glass panel instead of the page bg */
.content-filter-wrapper.is-pinned .scroll-cue-left {
  background: linear-gradient(
    to right,
    var(--glass-tint) 0%,
    rgb(from var(--glass-tint) r g b / 92%) 45%,
    rgb(from var(--glass-tint) r g b / 0%) 100%
  );
}

.content-filter-wrapper.is-pinned .scroll-cue-right {
  background: linear-gradient(
    to left,
    var(--glass-tint) 0%,
    rgb(from var(--glass-tint) r g b / 92%) 45%,
    rgb(from var(--glass-tint) r g b / 0%) 100%
  );
}

.scroll-cue-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;
  background: rgb(from var(--text) r g b / 10%);
  border: 1px solid var(--glass-border);
  color: var(--text);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease, transform 0.2s ease;
}

.scroll-cue:hover .scroll-cue-arrow {
  color: var(--primary);
  border-color: rgb(from var(--primary) r g b / 32%);
  background: rgb(from var(--primary) r g b / 10%);
}

.scroll-cue-left .scroll-cue-arrow {
  animation: cue-bounce-left 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.scroll-cue-right .scroll-cue-arrow {
  animation: cue-bounce-right 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes cue-bounce-left {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-3px); }
}

@keyframes cue-bounce-right {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(3px); }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-cue-left .scroll-cue-arrow,
  .scroll-cue-right .scroll-cue-arrow {
    animation: none;
  }
}

.scroll-cue-enter-active,
.scroll-cue-leave-active {
  transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-cue-left.scroll-cue-enter-from,
.scroll-cue-left.scroll-cue-leave-to {
  opacity: 0;
  transform: translateX(-6px);
}

.scroll-cue-right.scroll-cue-enter-from,
.scroll-cue-right.scroll-cue-leave-to {
  opacity: 0;
  transform: translateX(6px);
}

/* ── Pills ────────────────────────────────────────────────────────── */
.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  white-space: nowrap;
  padding: 0.35rem 0.75rem 0.35rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid var(--glass-border);
  background: var(--glass-tint);
  color: var(--text);
  transition:
    background 0.22s ease,
    color 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    opacity 0.22s ease,
    transform 0.18s ease,
    padding 0.22s ease;
  flex-shrink: 0;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  scroll-snap-align: start;
}

.filter-pill:hover:not(.is-active):not(:disabled) {
  border-color: rgb(from var(--primary) r g b / 30%);
  background: rgb(from var(--primary) r g b / 6%);
  color: var(--primary);
  transform: translateY(-1px);
}

.filter-pill.is-active {
  background: var(--primary);
  color: #ffffff;
  border-color: var(--primary);
  box-shadow: 0 2px 10px rgb(from var(--primary) r g b / 30%);
}

.filter-pill.is-active:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgb(from var(--primary) r g b / 40%);
}

.filter-pill.is-empty,
.filter-pill:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  color: var(--gray);
}

/* Check mark animation - only shows on active (non-All) pills */
.pill-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateX(-4px) scale(0.7);
  transition:
    width 0.22s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.18s ease,
    transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.filter-pill:not(.filter-pill-all).is-active .pill-check {
  width: 14px;
  opacity: 1;
  transform: translateX(0) scale(1);
}

.pill-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.1rem;
  height: 1.1rem;
  padding: 0 0.35rem;
  border-radius: 9999px;
  background: rgb(from var(--text) r g b / 8%);
  color: var(--text);
  font-size: 0.68rem;
  font-weight: 700;
  line-height: 1;
  opacity: 0.8;
}

.filter-pill.is-active .pill-count {
  background: rgb(255 255 255 / 25%);
  color: #ffffff;
  opacity: 1;
}

.filter-pill.is-empty .pill-count {
  background: transparent;
  border: 1px dashed var(--glass-border);
  color: var(--gray);
}
</style>
