<script setup lang="ts">
import IconDown from '@/icons/IconDown.vue';
import IconEmail from '@/icons/IconEmail.vue';
import IconTelegram from '@/icons/IconTelegram.vue';
import { useSidebarStore } from '@/stores/sidebar';
import Menu from 'primevue/menu';
import { ref } from 'vue';

const { color, icon } = defineProps(['color', 'icon']);
const hrefs: any = {
  Email: 'mailto:contact@obum.me',
  Telegram: 'https://t.me/obumnwabude',
};
const icons: any = {
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
    :style="{ color }"
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
      :style="{ color }"
    >
      <template #item="{ item, props }">
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="hrefs[item.label as any]"
          v-bind="props.action"
          menu-item
          :style="{ color }"
        >
          <component :is="icons[item.label as any]" />
          {{ item.label }}
        </a>
      </template>
    </Menu>
  </button>
</template>

<style scoped>
button {
  align-items: center;
  background: none;
  border: 1px solid;
  border-radius: 32px;
  color: var(--text);
  display: flex;
  font-weight: 500;
  padding: 0.625rem 3rem;
}

button.icon {
  align-items: center;
  display: flex;
  padding: 0.5rem 1.5rem;
  width: fit-content;
}

button.icon svg {
  margin-right: 0.5rem;
}

button[outlined]:hover {
  color: var(--app-bg) !important;
}
</style>
