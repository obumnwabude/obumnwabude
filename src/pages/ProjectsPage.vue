<script setup lang="ts">
import Project from '@/components/Project.vue';
import { projects } from '@/content/projects';
</script>

<template>
  <h2 page-heading>CODING</h2>
  <p page-intro>
    As dev, I build projects. For some, solo. For others, with wonderful team
    mates. We've built ground-breaking solutions. Following are hand-picked
    projects I've worked (-ing) on over the years.
  </p>
  <div page-content>
    <Project :project="project" v-for="project of projects" />
  </div>
</template>
