import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

export type ThemeMode = 'Dark Theme' | 'Light Theme' | 'Device Default';

export const themes: ThemeMode[] = [
  'Dark Theme',
  'Light Theme',
  'Device Default',
];

const isThemeMode = (value: any): value is ThemeMode => themes.includes(value);

export const useThemeStore = defineStore('theme', () => {
  const currentIcon = ref<ThemeMode>('Light Theme');
  const reverseIcon = ref<ThemeMode>('Dark Theme');
  const systemIcon = ref<ThemeMode>('Light Theme');

  const mode = ref<ThemeMode>('Device Default');

  const css = () => {
    if (mode.value == 'Dark Theme') {
      document.body.classList.add('dark');
    } else if (mode.value == 'Light Theme') {
      document.body.classList.remove('dark');
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    currentIcon.value = document.body.classList.contains('dark')
      ? 'Dark Theme'
      : 'Light Theme';
    reverseIcon.value = document.body.classList.contains('dark')
      ? 'Light Theme'
      : 'Dark Theme';
    systemIcon.value =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'Dark Theme'
        : 'Light Theme';
  };

  const set = (value: ThemeMode) => {
    mode.value = value;
    localStorage.setItem('theme', value);
    css();
  };

  onMounted(() => {
    const saved = localStorage.getItem('theme');
    if (saved && isThemeMode(saved)) mode.value = saved;

    css();

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', css);
  });

  return { currentIcon, mode, reverseIcon, set, systemIcon };
});
