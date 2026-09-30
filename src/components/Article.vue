<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue';
import IconRight from '@/icons/IconRight.vue';
import { displayDate, type Article } from '@/types';

const { article } = defineProps<{ article: Article }>();
const { image, date, title, description, link, publishedOn } = article;
</script>

<template>
  <div v-reveal="{ delay: 50 }" class="article-wrapper">
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      :title="title"
      :aria-label="title"
      class="article-link"
    >
      <GlassCard variant="frost" :hoverable="true" :spotlight="true" class="article-card">
        <div class="article-inner">
          <div class="article-image-container">
            <img
              :src="`/assets/${image.name}.${image.png ? 'png' : 'jpg'}`"
              :alt="image.alt"
              loading="lazy"
              class="article-image"
            />
          </div>

          <div class="article-details">
            <div class="article-header">
              <span class="article-date">{{ displayDate(date) }}</span>
              <span class="article-badge">
                Published on <strong class="badge-accent">{{ publishedOn }}</strong>
              </span>
            </div>

            <h3 class="article-title">{{ title }}</h3>
            <p class="article-description">{{ description }}</p>

            <div class="article-bottom">
              <span class="read-more-text">Read Article</span>
              <span class="article-arrow-btn">
                <IconRight />
              </span>
            </div>
          </div>
        </div>
      </GlassCard>
    </a>
  </div>
</template>

<style scoped>
.article-wrapper {
  margin: 0 auto 3rem;
  max-width: 1440px;
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

.article-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.article-card {
  padding: 0;
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

.article-date {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gray);
}

.article-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgb(from var(--primary) r g b / 10%);
  border: 1px solid rgb(from var(--primary) r g b / 22%);
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
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
  margin-bottom: 0.75rem;
  color: var(--text);
  transition: color 0.2s ease;
}

.article-card:hover .article-title {
  color: var(--primary);
}

.article-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text);
  opacity: 0.88;
  margin-bottom: 1.25rem;
}

.article-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.85rem;
  border-top: 1px solid var(--glass-border);
  margin-top: auto;
}

.read-more-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--primary);
}

.article-arrow-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: rgb(from var(--primary) r g b / 10%);
  color: var(--primary);
  border: 1px solid rgb(from var(--primary) r g b / 20%);
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1),
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.article-arrow-btn :deep(svg path) {
  stroke: currentColor;
}

.article-card:hover .article-arrow-btn {
  background: var(--primary);
  border-color: transparent;
  color: #ffffff !important;
  transform: translateX(3px);
  box-shadow: var(--shadow-button-filled);
}

body.dark .article-card:hover .article-arrow-btn {
  background: var(--primary);
  color: #060911 !important;
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
