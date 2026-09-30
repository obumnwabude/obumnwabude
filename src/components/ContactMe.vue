<script setup lang="ts">
import IconDown from '@/icons/IconDown.vue';
import IconEmail from '@/icons/IconEmail.vue';
import IconTelegram from '@/icons/IconTelegram.vue';
import { useSidebarStore } from '@/stores/sidebar';
import Menu from 'primevue/menu';
import { ref } from 'vue';

const { color, icon } = defineProps(['color', 'icon']);
const hrefs: Record<string, string> = {
  Email: 'mailto:contact@obum.me',
  Telegram: 'https://t.me/obumnwabude',
};
const icons: Record<string, any> = {
  Email: IconEmail,
  Telegram: IconTelegram,
};
const sidebar = useSidebarStore();
const items = ref([
  { label: 'Email', command: sidebar.close },
  { label: 'Telegram', command: sidebar.close },
]);
const menu = ref();
</script>

<template>
  <button
    @click="menu.toggle"
    aria-haspopup="true"
    aria-controls="contact-menu"
    :style="{ borderColor: color ? color : undefined, color: color ? color : undefined }"
    :class="{ icon }"
    outlined
  >
    <IconDown v-if="icon" />
    Contact Me
    <Menu
      ref="menu"
      id="contact-menu"
      :model="items"
      :popup="true"
    >
      <template #item="{ item, props }">
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="hrefs[item.label as string]"
          v-bind="props.action"
          menu-item
        >
          <component :is="icons[item.label as string]" />
          {{ item.label }}
        </a>
      </template>
    </Menu>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
}

button.icon {
  padding: 0 1rem;
  gap: 0.45rem;
}

button.icon svg {
  margin-right: 0;
}
</style>
