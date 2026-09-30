<script setup lang="ts">
import Article from '@/components/Article.vue';
import ContactMe from '@/components/ContactMe.vue';
import ImpactMetrics from '@/components/ImpactMetrics.vue';
import Project from '@/components/Project.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import TechMatrix from '@/components/TechMatrix.vue';
import { articles } from '@/content/articles';
import { community } from '@/content/community';
import { featuredProjects } from '@/content/projects';
import IconFlower2P from '@/icons/IconFlower2P.vue';
import IconFlower6P from '@/icons/IconFlower6P.vue';
import { banners } from '@/types';

const years = new Date().getFullYear() - 2018;
</script>

<template>
  <div intro>
    <div intro-content v-reveal>
      <div class="flower-icon-wrap">
        <IconFlower2P />
      </div>
      <h1 name>OBUMUNEME NWABUDE</h1>
      <h2 tagline>
        Full-Stack AI, Blockchain, Cloud, Mobile, and Web Developer.
      </h2>
      <p intro-bio>
        I have been programming for {{ years }} years and counting. I've worked
        with great teams and have built one-of-a-kind solutions. I'm a pro in
        Flutter, Cloud, AI, everything web dev, and web3 (Solana & Solidity). I am
        also a Google Developer Expert (GDE) in Cloud AI & Dart-Flutter.
      </p>
      <p contact><ContactMe color="var(--primary)" /></p>
    </div>

    <div intro-avatar v-reveal="{ delay: 120 }">
      <div class="avatar-aura" aria-hidden="true"></div>
      <div class="avatar-frame">
        <img
          src="/assets/obum.webp"
          alt="Obumuneme Nwabude"
          width="384"
          height="384"
          fetchpriority="high"
          class="avatar-img"
        />
        <div class="gde-glass-badge glass-surface glass-frost">
          <span class="live-pulse-dot" aria-hidden="true"></span>
          <span class="badge-text">Google Developer Expert (GDE) • Cloud AI & Flutter</span>
        </div>
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

  <!-- Key Metrics & Credibility Capsule Bar -->
  <ImpactMetrics />

  <!-- Core Technical Capabilities Matrix -->
  <section v-reveal>
    <h2>CORE CAPABILITIES</h2>
    <TechMatrix />
  </section>

  <section v-reveal>
    <h2>LATEST PROJECTS</h2>
    <Project
      :project="project"
      :featured="index === 0"
      v-for="(project, index) of featuredProjects"
      :key="project.title"
    />
    <div more class="glass-surface glass-frost glass-more-box">
      <span flower><IconFlower6P color="var(--primary)" :size="28" :spin="true" :glow="true" /></span>
      <p>Of Course, There Are More.</p>
      <router-link to="/projects" outlined class="more-cta-btn">... See All Projects</router-link>
    </div>
  </section>

  <section v-reveal>
    <h2>LATEST ARTICLES</h2>
    <Article
      :article="article"
      v-for="article of articles.slice(0, 3)"
      :key="article.title"
    />
    <div more class="glass-surface glass-frost glass-more-box">
      <span flower><IconFlower6P color="var(--primary)" :size="28" :spin="true" :glow="true" /></span>
      <p>Of Course, There Are More.</p>
      <router-link to="/articles" outlined class="more-cta-btn">... See All Articles</router-link>
    </div>
  </section>

  <section v-reveal>
    <h2>COMMUNITY & TALKS</h2>
    <Project
      :project="contribution"
      v-for="contribution of community.slice(0, 3)"
      :key="contribution.title"
    />
    <div more class="glass-surface glass-frost glass-more-box">
      <span leading-flower><IconFlower6P color="var(--primary)" :size="28" :spin="true" :glow="true" /></span>
      <p>Of Course, There Are More.</p>
      <router-link to="/community" outlined class="more-cta-btn">... See All Events</router-link>
    </div>
  </section>

  <!-- Collaboration & Services -->
  <section v-reveal>
    <h2>SERVICES & COLLABORATION</h2>
    <ServicesSection />
  </section>

  <div closing v-reveal>
    <div class="closing-card glass-surface glass-frost">
      <span leading-flower><IconFlower6P color="var(--primary)" :size="32" :spin="true" :glow="true" /></span>
      <h2>LET'S WORK TOGETHER</h2>
      <p text>
        "Coming together is a beginning. Keeping together is progress. Working
        together is success." ~ Henry Ford.
        <br />
        Let's work together to achieve success.
      </p>
      <p contact><ContactMe color="var(--primary)" /></p>
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
  opacity: 0.7;
  background: radial-gradient(circle, rgb(from var(--primary) r g b / 22%) 0%, transparent 70%);
}

.avatar-frame {
  position: relative;
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
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.85);
  }
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
  padding-bottom: 5.5rem;
}

section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 2.25rem;
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
  padding: 3rem 2rem;
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  box-shadow: var(--shadow-glass);
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
  justify-content: center;
}

/* Responsive */
@media (max-width: 511.98px) {
  .gde-glass-badge {
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;
    margin-top: 1rem;
    font-size: 0.72rem;
  }

  section h2::after {
    margin-top: 1rem;
    width: 100%;
  }
}

@media (max-width: 767.98px) {
  [intro] [contact] {
    margin-bottom: 3.5rem;
  }

  [intro-avatar] {
    margin-top: 1.25rem;
    margin-bottom: 2rem;
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
