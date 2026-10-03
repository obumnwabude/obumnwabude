import { LINKS } from '@/content/links';
import HomePage from '@/pages/HomePage.vue';
import { resetPageScrollTracking, track404Redirect } from '@/utils/analytics';
import { createMemoryHistory, createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const baseTitle = 'Obum (Obumuneme Nwabude)';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: baseTitle,
      description:
        'Full-Stack AI, Blockchain, Cloud, Mobile, & Web Developer. Google Developer Expert (GDE) in Cloud AI & Dart-Flutter.',
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/pages/CodingProjectsPage.vue'),
    meta: {
      title: `Projects | ${baseTitle}`,
      description:
        'Explore software engineering projects built by Obumuneme Nwabude across AI, Cloud, Web3, Flutter, Mobile, and Web applications.',
    },
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/pages/ArticlesPage.vue'),
    meta: {
      title: `Articles | ${baseTitle}`,
      description:
        'Read technical articles, guides, and insights by Obumuneme Nwabude on AI, Cloud, Flutter, Dart, Architecture, Web3, and Tech Communities.',
    },
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/pages/CommunityPage.vue'),
    meta: {
      title: `Community | ${baseTitle}`,
      description:
        'Community contributions, speaking engagements, and workshops delivered by Google Developer Expert Obumuneme Nwabude across Cloud AI & Dart-Flutter.',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'all',
    redirect: '/',
  },
];

export function createRouterInstance(isServer = typeof window === 'undefined') {
  const history = isServer ? createMemoryHistory() : createWebHistory(import.meta.env.BASE_URL);

  const router = createRouter({
    history,
    routes,
    scrollBehavior(to, _from, saved) {
      if (to.hash) {
        // The fixed header + pinned content filter together consume ~128px
        // at the top of the viewport. Push the anchor below both so the
        // targeted card sits in the clear.
        return { el: to.hash, top: 128, behavior: 'smooth' };
      }
      return saved ? saved : { top: 0 };
    },
  });

  router.beforeEach((to, fromRoute, next) => {
    // Intercept broken backlinks and 404 captures
    if (to.name === 'all') {
      track404Redirect(to.fullPath, typeof document !== 'undefined' ? document.referrer : '');
    }

    // Reset scroll & milestone counters for new page view
    resetPageScrollTracking();

    if (typeof document !== 'undefined') {
      if (to.meta && to.meta.title) {
        document.title = to.meta.title as string;
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', to.meta.title as string);
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', to.meta.title as string);
      }
      if (to.meta && to.meta.description) {
        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute('content', to.meta.description as string);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', to.meta.description as string);
        const twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterDesc) twitterDesc.setAttribute('content', to.meta.description as string);
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        const canonicalUrl = `${LINKS.canonical}${to.path === '/' ? '' : to.path}`;
        canonical.setAttribute('href', canonicalUrl);
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
      }
    }

    // View Transitions API for smooth page morphing
    if (
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      fromRoute.name !== undefined // skip initial load
    ) {
      (document as any).startViewTransition(() => {
        next();
      });
      return; // don't call next() again
    }

    next();
  });

  return router;
}

const defaultRouter = createRouterInstance(typeof window === 'undefined');
export default defaultRouter;
