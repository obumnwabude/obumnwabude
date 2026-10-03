import { onBeforeUnmount } from 'vue';

type Subscriber = () => void;

const subscribers = new Set<Subscriber>();
let started = false;
let ticking = false;

function flush() {
  ticking = false;
  for (const fn of subscribers) {
    try {
      fn();
    } catch (err) {
      console.error('useGlobalScroll subscriber threw:', err);
    }
  }
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(flush);
  }
}

function start() {
  if (started || typeof window === 'undefined') return;
  started = true;
  window.addEventListener('scroll', onScroll, { passive: true });
}

export function useGlobalScroll(cb: Subscriber) {
  start();
  subscribers.add(cb);
  onBeforeUnmount(() => {
    subscribers.delete(cb);
  });
}
