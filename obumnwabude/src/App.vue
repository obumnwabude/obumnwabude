<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import { RouterView } from 'vue-router';
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
  padding: 1.5rem;
}

@media (min-width: 1024px) {
  main {
    padding: 2rem 5rem;
  }
}
</style>
