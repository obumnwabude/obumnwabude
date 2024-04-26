<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue';
import IconFlower from '@/icons/IconFlower.vue';

const years = new Date().getFullYear() - 2018;
</script>

<template>
  <div intro>
    <div>
      <IconFlower />
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
      <img src="/assets/images/obum.jpg" />
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
</style>
