<script setup lang="ts">
import IconEmail from '@/icons/IconEmail.vue';

const { color, icon } = defineProps(['color', 'icon']);
</script>

<template>
  <a
    href="mailto:contact@obum.me"
    target="_blank"
    rel="noopener noreferrer"
    :style="{ color }"
    :class="{ icon }"
  >
    <IconEmail v-if="icon" />
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

a.icon {
  align-items: center;
  display: flex;
  padding: 0.5rem 1.5rem;
  width: fit-content;
}

a.icon svg {
  margin-right: 0.5rem;
}
</style>
