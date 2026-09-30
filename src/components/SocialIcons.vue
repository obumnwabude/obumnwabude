<script setup lang="ts">
import IconFacebook from '@/icons/IconFacebook.vue';
import IconGithub from '@/icons/IconGithub.vue';
import IconInstagram from '@/icons/IconInstagram.vue';
import IconLinkedin from '@/icons/IconLinkedin.vue';
import IconStackoverflow from '@/icons/IconStackoverflow.vue';
import IconX from '@/icons/IconX.vue';

defineProps<{
  biggerIcons?: boolean;
}>();
</script>

<template>
  <div icons :class="{ 'bigger-icons': biggerIcons }">
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
[icons] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: fit-content;
}

[icons].bigger-icons {
  gap: 0.375rem;
}

[icons] a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  opacity: 0.75;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.2s ease;
}

[icons] a:hover {
  opacity: 1;
  color: var(--primary);
  transform: translateY(-2px) scale(1.08);
}

[icons]:not(.bigger-icons) :deep(svg) {
  width: 1.75rem;
  height: 1.75rem;
}

[icons] > *:not(:last-of-type) {
  margin-right: 0.85rem;
}
</style>
