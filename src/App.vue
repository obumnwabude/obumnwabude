<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
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
  <Header />

  <main>
    <Sidebar />

    <RouterView />
  </main>

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
