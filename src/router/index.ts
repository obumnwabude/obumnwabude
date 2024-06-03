import HomePage from '@/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const baseTitle = 'Obum (Obumuneme Nwabude)';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: baseTitle },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/pages/ProjectsPage.vue'),
      meta: { title: `Projects | ${baseTitle}` },
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('@/pages/ArticlesPage.vue'),
      meta: { title: `Articles | ${baseTitle}` },
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('@/pages/CommunityPage.vue'),
      meta: { title: `Community | ${baseTitle}` },
    },
    {
      path: '/:catchAll(.*)',
      name: 'all',
      redirect: '/',
    },
  ],
  scrollBehavior(_, __, saved) {
    return saved ? saved : { top: 0 };
  },
});

router.beforeEach((to, _, next) => {
  if (to.meta && to.meta.title) {
    document.querySelector('head title')!.textContent = to.meta.title as string;
  }
  next();
});

export default router;
