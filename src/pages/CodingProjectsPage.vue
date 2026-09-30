<script setup lang="ts">
import ProjectOrEvent from '@/components/ProjectOrEvent.vue';
import { projects } from '@/content/projects';
</script>

<template>
  <h1 page-heading>CODING PROJECTS</h1>
  <p page-intro>
    As dev, I build projects. For some, solo. For others, with wonderful team mates. We've built ground-breaking
    solutions. Following are hand-picked projects I've worked (-ing) on over the years.
  </p>
  <div page-content>
    <ProjectOrEvent v-for="project of projects" :key="project.title" :content="project" />
  </div>
</template>
