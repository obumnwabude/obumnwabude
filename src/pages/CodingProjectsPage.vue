<script setup lang="ts">
import ProjectOrEvent from '@/components/ProjectOrEvent.vue';
import { projects } from '@/content/projects';
</script>

<template>
  <h1 page-heading>CODING PROJECTS</h1>
  <p page-intro>
    As dev, I build projects. For some, solo. For others, with wonderful team mates. We've built ground-breaking
    solutions.
    <br /><br />
    The work spans Web3 (Solidity on EVM and Rust on Solana), Flutter mobile apps shipped to Google Play and the App
    Store, full-stack builds on Angular, Vue, and Firebase, and open-source tooling. Some are live products, some are
    packages other developers depend on, and some are earlier builds kept here as a record of the road.
    <br /><br />
    Following are hand-picked projects I've worked (-ing) on over the years.
  </p>
  <div page-content>
    <ProjectOrEvent
      v-for="(project, index) of projects"
      :key="project.title"
      :content="project"
      :is-last="index === projects.length - 1"
    />
  </div>
</template>
