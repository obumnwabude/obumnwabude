<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import { useThemeStore } from '@/stores/theme';
import { RouterView } from 'vue-router';

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
