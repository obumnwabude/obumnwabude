/**
 * src/directives/reveal.ts — v-reveal scroll entrance directive.
 *
 * Lightweight, zero-dependency IntersectionObserver directive with spring easing,
 * staggered delays, SSR safety, and full prefers-reduced-motion support.
 */
import type { Directive } from 'vue';

export interface RevealOptions {
  delay?: number;
  distance?: number;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let observer: IntersectionObserver | null = null;

if (typeof window !== 'undefined' && typeof IntersectionObserver !== 'undefined') {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.style.opacity = '1';
        el.style.transform = 'none';
        observer?.unobserve(el);
      }
    },
    { rootMargin: '-60px 0px', threshold: 0.05 }
  );
}

export const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el, binding) {
    if (prefersReducedMotion() || !observer) return;

    const delay = binding.value?.delay ?? 0;
    const distance = binding.value?.distance ?? 24;

    el.style.opacity = '0';
    el.style.transform = `translateY(${distance}px)`;
    el.style.transition = `opacity 650ms cubic-bezier(0.16, 1, 0.3, 1), transform 650ms cubic-bezier(0.16, 1, 0.3, 1)`;
    if (delay) el.style.transitionDelay = `${delay}ms`;

    observer.observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
