/**
 * Comprehensive Google Analytics 4 (GA4) Telemetry & Behavioral Analytics Engine
 *
 * Provides typed event dispatching, session & campaign attribution preservation,
 * stealth conversion tracking (clipboard email copy), deep UI & timeline telemetry,
 * native Core Web Vitals monitoring, and error tracking.
 * Safe for SSR (Vite prerendering) and development environments.
 */

import { LINKS } from '@/content/links';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Cached attribution context to attach to conversion events
interface SessionAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  initial_referrer?: string;
  landing_path?: string;
  display_mode?: 'standalone' | 'browser';
  pointer_mode?: 'fine' | 'coarse';
  device_color_scheme?: 'dark' | 'light';
  reduced_motion?: boolean;
}

let cachedAttribution: SessionAttribution | null = null;
const trackedScrollMilestones = new Set<string>();
const trackedSectionImpressions = new Set<string>();

/**
 * Checks if running in a client environment with browser APIs available.
 */
export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determines if debug mode is active (DEV mode, ?debug_ga=true query param, or localStorage).
 */
export function isDebugMode(): boolean {
  if (!isClient) return false;
  try {
    return (
      import.meta.env.DEV ||
      window.location.search.includes('debug_ga=true') ||
      window.localStorage.getItem('ga_debug') === 'true'
    );
  } catch {
    return false;
  }
}

/**
 * Captures initial UTM parameters, referrer, and hardware/device context.
 */
export function getSessionAttribution(): SessionAttribution {
  if (!isClient) return {};
  if (cachedAttribution) return cachedAttribution;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const attribution: SessionAttribution = {
      landing_path: window.location.pathname,
      initial_referrer: document.referrer || '(direct)',
      display_mode: window.matchMedia('(display-mode: standalone)').matches ? 'standalone' : 'browser',
      pointer_mode: window.matchMedia('(pointer: coarse)').matches ? 'coarse' : 'fine',
      device_color_scheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      reduced_motion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    };

    if (urlParams.has('utm_source')) attribution.utm_source = urlParams.get('utm_source')!;
    if (urlParams.has('utm_medium')) attribution.utm_medium = urlParams.get('utm_medium')!;
    if (urlParams.has('utm_campaign')) attribution.utm_campaign = urlParams.get('utm_campaign')!;
    if (urlParams.has('utm_term')) attribution.utm_term = urlParams.get('utm_term')!;
    if (urlParams.has('utm_content')) attribution.utm_content = urlParams.get('utm_content')!;

    // Stash in sessionStorage for persistence across client SPA navigations
    const existing = window.sessionStorage.getItem('ga_session_attr');
    if (!existing) {
      window.sessionStorage.setItem('ga_session_attr', JSON.stringify(attribution));
      cachedAttribution = attribution;
    } else {
      cachedAttribution = JSON.parse(existing);
    }

    return cachedAttribution || attribution;
  } catch {
    return {};
  }
}

/**
 * Dispatches an event directly to Google Analytics 4 (window.gtag).
 * Handles SSR guards, debug logging, and payload serialization.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (!isClient) return;

  try {
    const debug = isDebugMode();
    const payload: Record<string, any> = {
      ...params,
      page_path: params.page_path || window.location.pathname,
      page_title: params.page_title || document.title,
    };

    if (debug) {
      payload.debug_mode = true;
      console.log(
        `%c[GA4 Event] ${eventName}`,
        'color: #00d2ff; font-weight: bold; background: #07090e; padding: 2px 6px; border-radius: 4px;',
        payload
      );
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...payload,
      });
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn('[GA4] Event dispatch error:', err);
    }
  }
}

// ============================================================================
// 1. High-Value Conversions & Lead Generation
// ============================================================================

/**
 * Tracks when a user opens the Contact Me menu.
 */
export function trackContactMenuOpened(triggerLocation: string): void {
  trackEvent('contact_menu_opened', {
    trigger_location: triggerLocation,
    ...getSessionAttribution(),
  });
}

/**
 * Tracks primary lead conversion (selecting Email or Telegram).
 */
export function trackLead(
  method: 'email' | 'telegram',
  details: {
    triggerLocation?: string;
    contactTarget?: string;
  } = {}
): void {
  trackEvent('generate_lead', {
    method,
    trigger_location: details.triggerLocation || 'unknown',
    contact_target: details.contactTarget || (method === 'email' ? LINKS.mailto : LINKS.telegram),
    ...getSessionAttribution(),
  });
}

/**
 * Tracks stealth conversion when someone copies text from the site (specifically email or handle).
 */
export function trackCopyAction(copiedText: string, details: { textType?: string; pagePath?: string } = {}): void {
  const isEmail = copiedText.toLowerCase().includes(LINKS.email);
  const isTelegram =
    copiedText.includes(LINKS.telegram) || (/obumnwabude/i.test(copiedText) && /t\.me/i.test(copiedText));

  trackEvent('copy_to_clipboard', {
    text_type: details.textType || (isEmail ? 'email_address' : isTelegram ? 'telegram_handle' : 'general_text'),
    is_high_intent: isEmail || isTelegram,
    copied_length: copiedText.length,
    ...getSessionAttribution(),
  });
}

/**
 * Tracks click on the Services inquiry CTA.
 */
export function trackServiceInquiryClick(serviceTitle: string, badge?: string): void {
  trackEvent('service_inquiry_click', {
    service_title: serviceTitle,
    service_badge: badge,
    ...getSessionAttribution(),
  });
}

// ============================================================================
// 2. Portfolio, Projects & Content Consumption
// ============================================================================

/**
 * Tracks outbound clicks from Coding Projects.
 */
export function trackProjectActionClick(
  projectTitle: string,
  actionTitle: string,
  link: string,
  isFeatured: boolean = false,
  tags: string[] = [],
  icon?: string
): void {
  trackEvent('project_action_click', {
    project_title: projectTitle,
    action_name: actionTitle,
    destination_url: link,
    is_featured: isFeatured,
    tech_tags: tags.join(', '),
    action_icon: icon || 'unknown',
  });

  // Also fire GA4 standard select_item
  trackEvent('select_item', {
    item_id: projectTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    item_name: projectTitle,
    item_category: 'Coding Project',
    item_list_name: isFeatured ? 'Featured Projects' : 'All Projects',
  });
}

/**
 * Tracks clicks on Community speaking events, workshops, and educational resources.
 */
export function trackCommunityResourceClick(
  eventTitle: string,
  resourceTitle: string,
  link: string,
  tags: string[] = [],
  eventDate?: string,
  icon?: string
): void {
  let resourceCategory = 'other';
  const lower = resourceTitle.toLowerCase();
  if (lower.includes('slide') || lower.includes('powerpoint')) resourceCategory = 'presentation_slides';
  else if (lower.includes('record') || lower.includes('video')) resourceCategory = 'video_recording';
  else if (lower.includes('colab') || lower.includes('lab') || lower.includes('codelab'))
    resourceCategory = 'interactive_lab';
  else if (lower.includes('repo') || lower.includes('github') || lower.includes('code'))
    resourceCategory = 'source_code';
  else if (lower.includes('about')) resourceCategory = 'event_info';

  trackEvent('community_resource_click', {
    event_title: eventTitle,
    resource_title: resourceTitle,
    resource_category: resourceCategory,
    destination_url: link,
    tech_tags: tags.join(', '),
    event_date: eventDate,
    action_icon: icon,
  });
}

/**
 * Tracks clicks on published technical articles.
 */
export function trackArticleClick(articleTitle: string, publishedOn: string, link: string, articleDate?: string): void {
  trackEvent('select_content', {
    content_type: 'article',
    item_id: articleTitle,
    published_on: publishedOn,
    destination_url: link,
    article_date: articleDate,
  });

  trackEvent('article_read_click', {
    article_title: articleTitle,
    published_on: publishedOn,
    destination_url: link,
  });
}

/**
 * Tracks clicks on author profile links in the Articles page intro (CSS-Tricks, freeCodeCamp).
 */
export function trackAuthorProfileClick(platform: string, url: string): void {
  trackEvent('author_profile_click', {
    platform,
    destination_url: url,
  });
}

/**
 * Tracks clicks on in-text community credential links (GDE, GDG, MLSA, AE-FUNAI, etc.).
 */
export function trackCommunityIntroLinkClick(linkName: string, url: string): void {
  trackEvent('community_intro_link_click', {
    link_name: linkName,
    destination_url: url,
  });
}

/**
 * Tracks "... See All Projects / Articles / Events" clicks on Home page.
 */
export function trackExploreMoreClick(section: 'projects' | 'articles' | 'community'): void {
  trackEvent('explore_more_click', {
    source_section: section,
  });
}

// ============================================================================
// 3. UI, Interactive System & Navigation Telemetry
// ============================================================================

/**
 * Tracks user dragging the timeline scrubber.
 */
export function trackTimelineScrub(
  page: 'articles' | 'community',
  details: {
    velocity: 'high' | 'normal';
    scrollRatio: number;
    yearCrossed?: number;
  }
): void {
  trackEvent('timeline_scrub', {
    page,
    velocity: details.velocity,
    scroll_ratio: Number(details.scrollRatio.toFixed(3)),
    year_crossed: details.yearCrossed,
  });
}

/**
 * Tracks clicking a specific year tick mark in TimelineScroller.
 */
export function trackTimelineYearJump(year: number, page: 'articles' | 'community'): void {
  trackEvent('timeline_year_jump', {
    target_year: year,
    page,
  });
}

/**
 * Tracks milestone reached as user scrolls past different years in the timeline.
 */
export function trackTimelineYearReached(year: number, page: 'articles' | 'community'): void {
  const key = `year_${page}_${year}`;
  if (trackedScrollMilestones.has(key)) return;
  trackedScrollMilestones.add(key);

  trackEvent('timeline_year_reached', {
    reached_year: year,
    page,
  });
}

/**
 * Tracks theme switching (Dark, Light, Device Default).
 */
export function trackThemeChange(toTheme: string, fromTheme?: string, triggerLocation: string = 'header'): void {
  trackEvent('theme_change', {
    to_theme: toTheme,
    from_theme: fromTheme,
    trigger_location: triggerLocation,
  });
}

/**
 * Tracks navigation menu item clicks.
 */
export function trackNavClick(
  linkName: string,
  navType: 'desktop_header' | 'mobile_sidebar' | 'footer' | 'hero'
): void {
  trackEvent('navigation_click', {
    link_name: linkName,
    nav_type: navType,
  });
}

/**
 * Tracks mobile menu drawer open/close.
 */
export function trackMobileMenuToggle(action: 'open' | 'close'): void {
  trackEvent('mobile_menu_toggle', {
    action,
  });
}

/**
 * Tracks social media icon clicks.
 */
export function trackSocialClick(platform: string, placement: 'header' | 'sidebar' | 'footer', url: string): void {
  trackEvent('social_click', {
    platform,
    placement,
    destination_url: url,
  });
}

/**
 * Tracks clicks on the floating scroll-to-top button.
 */
export function trackScrollToTop(scrollDepthPx: number, scrollPercent: number, pagePath: string): void {
  trackEvent('scroll_to_top', {
    scroll_depth_px: Math.round(scrollDepthPx),
    scroll_percent: Math.round(scrollPercent),
    page_path: pagePath,
  });
}

/**
 * Tracks hover / exploration of skill tags in TechMatrix.
 */
export function trackSkillTagInteraction(skillName: string, pillarTitle: string): void {
  trackEvent('skill_tag_interaction', {
    skill_name: skillName,
    pillar_title: pillarTitle,
  });
}

/**
 * Tracks hover on credibility capsule bar metrics in ImpactMetrics.
 */
export function trackMetricCardHover(metricLabel: string, metricValue?: string): void {
  trackEvent('metric_card_hover', {
    metric_label: metricLabel,
    metric_value: metricValue,
  });
}

/**
 * Tracks hover / engagement with the GDE floating glass badge in the Hero avatar.
 */
export function trackGdeBadgeInteraction(): void {
  trackEvent('badge_interaction', {
    badge_name: 'gde_hero_badge',
  });
}

// ============================================================================
// 4. Scroll Depth & Section Impression Engine
// ============================================================================

/**
 * Tracks scroll depth milestone (25%, 50%, 75%, 90%, 100%).
 */
export function trackScrollDepth(depthPercent: number, pagePath: string): void {
  const key = `scroll_${pagePath}_${depthPercent}`;
  if (trackedScrollMilestones.has(key)) return;
  trackedScrollMilestones.add(key);

  trackEvent('scroll_depth', {
    percent_scrolled: depthPercent,
    page_path: pagePath,
  });
}

/**
 * Tracks when a key section enters the viewport for genuine dwell.
 */
export function trackSectionView(sectionName: string, pagePath: string): void {
  const key = `section_${pagePath}_${sectionName}`;
  if (trackedSectionImpressions.has(key)) return;
  trackedSectionImpressions.add(key);

  trackEvent('section_view', {
    section_name: sectionName,
    page_path: pagePath,
  });
}

/**
 * Resets per-page milestone caches on route transition.
 */
export function resetPageScrollTracking(): void {
  trackedScrollMilestones.clear();
  trackedSectionImpressions.clear();
}

// ============================================================================
// 5. Reliability, Broken Links & Error Tracking
// ============================================================================

/**
 * Tracks 404 / broken link redirect interception.
 */
export function track404Redirect(attemptedPath: string, referrer: string = ''): void {
  trackEvent('page_not_found_redirect', {
    attempted_path: attemptedPath,
    referrer: referrer || document.referrer || '(none)',
  });
}

/**
 * Tracks unhandled JavaScript exceptions.
 */
export function trackJsError(
  message: string,
  source?: string,
  lineno?: number,
  colno?: number,
  componentName?: string
): void {
  trackEvent('javascript_error', {
    error_message: message.slice(0, 200),
    source_file: source,
    line_number: lineno,
    column_number: colno,
    component_name: componentName,
  });
}

/**
 * Tracks image or asset load failure.
 */
export function trackAssetError(assetName: string, assetType: string = 'image', url?: string): void {
  trackEvent('asset_load_failure', {
    asset_name: assetName,
    asset_type: assetType,
    asset_url: url,
  });
}

// ============================================================================
// 6. Native Core Web Vitals (CWV)
// ============================================================================

/**
 * Tracks a Core Web Vital metric.
 */
export function trackWebVital(metricName: string, value: number, rating?: 'good' | 'needs-improvement' | 'poor'): void {
  trackEvent('web_vital', {
    metric_name: metricName,
    value: Math.round(value),
    rating: rating || 'unknown',
  });
}

// ============================================================================
// 7. Global Listeners Initializer (Client Only)
// ============================================================================

let listenersInitialized = false;

export function initGlobalAnalytics(): void {
  if (!isClient || listenersInitialized) return;
  listenersInitialized = true;

  // Stash initial attribution
  getSessionAttribution();

  // 1. Global Clipboard Copy Listener
  document.addEventListener('copy', () => {
    try {
      const selection = window.getSelection()?.toString() || '';
      if (selection.trim().length > 0) {
        trackCopyAction(selection);
      }
    } catch (_) {}
  });

  // 2. Global JavaScript Error Listeners
  window.addEventListener('error', (event) => {
    try {
      trackJsError(event.message, event.filename, event.lineno, event.colno);
    } catch (_) {}
  });

  window.addEventListener('unhandledrejection', (event) => {
    try {
      const reason = event.reason;
      const msg = typeof reason === 'string' ? reason : reason?.message || 'Unhandled Promise Rejection';
      trackJsError(msg);
    } catch (_) {}
  });

  // 3. PWA Install Tracking
  window.addEventListener('beforeinstallprompt', () => {
    trackEvent('pwa_install_prompt_shown');
  });

  window.addEventListener('appinstalled', () => {
    trackEvent('pwa_installed');
  });

  // 4. Native Core Web Vitals Observer
  initWebVitalsObserver();

  // 5. Global Scroll Depth Listener
  initScrollDepthTracker();
}

/**
 * Initializes a native PerformanceObserver for CWV (LCP, CLS, FID/INP, FCP).
 */
function initWebVitalsObserver(): void {
  if (!isClient || typeof PerformanceObserver === 'undefined') return;

  try {
    // LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      if (lastEntry) {
        const lcp = lastEntry.renderTime || lastEntry.loadTime || lastEntry.startTime;
        const rating = lcp < 2500 ? 'good' : lcp < 4000 ? 'needs-improvement' : 'poor';
        trackWebVital('LCP', lcp, rating);
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as any[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });

    // Send CLS when user leaves or hides page
    window.addEventListener(
      'visibilitychange',
      () => {
        if (document.visibilityState === 'hidden') {
          const rating = clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor';
          trackWebVital('CLS', Number((clsValue * 1000).toFixed(0)), rating);
        }
      },
      { once: true }
    );

    // FCP (First Contentful Paint)
    const paintObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          const fcp = entry.startTime;
          const rating = fcp < 1800 ? 'good' : fcp < 3000 ? 'needs-improvement' : 'poor';
          trackWebVital('FCP', fcp, rating);
        }
      }
    });
    paintObserver.observe({ type: 'paint', buffered: true });
  } catch (_) {
    // Older browsers that do not support certain performance types gracefully skip
  }
}

/**
 * Passive Scroll Depth Milestone Tracker.
 */
function initScrollDepthTracker(): void {
  if (!isClient) return;

  let ticking = false;
  const milestones = [25, 50, 75, 90, 100];

  const checkScroll = () => {
    const scrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;

    const percent = Math.min(100, Math.round((scrollY / totalHeight) * 100));
    const path = window.location.pathname;

    for (const milestone of milestones) {
      if (percent >= milestone) {
        trackScrollDepth(milestone, path);
      }
    }
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
}
