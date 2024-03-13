import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import VueGtag from 'vue-gtag';

import App from './App.vue';
import router from './router';

import 'primevue/resources/themes/aura-light-green/theme.css';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue, { ripple: true });
app.use(router);

if (!import.meta.env.DEV) {
  app.use(
    VueGtag,
    { config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID } },
    router
  );
}

app.mount('#app');
