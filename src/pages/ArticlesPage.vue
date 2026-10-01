<script setup lang="ts">
import Article from '@/components/Article.vue';
import ContentFilter from '@/components/ContentFilter.vue';
import TimelineScroller from '@/components/TimelineScroller.vue';
import { articles } from '@/content/articles';
import { LINKS } from '@/content/links';
import { ArticleCategories, type ArticleCategory } from '@/types';
import { trackAuthorProfileClick } from '@/utils/analytics';
import { computed, ref } from 'vue';

const activeFilter = ref<ArticleCategory | null>(null);
const allArticleCategories = [...ArticleCategories];
const filteredArticles = computed(() =>
  activeFilter.value ? articles.filter((a) => a.category === activeFilter.value) : articles
);

const timelineArticles = computed(() =>
  filteredArticles.value.map((article, index) => ({
    id: index,
    date: article.date,
  }))
);
</script>

<template>
  <h1 page-heading>WRITING ARTICLES</h1>
  <p page-intro>
    I write articles on various topics. I write about mobile app development with Flutter, about Tech Communities, web
    development, my stories, and anything worth sharing.
    <br /><br />
    The topic list has widened over the years into AI agent tooling, product analytics, authentication and security,
    backend design and Firebase architecture, Angular and Vue on the frontend, and career notes from the Google
    Developer Expert path. The pieces vary from short walkthroughs to longer teardowns, and many ship with companion
    source repositories.
    <br /><br />
    Here are articles I've written over the years. For some, I published them on my blogs. For others, they were guest
    authorship for blogs like
    <a
      :href="LINKS.cssTricks"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackAuthorProfileClick('CSS-Tricks', LINKS.cssTricks)"
      >CSS-Tricks</a
    >
    and
    <a
      :href="LINKS.freeCodeCamp"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackAuthorProfileClick('freeCodeCamp', LINKS.freeCodeCamp)"
      >freeCodeCamp</a
    >, and outlets like Medium, Hashnode, Dev.to, and SweetCode.
  </p>

  <ContentFilter :filters="allArticleCategories" v-model="activeFilter" label="Filter articles" />

  <div page-content>
    <TransitionGroup name="filter-list" tag="div">
      <div
        v-for="(article, index) of filteredArticles"
        :key="article.title"
        :id="`timeline-item-${index}`"
        class="timeline-item"
      >
        <Article :article="article" />
      </div>
    </TransitionGroup>
  </div>

  <TimelineScroller :items="timelineArticles" />
</template>

<style scoped>
.timeline-item {
  scroll-margin-top: 6rem;
}

.filter-list-move,
.filter-list-enter-active,
.filter-list-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.filter-list-enter-from,
.filter-list-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
.filter-list-leave-active {
  position: absolute;
}
</style>
