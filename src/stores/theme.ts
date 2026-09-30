import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

export type ThemeMode = 'Dark Theme' | 'Light Theme' | 'Device Default';

export const themes: ThemeMode[] = ['Dark Theme', 'Light Theme', 'Device Default'];

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
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    currentIcon.value = document.body.classList.contains('dark') ? 'Dark Theme' : 'Light Theme';
    reverseIcon.value = document.body.classList.contains('dark') ? 'Light Theme' : 'Dark Theme';
    systemIcon.value =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark Theme' : 'Light Theme';
  };

  const set = (value: ThemeMode, event?: MouseEvent) => {
    const applyTheme = () => {
      mode.value = value;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', value);
      }
      css();
    };

    const doc = typeof document !== 'undefined' ? (document as any) : null;
    if (
      !doc ||
      !doc.startViewTransition ||
      (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    ) {
      applyTheme();
      return;
    }

    const x = event ? event.clientX : window.innerWidth / 2;
    const y = event ? event.clientY : 0;
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = doc.startViewTransition(() => {
      applyTheme();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
        },
        {
          duration: 480,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  onMounted(() => {
    const saved = localStorage.getItem('theme');
    if (saved && isThemeMode(saved)) mode.value = saved;

    css();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', css);
  });

  return { currentIcon, mode, reverseIcon, set, systemIcon };
});
