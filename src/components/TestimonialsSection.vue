<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue';
import { LINKS } from '@/content/links';
import { initials, TESTIMONIALS } from '@/content/testimonials';
import IconExternalLink from '@/icons/IconExternalLink.vue';
import { trackEvent } from '@/utils/analytics';
import { computed } from 'vue';

const props = withDefaults(defineProps<{ featuredOnly?: boolean; location?: string }>(), {
  featuredOnly: false,
  location: 'home',
});

const items = computed(() => (props.featuredOnly ? TESTIMONIALS.filter((t) => t.featured) : TESTIMONIALS));

const onVerify = (name: string) =>
  trackEvent('testimonial_verify_click', {
    testimonial_name: name,
    trigger_location: props.location,
    destination_url: LINKS.linkedinRecommendations,
  });
</script>

<template>
  <div class="testimonials">
    <div class="t-grid" :class="{ 'is-all': !featuredOnly }">
      <GlassCard
        v-for="(item, idx) in items"
        :key="item.name"
        as="figure"
        variant="frost"
        :hoverable="true"
        :spotlight="true"
        class="t-card"
        v-reveal="{ delay: idx * 80 }"
      >
        <span class="t-mark" aria-hidden="true">“</span>
        <blockquote class="t-quote">
          <p>{{ item.quote }}</p>
        </blockquote>
        <figcaption class="t-person">
          <span class="t-avatar" aria-hidden="true">{{ initials(item.name) }}</span>
          <span class="t-meta">
            <span class="t-name">{{ item.name }}</span>
            <span class="t-title">{{ item.title }}</span>
            <span class="t-rel">{{ item.relationship }}</span>
          </span>
        </figcaption>
        <a
          class="t-verify"
          :href="LINKS.linkedinRecommendations"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Read ${item.name}'s full recommendation on LinkedIn (opens in a new tab)`"
          @click="() => onVerify(item.name)"
        >
          Read on LinkedIn <IconExternalLink class="t-ext" />
        </a>
      </GlassCard>
    </div>

    <p v-if="featuredOnly" class="t-all">
      <a
        :href="LINKS.linkedinRecommendations"
        target="_blank"
        rel="noopener noreferrer"
        underline
        @click="() => onVerify('all')"
        >Read all my recommendations on LinkedIn</a
      >
    </p>
  </div>
</template>

<style scoped>
.testimonials {
  max-width: 1440px;
  margin: 0 auto;
}

.t-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .t-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1140px) {
  .t-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.t-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem 1.5rem 1.4rem;
  height: 100%;
  margin: 0;
}

.t-mark {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 3.5rem;
  line-height: 0.6;
  color: var(--primary);
  opacity: 0.35;
  height: 1.5rem;
}

.t-quote {
  margin: 0 0 1.25rem;
  flex-grow: 1;
}

.t-quote p {
  font-size: 0.98rem;
  line-height: 1.65;
  opacity: 0.92;
}

.t-person {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-top: 1px solid var(--glass-border);
  padding-top: 1rem;
}

.t-avatar {
  width: 2.6rem;
  height: 2.6rem;
  flex-shrink: 0;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--primary);
  background: rgb(from var(--primary) r g b / 10%);
  border: 1px solid rgb(from var(--primary) r g b / 22%);
}

.t-meta {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.t-name {
  font-weight: 650;
  font-size: 0.95rem;
}

.t-title {
  font-size: 0.8rem;
  opacity: 0.8;
}

.t-rel {
  font-size: 0.74rem;
  opacity: 0.6;
}

.t-verify {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.9rem;
  font-size: 0.8rem;
  font-weight: 550;
  color: var(--primary);
}

.t-verify:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.t-verify:focus-visible,
.t-all a:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
  border-radius: 4px;
}

.t-ext {
  width: 0.8rem;
  height: 0.8rem;
}

.t-all {
  text-align: center;
  margin-top: 1.75rem;
  font-size: 0.95rem;
}

.t-all a {
  color: var(--primary);
  font-weight: 550;
}

@media (min-width: 768px) and (max-width: 1139.98px) {
  .t-grid:not(.is-all) .t-card:nth-child(3) {
    grid-column: span 2;
  }
}
</style>
