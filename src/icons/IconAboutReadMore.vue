<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string;
    color?: string;
  }>(),
  {
    size: 15,
    color: 'currentColor',
  }
);
</script>

<template>
  <svg 
    :width="size"
    :height="size" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-200v-360H120v-80h440v440h-80Zm200-200v-360H320v-80h440v440h-80Z"/></svg>
</template>
