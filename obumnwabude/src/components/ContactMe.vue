<script setup lang="ts">
const { color } = defineProps(['color']);
</script>

<template>
  <a
    href="mailto:contact@obum.me"
    target="_blank"
    rel="noopener noreferrer"
    :style="{ color }"
  >
    Contact Me
  </a>
</template>

<style scoped>
a {
  border: 1px solid;
  border-radius: 32px;
  font-weight: 500;
  padding: 0.625rem 3rem;
}
</style>
