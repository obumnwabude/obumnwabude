<script setup lang="ts">
import ContentFilter from '@/components/ContentFilter.vue';
import ProjectOrEvent from '@/components/ProjectOrEvent.vue';
import { projects } from '@/content/projects';
import { CodingCategories, type CodingCategory } from '@/types';
import { computed, ref } from 'vue';

const activeFilter = ref<CodingCategory | null>(null);
const allCategories = [...CodingCategories];
const filteredProjects = computed(() =>
  activeFilter.value ? projects.filter((p) => p.category === activeFilter.value) : projects
);
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

  <ContentFilter :filters="allCategories" v-model="activeFilter" label="Filter projects by category" />

  <div page-content>
    <TransitionGroup name="filter-list" tag="div">
      <ProjectOrEvent
        v-for="(project, index) of filteredProjects"
        :key="project.title"
        :content="project"
        :is-last="index === filteredProjects.length - 1"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
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
