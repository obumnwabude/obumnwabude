import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const baseTitle = 'Obum (Obumuneme Nwabude)';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: baseTitle },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: `About | ${baseTitle}` },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: { title: `Projects | ${baseTitle}` },
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/ArticlesView.vue'),
      meta: { title: `Articles | ${baseTitle}` },
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/CommunityView.vue'),
      meta: { title: `Community | ${baseTitle}` },
    },
    {
      path: '/:catchAll(.*)',
      name: 'all',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta && to.meta.title) {
    document.querySelector('head title')!.textContent = to.meta.title as string;
  }
  next();
});

export default router;
