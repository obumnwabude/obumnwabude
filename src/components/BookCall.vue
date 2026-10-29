<script setup lang="ts">
import { LINKS } from '@/content/links';
import IconCalendar from '@/icons/IconCalendar.vue';
import { useSidebarStore } from '@/stores/sidebar';
import { trackBookingClick } from '@/utils/analytics';

/**
 * Primary paid-booking call to action. A real link (opens Selar in a new tab),
 * styled with the site's [filled] / [outlined] button system.
 */
const props = withDefaults(
  defineProps<{
    label?: string;
    location?: string;
    href?: string;
    offerId?: string;
    filled?: boolean;
    icon?: boolean;
    color?: string;
  }>(),
  {
    label: 'Book a call',
    location: 'general',
    href: LINKS.book,
    offerId: 'store',
    filled: true,
    icon: true,
    color: undefined,
  }
);

const sidebar = useSidebarStore();

const onClick = () => {
  trackBookingClick(props.offerId, props.location, props.href);
  sidebar.close();
};
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="book-call-btn"
    :filled="filled ? true : undefined"
    :outlined="!filled ? true : undefined"
    :style="{
      borderColor: !filled && color ? color : undefined,
      color: !filled && color ? color : undefined,
    }"
    :aria-label="`${label} (opens booking page in a new tab)`"
    @click="onClick"
  >
    <IconCalendar v-if="icon" :size="15" class="book-call-icon" />
    <span>{{ label }}</span>
  </a>
</template>

<style scoped>
.book-call-btn {
  gap: 0.5rem;
}

.book-call-btn:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
}

.book-call-icon {
  flex-shrink: 0;
}
</style>
