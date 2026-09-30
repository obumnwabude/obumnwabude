<script setup lang="ts">
import Article from '@/components/Article.vue';
import TimelineScroller from '@/components/TimelineScroller.vue';
import { articles } from '@/content/articles';
import { LINKS } from '@/content/links';
import { trackAuthorProfileClick } from '@/utils/analytics';

const timelineArticles = articles.map((article, index) => ({
  id: index,
  date: article.date,
}));
</script>

<template>
  <h1 page-heading>WRITING ARTICLES</h1>
  <p page-intro>
    I write articles on various topics. I write about mobile app development with Flutter, about Tech Communities, web
    development, my stories, and anything worth sharing.
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
    >.
  </p>
  <div page-content>
    <div v-for="(article, index) of articles" :key="index" :id="`timeline-item-${index}`" class="timeline-item">
      <Article :article="article" />
    </div>
  </div>

  <TimelineScroller :items="timelineArticles" />
</template>

<style scoped>
.timeline-item {
  scroll-margin-top: 6rem;
}
</style>
