<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import SocialIcons from '@/components/SocialIcons.vue';
import IconArticle from '@/icons/IconArticle.vue';
import IconHome from '@/icons/IconHome.vue';
import IconRocket from '@/icons/IconRocket.vue';
import IconUsers from '@/icons/IconUsers.vue';

const navItems = [
  { path: '/', label: 'Home', icon: IconHome },
  { path: '/projects', label: 'Projects', icon: IconRocket },
  { path: '/articles', label: 'Articles', icon: IconArticle },
  { path: '/community', label: 'Community', icon: IconUsers },
];

const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div top>
      <div class="footer-left">
        <p>
          <router-link to="/" obum class="footer-logo">
            <span class="logo-text">Obum</span>
            <span class="logo-dot"></span>
          </router-link>
        </p>
        <nav>
          <ul>
            <li v-for="item of navItems" :key="item.path">
              <router-link :to="item.path" class="footer-nav-link">
                <component :is="item.icon" :size="13" class="footer-nav-icon" />
                <span>{{ item.label }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <ContactMe color="var(--primary)" label="Contact Me" />
    </div>
    <div bottom>
      <SocialIcons />
      <p class="copyright-text">
        All Rights Reserved &copy; {{ year }} Obumuneme Nwabude
      </p>
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

/* Footer Nav Links */
.footer-nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  border-radius: 9999px;
  color: var(--text);
  font-weight: 500;
  font-size: 0.8125rem;
  opacity: 0.78;
  border: 1px solid transparent;
  transition: opacity 0.2s ease, background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease, transform 0.18s ease;
}

.footer-nav-icon {
  flex-shrink: 0;
  opacity: 0.75;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.footer-nav-link:hover {
  opacity: 1;
  background: rgb(from var(--primary) r g b / 10%);
  color: var(--primary);
  border-color: rgb(from var(--primary) r g b / 20%);
  transform: translateY(-1px);
}

.footer-nav-link:hover .footer-nav-icon,
.router-link-active.footer-nav-link .footer-nav-icon {
  opacity: 1;
  color: var(--primary);
  transform: scale(1.1);
}

.router-link-active.footer-nav-link {
  opacity: 1;
  color: var(--primary);
  font-weight: 600;
}

@media (max-width: 767.98px) {
  .footer-left p {
    margin: 0 0 1rem 0;
  }

  [obum] {
    display: inline-flex;
  }

  ul {
    margin: 0 0 2rem -0.75rem;
    padding: 0;
    list-style: none;
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

  .footer-left {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1.75rem;
  }

  .footer-left p {
    margin: 0;
  }

  ul {
    display: flex;
    align-items: flex-end;
    row-gap: 0.25rem;
    margin: 0;
    padding: 0;
    padding-bottom: 0.125rem;
    list-style: none;
  }

  ul li:not(:last-of-type) {
    border-right: 1px solid var(--glass-border);
    padding-right: 0.55rem;
    margin-right: 0.3rem;
  }
}

@media (min-width: 1024px) {
  footer {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media (min-width: 1200px) {
  .footer-left {
    gap: 2.75rem;
  }

  ul li:not(:last-of-type) {
    margin-right: 0.45rem;
    padding-right: 0.7rem;
  }

  .footer-nav-link {
    font-size: 0.8125rem;
  }
}
</style>
