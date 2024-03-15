<script setup lang="ts">
import IconFacebook from '@/icons/IconFacebook.vue';
import IconGithub from '@/icons/IconGithub.vue';
import IconInstagram from '@/icons/IconInstagram.vue';
import IconLinkedin from '@/icons/IconLinkedin.vue';
import IconStackoverflow from '@/icons/IconStackoverflow.vue';
import IconX from '@/icons/IconX.vue';
</script>

<template>
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
</template>

<style scoped>
[icons] > *:not(:last-of-type) {
  margin-right: 1rem;
}
</style>
