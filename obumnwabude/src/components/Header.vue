<script setup lang="ts">
import IconMenu from '@/icons/IconMenu.vue';
import { useSidebarStore } from '@/stores/sidebar';
import Button from 'primevue/button';
const sidebar = useSidebarStore();
</script>

<template>
  <header>
    <h1><router-link to="/">Obum</router-link></h1>
    <button @click="sidebar.open"><IconMenu /></button>
  </header>
</template>

<style scoped>
header {
  align-items: center;
  background-color: var(--app-bg);
  display: flex;
  left: 0;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
}

h1 {
  font-weight: bold;
  height: 1.5rem;
  line-height: 1;
}


button {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0.5rem;
}

@media (min-width: 1440px) {
  header {
    border-left: 2px dashed;
    border-right: 2px dashed;
    left: calc((100vw - 1440px) / 2);
    right: calc((100vw - 1440px) / 2);
  }
}

@media (min-width: 1024px) {
  header {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>
