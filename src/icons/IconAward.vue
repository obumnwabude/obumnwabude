<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string;
    color?: string;
  }>(),
  {
    size: 20,
    color: 'currentColor',
  }
);
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
</template>
