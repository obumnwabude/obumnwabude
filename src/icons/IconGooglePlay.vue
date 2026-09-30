<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string;
  }>(),
  {
    size: 16,
  }
);
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M3.609 1.814L13.793 12 3.61 22.186a2.38 2.38 0 0 1-.61-.913V2.727c.174-.354.385-.668.61-.913zM15.207 13.414l2.25 2.25-11.834 6.745 9.584-8.995zm2.25-5.078l-2.25 2.25-9.584-8.995L17.457 8.336zm1.22 1.22l2.673 1.523a1.83 1.83 0 0 1 0 3.168l-2.673 1.523-2.128-2.128 2.128-2.086z"
    />
  </svg>
</template>
