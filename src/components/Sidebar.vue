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
    header=" "
    blockScroll
  >
    <nav>
      <ul>
        <li>
          <router-link to="/" @click="sidebar.close">About Me</router-link>
        </li>
        <li v-for="link of ['projects', 'articles', 'community']">
          <router-link :to="`/${link}`" @click="sidebar.close">{{
            capitalize(link)
          }}</router-link>
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
li:not([contact]) {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

[contact] {
  padding-top: 0.5rem;
}

.router-link-active {
  font-weight: bold;
}

[theme] {
  padding-top: 1.5rem;
}
</style>
