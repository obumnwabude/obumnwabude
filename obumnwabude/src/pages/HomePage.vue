<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import IconFlower2P from '@/icons/IconFlower2P.vue';
import IconFlower6P from '@/icons/IconFlower6P.vue';

const banners = [
  'Web3 Dev',
  'Solana (Rust)',
  'EVM (Solidity)',
  'Mobile Dev',
  'Flutter (Dart)',
  'Frontend',
  'Backend (NodeJS)',
  'Technical Writing',
  'Community',
  'Vibes',
];
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
        Flutter, everything web dev, and also in web3 (Solana & Solidity).
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
  margin-left: -1.5rem;
  margin-right: -1.5rem;
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

@media (max-width: 511.98px) {
  [intro] [gray] {
    display: none;
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
