<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue';
import { displayDate, type Project } from '@/types';

const { project, featured = false } = defineProps<{
  project: Project;
  featured?: boolean;
}>();
const { date, image, title, description, actions, tags } = project;
</script>

<template>
  <div v-reveal="{ delay: 50 }" class="project-wrapper">
    <GlassCard
      variant="frost"
      :hoverable="true"
      :spotlight="true"
      :borderBeam="featured"
      class="project-card"
    >
      <div class="project-inner">
        <div class="project-image-container">
          <img
            :src="`/assets/${image.name}.${image.png ? 'png' : 'jpg'}`"
            :alt="image.alt"
            loading="lazy"
            class="project-image"
          />
        </div>

        <div class="project-details">
          <div v-if="tags?.length" class="project-tags">
            <span v-for="tag of tags" :key="tag" class="project-tag">
              {{ tag }}
            </span>
          </div>

          <p v-if="date" class="project-date">{{ displayDate(date) }}</p>

          <h3 class="project-title">{{ title }}</h3>
          <p class="project-description">{{ description }}</p>

          <div class="project-actions">
            <a
              v-for="({ link, title }, i) of actions"
              :key="link"
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
              :filled="i === 0 ? true : undefined"
              :outlined="i !== 0 ? true : undefined"
              class="project-action-btn"
            >
              {{ title }}
            </a>
          </div>
        </div>
      </div>
    </GlassCard>
  </div>
</template>

<style scoped>
.project-wrapper {
  margin: 0 auto 3.5rem;
  max-width: 1440px;
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
  padding: 1.5rem;
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
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: center;
  margin-top: auto;
}

.project-action-btn {
  cursor: pointer;
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

  .project-wrapper:nth-child(even) .project-inner {
    flex-direction: row-reverse;
  }

  .project-wrapper:nth-child(even) .project-image-container {
    border-right: none;
    border-left: 1px solid var(--glass-border);
  }

  .project-details {
    padding: 2.25rem 2.5rem;
  }

  .project-action-btn {
    min-width: 120px;
  }
}

@media (min-width: 1024px) {
  .project-title {
    font-size: 1.85rem;
  }
}
</style>
