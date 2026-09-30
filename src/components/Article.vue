<script setup lang="ts">
import GlassBottomSheet from '@/components/GlassBottomSheet.vue';
import GlassCard from '@/components/GlassCard.vue';
import IconDown from '@/icons/IconDown.vue';
import IconExternalLink from '@/icons/IconExternalLink.vue';
import IconGithub from '@/icons/IconGithub.vue';
import IconUp from '@/icons/IconUp.vue';
import { displayDate, type Article } from '@/types';
import { trackArticleClick, trackAssetError, trackBottomSheetOpened, trackCardExpansion } from '@/utils/analytics';
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const { article } = defineProps<{ article: Article }>();
const { image, date, title, description, link, publishedOn } = article;

const isSheetOpen = ref(false);
const isExpandedDesktop = ref(false);
const overlayVisible = ref(false);
const isMobile = ref(false);
const wrapperRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);
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

const handleClick = () => {
  trackArticleClick(title, publishedOn, link, displayDate(date));
};

const handleImageError = () => {
  trackAssetError(image.name, 'article_image', `/assets/${image.name}.${image.png ? 'png' : 'jpg'}`);
};


const toggleArticleDetails = () => {
  if (isMobile.value) {
    trackBottomSheetOpened(title, 'article');
    isSheetOpen.value = true;
  } else {
    isExpandedDesktop.value = !isExpandedDesktop.value;
    trackCardExpansion(title, 'article', isExpandedDesktop.value ? 'expand' : 'collapse');
  }
};

const handleCardClick = () => {
  toggleArticleDetails();
};

let hoverTimer: ReturnType<typeof setTimeout> | null = null;

const handleMouseEnter = () => {
  if (suppressEnter) return;
  if (isMobile.value || !hasRichContent.value) return;
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
  if (isMobile.value || !hasRichContent.value) return;
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

const hasRichContent = computed(() => {
  return Boolean(
    article.keyTakeaways?.length || article.longDescription || article.topicsCovered?.length || article.repoUrl || article.tags?.length
  );
});

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
    pushHeight.value = panelRef.value?.scrollHeight ?? 0;
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
    class="article-wrapper"
    :class="{ 'has-overlay': overlayVisible && !isMobile }"
    :style="wrapperStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <GlassCard
      variant="frost"
      :hoverable="true"
      :spotlight="true"
      class="article-card"
      @click="handleCardClick"
    >
      <!-- Stable Top Row: Image & Details side-by-side on desktop -->
      <div class="article-inner">
        <div
          class="article-image-container"
          @click.stop="handleClick"
          role="button"
          tabindex="0"
          :aria-label="`Read ${title}`"
        >
          <img
            :src="`/assets/${image.name}.${image.png ? 'png' : 'jpg'}`"
            :alt="image.alt || title"
            loading="lazy"
            class="article-image"
            @error="handleImageError"
          />
        </div>

        <div class="article-details">
          <div class="article-header">
            <div class="article-meta-left">
              <span class="article-date">{{ displayDate(date) }}</span>
              <span v-if="article.readTime" class="article-read-time">• {{ article.readTime }}</span>
            </div>
            <span class="article-badge">
              Published on <strong class="badge-accent">{{ publishedOn }}</strong>
            </span>
          </div>

          <h3 class="article-title" @click.stop="handleClick" role="link" tabindex="0">
            {{ title }}
          </h3>

          <p class="article-description">{{ description }}</p>

          <div class="article-bottom">
            <button
              v-if="hasRichContent"
              type="button"
              class="article-more-btn"
              @click.stop="toggleArticleDetails"
              :aria-expanded="isExpandedDesktop"
              :aria-label="isExpandedDesktop && !isMobile ? 'Hide info' : 'More info'"
              :title="isExpandedDesktop && !isMobile ? 'Hide info' : 'More info'"
            >
              <IconUp v-if="isExpandedDesktop && !isMobile" :size="20" />
              <IconDown v-else :size="20" />
            </button>

            <a
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
              class="article-read-btn"
              outlined
              @click.stop="handleClick"
            >
              <span class="read-btn-text">Read</span>
              <IconExternalLink :size="13" class="read-external-icon" />
            </a>
          </div>
        </div>
      </div>

    </GlassCard>

    <!-- Overlay Desktop Bento Expansion: absolutely positioned below the card, no layout push -->
    <Transition name="bento-expand" @after-leave="onPanelAfterLeave">
      <div
        v-show="hasRichContent && isExpandedDesktop && !isMobile"
        ref="panelRef"
        class="article-bento-panel glass-surface glass-frost"
        @click.stop
      >
        <!-- Tags shown exclusively in expanded mode -->
        <div v-if="article.tags?.length" class="article-expanded-tags">
          <span v-for="tag of article.tags" :key="tag" class="article-tag-chip">
            {{ tag }}
          </span>
        </div>

        <div v-if="article.longDescription" class="bento-prose-block">
          <p class="bento-prose">{{ article.longDescription }}</p>
        </div>

        <div v-if="article.keyTakeaways?.length" class="bento-section">
          <h4 class="bento-section-title">Key Architectural Takeaways</h4>
          <ul class="bento-takeaways-list">
            <li v-for="(takeaway, idx) of article.keyTakeaways" :key="idx" class="bento-takeaway-item">
              <span class="takeaway-bullet" aria-hidden="true"></span>
              <span>{{ takeaway }}</span>
            </li>
          </ul>
        </div>

        <div v-if="article.topicsCovered?.length" class="bento-section">
          <h4 class="bento-section-title">Concepts Covered</h4>
          <div class="bento-topics-grid">
            <span v-for="topic of article.topicsCovered" :key="topic" class="bento-topic-pill">
              {{ topic }}
            </span>
          </div>
        </div>

        <div v-if="article.repoUrl" class="bento-repo-row">
          <a :href="article.repoUrl" target="_blank" rel="noopener noreferrer" class="bento-repo-link" outlined @click.stop>
            <IconGithub :size="15" />
            <span>Companion Source Code Repository</span>
          </a>
        </div>
      </div>
    </Transition>

    <!-- Mobile Glass Bottom Sheet for Article Takeaways -->
    <GlassBottomSheet
      v-if="hasRichContent"
      v-model:open="isSheetOpen"
      :title="title"
      :badge="article.readTime || publishedOn"
    >
      <!-- Tags inside Mobile Sheet -->
      <div v-if="article.tags?.length" class="sheet-tags-row">
        <span v-for="tag of article.tags" :key="tag" class="article-tag-chip">
          {{ tag }}
        </span>
      </div>

      <div v-if="article.longDescription" class="sheet-prose-block">
        <p class="sheet-prose">{{ article.longDescription }}</p>
      </div>

      <div v-if="article.keyTakeaways?.length" class="sheet-section">
        <h4 class="sheet-section-title">Key Architectural Takeaways</h4>
        <ul class="bento-takeaways-list">
          <li v-for="(takeaway, idx) of article.keyTakeaways" :key="idx" class="bento-takeaway-item">
            <span class="takeaway-bullet" aria-hidden="true"></span>
            <span>{{ takeaway }}</span>
          </li>
        </ul>
      </div>

      <div v-if="article.topicsCovered?.length" class="sheet-section">
        <h4 class="sheet-section-title">Concepts Covered</h4>
        <div class="bento-topics-grid">
          <span v-for="topic of article.topicsCovered" :key="topic" class="bento-topic-pill">
            {{ topic }}
          </span>
        </div>
      </div>

      <template #footer>
        <a
          v-if="article.repoUrl"
          :href="article.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="article-insights-btn"
          outlined
        >
          <IconGithub :size="16" />
          <span>View Source Code</span>
        </a>
        <a :href="link" target="_blank" rel="noopener noreferrer" class="article-read-btn" filled @click="handleClick">
          <span>Read Full Article</span>
          <IconExternalLink :size="15" />
        </a>
      </template>
    </GlassBottomSheet>
  </div>
</template>

<style scoped>
.article-wrapper {
  margin: 0 auto calc(4.5rem + var(--overlay-push, 0px));
  max-width: 1440px;
  position: relative;
  transition: margin-bottom 0.34s cubic-bezier(0.4, 0, 0.2, 1);
}

.article-wrapper :deep(.glass-card) {
  transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 260ms ease,
    border-radius 260ms ease, box-shadow 260ms ease;
}

.article-wrapper.has-overlay :deep(.glass-card) {
  border-bottom-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.article-wrapper.has-overlay :deep(.glass-hover-lift:hover) {
  transform: none;
}

@media (max-width: 767.98px) {
  .article-wrapper {
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 768px) and (max-width: 1023.98px) {
  .article-wrapper {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
}

.article-card {
  padding: 0;
  cursor: pointer;
}

.article-inner {
  display: flex;
  flex-direction: column;
}

.article-image-container {
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid var(--glass-border);
  background: rgb(from var(--app-bg) r g b / 50%);
  cursor: pointer;
  position: relative;
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.article-card:hover .article-image {
  transform: scale(1.05);
}

.article-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 1.25rem 1.5rem;
}

.article-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}

.article-meta-left {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.article-date {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gray);
}

.article-read-time {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
}

.article-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgb(from var(--primary) r g b / 7%);
  border: 1px solid rgb(from var(--primary) r g b / 18%);
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.badge-accent {
  color: var(--primary);
  font-weight: 600;
}

.article-title {
  font-size: 1.45rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.015em;
  margin-bottom: 0.65rem;
  color: var(--text);
  cursor: pointer;
  transition: color 0.2s ease;
}

.article-card:hover .article-title,
.article-title:hover {
  color: var(--primary);
}

.article-expanded-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-bottom: 0.35rem;
}

.article-tag-chip {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  background: rgb(from var(--primary) r g b / 8%);
  border: 1px solid rgb(from var(--primary) r g b / 20%);
  color: var(--primary);
}

.article-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text);
  opacity: 0.88;
  margin-bottom: 1.25rem;
}

/* Overlay Bento Expansion (absolute below the card; last-card also pushes wrapper padding) */
.article-bento-panel {
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

.bento-prose-block {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text);
  opacity: 0.92;
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

.bento-topics-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.bento-topic-pill {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.15rem 0.55rem;
  border-radius: 6px;
  background: rgb(from var(--text) r g b / 5%);
  border: 1px solid var(--glass-border);
  color: var(--text);
}

.bento-repo-row {
  display: flex;
  align-items: center;
  padding-top: 0.35rem;
}

.bento-repo-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  cursor: pointer;
}

/* Bottom Bar */
.article-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 0.85rem;
  margin-top: auto;
}

.article-more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  cursor: pointer;
  flex-shrink: 0;
  color: var(--text);
  background: rgb(from var(--text) r g b / 5%);
  border: 1px solid var(--glass-border);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.article-more-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: rgb(from var(--primary) r g b / 12%);
  transform: scale(1.08);
}


.article-read-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
}

.read-external-icon {
  opacity: 0.85;
}

/* Bento transition */
.article-bento-panel {
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
.sheet-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.85rem;
}

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

@media (min-width: 768px) {
  .article-inner {
    flex-direction: row;
    align-items: stretch;
    min-height: 230px;
  }

  .article-image-container {
    width: 32%;
    flex-shrink: 0;
    align-self: stretch;
    border-bottom: none;
    border-right: 1px solid var(--glass-border);
  }

  .article-details {
    padding: 1.5rem 2rem;
  }

  .article-title {
    font-size: 1.6rem;
  }
}
</style>
