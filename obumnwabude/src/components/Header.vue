<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import IconMenu from '@/icons/IconMenu.vue';
import { useSidebarStore } from '@/stores/sidebar';
import Button from 'primevue/button';

const capitalize = (s: string) => s[0].toUpperCase() + s.substring(1);
const sidebar = useSidebarStore();
</script>

<template>
  <header>
    <h1><router-link to="/" obum>Obum</router-link></h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-for="link of ['about', 'projects', 'articles', 'community']">
          <router-link :to="`/${link}`">{{ capitalize(link) }}</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <ContactMe color="var(--primary)" contact-me />
      <button @click="sidebar.open" menu><IconMenu /></button>
    </div>
  </header>
</template>

<style scoped>
header {
  align-items: center;
  background-color: var(--app-bg);
  display: flex;
  left: 0;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
}

h1 {
  font-size: 2rem;
  height: 1.5rem;
  line-height: 1;
}

[obum] {
  font-weight: bold;
}

nav {
  margin-bottom: -8px;
}

ul {
  display: flex;
}

ul li:not(:last-of-type) {
  margin-right: 1.5rem;
}

.router-link-active:not([obum])::after {
  background-color: var(--primary);
  content: ' ';
  display: block;
  height: 3px;
  margin-top: 1px;
}

button {
  background: none;
  border: none;
  color: var(--text);
  outline: none;
  padding: 0.5rem;
}

@media (max-width: 767.98px) {
  nav,
  [contact-me] {
    display: none;
  }
}

@media (min-width: 768px) {
  header {
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }

  [contact-me] {
    padding: 0.5rem 2.5rem;
  }

  [menu] {
    display: none;
  }
}

@media (min-width: 1024px) {
  header {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media (min-width: 1200px) {
  li a {
    font-size: 1.25rem;
  }
}

@media (min-width: 1440px) {
  header {
    border-left: 2px dashed;
    border-right: 2px dashed;
    left: calc((100vw - 1440px) / 2);
    right: calc((100vw - 1440px) / 2);
  }
}
</style>
