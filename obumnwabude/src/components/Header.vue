<script setup lang="ts">
import IconMenu from '@/icons/IconMenu.vue';
</script>

<template>
  <header>
    <h1><router-link to="/">Obum</router-link></h1>
    <IconMenu />
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

@media (min-width: 1440px) {
  header {
    border-left: 2px dashed;
    border-right: 2px dashed;
    left: calc((100vw - 1440px) / 2);
    right: calc((100vw - 1440px) / 2);
  }
}
</style>
