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
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    style="display: inline-block; vertical-align: middle"
    aria-hidden="true"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
</template>
