<script setup lang="ts">
import AmbientBackdrop from '@/components/AmbientBackdrop.vue';
import Footer from '@/components/Footer.vue';
import GlassDefs from '@/components/GlassDefs.vue';
import Header from '@/components/Header.vue';
import MouseFollower from '@/components/MouseFollower.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
import Sidebar from '@/components/Sidebar.vue';
import { useThemeStore } from '@/stores/theme';
import { usePrimeVue } from 'primevue/config';
import { RouterView } from 'vue-router';

const PrimeVue = usePrimeVue();
PrimeVue.config.ripple = true;

// this forces the theme refresh when the app loads
useThemeStore();
</script>

<template>
  <AmbientBackdrop />
  <GlassDefs />
  <MouseFollower />
  <Header />

  <main>
    <Sidebar />

    <RouterView />
  </main>

  <ScrollToTop />
  <Footer />
</template>

<style scoped>
main {
  padding: 3rem 1.5rem;
}

@media (min-width: 1024px) {
  main {
    padding: 3rem 5rem;
  }
}
</style>
