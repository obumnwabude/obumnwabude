<script setup lang="ts">
import Article from '@/components/Article.vue';
import { articles } from '@/content/articles';
</script>

<template>
  <h2 page-heading>WRITING ARTICLES</h2>
  <p page-intro>
    I write articles on various topics. I write about mobile app development
    with Flutter, about Tech Communities, web development, my stories, and
    anything worth sharing.
    <br /><br />
    Here are articles I've written over the years. For some, I published them on
    my blogs. For others, they were guest authorship for blogs like
    <a
      href="https://www.css-tricks.com/author/obumnwabude"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >CSS-Tricks</a
    >
    and
    <a
      href="https://www.freeCodeCamp.org/news/author/obumnwabude"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >freeCodeCamp</a
    >.
  </p>
  <div page-content>
    <Article :article="article" v-for="article of articles" />
  </div>
</template>
