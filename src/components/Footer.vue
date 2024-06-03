<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import SocialIcons from '@/components/SocialIcons.vue';

const capitalize = (s: string) => s[0].toUpperCase() + s.substring(1);
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div top>
      <p><router-link to="/" obum>Obum</router-link></p>
      <nav>
        <ul>
          <li><router-link to="/">About Me</router-link></li>
          <li v-for="link of ['projects', 'articles', 'community']">
            <router-link :to="`/${link}`">{{ capitalize(link) }}</router-link>
          </li>
        </ul>
      </nav>
      <ContactMe color="var(--primary)" />
    </div>
    <div bottom>
      <SocialIcons />
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
  font-weight: bold;
}

@media (max-width: 767.98px) {
  [obum] {
    display: inline-block;
    margin-bottom: 1rem;
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
}

@media (min-width: 1200px) {
  ul li:not(:last-of-type) {
    margin-right: 2rem;
    padding-right: 2rem;
  }

  li a {
    font-size: 1.25rem;
  }
}
</style>
