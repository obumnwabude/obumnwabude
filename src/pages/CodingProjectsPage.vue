<script setup lang="ts">
import ContentFilter from '@/components/ContentFilter.vue';
import ProjectOrEvent from '@/components/ProjectOrEvent.vue';
import { projects } from '@/content/projects';
import { CodingCategories, type CodingCategory } from '@/types';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const filterAnchorRef = ref<HTMLElement | null>(null);

const isValidCategory = (value: string): value is CodingCategory => {
  return CodingCategories.includes(value as CodingCategory);
};

const parseFiltersFromRoute = (): CodingCategory[] => {
  const filtersParam = route.query.filters;
  if (!filtersParam) return [];
  if (typeof filtersParam === 'string') {
    return filtersParam.split(',').filter(isValidCategory);
  }
  return Array.isArray(filtersParam)
    ? filtersParam.filter((f): f is CodingCategory => typeof f === 'string' && isValidCategory(f))
    : [];
};

const activeFilters = computed((): CodingCategory[] => parseFiltersFromRoute());
const allCategories = [...CodingCategories];

const filteredProjects = computed(() =>
  activeFilters.value.length ? projects.filter((p) => activeFilters.value.includes(p.category)) : projects
);

const projectCounts = computed(() =>
  allCategories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = projects.filter((p) => p.category === cat).length;
    return acc;
  }, {})
);

const updateFilters = (newFilters: string[]) => {
  const validFilters = newFilters.filter(isValidCategory);
  if (validFilters.length === 0) {
    router.push({ query: {} });
  } else {
    router.push({ query: { filters: validFilters.join(',') } });
  }
};

function scrollToFilter(behavior: ScrollBehavior = 'smooth') {
  const anchor = filterAnchorRef.value;
  if (!anchor) return;
  const stickyTop = window.innerWidth >= 768 ? 64 : 60;
  const target = window.scrollY + anchor.getBoundingClientRect().top - stickyTop;
  window.scrollTo({ top: Math.max(0, target), behavior });
}

onMounted(() => {
  if (activeFilters.value.length) nextTick(() => scrollToFilter('auto'));
});

watch(activeFilters, async () => {
  await nextTick();
  scrollToFilter();
});
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

  <div ref="filterAnchorRef" aria-hidden="true" style="height: 0; overflow: hidden"></div>
  <ContentFilter
    :filters="allCategories"
    :model-value="activeFilters"
    @update:model-value="updateFilters"
    :counts="projectCounts"
    :total-count="projects.length"
    label="Filter projects by category"
  />

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
