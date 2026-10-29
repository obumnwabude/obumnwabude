<script setup lang="ts">
import Article from '@/components/Article.vue';
import BookCall from '@/components/BookCall.vue';
import ContactMe from '@/components/ContactMe.vue';
import ImpactMetrics from '@/components/ImpactMetrics.vue';
import ProjectOrEvent from '@/components/ProjectOrEvent.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import TechMatrix from '@/components/TechMatrix.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import WorkWithMeSection from '@/components/WorkWithMeSection.vue';
import HeroOrbits from '@/components/vectors/HeroOrbits.vue';
import JourneyPath from '@/components/vectors/JourneyPath.vue';
import PaperPlaneTrail from '@/components/vectors/PaperPlaneTrail.vue';
import { articles } from '@/content/articles';
import { community } from '@/content/community';
import { featuredProjects } from '@/content/projects';
import IconFlower2P from '@/icons/IconFlower2P.vue';
import IconFlower6P from '@/icons/IconFlower6P.vue';
import IconRight from '@/icons/IconRight.vue';
import { banners } from '@/types';
import { trackExploreMoreClick, trackGdeBadgeInteraction, trackNavClick, trackSectionView } from '@/utils/analytics';
import { onMounted, ref } from 'vue';

const years = new Date().getFullYear() - 2018;

// On phones the GDE badge shows a short label; tapping it reveals the full title.
const badgeExpanded = ref(false);
const toggleBadge = () => {
  badgeExpanded.value = !badgeExpanded.value;
  if (badgeExpanded.value) trackGdeBadgeInteraction();
};

onMounted(() => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

  const sectionSelectors: { id: string; selector: string }[] = [
    { id: 'hero', selector: '[intro]' },
    { id: 'skills_banner', selector: '[banner]' },
    { id: 'impact_metrics', selector: '.metrics-container' },
    { id: 'work_with_me', selector: '[data-section="work_with_me"]' },
    { id: 'core_capabilities', selector: '[data-section="core_capabilities"]' },
    { id: 'latest_projects', selector: '[data-section="latest_projects"]' },
    { id: 'latest_articles', selector: '[data-section="latest_articles"]' },
    { id: 'community_talks', selector: '[data-section="community_talks"]' },
    { id: 'testimonials', selector: '[data-section="testimonials"]' },
    { id: 'services_collaboration', selector: '[data-section="services_collaboration"]' },
    { id: 'closing_cta', selector: '[closing]' },
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const match = (entry.target as any).__sectionId;
          if (match) {
            trackSectionView(match, '/');
          }
        }
      }
    },
    { threshold: 0.25 }
  );

  sectionSelectors.forEach(({ id, selector }) => {
    const el = document.querySelector(selector);
    if (el) {
      (el as any).__sectionId = id;
      observer.observe(el);
    }
  });
});
</script>

<template>
  <div intro>
    <div intro-content v-reveal>
      <div class="flower-icon-wrap">
        <IconFlower2P />
      </div>
      <h1 name>OBUMUNEME NWABUDE</h1>
      <h2 tagline>Full-Stack AI, Blockchain, Cloud, Mobile, and Web Developer.</h2>
      <p intro-bio>
        I have been programming for {{ years }} years and counting. I've worked with great teams and have built
        one-of-a-kind solutions. I'm a pro in Flutter, Cloud, AI, everything web dev, and web3 (Solana & Solidity). I am
        also a Google Developer Expert (GDE) in Cloud AI & Dart-Flutter.
      </p>
      <div contact class="hero-cta-group">
        <router-link
          to="/projects"
          outlined
          class="hero-cta hero-explore-cta"
          @click="() => trackNavClick('Explore My Work', 'hero')"
          >Explore My Work</router-link
        >
        <ContactMe label="Get In Touch" color="var(--primary)" location="hero" class="hero-cta hero-contact-cta" />
        <BookCall label="Book a call" location="hero" class="hero-cta hero-book-cta" />
      </div>
      <p class="hero-offer-line">
        <span class="live-pulse-dot" aria-hidden="true"></span>
        <span
          >Open for
          <router-link to="/work-with-me" @click="() => trackNavClick('Hero offer line', 'hero')"
            >calls, code reviews and AI-built app rescue</router-link
          ></span
        >
      </p>
    </div>

    <div intro-avatar v-reveal="{ delay: 120 }">
      <div class="avatar-aura" aria-hidden="true"></div>
      <HeroOrbits />
      <div class="avatar-frame">
        <img
          src="/assets/obum-384.webp"
          srcset="/assets/obum-384.webp 384w, /assets/obum-768.webp 768w"
          sizes="384px"
          alt="Obumuneme Nwabude"
          width="384"
          height="384"
          fetchpriority="high"
          class="avatar-img"
        />
        <button
          type="button"
          class="gde-glass-badge glass-surface glass-frost"
          :class="{ 'is-expanded': badgeExpanded }"
          :aria-expanded="badgeExpanded"
          aria-label="Google Developer Expert (GDE) in Cloud AI and Dart-Flutter"
          @mouseenter.once="trackGdeBadgeInteraction"
          @click="toggleBadge"
        >
          <span class="live-pulse-dot" aria-hidden="true"></span>
          <span class="badge-text badge-full" aria-hidden="true"
            >Google Developer Expert (GDE) • Cloud AI & Dart-Flutter</span
          >
          <span class="badge-text badge-short" aria-hidden="true">GDE • Cloud AI & Dart-Flutter</span>
        </button>
      </div>
    </div>
  </div>

  <div banner aria-label="Skill Highlights">
    <div class="banner-inner">
      <span flower><IconFlower6P color="var(--primary)" :size="22" :spin="true" :glow="true" /></span>
      <template v-for="banner of banners" :key="banner">
        <span text>{{ banner }}</span>
        <span flower><IconFlower6P color="var(--primary)" :size="22" :spin="true" :glow="true" /></span>
      </template>
    </div>
  </div>

  <!-- Key Metrics & Credibility Capsule Bar, then the Learn → Mentor path.
       Wrapped in one div so the sections below keep their odd/even heading styles. -->
  <div>
    <ImpactMetrics />
    <JourneyPath v-reveal />
  </div>

  <!-- Paid offers: calls, code review, AI-built app rescue -->
  <section v-reveal id="work-with-me" data-section="work_with_me">
    <h2>WORK WITH ME</h2>
    <WorkWithMeSection />
  </section>

  <!-- Core Technical Capabilities Matrix -->
  <section v-reveal data-section="core_capabilities">
    <h2>CORE CAPABILITIES</h2>
    <TechMatrix />
  </section>

  <section v-reveal data-section="latest_projects">
    <h2>LATEST PROJECTS</h2>
    <ProjectOrEvent
      :content="project"
      :featured="index === 0"
      v-for="(project, index) of featuredProjects"
      :key="project.title"
    />
    <div more class="glass-surface glass-frost glass-more-box">
      <span flower><IconFlower6P color="var(--primary)" :size="28" :spin="true" :glow="true" /></span>
      <p>Of Course, There Are More.</p>
      <router-link to="/projects" outlined class="more-cta-btn" @click="() => trackExploreMoreClick('projects')">
        <span>See All Projects</span>
        <IconRight class="more-arrow-icon" />
      </router-link>
    </div>
  </section>

  <section v-reveal data-section="latest_articles">
    <h2>LATEST ARTICLES</h2>
    <Article :article="article" v-for="article of articles.slice(0, 5)" :key="article.title" />
    <div more class="glass-surface glass-frost glass-more-box">
      <span flower><IconFlower6P color="var(--primary)" :size="28" :spin="true" :glow="true" /></span>
      <p>Of Course, There Are More.</p>
      <router-link to="/articles" outlined class="more-cta-btn" @click="() => trackExploreMoreClick('articles')">
        <span>See All Articles</span>
        <IconRight class="more-arrow-icon" />
      </router-link>
    </div>
  </section>

  <section v-reveal data-section="community_talks">
    <h2>COMMUNITY & TALKS</h2>
    <ProjectOrEvent :content="contribution" v-for="contribution of community.slice(0, 5)" :key="contribution.title" />
    <div more class="glass-surface glass-frost glass-more-box">
      <span leading-flower><IconFlower6P color="var(--primary)" :size="28" :spin="true" :glow="true" /></span>
      <p>Of Course, There Are More.</p>
      <router-link to="/community" outlined class="more-cta-btn" @click="() => trackExploreMoreClick('community')">
        <span>See All Events</span>
        <IconRight class="more-arrow-icon" />
      </router-link>
    </div>
  </section>

  <!-- Social proof: LinkedIn recommendations -->
  <section v-reveal data-section="testimonials">
    <h2>WHAT PEOPLE SAY</h2>
    <TestimonialsSection :featured-only="true" location="home" />
  </section>

  <!-- Collaboration & Services -->
  <section v-reveal id="services" data-section="services_collaboration">
    <h2>SERVICES & COLLABORATION</h2>
    <p class="section-lead">Need more than a call or a review? I build products end to end. Let's start with a call.</p>
    <ServicesSection />
  </section>

  <div closing v-reveal>
    <div class="closing-card glass-surface glass-frost">
      <div class="closing-plane"><PaperPlaneTrail /></div>
      <span leading-flower><IconFlower6P color="var(--primary)" :size="32" :spin="true" :glow="true" /></span>
      <h2>LET'S WORK TOGETHER</h2>
      <p text>
        Have a bug, an idea or an app that needs a second pair of eyes? Book a call and let's look at it together.
      </p>
      <!-- A div, not a <p>: ContactMe renders block elements, which a <p> can't contain (it broke hydration). -->
      <div contact>
        <ContactMe color="var(--primary)" label="Contact Me" location="closing_cta" />
        <BookCall label="Book a call" location="closing_cta" />
      </div>
    </div>
  </div>
</template>

<style scoped>
[intro] {
  padding-bottom: 5rem;
  align-items: center;
}

.flower-icon-wrap {
  margin-bottom: 0.75rem;
  display: inline-block;
  color: var(--primary);
}

[intro] [name] {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  color: var(--text);
  opacity: 0.9;
}

[intro] [tagline] {
  font-size: 2.25rem;
  font-weight: 650;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

[intro-bio] {
  font-size: 1.1rem;
  line-height: 1.65;
  color: var(--text);
  opacity: 0.92;
  margin-bottom: 2rem;
  max-width: 600px;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;
}

/* Hero buttons share one size so the row reads as a set. */
.hero-explore-cta,
.hero-book-cta,
.hero-contact-cta :deep(button) {
  height: 2.75rem;
  padding: 0 1.4rem;
  font-size: 0.925rem;
}

.hero-contact-cta :deep(button) {
  width: 100%;
}

/* Match the two outlined hero buttons. */
.hero-explore-cta {
  border-color: var(--primary);
}

@media (max-width: 511.98px) {
  /* Phones: Explore + Get In Touch share the first row, Book a call fills the second. */
  .hero-cta-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .hero-cta {
    width: 100%;
  }

  .hero-explore-cta,
  .hero-book-cta,
  .hero-contact-cta :deep(button) {
    width: 100%;
    padding: 0 0.75rem;
  }

  .hero-book-cta {
    grid-column: 1 / -1;
  }
}

.hero-offer-line {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  margin-top: 1.1rem;
  font-size: 0.9rem;
  opacity: 0.85;
}

.hero-offer-line .live-pulse-dot {
  flex-shrink: 0;
  margin-top: 0.45rem;
}

.hero-offer-line a {
  color: var(--primary);
  font-weight: 550;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.section-lead {
  font-size: 1.05rem;
  line-height: 1.65;
  margin: -1rem 0 2.25rem;
  opacity: 0.9;
}

/* Avatar Aura & Frame */
[intro-avatar] {
  position: relative;
  display: flex;
  justify-content: center;
}

.avatar-aura {
  position: absolute;
  inset: -6px;
  border-radius: 34px;
  background: radial-gradient(circle, rgb(from var(--primary) r g b / 16%) 0%, transparent 70%);
  filter: blur(18px);
  opacity: 0.6;
  z-index: 0;
  pointer-events: none;
}

body.dark .avatar-aura {
  opacity: 0.4;
  background: radial-gradient(circle, rgb(from var(--primary) r g b / 14%) 0%, transparent 70%);
}

.avatar-frame {
  position: relative;
  width: 100%;
  max-width: 384px;
  z-index: 1;
  border-radius: 28px;
  overflow: visible;
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-glass);
}

body.dark .avatar-frame {
  box-shadow: var(--shadow-glass);
}

.avatar-img {
  width: 100%;
  max-width: 384px;
  height: auto;
  display: block;
  border-radius: 28px;
  object-fit: cover;
}

/* Floating GDE Credential Pill */
.gde-glass-badge {
  font: inherit;
  cursor: default;
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
  z-index: 3;
}

.live-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 10px #10b981;
  display: inline-block;
  animation: pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulseDot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.85);
  }
}

.badge-short {
  display: none;
}

.gde-glass-badge:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
}

.badge-text {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: 0.01em;
}

/* Marquee Banner Ribbon */
@keyframes bannerScroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-2000px);
  }
}

[banner] {
  background: var(--glass-tint);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  color: var(--primary);
  font-size: 1.2rem;
  font-weight: 550;
  letter-spacing: 0.04em;
  margin: 0 -1.5rem 4.5rem;
  padding: 1.1rem 1rem 1.1rem 8rem;
  overflow-x: hidden;
  white-space: nowrap;
}

body.dark [banner] {
  box-shadow: var(--shadow-sm);
}

.banner-inner {
  align-items: center;
  animation: bannerScroll 24s linear infinite;
  display: flex;
}

[banner] [flower] {
  align-items: center;
  display: inline-flex;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  opacity: 0.9;
}

[banner] [flower] :deep(svg),
[leading-flower] :deep(svg) {
  filter: drop-shadow(0 0 6px rgb(from var(--primary) r g b / 30%));
}

[banner] [flower]:first-of-type {
  margin-left: 0;
}

[banner] [flower]:last-of-type {
  margin-right: 0;
}

/* Sections */
section {
  padding-bottom: 8rem;
  scroll-margin-top: 5.5rem;
}

section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 2.75rem;
  color: var(--text);
}

section h2::after {
  background: var(--gradient-divider);
  content: '';
  display: block;
  height: 2px;
  border-radius: 2px;
}

/* More Box */
.glass-more-box {
  border-radius: 20px;
  padding: 2rem 1.5rem;
  max-width: 400px;
  margin: 2rem auto 0;
  text-align: center;
  box-shadow: var(--shadow-glass);
}

.glass-more-box p {
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  color: var(--text);
}

.more-cta-btn {
  cursor: pointer;
}

[leading-flower] {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 0.85rem;
}

[leading-flower]::before,
[leading-flower]::after {
  background-color: var(--glass-border);
  content: '';
  height: 1px;
  margin-right: 0.75rem;
  width: 4rem;
}

[leading-flower]::after {
  margin-right: 0;
  margin-left: 0.75rem;
}

/* Closing Block */
[closing] {
  padding-bottom: 5rem;
}

.closing-card {
  border-radius: 24px;
  padding: 3.5rem 2.5rem;
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  box-shadow: var(--shadow-glass);
}

.closing-card {
  position: relative;
}

.closing-plane {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 120px;
  pointer-events: none;
}

.closing-card h2 {
  font-size: 1.85rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
  color: var(--text);
}

.closing-card [text] {
  font-size: 1.2rem;
  line-height: 1.65;
  margin: 0 auto 2rem;
  max-width: 540px;
  color: var(--text);
  opacity: 0.9;
}

.closing-card [contact] {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

/* Responsive */
@media (max-width: 511.98px) {
  .closing-card {
    padding: 3rem 1.5rem;
  }

  .closing-plane {
    top: 0.75rem;
    right: 0.75rem;
    width: 72px;
    opacity: 0.7;
  }

  .gde-glass-badge {
    cursor: pointer;
    bottom: -14px;
    max-width: calc(100% - 1.5rem);
    padding: 0.4rem 0.85rem;
  }

  .gde-glass-badge .badge-text {
    font-size: 0.74rem;
  }

  .gde-glass-badge:not(.is-expanded) .badge-full {
    display: none;
  }

  .gde-glass-badge:not(.is-expanded) .badge-short {
    display: inline;
  }

  .gde-glass-badge.is-expanded {
    width: max-content;
    white-space: normal;
    text-align: left;
    border-radius: 16px;
  }

  section h2::after {
    margin-top: 1rem;
    width: 100%;
  }
}

@media (max-width: 767.98px) {
  section {
    padding-bottom: 5.5rem;
  }

  section h2 {
    margin-bottom: 2.25rem;
  }
}

@media (max-width: 767.98px) {
  [intro] {
    padding-bottom: 3.5rem;
  }

  .hero-offer-line {
    margin-bottom: 2.75rem;
  }

  [intro-avatar] {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    padding: 0 0.25rem;
  }
}

@media (min-width: 512px) {
  section h2 {
    align-items: center;
    display: flex;
  }

  section h2::after {
    flex-grow: 1;
  }

  section:nth-child(even) h2 {
    flex-direction: row-reverse;
  }

  section:nth-child(even) h2::after {
    margin-right: 1.5rem;
  }

  section:nth-child(odd) h2::after {
    margin-left: 1.5rem;
  }
}

@media (min-width: 768px) {
  [intro] {
    display: flex;
    gap: 3rem;
  }

  [intro-content] {
    flex: 1;
  }

  [intro-avatar] {
    flex-shrink: 0;
  }
}

@media (min-width: 1024px) {
  [banner] {
    margin-left: -5rem;
    margin-right: -5rem;
  }

  [intro] [tagline] {
    font-size: 2.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .avatar-aura {
    animation: none !important;
  }
  .banner-inner {
    animation: none !important;
  }
}
</style>
