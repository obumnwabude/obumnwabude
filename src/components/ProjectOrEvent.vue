<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue';
import IconAboutReadMore from '@/icons/IconAboutReadMore.vue';
import IconApple from '@/icons/IconApple.vue';
import IconArticle from '@/icons/IconArticle.vue';
import IconAward from '@/icons/IconAward.vue';
import IconCode from '@/icons/IconCode.vue';
import IconDocument from '@/icons/IconDocument.vue';
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
import {
  displayDate,
  type ActionIcon,
  type CodingProject,
  type CommunityEvent,
} from '@/types';
import type { Component } from 'vue';

const { content, featured = false } = defineProps<{
  content: CodingProject | CommunityEvent;
  featured?: boolean;
}>();
const { ctasEqualWeights, image, title, description, actions, tags } = content;

const isCommunityEvent = (
  content: CodingProject | CommunityEvent
): content is CommunityEvent => 'date' in content;

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

const getActionIcon = (icon?: ActionIcon): Component =>
  (icon && actionIconMap[icon]) || IconExternalLink;
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

          <p
            v-if="isCommunityEvent(content) && content.date"
            class="project-date"
          >
            {{ displayDate(content.date) }}
          </p>

          <h3 class="project-title">{{ title }}</h3>
          <p class="project-description">{{ description }}</p>

          <div class="project-actions">
            <a
              v-for="({ icon, link, title }, i) of actions"
              :key="link"
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
              :filled="i === 0 || ctasEqualWeights ? true : undefined"
              :outlined="i !== 0 && !ctasEqualWeights ? true : undefined"
              class="project-action-btn"
            >
              <span>{{ title }}</span>
              <component
                :is="getActionIcon(icon)"
                :size="15"
                class="action-icon"
                :class="{
                  'action-external-icon':
                    getActionIcon(icon) === IconExternalLink,
                }"
              />
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
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: center;
  margin-top: auto;
}

.project-action-btn {
  cursor: pointer;
  gap: 0.5rem;
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

  .project-wrapper:nth-child(even) .project-inner {
    flex-direction: row-reverse;
  }

  .project-wrapper:nth-child(even) .project-image-container {
    border-right: none;
    border-left: 1px solid var(--glass-border);
  }

  .project-wrapper:nth-child(even) .project-actions {
    flex-direction: row;
  }

  .project-details {
    padding: 1.75rem 2rem;
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
