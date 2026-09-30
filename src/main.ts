import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createSSRApp } from 'vue';
import VueGtag from 'vue-gtag';

import App from './App.vue';
import { createRouterInstance } from './router';

import { vReveal } from './directives/reveal';
import { initGlobalAnalytics, isDebugMode, trackJsError } from './utils/analytics';
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

  // Global Vue error handler telemetry
  app.config.errorHandler = (err, instance, info) => {
    const componentName = instance?.$options?.name || (instance?.$?.type as any)?.__name || 'UnknownComponent';
    const errorMsg = err instanceof Error ? err.message : String(err);
    trackJsError(errorMsg, undefined, undefined, undefined, `${componentName} [${info}]`);
    if (import.meta.env.DEV) {
      console.error('[Vue Error Telemetry]', err, info);
    }
  };

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!isServer && gaId) {
    app.use(
      VueGtag,
      {
        config: {
          id: gaId,
          params: {
            debug_mode: isDebugMode(),
          },
        },
      },
      router
    );
  }

  return { app, router, pinia };
}

if (typeof window !== 'undefined') {
  const { app, router } = createAppInstance(false);
  router.isReady().then(() => {
    initGlobalAnalytics();
    app.mount('#app');
  });
}
