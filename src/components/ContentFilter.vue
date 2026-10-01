<script setup lang="ts">
interface Props {
  filters: string[];
  modelValue: string | null;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Filter content',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void;
}>();

function select(filter: string | null) {
  emit('update:modelValue', filter);
}
</script>

<template>
  <div class="content-filter-wrapper" :aria-label="props.label" role="group">
    <div class="content-filter-row">
      <button
        type="button"
        class="filter-pill"
        :class="{ 'is-active': props.modelValue === null }"
        @click="select(null)"
      >
        All
      </button>
      <button
        v-for="filter in props.filters"
        :key="filter"
        type="button"
        class="filter-pill"
        :class="{ 'is-active': props.modelValue === filter }"
        @click="select(filter)"
      >
        {{ filter }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.content-filter-wrapper {
  width: 100%;
  margin-bottom: 1.5rem;
}

.content-filter-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.25rem;
  /* Hide scrollbar cross-browser */
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content-filter-row::-webkit-scrollbar {
  display: none;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid var(--glass-border);
  background: var(--glass-tint);
  color: var(--text);
  transition: background 0.22s ease, color 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease,
    transform 0.18s ease;
  flex-shrink: 0;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.filter-pill:hover:not(.is-active) {
  border-color: rgb(from var(--primary) r g b / 30%);
  background: rgb(from var(--primary) r g b / 6%);
  color: var(--primary);
  transform: translateY(-1px);
}

.filter-pill.is-active {
  background: var(--primary);
  color: #ffffff;
  border-color: var(--primary);
  box-shadow: 0 2px 10px rgb(from var(--primary) r g b / 30%);
}

.filter-pill.is-active:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgb(from var(--primary) r g b / 40%);
}
</style>
