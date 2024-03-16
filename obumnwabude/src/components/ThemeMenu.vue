<script setup lang="ts">
const { full } = defineProps(['full']);
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
    :class="{ full }"
  >
    <component :is="icons[full ? theme.mode : theme.icon]" />
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
  border: none;
  color: var(--text);
  display: flex;
  font-size: 1rem;
  outline: none;
}

[main].full {
  border: 1px solid;
  border-radius: 32px;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
}

[main].full svg {
  margin-right: 0.5rem;
}

[main]:not(.full) span {
  display: none;
}

[menu-item] {
  align-items: center;
  display: flex;
  padding: 0.5rem;
}

[menu-item] svg {
  line-height: 0;
  margin-right: 1rem;
}
</style>
