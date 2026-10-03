<script setup lang="ts">
import GlassBottomSheet from '@/components/GlassBottomSheet.vue';
import GlassCard from '@/components/GlassCard.vue';
import { useGlobalScroll } from '@/composables/useGlobalScroll';
import IconDown from '@/icons/IconDown.vue';
import IconExternalLink from '@/icons/IconExternalLink.vue';
import IconGithub from '@/icons/IconGithub.vue';
import IconUp from '@/icons/IconUp.vue';
import { displayDate, type Article } from '@/types';
import { trackArticleClick, trackAssetError, trackBottomSheetOpened, trackCardExpansion } from '@/utils/analytics';
import { contentId } from '@/utils/slug';
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const { article } = defineProps<{ article: Article }>();
const { image, date, title, description, link, publishedOn } = article;

const isSheetOpen = ref(false);
const isExpandedDesktop = ref(false);
const overlayVisible = ref(false);
const isCollapsing = ref(false);
const isMobile = ref(false);
const wrapperRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);
const pushHeight = ref(0);
const idleHintVisible = ref(false);
const reduceMotion = ref(false);
let scrollRaf: number | null = null;
let suppressEnter = false;
let suppressEnterTimer: ReturnType<typeof setTimeout> | null = null;
let idleTimer: ReturnType<typeof setTimeout> | null = null;
let idleObserver: IntersectionObserver | null = null;
let isCardVisible = false;
const IDLE_HINT_SESSION_KEY = 'obum-idle-hint-shown';

let hoverTimer: ReturnType<typeof setTimeout> | null = null;


const updateViewport = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 768;
  }
};

const armIdleHint = () => {
  if (idleTimer) {
    clearTimeout(idleTimer);
    idleTimer = null;
  }
  if (!isMobile.value || reduceMotion.value || !hasRichContent.value) return;
  if (!isCardVisible || isSheetOpen.value) return;
  if (sessionStorage.getItem(IDLE_HINT_SESSION_KEY)) return;
  idleTimer = setTimeout(() => {
    if (!isMobile.value || !isCardVisible || isSheetOpen.value) return;
    if (sessionStorage.getItem(IDLE_HINT_SESSION_KEY)) return;
    idleHintVisible.value = true;
    sessionStorage.setItem(IDLE_HINT_SESSION_KEY, '1');
  }, 5000);
};

const dismissIdleHint = () => {
  if (idleHintVisible.value) idleHintVisible.value = false;
  if (idleTimer) {
    clearTimeout(idleTimer);
    idleTimer = null;
  }
};

const onUserActivity = () => {
  dismissIdleHint();
  armIdleHint();
};


onMounted(() => {
  updateViewport();
  window.addEventListener('resize', updateViewport, { passive: true });

  if (typeof window !== 'undefined' && window.matchMedia) {
    reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  if (wrapperRef.value && 'IntersectionObserver' in window) {
    // Idle hint observer (mobile)
    idleObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isCardVisible = entry.intersectionRatio > 0.55;
        if (isCardVisible) armIdleHint();
        else dismissIdleHint();
      },
      { threshold: [0, 0.55, 1] }
    );
    idleObserver.observe(wrapperRef.value);
  }

  window.addEventListener('touchstart', onUserActivity, { passive: true });
});

useGlobalScroll(onUserActivity);

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateViewport);
    window.removeEventListener('touchstart', onUserActivity);
  }
  if (scrollRaf) cancelAnimationFrame(scrollRaf);
  if (suppressEnterTimer) clearTimeout(suppressEnterTimer);
  if (idleTimer) clearTimeout(idleTimer);
  if (idleObserver) idleObserver.disconnect();
});


const handleClick = () => {
  trackArticleClick(title, publishedOn, link, displayDate(date));
};

const handleImageError = () => {
  trackAssetError(image.name, 'article_image', `/assets/${image.name}.${image.png ? 'png' : 'jpg'}`);
};


const toggleArticleDetails = () => {
  dismissIdleHint();
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
  isCollapsing.value = false;
};

const hasRichContent = computed(() => {
  return Boolean(
    article.keyTakeaways?.length || article.longDescription || article.topicsCovered?.length || article.repoUrl || article.tags?.length
  );
});

const wrapperStyle = computed(() => ({
  '--overlay-push': `${pushHeight.value}px`,
}));

watch(isExpandedDesktop, async (expanded) => {
  if (isMobile.value) return;
  if (expanded) {
    if (scrollRaf) {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = null;
    }
    // Expand is immediate — no margin transition, no bento transition.
    isCollapsing.value = false;
    overlayVisible.value = true;
    await nextTick();
    // Compensate for the padding that's still interpolating when we measure.
    // bento-expand-enter-from forces padding-top/bottom to 0, and the enter-to
    // easing is fast-out so most of the padding is restored within a couple of
    // frames, but not all of it. scrollHeight follows the current (interpolating)
    // padding, so we add whatever is still missing against the natural total.
    if (panelRef.value) {
      const el = panelRef.value;
      const style = getComputedStyle(el);
      const curPadY = (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0);
      // Matches .article-bento-panel padding: 1.5rem 2rem (1.5rem × 2 = 48px).
      const naturalPadY = 48;
      pushHeight.value = el.scrollHeight + Math.max(0, naturalPadY - curPadY);
    }
  } else {
    const wrapper = wrapperRef.value;
    if (!wrapper) {
      pushHeight.value = 0;
      return;
    }
    const rect = wrapper.getBoundingClientRect();
    const toShrink = pushHeight.value;
    // If the card has scrolled entirely past the top of the viewport, don't rely
    // on the 580ms margin-bottom transition — the continuous layout change fights
    // scroll anchoring and reads as the sub-pixel wobble. Instead: suppress the
    // transition, snap the push to 0 in one frame, and compensate the scroll by
    // the same amount in the same frame so the viewport doesn't shift at all.
    if (rect.bottom < 0 && toShrink > 0) {
      wrapper.style.transition = 'none';
      wrapper.style.setProperty('--overlay-push', '0px');
      // Force a synchronous layout read so the margin change takes effect this frame
      void wrapper.offsetHeight;
      window.scrollBy({ top: -toShrink });
      // Sync Vue state — no new DOM write, inline style already pinned push to 0
      pushHeight.value = 0;
      // Restore the transition for the next cycle
      requestAnimationFrame(() => {
        const el = wrapperRef.value;
        if (!el) return;
        el.style.transition = '';
        el.style.removeProperty('--overlay-push');
      });
      return;
    }
    // Card still in view (or push already 0): run the margin-bottom transition
    // for the collapse only (is-collapsing class), and keep the card in frame.
    isCollapsing.value = true;
    pushHeight.value = 0;
    await nextTick();
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

</script>

<template>
  <div
    v-reveal="{ delay: 50 }"
    ref="wrapperRef"
    :id="contentId(title)"
    class="article-wrapper"
    :class="{ 'has-overlay': overlayVisible && !isMobile, 'is-collapsing': isCollapsing }"
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
          @click.stop="handleCardClick"
          role="button"
          tabindex="0"
          :aria-label="`Show ${title} details`"
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

          <h3 class="article-title" @click.stop="handleCardClick" role="button" tabindex="0">
            {{ title }}
          </h3>

          <p class="article-description">{{ description }}</p>

          <div class="article-bottom">
            <div v-if="hasRichContent" class="more-btn-hint-wrap">
              <button
                type="button"
                class="article-more-btn"
                :class="{ 'is-throbbing': isMobile && !reduceMotion }"
                @click.stop="toggleArticleDetails"
                :aria-expanded="isExpandedDesktop"
                :aria-label="isExpandedDesktop && !isMobile ? 'Hide info' : 'More info'"
                :title="isExpandedDesktop && !isMobile ? 'Hide info' : 'More info'"
              >
                <IconUp v-if="isExpandedDesktop && !isMobile" :size="20" />
                <IconDown v-else :size="20" />
              </button>
              <Transition name="idle-hint">
                <div
                  v-if="idleHintVisible && isMobile && !isSheetOpen"
                  class="idle-hint-tooltip"
                  role="tooltip"
                  @click.stop="toggleArticleDetails"
                >
                  <span class="idle-hint-glow" aria-hidden="true"></span>
                  <span class="idle-hint-text">Tap for the takeaways</span>
                  <span class="idle-hint-caret" aria-hidden="true"></span>
                </div>
              </Transition>
            </div>

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
  margin: 0 auto calc(5.25rem + var(--overlay-push, 0px));
  max-width: 1440px;
  position: relative;
  /* No transition by default — expand is instant. */
  /* Clears the fixed header + sticky content filter when scrolled to via hash or .scrollIntoView() */
  scroll-margin-top: 128px;
}

.article-wrapper.is-collapsing {
  transition: margin-bottom 0.7s cubic-bezier(0.32, 0.72, 0.24, 1);
}

.article-wrapper :deep(.glass-card) {
  transition: transform 420ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 420ms ease,
    border-radius 420ms ease, box-shadow 420ms ease;
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

/* Border beam wraps the combined card + bento outline as a single shape when expanded.
   Beam lives on the wrapper, extending from -1px above the card to pushHeight+1px below it. */
.article-wrapper.has-overlay::after {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: calc(-1 * var(--overlay-push, 0px) - 2px);
  border-radius: 20px;
  padding: 1.5px;
  background: conic-gradient(
    from var(--angle, 0deg),
    transparent 65%,
    var(--accent-2) 80%,
    var(--primary) 95%,
    transparent 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  pointer-events: none;
  animation: spin-beam 5s linear infinite;
  transition: bottom 0.58s cubic-bezier(0.32, 0.72, 0.24, 1);
  z-index: 11;
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
  transition: color 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.article-more-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: rgb(from var(--primary) r g b / 12%);
  transform: scale(1.08);
}

.article-more-btn.is-throbbing > svg {
  animation: more-btn-throb 1.9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: 1.2s;
}

@keyframes more-btn-throb {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.9; }
  30% { transform: translateY(3px); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .article-more-btn.is-throbbing > svg { animation: none; }
}

.more-btn-hint-wrap {
  position: relative;
  display: inline-flex;
}

.idle-hint-tooltip {
  position: absolute;
  bottom: calc(100% + 12px);
  right: -6px;
  padding: 0.55rem 0.9rem;
  border-radius: 12px;
  background: var(--glass-tint);
  border: 1px solid rgb(from var(--primary) r g b / 32%);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  box-shadow: 0 10px 28px rgb(0 0 0 / 14%), 0 0 0 1px rgb(from var(--primary) r g b / 8%) inset;
  font-size: 0.78rem;
  font-weight: 550;
  line-height: 1;
  color: var(--text);
  white-space: nowrap;
  cursor: pointer;
  z-index: 12;
  overflow: visible;
}

.idle-hint-text {
  position: relative;
  z-index: 1;
  background: linear-gradient(90deg, var(--primary), var(--text));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.idle-hint-glow {
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: radial-gradient(120% 140% at 80% 0%, rgb(from var(--primary) r g b / 18%), transparent 60%);
  pointer-events: none;
  z-index: 0;
}

.idle-hint-caret {
  position: absolute;
  top: 100%;
  right: 18px;
  width: 12px;
  height: 6px;
  overflow: hidden;
}

.idle-hint-caret::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 0;
  width: 12px;
  height: 12px;
  background: var(--glass-tint);
  border: 1px solid rgb(from var(--primary) r g b / 32%);
  transform: rotate(45deg);
  transform-origin: center;
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
}

.idle-hint-enter-active {
  transition: opacity 0.32s ease-out, transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.idle-hint-leave-active {
  transition: opacity 0.22s ease-in, transform 0.22s ease-in;
}

.idle-hint-enter-from,
.idle-hint-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(0.96);
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
  /* Expand is instant — no transition. */
  transition: none;
  max-height: 2400px;
  opacity: 1;
}

.bento-expand-leave-active {
  transition: max-height 0s cubic-bezier(0.32, 0.72, 0.24, 1), opacity 0s ease-in, padding 0s cubic-bezier(0.32, 0.72, 0.24, 1);
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
