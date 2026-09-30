<script setup lang="ts">
import { LINKS } from '@/content/links';
import IconFacebook from '@/icons/IconFacebook.vue';
import IconGithub from '@/icons/IconGithub.vue';
import IconInstagram from '@/icons/IconInstagram.vue';
import IconLinkedin from '@/icons/IconLinkedin.vue';
import IconStackoverflow from '@/icons/IconStackoverflow.vue';
import IconX from '@/icons/IconX.vue';
import { trackSocialClick } from '@/utils/analytics';

const { biggerIcons, placement = 'footer' } = defineProps<{
  biggerIcons?: boolean;
  placement?: 'header' | 'sidebar' | 'footer';
}>();

const socialLinks = [
  { platform: 'LinkedIn', title: 'LinkedIn', href: LINKS.linkedin, icon: IconLinkedin },
  { platform: 'GitHub', title: 'Github', href: LINKS.github, icon: IconGithub },
  {
    platform: 'StackOverflow',
    title: 'Stackoverflow',
    href: LINKS.stackoverflow,
    icon: IconStackoverflow,
  },
  { platform: 'X', title: 'X (Twitter)', href: LINKS.x, icon: IconX },
  { platform: 'Facebook', title: 'Facebook', href: LINKS.facebook, icon: IconFacebook },
  { platform: 'Instagram', title: 'Instagram', href: LINKS.instagram, icon: IconInstagram },
];

const handleSocialClick = (platform: string, url: string) => {
  trackSocialClick(platform, placement, url);
};
</script>

<template>
  <div icons :class="{ 'bigger-icons': biggerIcons }">
    <a
      v-for="item in socialLinks"
      :key="item.platform"
      :href="item.href"
      target="_blank"
      rel="noopener noreferrer"
      :title="item.title"
      @click="() => handleSocialClick(item.platform, item.href)"
    >
      <component :is="item.icon" />
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
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease;
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
