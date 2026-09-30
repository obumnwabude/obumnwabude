import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createSSRApp } from 'vue';
import VueGtag from 'vue-gtag';

import App from './App.vue';
import { createRouterInstance } from './router';

import { vReveal } from './directives/reveal';
import 'primevue/resources/themes/aura-light-green/theme.css';
import './assets/main.css';

export function createAppInstance(isServer = false) {
  const app = createSSRApp(App);
  const pinia = createPinia();
  const router = createRouterInstance(isServer);

  app.use(pinia);
  app.use(PrimeVue, { ripple: true });
  app.use(router);
  app.directive('reveal', vReveal);

  if (!isServer && !import.meta.env.DEV) {
    app.use(
      VueGtag,
      { config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID } },
      router
    );
  }

  return { app, router, pinia };
}

if (typeof window !== 'undefined') {
  const { app, router } = createAppInstance(false);
  router.isReady().then(() => {
    app.mount('#app');
  });
}
