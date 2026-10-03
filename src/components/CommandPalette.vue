<script setup lang="ts">
import IconArticle from '@/icons/IconArticle.vue';
import IconHome from '@/icons/IconHome.vue';
import IconMoon from '@/icons/IconMoon.vue';
import IconRocket from '@/icons/IconRocket.vue';
import IconSun from '@/icons/IconSun.vue';
import IconSystemTheme from '@/icons/IconSystemTheme.vue';
import IconUsers from '@/icons/IconUsers.vue';
import { articles } from '@/content/articles';
import { community } from '@/content/community';
import { projects } from '@/content/projects';
import { themes, useThemeStore, type ThemeMode } from '@/stores/theme';
import { displayDate } from '@/types';
import {
  trackPaletteDismissed,
  trackPaletteOpened,
  trackPaletteResultSelected,
  trackPaletteSubmenuOpened,
  type PaletteOpenTrigger,
} from '@/utils/analytics';
import { contentId } from '@/utils/slug';
import { computed, markRaw, nextTick, onBeforeUnmount, onMounted, ref, watch, type Component } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const themeStore = useThemeStore();

const isOpen = ref(false);
const query = ref('');
const activeIndex = ref(0);
const inputRef = ref<HTMLInputElement | null>(null);
const listRef = ref<HTMLElement | null>(null);

type ResultType = 'article' | 'project' | 'community' | 'nav' | 'action';

interface PaletteResult {
  type: ResultType;
  label: string;
  sublabel?: string;
  // Hidden text folded into the search haystack but not displayed
  searchExtras?: string;
  route?: string;
  hash?: string;
  href?: string;
  icon?: string;
  iconComponent?: Component;
  isActive?: () => boolean;
  action?: () => void;
  badges?: string[];
}

const themeIcons: Record<ThemeMode, Component> = {
  'Dark Theme': markRaw(IconMoon),
  'Light Theme': markRaw(IconSun),
  'Device Default': markRaw(IconSystemTheme),
};

const submenuMode = ref<'none' | 'theme'>('none');

const navItems: PaletteResult[] = [
  { type: 'nav', label: 'Go to Home', route: '/', iconComponent: markRaw(IconHome) },
  { type: 'nav', label: 'Go to Projects', route: '/projects', iconComponent: markRaw(IconRocket) },
  { type: 'nav', label: 'Go to Articles', route: '/articles', iconComponent: markRaw(IconArticle) },
  { type: 'nav', label: 'Go to Community', route: '/community', iconComponent: markRaw(IconUsers) },
  {
    type: 'action',
    label: 'Toggle Theme',
    searchExtras: 'theme mode appearance dark light system',
    iconComponent: markRaw(IconMoon),
    action: () => {
      submenuMode.value = 'theme';
      query.value = '';
      activeIndex.value = 0;
      trackPaletteSubmenuOpened('theme');
      nextTick(() => inputRef.value?.focus());
    },
  },
];

const themeItems: PaletteResult[] = themes.map((mode) => ({
  type: 'action' as const,
  label: mode,
  searchExtras: `theme mode appearance ${mode === 'Device Default' ? 'system auto' : ''}`,
  iconComponent: themeIcons[mode],
  isActive: () => themeStore.mode === mode,
  action: () => {
    themeStore.set(mode);
  },
}));

const articleItems: PaletteResult[] = articles.map((a) => ({
  type: 'article' as const,
  label: a.title,
  sublabel: `${a.publishedOn} · ${displayDate(a.date)} · ${a.readTime}`,
  searchExtras: [
    a.description,
    a.longDescription ?? '',
    a.category,
    (a.tags ?? []).join(' '),
    (a.topicsCovered ?? []).join(' '),
    (a.keyTakeaways ?? []).join(' '),
  ].join(' '),
  badges: [a.category],
  route: '/articles',
  hash: '#' + contentId(a.title),
}));

const projectItems: PaletteResult[] = projects.map((p) => ({
  type: 'project' as const,
  label: p.title,
  sublabel: p.description,
  searchExtras: [
    p.longDescription ?? '',
    p.category,
    p.status ?? '',
    p.role ?? '',
    (p.tags ?? []).join(' '),
    (p.expandedTags ?? []).join(' '),
    (p.highlights ?? []).join(' '),
    (p.architecture?.frontend ?? []).join(' '),
    (p.architecture?.backend ?? []).join(' '),
    (p.architecture?.blockchainOrAi ?? []).join(' '),
    (p.architecture?.infrastructure ?? []).join(' '),
  ].join(' '),
  badges: [p.category],
  route: '/projects',
  hash: '#' + contentId(p.title),
}));

const communityItems: PaletteResult[] = community.map((c) => ({
  type: 'community' as const,
  label: c.title,
  sublabel: `${c.sessionFormat} · ${displayDate(c.date)}${c.location ? ' · ' + c.location : ''}`,
  searchExtras: [
    c.description,
    c.longDescription ?? '',
    c.sessionFormat,
    c.eventSeries ?? '',
    c.location ?? '',
    (c.tags ?? []).join(' '),
    (c.expandedTags ?? []).join(' '),
    (c.curriculum ?? []).join(' '),
    (c.keyTakeaways ?? []).join(' '),
  ].join(' '),
  badges: [c.sessionFormat],
  route: '/community',
  hash: '#' + contentId(c.title),
}));

const allItems: PaletteResult[] = [...navItems, ...articleItems, ...projectItems, ...communityItems];

// Scored fuzzy match: higher score = better match. Title hits weigh most, then sublabel, then extras.
function scoreMatch(item: PaletteResult, q: string): number {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return 0;
  const title = item.label.toLowerCase();
  const sub = (item.sublabel ?? '').toLowerCase();
  const extras = (item.searchExtras ?? '').toLowerCase();
  const badges = (item.badges ?? []).join(' ').toLowerCase();

  let total = 0;
  for (const term of terms) {
    let termScore = 0;
    if (title.startsWith(term)) termScore += 100;
    else if (title.includes(term)) termScore += 60;
    if (badges.includes(term)) termScore += 40;
    if (sub.includes(term)) termScore += 25;
    if (extras.includes(term)) termScore += 10;
    if (termScore === 0) return 0;
    total += termScore;
  }
  return total;
}

const RECENT_KEY = 'obum-palette-recent';
const recentLabels = ref<string[]>([]);

function loadRecent() {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    recentLabels.value = raw ? (JSON.parse(raw) as string[]).slice(0, 5) : [];
  } catch {
    recentLabels.value = [];
  }
}

function pushRecent(label: string) {
  const existing = recentLabels.value.filter((l) => l !== label);
  recentLabels.value = [label, ...existing].slice(0, 5);
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(recentLabels.value));
  } catch {
    // best-effort
  }
}

const recentItems = computed<PaletteResult[]>(() =>
  recentLabels.value
    .map((lbl) => allItems.find((i) => i.label === lbl))
    .filter(Boolean) as PaletteResult[]
);

const filteredResults = computed<PaletteResult[]>(() => {
  const q = query.value.trim();
  if (submenuMode.value === 'theme') {
    if (!q) return themeItems;
    return themeItems
      .map((item) => ({ item, score: scoreMatch(item, q) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.item);
  }
  if (!q) {
    const recent = recentItems.value;
    if (recent.length) return [...recent, ...navItems.filter((n) => !recent.includes(n))];
    return navItems;
  }
  return allItems
    .map((item) => ({ item, score: scoreMatch(item, q) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.item);
});

type GroupName = 'Recent' | 'Navigation' | 'Actions' | 'Articles' | 'Projects' | 'Community' | 'Theme';

interface Group {
  name: GroupName;
  items: PaletteResult[];
  startIndex: number;
}

const groupOrder: GroupName[] = ['Recent', 'Theme', 'Navigation', 'Actions', 'Articles', 'Projects', 'Community'];

const typeToGroup: Record<ResultType, Exclude<GroupName, 'Recent'>> = {
  nav: 'Navigation',
  action: 'Actions',
  article: 'Articles',
  project: 'Projects',
  community: 'Community',
};

const groups = computed<Group[]>(() => {
  const results = filteredResults.value;
  const isEmptyQuery = !query.value.trim();
  const map: Partial<Record<GroupName, PaletteResult[]>> = {};

  if (submenuMode.value === 'theme') {
    map['Theme'] = results;
  } else if (isEmptyQuery && recentItems.value.length) {
    const recentSet = new Set(recentItems.value);
    for (const r of recentItems.value) {
      (map['Recent'] = map['Recent'] || []).push(r);
    }
    for (const item of results) {
      if (recentSet.has(item)) continue;
      const g = typeToGroup[item.type];
      (map[g] = map[g] || []).push(item);
    }
  } else {
    for (const item of results) {
      const g = typeToGroup[item.type];
      (map[g] = map[g] || []).push(item);
    }
  }

  let idx = 0;
  return groupOrder
    .filter((g) => map[g]?.length)
    .map((name) => {
      const items = map[name]!;
      const group: Group = { name, items, startIndex: idx };
      idx += items.length;
      return group;
    });
});

const flatResults = computed<PaletteResult[]>(() =>
  groups.value.flatMap((g) => g.items)
);

// `true` once a result has been activated this session — toggles whether we fire palette_dismissed.
let activatedThisSession = false;

function open(trigger: PaletteOpenTrigger = 'other') {
  isOpen.value = true;
  query.value = '';
  activeIndex.value = 0;
  submenuMode.value = 'none';
  activatedThisSession = false;
  loadRecent();
  trackPaletteOpened(trigger);
  nextTick(() => inputRef.value?.focus());
}

function close() {
  if (isOpen.value && !activatedThisSession) {
    trackPaletteDismissed({ query: query.value, resultCount: flatResults.value.length });
  }
  isOpen.value = false;
  submenuMode.value = 'none';
}

function exitSubmenu() {
  submenuMode.value = 'none';
  query.value = '';
  activeIndex.value = 0;
  nextTick(() => inputRef.value?.focus());
}

function handleGlobalKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    isOpen.value ? close() : open('keyboard');
  }
}

function openFromExternal(e: Event) {
  const detail = (e as CustomEvent<{ trigger?: PaletteOpenTrigger }>).detail;
  const trigger: PaletteOpenTrigger = detail?.trigger ?? 'other';
  open(trigger);
}

function scrollActiveIntoView() {
  nextTick(() => {
    const el = listRef.value?.querySelector<HTMLElement>('.palette-item.is-active');
    el?.scrollIntoView({ block: 'nearest' });
  });
}

function handleKeydown(e: KeyboardEvent) {
  const total = flatResults.value.length;
  if (e.key === 'Escape') {
    if (submenuMode.value !== 'none') {
      e.preventDefault();
      exitSubmenu();
    } else {
      close();
    }
    return;
  }
  if (e.key === 'Backspace' && !query.value && submenuMode.value !== 'none') {
    e.preventDefault();
    exitSubmenu();
    return;
  }
  if (!total) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIndex.value = (activeIndex.value + 1) % total;
    scrollActiveIntoView();
    return;
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIndex.value = (activeIndex.value - 1 + total) % total;
    scrollActiveIntoView();
    return;
  }
  if (e.key === 'Home') {
    e.preventDefault();
    activeIndex.value = 0;
    scrollActiveIntoView();
    return;
  }
  if (e.key === 'End') {
    e.preventDefault();
    activeIndex.value = total - 1;
    scrollActiveIntoView();
    return;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    const item = flatResults.value[activeIndex.value];
    if (item) activate(item);
  }
}

function activate(item: PaletteResult) {
  pushRecent(item.label);
  activatedThisSession = true;
  const idx = flatResults.value.indexOf(item);
  const destination = item.route
    ? item.route + (item.hash ?? '')
    : item.href || '';
  trackPaletteResultSelected({
    resultType: item.type,
    resultLabel: item.label,
    resultIndex: idx >= 0 ? idx : 0,
    query: query.value,
    destination,
    submenu: submenuMode.value === 'none' ? 'main' : submenuMode.value,
  });
  if (item.action) {
    // Submenu triggers call action() but keep the palette open; others close.
    const keepOpen = submenuMode.value === 'none' && item.label === 'Toggle Theme';
    item.action();
    if (!keepOpen) close();
    return;
  }
  if (item.route) {
    router.push(item.hash ? { path: item.route, hash: item.hash } : item.route);
    close();
    return;
  }
  if (item.href) {
    window.open(item.href, '_blank', 'noopener noreferrer');
    close();
    return;
  }
}

watch(query, () => {
  activeIndex.value = 0;
});

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown);
  window.addEventListener('open-command-palette', openFromExternal as EventListener);
  loadRecent();
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleGlobalKeydown);
  window.removeEventListener('open-command-palette', openFromExternal as EventListener);
});

// Match highlighting: splits the label on query terms (case-insensitive)
function highlightLabel(text: string, q: string): string {
  const trimmed = q.trim();
  if (!trimmed) return escapeHtml(text);
  const terms = trimmed.split(/\s+/).filter(Boolean).map(escapeRegex);
  if (!terms.length) return escapeHtml(text);
  const re = new RegExp(`(${terms.join('|')})`, 'gi');
  return escapeHtml(text).replace(re, '<mark class="palette-match">$1</mark>');
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '"' ? '&quot;' : '&#39;'
  );
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Semantic icon per result type / action name
function typeIcon(type: ResultType | string): string {
  switch (type) {
    case 'nav':
      // compass — distinct from a plain house icon, suits "navigate"
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;
    case 'theme':
      // moon-with-sun hint
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    case 'action':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
    case 'article':
      // document with text lines
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>`;
    case 'project':
      // rocket
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`;
    case 'community':
      // people
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
    default:
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
  }
}

function getItemIcon(item: PaletteResult): string {
  if (item.icon) return typeIcon(item.icon);
  return typeIcon(item.type);
}

function usesComponentIcon(item: PaletteResult): boolean {
  return Boolean(item.iconComponent);
}

function flatIndex(group: Group, localIdx: number): number {
  return group.startIndex + localIdx;
}
</script>

<template>
  <Teleport to="body">
    <Transition name="palette-backdrop">
      <div
        v-if="isOpen"
        class="palette-backdrop"
        @click="close"
        aria-modal="true"
        role="dialog"
        aria-label="Command palette"
      >
        <div class="palette-panel" @click.stop @keydown="handleKeydown">
          <div class="palette-search-row" :class="{ 'is-submenu': submenuMode !== 'none' }">
            <button
              v-if="submenuMode !== 'none'"
              class="palette-back"
              type="button"
              aria-label="Back to main search"
              @click="exitSubmenu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <span v-else class="palette-search-icon" aria-hidden="true">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <span v-if="submenuMode === 'theme'" class="palette-submenu-chip">Theme</span>
            <input
              ref="inputRef"
              v-model="query"
              class="palette-input"
              type="text"
              :placeholder="submenuMode === 'theme' ? 'Pick a theme...' : 'Search articles, projects, tags, workshops...'"
              autocomplete="off"
              spellcheck="false"
            />
            <button
              v-if="query"
              class="palette-clear"
              type="button"
              aria-label="Clear search"
              @click="query = ''"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <kbd class="palette-esc-hint" @click="close">Esc</kbd>
          </div>

          <div class="palette-results" ref="listRef" role="listbox">
            <template v-if="flatResults.length === 0">
              <div class="palette-empty">
                <span class="palette-empty-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                <p class="palette-empty-title">No results for "{{ query }}"</p>
                <p class="palette-empty-sub">Try a tag, category, or a word from the content body.</p>
              </div>
            </template>

            <template v-for="group in groups" :key="group.name">
              <p class="palette-group-heading">
                {{ group.name }}
                <span class="palette-group-count">{{ group.items.length }}</span>
              </p>
              <button
                v-for="(item, localIdx) in group.items"
                :key="`${group.name}-${item.label}`"
                type="button"
                class="palette-item"
                role="option"
                :aria-selected="flatIndex(group, localIdx) === activeIndex"
                :class="{ 'is-active': flatIndex(group, localIdx) === activeIndex }"
                @click="activate(item)"
                @mouseenter="activeIndex = flatIndex(group, localIdx)"
              >
                <span class="palette-item-icon">
                  <component v-if="usesComponentIcon(item)" :is="item.iconComponent" :size="15" />
                  <span v-else v-html="getItemIcon(item)" />
                </span>
                <span class="palette-item-content">
                  <span class="palette-item-label" v-html="highlightLabel(item.label, query)" />
                  <span v-if="item.sublabel" class="palette-item-sublabel" v-html="highlightLabel(item.sublabel, query)" />
                </span>
                <span v-if="item.isActive?.()" class="palette-item-check" aria-label="Active" title="Active">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span v-if="item.badges?.length" class="palette-item-badges">
                  <span v-for="b of item.badges" :key="b" class="palette-item-badge">{{ b }}</span>
                </span>
                <span v-if="item.href" class="palette-item-ext" aria-hidden="true" title="Opens in a new tab">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </button>
            </template>
          </div>

          <div class="palette-footer">
            <span class="palette-hint"><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
            <span class="palette-hint"><kbd>↵</kbd> open</span>
            <span class="palette-hint"><kbd>Esc</kbd> close</span>
            <span class="palette-count-live" v-if="query">{{ flatResults.length }} result<span v-if="flatResults.length !== 1">s</span></span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.palette-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 9000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(10vh, 5rem);
  padding-left: 1rem;
  padding-right: 1rem;
}

.palette-panel {
  width: min(680px, 100%);
  max-height: 72vh;
  display: flex;
  flex-direction: column;
  background: var(--popover-bg);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid var(--popover-border);
  border-radius: 16px;
  box-shadow: var(--shadow-glass), 0 24px 48px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

.palette-search-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--glass-border);
  flex-shrink: 0;
}

.palette-search-icon {
  color: var(--gray);
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.palette-back {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  background: rgb(from var(--text) r g b / 5%);
  color: var(--text);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
}

.palette-back:hover {
  color: var(--primary);
  border-color: rgb(from var(--primary) r g b / 32%);
  background: rgb(from var(--primary) r g b / 10%);
  transform: translateX(-1px);
}

.palette-submenu-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: rgb(from var(--primary) r g b / 10%);
  border: 1px solid rgb(from var(--primary) r g b / 22%);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  flex-shrink: 0;
}

.palette-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.05rem;
  color: var(--text);
  font-family: inherit;
  min-width: 0;
}

.palette-input::placeholder {
  color: var(--gray);
  opacity: 0.75;
}

.palette-clear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;
  border: none;
  background: rgb(from var(--text) r g b / 8%);
  color: var(--gray);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
}

.palette-clear:hover {
  background: rgb(from var(--primary) r g b / 14%);
  color: var(--primary);
  transform: scale(1.05);
}

.palette-esc-hint {
  font-size: 0.7rem;
  padding: 0.15rem 0.45rem;
  border-radius: 5px;
  border: 1px solid var(--glass-border);
  background: rgb(from var(--text) r g b / 5%);
  color: var(--gray);
  cursor: pointer;
  flex-shrink: 0;
}

.palette-results {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
  overscroll-behavior: contain;
}

.palette-empty {
  padding: 2rem 1.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.palette-empty-icon {
  color: var(--gray);
  opacity: 0.4;
}

.palette-empty-title {
  font-size: 0.95rem;
  color: var(--text);
  margin: 0;
}

.palette-empty-sub {
  font-size: 0.8rem;
  color: var(--gray);
  margin: 0;
}

.palette-group-heading {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--gray);
  padding: 0.65rem 1.1rem 0.25rem;
  opacity: 0.75;
  margin: 0;
}

.palette-group-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.1rem;
  height: 1.1rem;
  padding: 0 0.35rem;
  border-radius: 999px;
  background: rgb(from var(--text) r g b / 6%);
  color: var(--gray);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
}

.palette-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  width: 100%;
  text-align: left;
  padding: 0.6rem 1.1rem;
  cursor: pointer;
  background: transparent;
  border: none;
  border-left: 2px solid transparent;
  color: var(--text);
  transition: background 0.12s ease, border-color 0.12s ease;
  font-family: inherit;
}

.palette-item.is-active {
  background: rgb(from var(--primary) r g b / 8%);
  border-left-color: var(--primary);
}

.palette-item-icon {
  color: var(--gray);
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.palette-item.is-active .palette-item-icon {
  color: var(--primary);
}

.palette-item-content {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
  flex: 1;
}

.palette-item-label {
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.palette-item-sublabel {
  font-size: 0.75rem;
  color: var(--gray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

:deep(.palette-match) {
  background: rgb(from var(--primary) r g b / 18%);
  color: var(--primary);
  border-radius: 3px;
  padding: 0 1px;
}

.palette-item-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
  filter: drop-shadow(0 0 4px rgb(from var(--primary) r g b / 50%));
}

.palette-item-badges {
  display: inline-flex;
  gap: 0.25rem;
  flex-shrink: 0;
}

.palette-item-badge {
  font-size: 0.65rem;
  font-weight: 500;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  background: rgb(from var(--primary) r g b / 8%);
  border: 1px solid rgb(from var(--primary) r g b / 20%);
  color: var(--primary);
  white-space: nowrap;
}

.palette-item-ext {
  color: var(--gray);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  opacity: 0.6;
}

.palette-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.55rem 1.1rem;
  border-top: 1px solid var(--glass-border);
  font-size: 0.72rem;
  color: var(--gray);
  flex-shrink: 0;
}

.palette-hint {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.palette-count-live {
  margin-left: auto;
  color: var(--gray);
  opacity: 0.8;
}

.palette-footer kbd {
  display: inline-block;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  border: 1px solid var(--glass-border);
  background: rgb(from var(--text) r g b / 5%);
  font-size: 0.68rem;
  margin-right: 0.15rem;
}

@media (max-width: 480px) {
  .palette-item-badges {
    display: none;
  }
  .palette-hint:nth-child(2) {
    display: none;
  }
}

.palette-backdrop-enter-active {
  transition: opacity 0.22s ease;
}

.palette-backdrop-leave-active {
  transition: opacity 0.18s ease;
}

.palette-backdrop-enter-from,
.palette-backdrop-leave-to {
  opacity: 0;
}

.palette-backdrop-enter-active .palette-panel,
.palette-backdrop-leave-active .palette-panel {
  transition: transform 0.26s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.22s ease;
}

.palette-backdrop-enter-from .palette-panel,
.palette-backdrop-leave-to .palette-panel {
  transform: translateY(-16px) scale(0.97);
  opacity: 0;
}
</style>
