import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrEntryPath = path.resolve(rootDir, 'dist-ssr/entry-server.mjs');

// Same anchor ids the site uses for cards (src/utils/slug.ts).
function contentId(title) {
  const slug = title
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `content-${slug}`;
}

const routes = [
  {
    path: '/',
    title: 'Obum (Obumuneme Nwabude) | Full-Stack AI, Blockchain, Cloud, Mobile & Web Developer',
    description:
      'Full-Stack AI, Blockchain, Cloud, Mobile & Web Developer and GDE. Book a 1:1 call, a code review or an AI-built app rescue with Obum.',
    structuredData: null,
  },
  {
    path: '/projects',
    title: 'Projects | Obum (Obumuneme Nwabude)',
    description:
      'Explore software engineering projects built by Obumuneme Nwabude across AI, Cloud, Web3, Flutter, Mobile, and Web applications.',
    structuredData: null,
  },
  {
    path: '/articles',
    title: 'Articles | Obum (Obumuneme Nwabude)',
    description:
      'Read technical articles, guides, and insights by Obumuneme Nwabude on AI, Cloud, Flutter, Dart, Architecture, Web3, and Tech Communities.',
    structuredData: null,
  },
  {
    path: '/community',
    title: 'Community | Obum (Obumuneme Nwabude)',
    description:
      'Community contributions, speaking engagements, and workshops delivered by Google Developer Expert Obumuneme Nwabude across Cloud AI & Dart-Flutter.',
    structuredData: null,
  },
  {
    path: '/work-with-me',
    title: 'Work With Me: Calls, Code Reviews & AI App Rescue | Obum',
    description:
      'Book a 1:1 call, a code review or an AI-built app rescue with Obum (Obumuneme Nwabude). AI, blockchain, cloud, mobile and web. Calls from $25.',
    structuredData: null,
  },
];

function generateStructuredData(route, content) {
  if (route.path === '/') {
    return null;
  }

  if (route.path === '/projects') {
    const items = (content.projects || []).map(project => {
      const item = {
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        applicationCategory: project.categories?.join(', ') || undefined,
      };

      if (project.actions && project.actions.length > 0) {
        item.url = project.actions[0].link;
      }

      if (project.image) {
        item.image = `https://obumnwabude.com/assets/${project.image.name}.${project.image.png ? 'png' : 'jpg'}`;
      }

      return Object.fromEntries(Object.entries(item).filter(([, v]) => v !== undefined));
    });

    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item,
      })),
    });
  }

  if (route.path === '/articles') {
    const items = (content.articles || []).map(article => {
      const dateStr = `${article.date.year}-${String(article.date.month).padStart(2, '0')}-01`;
      return {
        '@type': 'Article',
        name: article.title,
        url: article.link,
        datePublished: dateStr,
        author: {
          '@type': 'Person',
          name: 'Obumuneme Nwabude',
        },
        publisher: {
          '@type': 'Organization',
          name: article.publishedOn,
        },
      };
    });

    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item,
      })),
    });
  }

  if (route.path === '/community') {
    // Google's Event rich result needs a location. Talks without a recorded location are left
    // out of the structured data (they still appear on the page); "Online" talks become
    // online events. See Search Console > Enhancements > Events.
    const obum = { '@type': 'Person', name: 'Obumuneme Nwabude', url: 'https://obumnwabude.com/' };
    const items = (content.community || [])
      .filter((event) => event.location)
      .map((event) => {
        const dateStr = `${event.date.year}-${String(event.date.month).padStart(2, '0')}-01`;
        const pageUrl = `https://obumnwabude.com/community#${contentId(event.title)}`;
        const isOnline = /^(online|virtual)$/i.test(event.location.trim());
        const item = {
          '@type': 'Event',
          name: event.title,
          description: event.description,
          url: pageUrl,
          startDate: dateStr,
          endDate: dateStr,
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: isOnline
            ? 'https://schema.org/OnlineEventAttendanceMode'
            : 'https://schema.org/OfflineEventAttendanceMode',
          location: isOnline
            ? { '@type': 'VirtualLocation', url: event.actions?.[0]?.link || pageUrl }
            : {
                '@type': 'Place',
                name: event.location,
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: event.location,
                  addressCountry: /cameroon/i.test(event.location) ? 'CM' : 'NG',
                },
              },
          performer: obum,
          organizer: obum,
        };
        if (event.image?.name) {
          item.image = `https://obumnwabude.com/assets/${event.image.name}.${event.image.png ? 'png' : 'jpg'}`;
        }
        return item;
      });

    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item,
      })),
    });
  }

  if (route.path === '/work-with-me') {
    const offers = content.offers || [];
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Obum (Obumuneme Nwabude): calls, code reviews and AI-built app rescue',
      url: 'https://obumnwabude.com/work-with-me',
      image: 'https://obumnwabude.com/assets/obum.jpg',
      email: 'contact@obum.me',
      areaServed: 'Worldwide',
      provider: {
        '@type': 'Person',
        name: 'Obumuneme Nwabude',
        alternateName: 'Obum',
        url: 'https://obumnwabude.com/',
        sameAs: [
          'https://linkedin.com/in/obumnwabude',
          'https://github.com/obumnwabude',
          'https://x.com/obumnwabude',
          'https://instagram.com/obumnwabude',
          'https://www.upwork.com/freelancers/~015ef7417d89c39dc5',
        ],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Calls, code reviews and AI-built app rescue',
        itemListElement: offers.map((offer) => ({
          '@type': 'Offer',
          name: offer.title,
          description: offer.tagline,
          price: offer.priceUsd,
          priceCurrency: 'USD',
          url: offer.link,
          availability: 'https://schema.org/InStock',
          itemOffered: { '@type': 'Service', name: offer.title },
        })),
      },
    });
  }

  return null;
}

async function prerender() {
  const template = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8');
  const { render, projects, articles, community, offers } = await import(ssrEntryPath);

  const content = { projects, articles, community, offers };

  console.log('⚡ Pre-rendering routes into static HTML...');

  for (const route of routes) {
    const { html } = await render(route.path);
    const canonicalUrl = `https://obumnwabude.com${route.path}`;

    let pageHtml = template;

    // 1. Inject rendered HTML into #app
    pageHtml = pageHtml.replace(
      '<div id="app"></div>',
      `<div id="app">${html}</div>`
    );

    // 2. Inject route title
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    );

    // 3. Inject meta description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/s,
      `<meta name="description" content="${route.description}" />`
    );

    // 4. Inject canonical tag
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // 5. Inject Open Graph tags
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${route.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/s,
      `<meta property="og:description" content="${route.description}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // 6. Inject Twitter Card tags
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/s,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    // 7. The hero portrait only appears on the home page, so only preload it there.
    if (route.path !== '/') {
      pageHtml = pageHtml.replace(/<link\s+rel="preload"\s+as="image"[^>]*obum-384\.webp[^>]*>\s*/s, '');
    }

    // 8. Generate and inject structured data
    const structuredData = generateStructuredData(route, content);
    const ldJsonTag = structuredData
      ? `<script type="application/ld+json">\n${structuredData}\n</script>`
      : '';
    pageHtml = pageHtml.replace('<!-- ROUTE_LD -->', ldJsonTag);

    const outDir = route.path === '/' ? distDir : path.join(distDir, route.path);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    const outFile = path.join(outDir, 'index.html');
    fs.writeFileSync(outFile, pageHtml, 'utf-8');
    console.log(`  ✓ Rendered ${route.path} -> ${path.relative(rootDir, outFile)} (${(pageHtml.length / 1024).toFixed(1)} kB)`);
  }

  // Sitemap, generated from the same routes so it never goes stale.
  const priorities = { '/': '1.0', '/work-with-me': '0.9', '/projects': '0.9', '/articles': '0.9', '/community': '0.8' };
  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>https://obumnwabude.com${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priorities[route.path] ?? '0.7'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf-8');
  console.log(`  ✓ Wrote sitemap.xml (${routes.length} URLs, lastmod ${lastmod})`);

  // Clean up temporary dist-ssr directory
  const distSsrDir = path.resolve(rootDir, 'dist-ssr');
  if (fs.existsSync(distSsrDir)) {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
  }

  console.log('✅ Static site pre-rendering complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
