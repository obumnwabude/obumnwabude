<script setup lang="ts">
// Decorative orbits and sparkles around the hero photo. Pure SVG + CSS, so it
// pre-renders fine and stops moving when the visitor prefers reduced motion.
</script>

<template>
  <svg class="hero-orbits" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <!-- Outer dotted ring, slow turn -->
    <g class="orbit orbit-outer">
      <circle cx="100" cy="100" r="96" class="ring ring-dotted" />
      <circle cx="100" cy="4" r="2.4" class="planet planet-cyan" />
    </g>
    <!-- Inner thin ring, opposite direction -->
    <g class="orbit orbit-inner">
      <circle cx="100" cy="100" r="88" class="ring ring-thin" />
      <circle cx="12" cy="100" r="1.8" class="planet planet-primary" />
      <circle cx="188" cy="100" r="1.3" class="planet planet-accent" />
    </g>

    <!-- Sparkles (4-point stars) -->
    <path class="sparkle s1" d="M14 30 Q16 36 22 38 Q16 40 14 46 Q12 40 6 38 Q12 36 14 30Z" />
    <path
      class="sparkle s2"
      d="M184 150 Q185.5 154.5 190 156 Q185.5 157.5 184 162 Q182.5 157.5 178 156 Q182.5 154.5 184 150Z"
    />
    <path class="sparkle s3" d="M178 14 Q179 17 182 18 Q179 19 178 22 Q177 19 174 18 Q177 17 178 14Z" />
    <path class="sparkle s4" d="M24 172 Q25 175 28 176 Q25 177 24 180 Q23 177 20 176 Q23 175 24 172Z" />
  </svg>
</template>

<style scoped>
.hero-orbits {
  position: absolute;
  inset: -13%;
  width: 126%;
  height: 126%;
  z-index: 0;
  pointer-events: none;
  overflow: visible;
}

.orbit {
  transform-box: view-box;
  transform-origin: 50% 50%;
}

.orbit-outer {
  animation: orbit-spin 70s linear infinite;
}

.orbit-inner {
  animation: orbit-spin 42s linear infinite reverse;
}

.ring {
  fill: none;
  stroke: var(--primary);
}

.ring-dotted {
  stroke-width: 0.6;
  stroke-dasharray: 0.6 3.4;
  stroke-linecap: round;
  opacity: 0.45;
}

.ring-thin {
  stroke-width: 0.35;
  opacity: 0.22;
}

.planet-primary {
  fill: var(--primary);
}

.planet-cyan {
  fill: var(--accent-cyan);
  filter: drop-shadow(0 0 2px rgb(from var(--accent-cyan) r g b / 70%));
}

.planet-accent {
  fill: var(--accent-2);
}

.sparkle {
  fill: var(--primary);
  transform-box: fill-box;
  transform-origin: center;
  animation: sparkle-twinkle 3.6s ease-in-out infinite;
}

.s2 {
  fill: var(--accent-2);
  animation-delay: 1.2s;
}

.s3 {
  fill: var(--accent-cyan);
  animation-delay: 2.1s;
}

.s4 {
  animation-delay: 0.6s;
}

@keyframes orbit-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes sparkle-twinkle {
  0%,
  100% {
    opacity: 0.25;
    transform: scale(0.6) rotate(0deg);
  }
  50% {
    opacity: 0.9;
    transform: scale(1) rotate(20deg);
  }
}

/* On phones the photo spans the full width, so the rings would only peek in at the edges. */
@media (max-width: 767.98px) {
  .hero-orbits {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbit,
  .sparkle {
    animation: none;
  }

  .sparkle {
    opacity: 0.6;
  }
}
</style>
