import { renderToString } from '@vue/server-renderer';
import { articles } from './content/articles';
import { community } from './content/community';
import { featuredProjects, projects } from './content/projects';
import { createAppInstance } from './main';

export async function render(url: string) {
  const { app, router } = createAppInstance(true);

  await router.push(url);
  await router.isReady();

  const html = await renderToString(app);
  return { html };
}

export { articles, community, featuredProjects, projects };
