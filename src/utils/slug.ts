import { community } from '@/content/community';
import type { CommunityEvent } from '@/types';

export function slug(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function contentId(title: string): string {
  return `content-${slug(title)}`;
}

const communityTitleSlugCounts = new Map<string, number>();
for (const event of community) {
  const s = slug(event.title);
  communityTitleSlugCounts.set(s, (communityTitleSlugCounts.get(s) ?? 0) + 1);
}

/**
 * Anchor id for a community event. Matches contentId(title) for unique titles,
 * and appends a location/image disambiguator when the same talk title was given
 * at multiple events so every card and JSON-LD Event URL is unique.
 */
export function communityEventId(event: Pick<CommunityEvent, 'title' | 'location' | 'date' | 'image'>): string {
  const base = slug(event.title);
  if ((communityTitleSlugCounts.get(base) ?? 0) <= 1) {
    return `content-${base}`;
  }
  const suffix = slug(event.location || event.image?.name || `${event.date.year}-${event.date.month}`);
  return `content-${base}-${suffix}`;
}
