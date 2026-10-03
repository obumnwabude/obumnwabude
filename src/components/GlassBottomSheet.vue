<script setup lang="ts">
import IconClose from '@/icons/IconClose.vue';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps<{
  open: boolean;
  title?: string;
  badge?: string;
}>();

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void;
  (e: 'close'): void;
}>();

const isMounted = ref(false);
const didPushState = ref(false);

const close = () => {
  emit('update:open', false);
  emit('close');
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.open) {
    close();
  }
};

const handlePopState = () => {
  if (props.open) {
    close();
  }
};

watch(
  () => props.open,
  (isOpen) => {
    if (typeof document === 'undefined') return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Push a fake history entry so back button closes sheet instead of navigating
      if (typeof window !== 'undefined' && typeof window.history !== 'undefined') {
        window.history.pushState({ sheetOpen: true }, '');
        didPushState.value = true;
      }
    } else {
      document.body.style.overflow = '';
      // Clean up fake history entry if we pushed one
      if (didPushState.value) {
        didPushState.value = false;
        // Only go back if current state is our fake one (avoid double-back)
        if (typeof window !== 'undefined' && window.history.state?.sheetOpen) {
          window.history.back();
        }
      }
    }
  }
);

onMounted(() => {
  isMounted.value = true;
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('popstate', handlePopState);
});

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('popstate', handlePopState);
  }
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
});
</script>

<template>
  <Teleport to="body" v-if="isMounted">
    <Transition name="sheet-fade">
      <div v-if="open" class="glass-sheet-backdrop" @click="close" aria-hidden="true"></div>
    </Transition>

    <Transition name="sheet-slide">
      <div v-if="open" class="glass-sheet-container" role="dialog" aria-modal="true" :aria-label="title || 'Details'">
        <div class="glass-sheet-panel glass-surface glass-frost">
          <!-- Mobile Pull Handle -->
          <div class="sheet-handle-bar" @click="close">
            <span class="sheet-handle"></span>
          </div>

          <div class="sheet-header">
            <div class="sheet-header-meta">
              <span v-if="badge" class="sheet-badge">{{ badge }}</span>
              <h3 v-if="title" class="sheet-title">{{ title }}</h3>
            </div>

            <button type="button" class="sheet-close-btn" @click="close" aria-label="Close">
              <IconClose />
            </button>
          </div>

          <div class="sheet-body">
            <slot />
          </div>

          <div v-if="$slots.footer" class="sheet-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.glass-sheet-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.glass-sheet-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
}

@media (min-width: 768px) {
  .glass-sheet-container {
    align-items: center;
    padding: 2rem;
  }
}

.glass-sheet-panel {
  pointer-events: auto;
  width: 100vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  background: var(--popover-bg);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border-top: 1px solid var(--glass-border);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -12px 48px rgba(0, 0, 0, 0.45);
  overflow: hidden;
}

@media (min-width: 768px) {
  .glass-sheet-panel {
    width: 100%;
    max-width: 680px;
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45);
    max-height: 80vh;
  }
}

.sheet-handle-bar {
  display: flex;
  justify-content: center;
  padding: 0.75rem 0 0.25rem 0;
  cursor: pointer;
}

@media (min-width: 768px) {
  .sheet-handle-bar {
    display: none;
  }
}

.sheet-handle {
  width: 44px;
  height: 4px;
  border-radius: 999px;
  background: rgb(from var(--text) r g b / 25%);
}

.sheet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--glass-border);
  flex-shrink: 0;
  gap: 1rem;
}

.sheet-header-meta {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  overflow: hidden;
}

.sheet-badge {
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary);
  background: rgb(from var(--primary) r g b / 10%);
  border: 1px solid rgb(from var(--primary) r g b / 25%);
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
}

.sheet-title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sheet-close-btn {
  background: rgb(from var(--text) r g b / 6%);
  border: 1px solid var(--glass-border);
  color: var(--text);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.sheet-close-btn:hover {
  background: rgb(from var(--primary) r g b / 15%);
  border-color: var(--primary);
  color: var(--primary);
  transform: rotate(90deg);
}

.sheet-body {
  flex-grow: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sheet-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--glass-border);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  flex-wrap: wrap-reverse;
  flex-shrink: 0;
  background: rgb(from var(--app-bg) r g b / 50%);
}

/* Transitions */
.sheet-fade-enter-active,
.sheet-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.sheet-fade-enter-from,
.sheet-fade-leave-to {
  opacity: 0;
}

.sheet-slide-enter-active,
.sheet-slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.sheet-slide-enter-from,
.sheet-slide-leave-to {
  transform: translateY(100%);
}

@media (min-width: 768px) {
  .sheet-slide-enter-from,
  .sheet-slide-leave-to {
    transform: translateY(20px) scale(0.97);
    opacity: 0;
  }
}
</style>
