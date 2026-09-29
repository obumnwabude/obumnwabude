import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrEntryPath = path.resolve(rootDir, 'dist-ssr/entry-server.mjs');

const routes = [
  {
    path: '/',
    title: 'Obum (Obumuneme Nwabude)',
    description:
      'Full-Stack AI, Blockchain, Cloud, Mobile, & Web Developer. Google Developer Expert (GDE) in Cloud AI & Dart-Flutter.',
  },
  {
    path: '/projects',
    title: 'Projects | Obum (Obumuneme Nwabude)',
    description:
      'Explore software engineering projects built by Obumuneme Nwabude across AI, Cloud, Web3, Flutter, Mobile, and Web applications.',
  },
  {
    path: '/articles',
    title: 'Articles | Obum (Obumuneme Nwabude)',
    description:
      'Read technical articles, guides, and insights by Obumuneme Nwabude on AI, Cloud, Flutter, Dart, Architecture, Web3, and Tech Communities.',
  },
  {
    path: '/community',
    title: 'Community | Obum (Obumuneme Nwabude)',
    description:
      'Community contributions, speaking engagements, and workshops delivered by Google Developer Expert Obumuneme Nwabude across Cloud AI & Dart-Flutter.',
  },
];

async function prerender() {
  const template = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8');
  const { render } = await import(ssrEntryPath);

  console.log('⚡ Pre-rendering routes into static HTML...');

  for (const route of routes) {
    const { html } = await render(route.path);
    const canonicalUrl = `https://obumnwabude.com${route.path === '/' ? '' : route.path}`;

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

    const outDir = route.path === '/' ? distDir : path.join(distDir, route.path);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    const outFile = path.join(outDir, 'index.html');
    fs.writeFileSync(outFile, pageHtml, 'utf-8');
    console.log(`  ✓ Rendered ${route.path} -> ${path.relative(rootDir, outFile)} (${(pageHtml.length / 1024).toFixed(1)} kB)`);
  }

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
