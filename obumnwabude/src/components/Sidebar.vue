<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import SocialIcons from '@/components/SocialIcons.vue';
import { useSidebarStore } from '@/stores/sidebar';
import Sidebar from 'primevue/sidebar';

const capitalize = (s: string) => s[0].toUpperCase() + s.substring(1);
const sidebar = useSidebarStore();
</script>

<template>
  <Sidebar v-model:visible="sidebar.status" position="right" header=" ">
    <nav>
      <ul>
        <li><router-link to="/" @click="sidebar.close">Home</router-link></li>
        <li v-for="link of ['about', 'projects', 'articles', 'community']">
          <router-link :to="`/${link}`" @click="sidebar.close">{{
            capitalize(link)
          }}</router-link>
        </li>
        <li contact><ContactMe color="white" @click="sidebar.close" /></li>
      </ul>
    </nav>

    <SocialIcons color="white" />
  </Sidebar>
</template>

<style scoped>
li:not([contact]) {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

[contact] {
  padding-top: 1rem;
}

.router-link-active {
  font-weight: bold;
}
</style>
