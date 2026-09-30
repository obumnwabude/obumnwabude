<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue';
import IconAboutReadMore from '@/icons/IconAboutReadMore.vue';
import IconApple from '@/icons/IconApple.vue';
import IconArticle from '@/icons/IconArticle.vue';
import IconAward from '@/icons/IconAward.vue';
import IconCode from '@/icons/IconCode.vue';
import IconDocument from '@/icons/IconDocument.vue';
import IconDown from '@/icons/IconDown.vue';
import IconUp from '@/icons/IconUp.vue';
import IconExternalLink from '@/icons/IconExternalLink.vue';
import IconFacebook from '@/icons/IconFacebook.vue';
import IconFolder from '@/icons/IconFolder.vue';
import IconGithub from '@/icons/IconGithub.vue';
import IconGoogleColab from '@/icons/IconGoogleColab.vue';
import IconGoogleDevelopers from '@/icons/IconGoogleDevelopers.vue';
import IconGooglePlay from '@/icons/IconGooglePlay.vue';
import IconHome from '@/icons/IconHome.vue';
import IconInstagram from '@/icons/IconInstagram.vue';
import IconLinkedin from '@/icons/IconLinkedin.vue';
import IconPresentation from '@/icons/IconPresentation.vue';
import IconRecording from '@/icons/IconRecording.vue';
import IconRocket from '@/icons/IconRocket.vue';
import IconSlides from '@/icons/IconSlides.vue';
import IconTicket from '@/icons/IconTicket.vue';
import IconUsers from '@/icons/IconUsers.vue';
import IconX from '@/icons/IconX.vue';
import IconZap from '@/icons/IconZap.vue';
import { displayDate, type ActionIcon, type CodingProject, type CommunityEvent, type ContentAction } from '@/types';
import GlassBottomSheet from '@/components/GlassBottomSheet.vue';
import GlassDrawer from '@/components/GlassDrawer.vue';
import {
  trackAssetError,
  trackBottomSheetOpened,
  trackCardExpansion,
  trackCommunityResourceClick,
  trackProjectActionClick,
  trackProjectInspectOpened,
} from '@/utils/analytics';
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch, type Component } from 'vue';

const { content, featured = false } = defineProps<{
  content: CodingProject | CommunityEvent;
  featured?: boolean;
}>();
const { ctasEqualWeights, image, title, description, actions, tags } = content;

const isCommunityEvent = (content: CodingProject | CommunityEvent): content is CommunityEvent => 'date' in content;

const isDrawerOpen = ref(false);
const isSheetOpen = ref(false);
const isExpandedDesktop = ref(false);
const overlayVisible = ref(false);
const isMobile = ref(false);
const wrapperRef = ref<HTMLElement | null>(null);
const communityPanelRef = ref<HTMLElement | null>(null);
const projectPanelRef = ref<HTMLElement | null>(null);
const pushHeight = ref(0);
let scrollRaf: number | null = null;
let suppressEnter = false;
let suppressEnterTimer: ReturnType<typeof setTimeout> | null = null;

const updateViewport = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 768;
  }
};

onMounted(() => {
  updateViewport();
  window.addEventListener('resize', updateViewport, { passive: true });
});

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateViewport);
  }
  if (scrollRaf) cancelAnimationFrame(scrollRaf);
  if (suppressEnterTimer) clearTimeout(suppressEnterTimer);
});

const openProjectInspector = () => {
  if (!isCommunityEvent(content)) {
    trackProjectInspectOpened(title, content.category, 'inspect_button');
    isDrawerOpen.value = true;
  }
};

const toggleCommunityDetails = () => {
  if (isMobile.value) {
    trackBottomSheetOpened(title, 'community');
    isSheetOpen.value = true;
  } else {
    isExpandedDesktop.value = !isExpandedDesktop.value;
    trackCardExpansion(title, 'community', isExpandedDesktop.value ? 'expand' : 'collapse');
  }
};

const toggleProjectDetails = () => {
  if (isMobile.value) {
    openProjectInspector();
  } else {
    isExpandedDesktop.value = !isExpandedDesktop.value;
    trackCardExpansion(title, 'project', isExpandedDesktop.value ? 'expand' : 'collapse');
  }
};

const hasExpandableRichContent = () =>
  isCommunityEvent(content) ? hasCommunityRichContent() : hasProjectRichContent();

const handleCardClick = () => {
  if (isCommunityEvent(content)) {
    if (hasCommunityRichContent()) toggleCommunityDetails();
  } else if (isMobile.value || !hasProjectRichContent()) {
    openProjectInspector();
  } else {
    toggleProjectDetails();
  }
};

let hoverTimer: ReturnType<typeof setTimeout> | null = null;

const handleMouseEnter = () => {
  if (suppressEnter) return;
  if (isMobile.value || !hasExpandableRichContent()) return;
  if (hoverTimer) clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    isExpandedDesktop.value = true;
  }, 160);
};

const handleMouseLeave = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer);
    hoverTimer = null;
  }
  if (isMobile.value || !hasExpandableRichContent()) return;
  if (!isExpandedDesktop.value) return;
  isExpandedDesktop.value = false;
  suppressEnter = true;
  if (suppressEnterTimer) clearTimeout(suppressEnterTimer);
  suppressEnterTimer = setTimeout(() => {
    suppressEnter = false;
    suppressEnterTimer = null;
  }, 350);
};

const onPanelAfterLeave = () => {
  overlayVisible.value = false;
};

const hasCommunityRichContent = () => {
  if (!isCommunityEvent(content)) return false;
  return Boolean(
    content.curriculum?.length ||
      content.keyTakeaways?.length ||
      content.sessionFormat ||
      content.location ||
      content.longDescription ||
      content.expandedTags?.length
  );
};

const hasProjectRichContent = () => {
  if (isCommunityEvent(content)) return false;
  const project = content as CodingProject;
  return Boolean(
    project.longDescription ||
      project.highlights?.length ||
      project.expandedTags?.length ||
      project.metrics ||
      project.role ||
      project.category ||
      project.status ||
      project.architecture?.frontend?.length ||
      project.architecture?.backend?.length ||
      project.architecture?.blockchainOrAi?.length ||
      project.architecture?.infrastructure?.length
  );
};

const handleActionClick = (action: ContentAction) => {
  if (isCommunityEvent(content)) {
    trackCommunityResourceClick(
      title,
      action.title,
      action.link,
      tags || [],
      content.date ? displayDate(content.date) : undefined,
      action.icon
    );
  } else {
    trackProjectActionClick(title, action.title, action.link, featured, tags || [], action.icon);
  }
};

const handleImageError = () => {
  trackAssetError(image.name, 'project_image', `/assets/${image.name}.${image.png ? 'png' : 'jpg'}`);
};

const actionIconMap: Record<ActionIcon, Component> = {
  aboutreadmore: IconAboutReadMore,
  apple: IconApple,
  article: IconArticle,
  award: IconAward,
  code: IconCode,
  document: IconDocument,
  externallink: IconExternalLink,
  facebook: IconFacebook,
  folder: IconFolder,
  github: IconGithub,
  googlecolab: IconGoogleColab,
  googledevelopers: IconGoogleDevelopers,
  googleplay: IconGooglePlay,
  home: IconHome,
  instagram: IconInstagram,
  linkedin: IconLinkedin,
  presentation: IconPresentation,
  recording: IconRecording,
  rocket: IconRocket,
  slides: IconSlides,
  ticket: IconTicket,
  users: IconUsers,
  x: IconX,
  zap: IconZap,
};

const getActionIcon = (icon?: ActionIcon): Component => (icon && actionIconMap[icon]) || IconExternalLink;

const activePanelRef = computed(() =>
  isCommunityEvent(content) ? communityPanelRef.value : projectPanelRef.value
);

const wrapperStyle = computed(() => ({
  '--overlay-push': `${pushHeight.value}px`,
}));

const startCollapseCompensation = () => {
  if (scrollRaf) {
    cancelAnimationFrame(scrollRaf);
    scrollRaf = null;
  }
  const wrapperEl = wrapperRef.value;
  if (!wrapperEl) return;
  if (wrapperEl.getBoundingClientRect().top >= 0) return;

  let lastMargin = parseFloat(getComputedStyle(wrapperEl).marginBottom);
  const startedAt = performance.now();

  const tick = () => {
    if (performance.now() - startedAt > 700) {
      scrollRaf = null;
      return;
    }
    const currentMargin = parseFloat(getComputedStyle(wrapperEl).marginBottom);
    const delta = lastMargin - currentMargin;
    if (delta > 0.5) {
      window.scrollBy(0, -delta);
      lastMargin = currentMargin;
    } else if (delta < -0.5) {
      scrollRaf = null;
      return;
    } else {
      lastMargin = currentMargin;
    }
    scrollRaf = requestAnimationFrame(tick);
  };
  scrollRaf = requestAnimationFrame(tick);
};

watch(isExpandedDesktop, async (expanded) => {
  if (isMobile.value) return;
  if (expanded) {
    if (scrollRaf) {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = null;
    }
    overlayVisible.value = true;
    await nextTick();
    pushHeight.value = activePanelRef.value?.scrollHeight ?? 0;
  } else {
    pushHeight.value = 0;
    startCollapseCompensation();
  }
});
</script>

<template>
  <div
    v-reveal="{ delay: 50 }"
    ref="wrapperRef"
    class="project-wrapper"
    :class="{
      'is-coding-project': !isCommunityEvent(content),
      'has-overlay': overlayVisible && !isMobile,
    }"
    :style="wrapperStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <GlassCard
      variant="frost"
      :hoverable="true"
      :spotlight="true"
      :borderBeam="featured"
      class="project-card"
      @click="handleCardClick"
    >
      <!-- Top Row: Image & Details side-by-side on desktop (Stable layout) -->
      <div class="project-inner">
        <div
          class="project-image-container clickable-image"
          @click.stop="handleCardClick"
        >
          <img
            :src="`/assets/${image.name}.${image.png ? 'png' : 'jpg'}`"
            :alt="image.alt"
            loading="lazy"
            class="project-image"
            @error="handleImageError"
          />
        </div>

        <div class="project-details">
          <div class="project-header-row">
            <div v-if="tags?.length" class="project-tags">
              <span v-for="tag of tags" :key="tag" class="project-tag">
                {{ tag }}
              </span>
            </div>
          </div>

          <p v-if="isCommunityEvent(content) && content.date" class="project-date">
            <span>{{ displayDate(content.date) }}</span>
            <span v-if="content.location" class="location-dot">•</span>
            <span v-if="content.location" class="location-text">{{ content.location }}</span>
          </p>

          <h3
            class="project-title clickable-title"
            @click.stop="handleCardClick"
          >
            {{ title }}
          </h3>

          <p class="project-description">{{ description }}</p>

          <div class="project-actions">
            <div class="project-action-cluster">
              <a
                v-for="(action, i) of actions"
                :key="action.link"
                :href="action.link"
                target="_blank"
                rel="noopener noreferrer"
                :filled="i === 0 || ctasEqualWeights ? true : undefined"
                :outlined="i !== 0 && !ctasEqualWeights ? true : undefined"
                class="project-action-btn"
                @click.stop="() => handleActionClick(action)"
              >
                <span>{{ action.title }}</span>
                <component
                  :is="getActionIcon(action.icon)"
                  :size="15"
                  class="action-icon"
                  :class="{
                    'action-external-icon': getActionIcon(action.icon) === IconExternalLink,
                  }"
                />
              </a>
            </div>

            <button
              v-if="isCommunityEvent(content) && hasCommunityRichContent()"
              type="button"
              class="project-more-btn"
              @click.stop="toggleCommunityDetails"
              :aria-expanded="isExpandedDesktop"
              :title="isExpandedDesktop && !isMobile ? 'Hide info' : 'More info'"
              :aria-label="isExpandedDesktop && !isMobile ? 'Hide info' : 'More info'"
            >
              <IconUp v-if="isExpandedDesktop && !isMobile" :size="20" />
              <IconDown v-else :size="20" />
            </button>

            <button
              v-if="!isCommunityEvent(content) && hasProjectRichContent()"
              type="button"
              class="project-more-btn"
              @click.stop="toggleProjectDetails"
              :aria-expanded="isExpandedDesktop"
              :title="isExpandedDesktop && !isMobile ? 'Hide info' : 'More info'"
              :aria-label="isExpandedDesktop && !isMobile ? 'Hide info' : 'More info'"
            >
              <IconUp v-if="isExpandedDesktop && !isMobile" :size="20" />
              <IconDown v-else :size="20" />
            </button>

            <button
              v-else-if="!isCommunityEvent(content)"
              type="button"
              class="project-more-btn"
              @click.stop="openProjectInspector"
              title="More info"
              aria-label="More info"
            >
              <IconDown :size="20" />
            </button>
          </div>
        </div>
      </div>

    </GlassCard>

    <!-- Overlay Desktop Bento Expansion for Community Event: absolutely positioned below the card, no layout push -->
    <Transition name="bento-expand" @after-leave="onPanelAfterLeave">
      <div
        v-show="isCommunityEvent(content) && isExpandedDesktop && !isMobile"
        ref="communityPanelRef"
        class="community-bento-panel glass-surface glass-frost"
        @click.stop
      >
        <!-- Expanded Tags inside Community Bento -->
        <div
          v-if="(content.expandedTags || content.tags)?.length"
          class="community-expanded-tags"
        >
          <span
            v-for="tag of (content.expandedTags || content.tags)"
            :key="tag"
            class="community-tag-chip"
          >
            {{ tag }}
          </span>
        </div>

        <div v-if="content.longDescription" class="bento-prose-block">
          <p class="bento-prose">{{ content.longDescription }}</p>
        </div>

        <div v-if="(content as CommunityEvent).sessionFormat || (content as CommunityEvent).eventSeries" class="bento-meta-row">
          <span v-if="(content as CommunityEvent).sessionFormat" class="bento-meta-pill">Format: {{ (content as CommunityEvent).sessionFormat }}</span>
          <span v-if="(content as CommunityEvent).eventSeries" class="bento-meta-pill">Series: {{ (content as CommunityEvent).eventSeries }}</span>
        </div>

        <div v-if="(content as CommunityEvent).curriculum?.length" class="bento-section">
          <h4 class="bento-section-title">Topics & Curriculum</h4>
          <div class="bento-curriculum-grid">
            <span v-for="item of (content as CommunityEvent).curriculum" :key="item" class="bento-curriculum-pill">
              {{ item }}
            </span>
          </div>
        </div>

        <div v-if="(content as CommunityEvent).keyTakeaways?.length" class="bento-section">
          <h4 class="bento-section-title">Key Takeaways</h4>
          <ul class="bento-takeaways-list">
            <li v-for="(takeaway, idx) of (content as CommunityEvent).keyTakeaways" :key="idx" class="bento-takeaway-item">
              <span class="takeaway-bullet" aria-hidden="true"></span>
              <span>{{ takeaway }}</span>
            </li>
          </ul>
        </div>
      </div>
    </Transition>

    <!-- Overlay Desktop Bento Expansion for Coding Project (experiment): absolute below the card, mirrors community pattern -->
    <Transition name="bento-expand" @after-leave="onPanelAfterLeave">
      <div
        v-show="!isCommunityEvent(content) && isExpandedDesktop && !isMobile"
        ref="projectPanelRef"
        class="project-bento-panel community-bento-panel glass-surface glass-frost"
        @click.stop
      >
        <div
          v-if="(content as CodingProject).category || (content as CodingProject).status || (content as CodingProject).role"
          class="bento-meta-row"
        >
          <span v-if="(content as CodingProject).category" class="bento-meta-pill">
            {{ (content as CodingProject).category }}
          </span>
          <span v-if="(content as CodingProject).status" class="bento-meta-pill">
            <span class="status-pulse-dot" aria-hidden="true"></span>
            {{ (content as CodingProject).status }}
          </span>
          <span v-if="(content as CodingProject).role" class="bento-meta-pill">
            Role: {{ (content as CodingProject).role }}
          </span>
        </div>

        <div
          v-if="((content as CodingProject).expandedTags || tags)?.length"
          class="community-expanded-tags"
        >
          <span
            v-for="tag of ((content as CodingProject).expandedTags || tags)"
            :key="tag"
            class="community-tag-chip"
          >
            {{ tag }}
          </span>
        </div>

        <div v-if="(content as CodingProject).longDescription" class="bento-prose-block">
          <p class="bento-prose">{{ (content as CodingProject).longDescription }}</p>
        </div>

        <div v-if="(content as CodingProject).architecture" class="bento-section">
          <h4 class="bento-section-title">System Architecture</h4>
          <div class="bento-architecture-grid">
            <div v-if="(content as CodingProject).architecture?.frontend?.length" class="bento-arch-col">
              <span class="bento-arch-label">Frontend</span>
              <div class="bento-curriculum-grid">
                <span
                  v-for="item of (content as CodingProject).architecture?.frontend"
                  :key="item"
                  class="bento-curriculum-pill"
                >
                  {{ item }}
                </span>
              </div>
            </div>
            <div v-if="(content as CodingProject).architecture?.backend?.length" class="bento-arch-col">
              <span class="bento-arch-label">Backend & Services</span>
              <div class="bento-curriculum-grid">
                <span
                  v-for="item of (content as CodingProject).architecture?.backend"
                  :key="item"
                  class="bento-curriculum-pill"
                >
                  {{ item }}
                </span>
              </div>
            </div>
            <div v-if="(content as CodingProject).architecture?.blockchainOrAi?.length" class="bento-arch-col">
              <span class="bento-arch-label">Blockchain / AI</span>
              <div class="bento-curriculum-grid">
                <span
                  v-for="item of (content as CodingProject).architecture?.blockchainOrAi"
                  :key="item"
                  class="bento-curriculum-pill"
                >
                  {{ item }}
                </span>
              </div>
            </div>
            <div v-if="(content as CodingProject).architecture?.infrastructure?.length" class="bento-arch-col">
              <span class="bento-arch-label">Infrastructure & DevOps</span>
              <div class="bento-curriculum-grid">
                <span
                  v-for="item of (content as CodingProject).architecture?.infrastructure"
                  :key="item"
                  class="bento-curriculum-pill"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="(content as CodingProject).highlights?.length" class="bento-section">
          <h4 class="bento-section-title">Key Engineering Highlights</h4>
          <ul class="bento-takeaways-list">
            <li
              v-for="(highlight, idx) of (content as CodingProject).highlights"
              :key="idx"
              class="bento-takeaway-item"
            >
              <span class="takeaway-bullet" aria-hidden="true"></span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </div>

        <div v-if="(content as CodingProject).metrics" class="bento-prose-block">
          <p class="bento-prose">{{ (content as CodingProject).metrics }}</p>
        </div>
      </div>
    </Transition>

    <!-- Glass Drawer for Project (mobile-only fallback while the desktop bento experiment runs) -->
    <GlassDrawer v-if="!isCommunityEvent(content)" v-model:open="isDrawerOpen" :project="content as CodingProject" />

    <!-- Mobile Glass Bottom Sheet for Community Event -->
    <GlassBottomSheet
      v-if="isCommunityEvent(content)"
      v-model:open="isSheetOpen"
      :title="title"
      :badge="(content as CommunityEvent).sessionFormat || 'Session Details'"
    >
      <!-- Tags inside Mobile Sheet -->
      <div v-if="(content.expandedTags || content.tags)?.length" class="sheet-tags-row">
        <span v-for="tag of (content.expandedTags || content.tags)" :key="tag" class="community-tag-chip">
          {{ tag }}
        </span>
      </div>

      <div v-if="(content as CommunityEvent).longDescription" class="sheet-prose-block">
        <p class="sheet-prose">{{ (content as CommunityEvent).longDescription }}</p>
      </div>

      <div v-if="(content as CommunityEvent).curriculum?.length" class="sheet-section">
        <h4 class="sheet-section-title">Topics & Curriculum</h4>
        <div class="sheet-curriculum-pills">
          <span v-for="item of (content as CommunityEvent).curriculum" :key="item" class="bento-curriculum-pill">
            {{ item }}
          </span>
        </div>
      </div>

      <div v-if="(content as CommunityEvent).keyTakeaways?.length" class="sheet-section">
        <h4 class="sheet-section-title">Key Takeaways</h4>
        <ul class="bento-takeaways-list">
          <li
            v-for="(takeaway, idx) of (content as CommunityEvent).keyTakeaways"
            :key="idx"
            class="bento-takeaway-item"
          >
            <span class="takeaway-bullet" aria-hidden="true"></span>
            <span>{{ takeaway }}</span>
          </li>
        </ul>
      </div>

      <template #footer>
        <a
          v-for="action of actions"
          :key="action.link"
          :href="action.link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-action-btn"
          filled
          @click="() => handleActionClick(action)"
        >
          <span>{{ action.title }}</span>
          <component :is="getActionIcon(action.icon)" :size="15" class="action-icon" />
        </a>
      </template>
    </GlassBottomSheet>
  </div>
</template>

<style scoped>
.project-wrapper {
  margin: 0 auto calc(5rem + var(--overlay-push, 0px));
  max-width: 1440px;
  position: relative;
  transition: margin-bottom 0.34s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-wrapper :deep(.glass-card) {
  transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 260ms ease,
    border-radius 260ms ease, box-shadow 260ms ease;
}

.project-wrapper.has-overlay :deep(.glass-card) {
  border-bottom-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.project-wrapper.has-overlay :deep(.glass-hover-lift:hover) {
  transform: none;
}

@media (max-width: 767.98px) {
  .project-wrapper {
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 768px) and (max-width: 1023.98px) {
  .project-wrapper {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
}

.project-card {
  padding: 0;
  cursor: pointer;
}

.project-inner {
  display: flex;
  flex-direction: column;
}

.project-image-container {
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid var(--glass-border);
  background: rgb(from var(--app-bg) r g b / 50%);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-image {
  transform: scale(1.04);
}

.project-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 1.25rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}

.project-tag {
  background: rgb(from var(--primary) r g b / 7%);
  border: 1px solid rgb(from var(--primary) r g b / 18%);
  color: var(--primary);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.65rem;
  letter-spacing: 0.02em;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.project-tag:hover {
  background: rgb(from var(--primary) r g b / 12%);
  border-color: rgb(from var(--primary) r g b / 28%);
}

.project-date {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gray);
  margin-bottom: 0.65rem;
}

.project-title {
  font-size: 1.65rem;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
  color: var(--text);
  transition: color 0.2s ease;
}

.project-card:hover .project-title {
  color: var(--primary);
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text);
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.project-actions {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 0.65rem;
  margin-top: auto;
}

.project-action-cluster {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  gap: 0.65rem;
  align-items: center;
}

.project-action-btn {
  cursor: pointer;
  gap: 0.5rem;
}

.project-more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  cursor: pointer;
  flex-shrink: 0;
  color: var(--text);
  background: rgb(from var(--text) r g b / 5%);
  border: 1px solid var(--glass-border);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-more-btn:hover {
  transform: scale(1.08);
  color: var(--primary);
  border-color: var(--primary);
  background: rgb(from var(--primary) r g b / 12%);
}


.action-icon {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.project-action-btn:hover .action-external-icon {
  transform: translate(2px, -2px);
}

.project-action-btn:hover .action-icon:not(.action-external-icon) {
  transform: scale(1.15);
}

@media (min-width: 768px) {
  .project-inner {
    flex-direction: row;
    align-items: stretch;
    min-height: 360px;
  }

  .project-image-container {
    width: 48%;
    flex-shrink: 0;
    align-self: stretch;
    border-bottom: none;
    border-right: 1px solid var(--glass-border);
  }

  .project-wrapper.is-coding-project:nth-child(even) .project-inner {
    flex-direction: row-reverse;
  }

  .project-wrapper.is-coding-project:nth-child(even) .project-image-container {
    border-right: none;
    border-left: 1px solid var(--glass-border);
  }

  .project-wrapper.is-coding-project:nth-child(even) .project-actions {
    flex-direction: row;
  }

  .project-wrapper.is-coding-project:nth-child(even) .project-action-cluster {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .project-details {
    padding: 1.75rem 2rem;
  }

  .project-action-btn:not(.project-more-btn) {
    min-width: 120px;
  }
}

@media (min-width: 1024px) {
  .project-title {
    font-size: 1.85rem;
  }
}

/* Image overlay & Clickable interactions */
.clickable-image {
  cursor: pointer;
  position: relative;
}

.clickable-title {
  cursor: pointer;
}

.project-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}


.location-dot {
  margin: 0 0.35rem;
  opacity: 0.5;
}

.location-text {
  font-size: 0.85rem;
  color: var(--gray);
}

/* Overlay Bento Expansion for Community Event (absolute below the card; last-card also pushes wrapper padding) */
.community-bento-panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  border-top: none;
  border-radius: 0 0 20px 20px;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.community-expanded-tags,
.sheet-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-bottom: 0.35rem;
}

.community-tag-chip {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  background: rgb(from var(--primary) r g b / 8%);
  border: 1px solid rgb(from var(--primary) r g b / 20%);
  color: var(--primary);
}

.bento-prose-block {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text);
  opacity: 0.92;
}

.bento-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.bento-meta-pill {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  background: rgb(from var(--text) r g b / 6%);
  border: 1px solid var(--glass-border);
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.status-pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 6px var(--primary);
  animation: bento-status-pulse 1.8s ease-in-out infinite;
}

@keyframes bento-status-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(1.25); }
}

.bento-architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem 1.25rem;
}

.bento-arch-col {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.bento-arch-label {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--gray);
}

.bento-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bento-section-title {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray);
  margin: 0;
}

.bento-curriculum-grid,
.sheet-curriculum-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.bento-curriculum-pill {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.2rem 0.65rem;
  border-radius: 6px;
  background: rgb(from var(--text) r g b / 5%);
  border: 1px solid var(--glass-border);
  color: var(--text);
}

.bento-takeaways-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bento-takeaway-item {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--text);
}

.takeaway-bullet {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--primary);
  flex-shrink: 0;
  margin-top: 0.5rem;
  box-shadow: 0 0 5px var(--primary);
}

/* Bento transition */
.community-bento-panel {
  overflow: hidden;
  will-change: max-height, opacity;
}

.bento-expand-enter-active {
  transition: max-height 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.32s ease-out 0.06s, padding 0.42s cubic-bezier(0.22, 1, 0.36, 1);
  max-height: 2400px;
  opacity: 1;
}

.bento-expand-leave-active {
  transition: max-height 0.34s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in, padding 0.34s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 2400px;
  opacity: 1;
}

.bento-expand-enter-from,
.bento-expand-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

/* Sheet content styles */
.sheet-prose-block {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text);
}

.sheet-section {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.sheet-section-title {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray);
  margin: 0;
}
</style>
