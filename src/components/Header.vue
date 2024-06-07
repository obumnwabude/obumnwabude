<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import ThemeMenu from '@/components/ThemeMenu.vue';
import IconMenu from '@/icons/IconMenu.vue';
import { useSidebarStore } from '@/stores/sidebar';

const capitalize = (s: string) => s[0].toUpperCase() + s.substring(1);
const sidebar = useSidebarStore();
</script>

<template>
  <header>
    <h1><router-link to="/" obum>Obum</router-link></h1>
    <nav>
      <ul>
        <li><router-link to="/">About Me</router-link></li>
        <li v-for="link of ['projects', 'articles', 'community']">
          <router-link :to="`/${link}`">{{ capitalize(link) }}</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <ContactMe color="var(--primary)" contact-me />
      <div theme><ThemeMenu :full="false" /></div>
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
  margin: 0 auto;
  max-width: 1440px;
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

[contact-me] {
  margin-right: 1rem;
  padding: 0.5rem 2.5rem;
}

[menu] {
  background: none;
  border: none;
  color: var(--text);
  outline: none;
  padding: 0.5rem;
}

header > div {
  align-items: center;
  display: flex;
}

@media (max-width: 511.98px) {
  [contact-me],
  [theme] {
    display: none;
  }
}

@media (max-width: 767.98px) {
  nav {
    display: none;
  }

  [theme] {
    margin-right: 0.5rem;
  }
}

@media (min-width: 768px) {
  header {
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
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
  ul li:not(:last-of-type) {
    margin-right: 2rem;
  }

  li a {
    font-size: 1.25rem;
  }
}

@media (min-width: 1440px) {
  header {
    padding-top: 4.5rem;
  }

  header::before {
    border-style: dashed;
    border-width: 2px 2px 0 2px;
    content: ' ';
    display: block;
    height: calc(100% - 3rem);
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 3rem;
  }
}
</style>
