<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <p obum><router-link to="/">Obum</router-link></p>
    <p>All Rights Reserved &copy; {{ year }} Obumuneme Nwabude</p>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid;
  padding: 2rem 1.5rem 3rem;
}

[obum] {
  font-size: 2rem;
}
</style>
