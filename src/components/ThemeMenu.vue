<script setup lang="ts">
const { full } = defineProps(['full']);
import IconMoon from '@/icons/IconMoon.vue';
import IconSun from '@/icons/IconSun.vue';
import IconSystemTheme from '@/icons/IconSystemTheme.vue';
import { useSidebarStore } from '@/stores/sidebar';
import { themes, useThemeStore, type ThemeMode } from '@/stores/theme';
import Menu from 'primevue/menu';
import { ref } from 'vue';

const icons = () => ({
  'Dark Theme': IconMoon,
  'Light Theme': IconSun,
  'Device Default': IconSystemTheme,
});
const selectTheme = (mode: ThemeMode, event?: MouseEvent) => {
  theme.set(mode, event);
  sidebar.close();
};

const items = ref(
  themes.map((mode) => ({
    label: mode,
    command: (e: any) => {
      selectTheme(mode, e?.originalEvent);
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
    outlined
    class="glass-theme-btn"
  >
    <component :is="icons()[full ? theme.currentIcon : theme.reverseIcon]" />
    <span>{{ theme.mode }}</span>
  </button>
  <Menu ref="menu" id="theme-menu" :model="items" :popup="true">
    <template #item="{ item, props }">
      <button
        menu-item
        v-bind="props.action"
        @click="(e) => selectTheme(item.label as ThemeMode, e)"
        :class="{ 'is-active-theme': theme.mode === item.label }"
      >
        <span class="item-left">
          <component :is="icons()[item.label as ThemeMode]" />
          <span>{{ item.label }}</span>
        </span>
        <!-- Active Tick Check Icon -->
        <svg
          v-if="theme.mode === item.label"
          class="check-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
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
  cursor: pointer;
}

[menu-item] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  gap: 1rem;
  transition: background-color 0.15s ease, color 0.15s ease;
}

[menu-item]:hover {
  background: rgb(from var(--primary) r g b / 10%);
  color: var(--primary);
}

[menu-item].is-active-theme {
  color: var(--primary);
  font-weight: 600;
  background: rgb(from var(--primary) r g b / 12%);
}

.item-left {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
}

.check-icon {
  margin-left: auto;
  flex-shrink: 0;
  filter: drop-shadow(0 0 4px rgb(from var(--primary) r g b / 50%));
}

.glass-theme-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

[main]:not(.full) {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50% !important;
  padding: 0 !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

[main].full {
  border-radius: 9999px;
  font-weight: 500;
  height: 2.25rem;
  padding: 0 1.15rem;
}

[main].full svg {
  margin-right: 0.5rem;
}

[main]:not(.full) span {
  display: none;
}
</style>
