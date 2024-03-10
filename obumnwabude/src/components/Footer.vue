<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import IconFacebook from '@/icons/IconFacebook.vue';
import IconGithub from '@/icons/IconGithub.vue';
import IconInstagram from '@/icons/IconInstagram.vue';
import IconLinkedin from '@/icons/IconLinkedin.vue';
import IconStackoverflow from '@/icons/IconStackoverflow.vue';
import IconX from '@/icons/IconX.vue';

const capitalize = (s: string) => s[0].toUpperCase() + s.substring(1);
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div top>
      <p obum><router-link to="/">Obum</router-link></p>
      <nav>
        <ul>
          <li v-for="link of ['about', 'projects', 'articles', 'community']">
            <router-link :to="`/${link}`">{{ capitalize(link) }}</router-link>
          </li>
        </ul>
      </nav>
      <ContactMe />
    </div>
    <div bottom>
      <div icons>
        <a
          href="https://linkedin.com/in/obumnwabude"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <IconLinkedin />
        </a>
        <a
          href="https://github.com/obumnwabude"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <IconGithub />
        </a>
        <a
          href="https://stackoverflow.com/users/13644299"
          target="_blank"
          rel="noopener noreferrer"
          title="Stackoverflow"
        >
          <IconStackoverflow />
        </a>
        <a
          href="https://x.com/obumnwabude"
          target="_blank"
          rel="noopener noreferrer"
          title="X (Twitter)"
        >
          <IconX />
        </a>
        <a
          href="https://facebook.com/obumnwabude"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <IconFacebook />
        </a>
        <a
          href="https://instagram.com/obumnwabude"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <IconInstagram />
        </a>
      </div>
      <p>All Rights Reserved &copy; {{ year }} Obumuneme Nwabude</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid;
  padding: 2rem 1.5rem 3rem;
}

[top] {
  margin-bottom: 2rem;
}

[obum] {
  font-size: 2rem;
}

ul li {
  list-style: none;
}

[icons] {
  color: var(--primary);
}

[icons] > *:not(:last-of-type) {
  margin-right: 1rem;
}

@media (max-width: 767.98px) {
  [obum] {
    margin-bottom: 2rem;
  }

  ul {
    margin-bottom: 2rem;
  }

  ul li {
    margin-bottom: 1rem;
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
  }

  ul li:not(:last-of-type) {
    border-right: 1px solid;
    margin-right: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 1024px) {
  footer {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  ul li:not(:last-of-type) {
    margin-right: 2rem;
    padding-right: 2rem;
  }
}
</style>
