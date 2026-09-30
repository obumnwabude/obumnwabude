<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import SocialIcons from '@/components/SocialIcons.vue';
import ThemeMenu from '@/components/ThemeMenu.vue';
import { useSidebarStore } from '@/stores/sidebar';
import Sidebar from 'primevue/sidebar';

const capitalize = (s: string) => s[0].toUpperCase() + s.substring(1);
const sidebar = useSidebarStore();
</script>

<template>
  <Sidebar
    v-model:visible="sidebar.status"
    position="right"
    blockScroll
  >
    <template #header>
      <router-link to="/" @click="sidebar.close" class="sidebar-logo">
        <span class="logo-text">Obum</span>
        <span class="logo-dot"></span>
      </router-link>
    </template>

    <nav>
      <ul>
        <li>
          <router-link to="/" @click="sidebar.close">Home</router-link>
        </li>
        <li v-for="link of ['projects', 'articles', 'community']" :key="link">
          <router-link :to="`/${link}`" @click="sidebar.close">
            {{ capitalize(link) }}
          </router-link>
        </li>
        <li contact>
          <ContactMe color="var(--text)" :icon="true" />
        </li>
        <li theme><ThemeMenu :full="true" /></li>
      </ul>
    </nav>

    <SocialIcons />
  </Sidebar>
</template>

<style scoped>
nav ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

li:not([contact]):not([theme]) a {
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.65rem 1rem;
  border-radius: 14px;
  color: var(--text);
  border: 1px solid transparent;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

li:not([contact]):not([theme]) a:hover {
  background: rgb(from var(--primary) r g b / 12%);
  color: var(--primary);
  transform: translateX(4px);
}

.router-link-active {
  background: rgb(from var(--primary) r g b / 15%) !important;
  color: var(--primary) !important;
  font-weight: 600 !important;
  border-color: rgb(from var(--primary) r g b / 25%) !important;
  box-shadow: 0 2px 10px rgb(from var(--primary) r g b / 15%);
}

[contact] {
  padding-top: 1.25rem;
}

[theme] {
  padding-top: 0.75rem;
}

/* Matching width, border, and height for Contact Me and Theme Picker */
[contact] :deep(button),
[theme] :deep([main].full) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 152px;
  height: 2.35rem;
  padding: 0 1.2rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 9999px;
  border: 1px solid var(--glass-border) !important;
  background: var(--glass-tint) !important;
  color: var(--text) !important;
  box-shadow: var(--shadow-button-outlined) !important;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.18s ease,
    box-shadow 0.2s ease;
}

[contact] :deep(button:hover),
[theme] :deep([main].full:hover) {
  border-color: rgb(from var(--primary) r g b / 40%) !important;
  background: rgb(from var(--primary) r g b / 12%) !important;
  color: var(--primary) !important;
  transform: translateY(-1px);
  box-shadow: var(--shadow-button-outlined-hover) !important;
}
</style>
