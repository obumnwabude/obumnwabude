<script setup lang="ts">
import Article from '@/components/Article.vue';
import ContactMe from '@/components/ContactMe.vue';
import Project from '@/components/Project.vue';
import { articles } from '@/content/articles';
import { community } from '@/content/community';
import { projects } from '@/content/projects';
import IconFlower2P from '@/icons/IconFlower2P.vue';
import IconFlower6P from '@/icons/IconFlower6P.vue';
import { banners } from '@/types';

const years = new Date().getFullYear() - 2018;
</script>

<template>
  <div intro>
    <div>
      <IconFlower2P />
      <h2>OBUMUNEME NWABUDE</h2>
      <h3>Full-Stack Blockchain, Mobile, and Web Developer.</h3>
      <p>
        I have been programming for {{ years }} years and counting. I've worked
        with great teams and have built one-of-a-kind solutions. I'm a pro in
        Flutter, everything web dev, and also in web3 (Solana & Solidity). I am also a Google Developer Expert (GDE) in the Dart & Flutter categories.
      </p>
      <p contact><ContactMe color="var(--primary)" /></p>
    </div>
    <div>
      <div gray></div>
      <img src="/assets/obum.jpg" />
    </div>
  </div>

  <div banner>
    <div>
      <span flower> <IconFlower6P /></span>
      <template v-for="banner of banners">
        <span text>{{ banner }}</span>
        <span flower> <IconFlower6P /></span>
      </template>
    </div>
  </div>

  <section>
    <h2>LATEST PROJECTS</h2>
    <Project :project="project" v-for="project of projects.slice(0, 3)" />
    <div more>
      <span flower><IconFlower6P color="var(--primary)" /></span>
      <p>Of Course, There Are More.</p>
      <router-link to="/projects" outlined>... All Projects</router-link>
    </div>
  </section>

  <section>
    <h2>LATEST ARTICLES</h2>
    <Article :article="article" v-for="article of articles.slice(0, 3)" />
    <div more>
      <span flower><IconFlower6P color="var(--primary)" /></span>
      <p>Of Course, There Are More.</p>
      <router-link to="/articles" outlined>... All Articles</router-link>
    </div>
  </section>

  <section>
    <h2>COMMUNITY</h2>
    <Project
      :project="contribution"
      v-for="contribution of community.slice(0, 3)"
    />
    <div more>
      <span leading-flower><IconFlower6P color="var(--primary)" /></span>
      <p>Of Course, There Are More.</p>
      <router-link to="/community" outlined>... All Events</router-link>
    </div>
  </section>

  <div closing>
    <span leading-flower><IconFlower6P color="var(--primary)" /></span>
    <h2>LET'S WORK TOGETHER</h2>
    <p text>
      "Coming together is a beginning. Keeping together is progress. Working
      together is success." ~ Henry Ford.
      <br />
      Let's work together to achieve success.
    </p>
    <p contact><ContactMe color="var(--primary)" /></p>
  </div>
</template>

<style scoped>
[intro] {
  padding-bottom: 4rem;
}

[intro] h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

[intro] h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

[intro] p {
  margin-bottom: 2rem;
}

[intro] img {
  width: 100%;
}

@keyframes bannerScroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-2000px);
  }
}

[banner] {
  background-color: var(--primary);
  color: var(--app-bg);
  font-size: 1.25rem;
  margin: 0 -1.5rem 10rem;
  padding: 1rem 1rem 1rem 10rem;
  overflow-x: hidden;
  white-space: nowrap;
}

[banner] > div {
  align-items: center;
  animation: bannerScroll 20s linear infinite;
  display: flex;
}

[banner] [flower] {
  align-items: center;
  display: inline-flex;
  margin-left: 2rem;
  margin-right: 2rem;
}

[banner] [flower]:first-of-type {
  margin-left: 0;
}

[banner] [flower]:last-of-type {
  margin-right: 0;
}

section {
  padding-bottom: 15rem;
}

section h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 3rem;
}

section h2::after {
  background-color: var(--primary);
  content: '';
  display: block;
  height: 2px;
}

section [more] {
  text-align: center;
}

[leading-flower] {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

[leading-flower]::before,
[leading-flower]::after {
  background-color: var(--text);
  content: '';
  height: 1px;
  margin-right: 0.5rem;
  width: 5rem;
}

[leading-flower]::after {
  margin-right: 0;
  margin-left: 0.5rem;
}

section [more] p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

section [more] a {
  font-weight: 500;
  padding: 0.5rem 3rem;
}

[closing] {
  padding-bottom: 10rem;
  text-align: center;
}

[closing] [leading-flower] {
  margin-bottom: 3rem;
}

[closing] [leading-flower]::before,
[closing] [leading-flower]::after {
  flex-grow: 1;
}

[closing] h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

[closing] [text] {
  font-size: 1.25rem;
  margin: 0 auto 2rem;
  max-width: 512px;
}

[closing] [contact] {
  display: flex;
  justify-content: center;
}

@media (max-width: 511.98px) {
  [intro] [gray] {
    display: none;
  }

  section h2::after {
    margin-top: 1rem;
    width: 100%;
  }
}

@media (min-width: 512px) {
  [intro] > div:last-of-type {
    position: relative;
  }

  [intro] img {
    display: inline-block;
    margin-top: 1rem;
    margin-left: -1rem;
  }

  [intro] [gray] {
    background-color: var(--gray);
    height: calc(100% - 1.5rem);
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  [banner] [flower] {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  section h2 {
    align-items: center;
    display: flex;
  }

  section h2::after {
    flex-grow: 1;
  }

  section:nth-child(even) h2 {
    flex-direction: row-reverse;
  }

  section:nth-child(even) h2::after {
    margin-right: 1rem;
  }

  section:nth-child(odd) h2::after {
    margin-left: 1rem;
  }
}

@media (min-width: 512px) and (max-width: 767.98px) {
  [intro] [contact] {
    margin-bottom: 4rem;
  }
}

@media (max-width: 767.98px) {
  [intro] > div:first-of-type {
    max-width: 512px;
  }

  [intro] > div:last-of-type {
    margin-left: auto;
    max-width: 384px;
  }
}

@media (min-width: 768px) {
  [intro] {
    display: flex;
  }

  [intro] > div:first-of-type {
    flex-basis: 60%;
    margin-right: 2rem;
  }

  [intro] img {
    max-width: 384px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  [intro] [gray] {
    height: 320px;
  }
}

@media (min-width: 1024px) {
  [banner] {
    margin-left: -5rem;
    margin-right: -5rem;
  }
}
</style>
