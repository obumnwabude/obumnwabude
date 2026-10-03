<script setup lang="ts">
import IconClose from '@/icons/IconClose.vue';
import IconExternalLink from '@/icons/IconExternalLink.vue';
import type { ActionIcon, CodingProject, ContentAction } from '@/types';
import { trackProjectActionClick } from '@/utils/analytics';
import { onBeforeUnmount, onMounted, ref, watch, type Component } from 'vue';

// Icon mapping for action buttons
import IconApple from '@/icons/IconApple.vue';
import IconGithub from '@/icons/IconGithub.vue';
import IconGooglePlay from '@/icons/IconGooglePlay.vue';
import IconRocket from '@/icons/IconRocket.vue';
import IconTicket from '@/icons/IconTicket.vue';
import IconZap from '@/icons/IconZap.vue';

const actionIcons: Partial<Record<ActionIcon, Component>> = {
  apple: IconApple,
  externallink: IconExternalLink,
  github: IconGithub,
  googleplay: IconGooglePlay,
  rocket: IconRocket,
  ticket: IconTicket,
  zap: IconZap,
};

const getActionIcon = (icon?: ActionIcon): Component => (icon && actionIcons[icon]) || IconExternalLink;

const props = defineProps<{
  open: boolean;
  project?: CodingProject | null;
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

const handleActionClick = (action: ContentAction) => {
  if (props.project) {
    trackProjectActionClick(
      props.project.title,
      action.title,
      action.link,
      false,
      props.project.tags || [],
      action.icon
    );
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
      // Push a fake history entry so back button closes drawer instead of navigating
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
    <Transition name="drawer-fade">
      <div v-if="open" class="glass-drawer-backdrop" @click="close" aria-hidden="true"></div>
    </Transition>

    <Transition name="drawer-slide">
      <aside
        v-if="open && project"
        class="glass-drawer-panel glass-surface glass-frost"
        role="dialog"
        aria-modal="true"
        :aria-label="project.title"
      >
        <div class="drawer-header">
          <div class="drawer-header-meta">
            <span v-if="project.category" class="drawer-category-badge">
              {{ project.category }}
            </span>
            <span v-if="project.status" class="drawer-status-badge">
              <span class="status-pulse-dot" aria-hidden="true"></span>
              {{ project.status }}
            </span>
          </div>

          <button type="button" class="drawer-close-btn" @click="close" aria-label="Close Project Details">
            <IconClose />
          </button>
        </div>

        <div class="drawer-content">
          <!-- Hero Banner Image -->
          <div class="drawer-image-wrap">
            <img
              :src="`/assets/${project.image.name}.${project.image.png ? 'png' : 'jpg'}`"
              :alt="project.image.alt || project.title"
              class="drawer-image"
            />
          </div>

          <!-- Title & Role -->
          <div class="drawer-title-block">
            <h2 class="drawer-title">{{ project.title }}</h2>
            <p v-if="project.role" class="drawer-role">{{ project.role }}</p>
          </div>

          <!-- Tags -->
          <div v-if="(project.expandedTags || project.tags)?.length" class="drawer-tags">
            <span v-for="tag of project.expandedTags || project.tags" :key="tag" class="drawer-tag">
              {{ tag }}
            </span>
          </div>

          <!-- Description Prose -->
          <div class="drawer-section">
            <h3 class="drawer-section-title">Overview</h3>
            <p class="drawer-prose">
              {{ project.longDescription || project.description }}
            </p>
          </div>

          <!-- Architecture Pillars -->
          <div v-if="project.architecture" class="drawer-section">
            <h3 class="drawer-section-title">System Architecture</h3>
            <div class="architecture-grid">
              <div v-if="project.architecture.frontend?.length" class="arch-col">
                <span class="arch-label">Frontend</span>
                <div class="arch-pills">
                  <span v-for="item of project.architecture.frontend" :key="item" class="arch-pill">
                    {{ item }}
                  </span>
                </div>
              </div>

              <div v-if="project.architecture.backend?.length" class="arch-col">
                <span class="arch-label">Backend & Services</span>
                <div class="arch-pills">
                  <span v-for="item of project.architecture.backend" :key="item" class="arch-pill">
                    {{ item }}
                  </span>
                </div>
              </div>

              <div v-if="project.architecture.blockchainOrAi?.length" class="arch-col">
                <span class="arch-label">Blockchain / Smart Contracts</span>
                <div class="arch-pills">
                  <span v-for="item of project.architecture.blockchainOrAi" :key="item" class="arch-pill highlight">
                    {{ item }}
                  </span>
                </div>
              </div>

              <div v-if="project.architecture.infrastructure?.length" class="arch-col">
                <span class="arch-label">Infrastructure & DevOps</span>
                <div class="arch-pills">
                  <span v-for="item of project.architecture.infrastructure" :key="item" class="arch-pill">
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Highlights -->
          <div v-if="project.highlights?.length" class="drawer-section">
            <h3 class="drawer-section-title">Key Engineering Highlights</h3>
            <ul class="drawer-highlights-list">
              <li v-for="(highlight, idx) of project.highlights" :key="idx" class="highlight-item">
                <span class="highlight-bullet" aria-hidden="true"></span>
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Actions Bar -->
        <div class="drawer-footer">
          <a
            v-for="(action, i) of project.actions"
            :key="action.link"
            :href="action.link"
            target="_blank"
            rel="noopener noreferrer"
            :filled="i === 0 ? true : undefined"
            :outlined="i !== 0 ? true : undefined"
            class="drawer-action-btn"
            @click="() => handleActionClick(action)"
          >
            <span>{{ action.title }}</span>
            <component :is="getActionIcon(action.icon)" :size="15" class="action-btn-icon" />
          </a>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.glass-drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.glass-drawer-panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  width: 100vw;
  max-width: 620px;
  background: var(--popover-bg);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border-left: 1px solid var(--glass-border);
  box-shadow: -12px 0 48px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

@media (max-width: 767.98px) {
  .glass-drawer-panel {
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    max-width: 100vw;
    max-height: 85vh;
    border-left: none;
    border-top: 1px solid var(--glass-border);
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -12px 40px rgba(0, 0, 0, 0.3);
  }
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.75rem;
  flex-shrink: 0;
}

.drawer-header-meta {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
}

.drawer-category-badge {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary);
  background: rgb(from var(--primary) r g b / 10%);
  border: 1px solid rgb(from var(--primary) r g b / 25%);
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
}

.drawer-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text);
  background: rgb(from var(--text) r g b / 5%);
  border: 1px solid var(--glass-border);
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
}

.status-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: pulse-green 2s infinite ease-in-out;
}

@keyframes pulse-green {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.85);
  }
}

.drawer-close-btn {
  background: rgb(from var(--text) r g b / 6%);
  border: 1px solid var(--glass-border);
  color: var(--text);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.drawer-close-btn:hover {
  background: rgb(from var(--primary) r g b / 15%);
  border-color: var(--primary);
  color: var(--primary);
  transform: rotate(90deg);
}

.drawer-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.drawer-image-wrap {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--glass-border);
  background: rgb(from var(--app-bg) r g b / 60%);
  aspect-ratio: 16 / 9;
}

.drawer-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.drawer-title-block {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.drawer-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text);
}

.drawer-role {
  font-size: 0.95rem;
  color: var(--gray);
  font-weight: 500;
}

.drawer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.drawer-tag {
  background: rgb(from var(--primary) r g b / 8%);
  border: 1px solid rgb(from var(--primary) r g b / 20%);
  color: var(--primary);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
}

.drawer-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.drawer-section-title {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray);
}

.drawer-prose {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text);
  opacity: 0.92;
}

.architecture-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 500px) {
  .architecture-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.arch-col {
  background: rgb(from var(--text) r g b / 3%);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.arch-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--gray);
}

.arch-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.arch-pill {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.15rem 0.55rem;
  border-radius: 6px;
  background: rgb(from var(--text) r g b / 6%);
  border: 1px solid var(--glass-border);
  color: var(--text);
}

.arch-pill.highlight {
  background: rgb(from var(--primary) r g b / 12%);
  border-color: rgb(from var(--primary) r g b / 25%);
  color: var(--primary);
}

.drawer-highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text);
}

.highlight-bullet {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--primary);
  flex-shrink: 0;
  margin-top: 0.55rem;
  box-shadow: 0 0 6px var(--primary);
}

.drawer-footer {
  padding: 1.25rem 1.75rem;
  border-top: 1px solid var(--glass-border);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  gap: 0.85rem;
  flex-wrap: wrap-reverse;
  flex-shrink: 0;
  background: rgb(from var(--app-bg) r g b / 50%);
}

.drawer-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.action-btn-icon {
  flex-shrink: 0;
}

/* Transitions */
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateX(100%);
}

@media (max-width: 767.98px) {
  .drawer-slide-enter-from,
  .drawer-slide-leave-to {
    transform: translateY(100%);
  }
}
</style>
