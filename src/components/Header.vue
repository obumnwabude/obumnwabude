<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import ThemeMenu from '@/components/ThemeMenu.vue';
import IconMenu from '@/icons/IconMenu.vue';
import { useSidebarStore } from '@/stores/sidebar';
import { onMounted, onUnmounted, ref } from 'vue';

const capitalize = (s: string) => s[0].toUpperCase() + s.substring(1);
const sidebar = useSidebarStore();
const isScrolled = ref(false);

const handleScroll = () => {
  if (typeof window === 'undefined') return;
  isScrolled.value = window.scrollY > 15;
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  if (typeof window === 'undefined') return;
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="glass-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="header-inner">
      <div class="header-left">
        <h1>
          <router-link to="/" obum class="logo-link">
            <span class="logo-text">Obum</span>
            <span class="logo-dot"></span>
          </router-link>
        </h1>

        <!-- Wide screen nav immediately after logo on the left -->
        <nav class="desktop-nav">
          <ul>
            <li>
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li v-for="link of ['projects', 'articles', 'community']" :key="link">
              <router-link :to="`/${link}`" class="nav-link">
                {{ capitalize(link) }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header-actions">
        <ContactMe color="var(--primary)" contact-me />
        <!-- Theme toggle cast directly into the UI (no borders/background) -->
        <div theme><ThemeMenu :full="false" /></div>
        <!-- Menu toggle cast directly into the UI (no borders/background) -->
        <button @click="sidebar.open" menu aria-label="Open Navigation Menu">
          <IconMenu />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.glass-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: transparent;
  border-bottom: 1px solid transparent;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  box-shadow: none;
  transition:
    background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    backdrop-filter 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    -webkit-backdrop-filter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Glassy background gradually assumed on scroll */
.glass-header.is-scrolled {
  background: var(--glass-tint);
  border-bottom: 1px solid var(--glass-border);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  box-shadow: 0 4px 20px rgb(0 0 0 / 5%), inset 0 -1px 0 rgba(255, 255, 255, 0.3);
}

body.dark .glass-header.is-scrolled {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45), inset 0 -1px 0 rgba(255, 255, 255, 0.08);
}

.header-inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0.75rem 1.25rem;
  transition: padding 0.2s ease;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

h1 {
  font-size: 1.45rem;
  line-height: 1;
  margin: 0;
}

.logo-link {
  display: inline-flex;
  align-items: baseline;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text);
  transition: transform 0.2s ease;
}

.logo-link:hover {
  transform: scale(1.02);
}

.logo-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--primary);
  margin-left: 3px;
  box-shadow: 0 0 6px var(--primary);
}

.desktop-nav ul {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.95rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--text);
  border: 1px solid transparent;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.18s ease,
    box-shadow 0.2s ease;
}

.nav-link:hover {
  background: rgb(from var(--primary) r g b / 10%);
  color: var(--primary);
  transform: translateY(-1px);
}

/* Enhanced Active Indicator with Horizontal Fading-Out Gradient */
.router-link-active.nav-link {
  background: rgb(from var(--primary) r g b / 12%);
  color: var(--primary);
  border-color: rgb(from var(--primary) r g b / 25%);
  font-weight: 600;
  box-shadow: 0 1px 8px rgb(from var(--primary) r g b / 12%);
}

.router-link-active.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 8%;
  right: 8%;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--primary) 20%,
    var(--primary) 80%,
    transparent 100%
  );
  box-shadow: 0 0 8px rgb(from var(--primary) r g b / 70%);
}

body.dark .router-link-active.nav-link {
  background: rgb(from var(--primary) r g b / 15%);
  border-color: rgb(from var(--primary) r g b / 35%);
  box-shadow: 0 2px 10px rgb(from var(--primary) r g b / 20%);
}

.header-actions {
  align-items: center;
  display: flex;
  gap: 0.5rem;
}

[contact-me] {
  margin-right: 0.25rem;
}

[contact-me] :deep(button) {
  height: 2.125rem;
  padding: 0 0.95rem;
  font-size: 0.8125rem;
}

/* Cast directly into the UI without borders/backgrounds */
[theme] :deep([main]:not(.full)) {
  width: 2.25rem !important;
  height: 2.25rem !important;
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
  color: var(--text) !important;
  transition: transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.18s ease;
}

[theme] :deep([main]:not(.full):hover) {
  color: var(--primary) !important;
  transform: scale(1.1);
}

[menu] {
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  box-shadow: none;
  transition:
    transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),
    color 0.18s ease;
}

[menu]:hover {
  color: var(--primary);
  transform: scale(1.1);
}

@media (max-width: 511.98px) {
  [contact-me] {
    display: none;
  }
}

@media (max-width: 767.98px) {
  .desktop-nav {
    display: none;
  }
}

@media (min-width: 768px) {
  .header-inner {
    padding-top: 0.85rem;
    padding-bottom: 0.85rem;
  }

  [menu] {
    display: none;
  }
}

@media (min-width: 1024px) {
  .header-inner {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .header-left {
    gap: 3rem;
  }
}

@media (min-width: 1200px) {
  .nav-link {
    font-size: 0.9375rem;
    padding: 0.4rem 1.1rem;
  }
}
</style>
