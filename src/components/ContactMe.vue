<script setup lang="ts">
import IconDown from '@/icons/IconDown.vue';
import IconEmail from '@/icons/IconEmail.vue';
import IconTelegram from '@/icons/IconTelegram.vue';
import { useSidebarStore } from '@/stores/sidebar';
import Menu from 'primevue/menu';
import { ref } from 'vue';

const {
  color,
  icon = false,
  filled = false,
  label = 'Contact Me',
} = defineProps<{
  color?: string;
  icon?: boolean;
  filled?: boolean;
  label?: string;
}>();

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
const menuId = `contact-menu-${Math.random().toString(36).slice(2, 8)}`;

const toggleMenu = (event: MouseEvent) => {
  menu.value?.toggle(event);
};
</script>

<template>
  <div class="contact-me-wrap">
    <button
      type="button"
      @click="toggleMenu"
      aria-haspopup="true"
      :aria-controls="menuId"
      :style="{
        borderColor: !filled && color ? color : undefined,
        color: !filled && color ? color : undefined,
      }"
      :filled="filled ? true : undefined"
      :outlined="!filled ? true : undefined"
      class="contact-btn"
      :class="{ 'has-icon': icon }"
    >
      <IconDown v-if="icon" class="dropdown-chevron" contact-icon />
      <span>{{ label }}</span>
    </button>

    <Menu
      ref="menu"
      :id="menuId"
      :model="items"
      :popup="true"
      appendTo="body"
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
  </div>
</template>

<style scoped>
.contact-me-wrap {
  display: inline-flex;
  vertical-align: middle;
}

.contact-btn {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
}

.dropdown-chevron {
  width: 1rem;
  flex-shrink: 0;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0.85;
}

.contact-btn:hover .dropdown-chevron {
  transform: translateY(1.5px);
  opacity: 1;
}
</style>
