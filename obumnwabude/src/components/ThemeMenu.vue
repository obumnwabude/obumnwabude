<script setup lang="ts">
const { color } = defineProps(['color']);
import IconMoon from '@/icons/IconMoon.vue';
import IconSun from '@/icons/IconSun.vue';
import IconSync from '@/icons/IconSync.vue';
import { useSidebarStore } from '@/stores/sidebar';
import { themes, useThemeStore, type ThemeMode } from '@/stores/theme';
import Menu from 'primevue/menu';
import { ref } from 'vue';

const icons = {
  'Dark Theme': IconMoon,
  'Light Theme': IconSun,
  'System Mode': IconSync,
};
const items = ref(
  themes.map((mode) => ({
    label: mode,
    command: () => {
      theme.set(mode);
      sidebar.close();
    },
  }))
);
const menu = ref();
const sidebar = useSidebarStore();
const theme = useThemeStore();
</script>

<template>
  <button
    main
    @click="menu.toggle"
    aria-haspopup="true"
    aria-controls="theme-menu"
    :style="{ color }"
  >
    <component :is="icons[theme.mode]" />
    <span>{{ theme.mode }}</span>
  </button>
  <Menu ref="menu" id="theme-menu" :model="items" :popup="true">
    <template #item="{ item, props }">
      <button menu-item v-bind="props.action">
        <component :is="icons[item.label as ThemeMode]" />
        {{ item.label }}
      </button>
    </template>
  </Menu>
</template>

<style scoped>
button {
  align-items: center;
  background: none;
  display: flex;
  font-size: 1rem;
  outline: none;
}

[main] {
  border: 0.5px solid;
  border-radius: 32px;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
}

[main] svg {
  margin-right: 0.5rem;
}

[menu-item] {
  align-items: center;
  border: none;
  display: flex;
  padding: 0.5rem;
}

[menu-item] svg {
  line-height: 0;
  margin-right: 1rem;
}
</style>
