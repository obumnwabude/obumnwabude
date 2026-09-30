<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import SocialIcons from '@/components/SocialIcons.vue';

const capitalize = (s: string) => s[0].toUpperCase() + s.substring(1);
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div top>
      <p>
        <router-link to="/" obum class="footer-logo">
          <span class="logo-text">Obum</span>
          <span class="logo-dot"></span>
        </router-link>
      </p>
      <nav>
        <ul>
          <li>
            <router-link to="/" class="footer-nav-link">About Me</router-link>
          </li>
          <li v-for="link of ['projects', 'articles', 'community']" :key="link">
            <router-link :to="`/${link}`" class="footer-nav-link">
              {{ capitalize(link) }}
            </router-link>
          </li>
        </ul>
      </nav>
      <ContactMe color="var(--primary)" />
    </div>
    <div bottom>
      <SocialIcons />
      <p class="copyright-text">All Rights Reserved &copy; {{ year }} Obumuneme Nwabude</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--glass-border);
  background: var(--glass-tint);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 2.5rem 1.5rem 3.5rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

body.dark footer {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

[top] {
  margin-bottom: 2rem;
}

[obum] {
  font-size: 1.85rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
  display: inline-flex;
  align-items: baseline;
  transition: transform 0.2s ease, color 0.2s ease;
}

[obum]:hover {
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

/* Footer Nav Links Hover Effect */
.footer-nav-link {
  display: inline-block;
  padding: 0.4rem 0.85rem;
  border-radius: 12px;
  color: var(--text);
  font-weight: 500;
  border: 1px solid transparent;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.18s ease;
}

.footer-nav-link:hover {
  background: rgb(from var(--primary) r g b / 12%);
  color: var(--primary);
  border-color: rgb(from var(--primary) r g b / 25%);
  transform: translateY(-2px);
}

@media (max-width: 767.98px) {
  [obum] {
    display: inline-flex;
    margin-bottom: 1rem;
  }

  ul {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  [icons] {
    margin-bottom: 2rem;
  }
}

@media (min-width: 768px) {
  [bottom],
  [top] {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  ul li:not(:last-of-type) {
    border-right: 1px solid var(--glass-border);
    padding-right: 0.75rem;
    margin-right: 0.4rem;
  }
}

@media (min-width: 1024px) {
  footer {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media (min-width: 1200px) {
  ul li:not(:last-of-type) {
    margin-right: 0.8rem;
    padding-right: 1.25rem;
  }

  .footer-nav-link {
    font-size: 1.05rem;
  }
}
</style>
