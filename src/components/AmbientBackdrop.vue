<script setup lang="ts">
// AmbientBackdrop.vue — Kinetic ambient light canvas with micro-noise texture
// and floating specular glass bubbles for Liquid Glass 2.0.
</script>

<template>
  <div class="ambient-backdrop" aria-hidden="true">
    <!-- Base Atmospheric Gradient Wash -->
    <div class="ambient-wash-1"></div>
    <div class="ambient-wash-2"></div>

    <!-- Drifting Chromatic Orbs -->
    <div class="ambient-orb orb-primary"></div>
    <div class="ambient-orb orb-secondary"></div>
    <div class="ambient-orb orb-cyan"></div>

    <!-- Floating Specular Glass Bubbles -->
    <div class="glass-bubble bubble-1"></div>
    <div class="glass-bubble bubble-2"></div>
    <div class="glass-bubble bubble-3"></div>

    <!-- Anti-Banding Micro-Noise Overlay -->
    <svg class="ambient-noise" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <filter id="ambient-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#ambient-grain)" />
    </svg>
  </div>
</template>

<style scoped>
.ambient-backdrop {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -10;
  overflow: hidden;
  contain: strict;
  isolation: isolate;
  background-color: var(--app-bg);
  transition: background-color 0.4s ease;
}

/* Atmospheric Washes */
.ambient-wash-1 {
  position: absolute;
  top: -15%;
  left: -10%;
  width: 70vw;
  height: 70vh;
  background: radial-gradient(
    circle at center,
    rgb(from var(--primary) r g b / 8%) 0%,
    transparent 65%
  );
  filter: blur(80px);
}

.ambient-wash-2 {
  position: absolute;
  bottom: -20%;
  right: -10%;
  width: 75vw;
  height: 75vh;
  background: radial-gradient(
    circle at center,
    rgb(from var(--primary) r g b / 6%) 0%,
    transparent 65%
  );
  filter: blur(90px);
}

/* Drifting Chromatic Orbs */
.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.22;
  will-change: transform;
}

body.dark .ambient-orb {
  opacity: 0.18;
  filter: blur(110px);
}

.orb-primary {
  top: 10%;
  left: 15%;
  width: 440px;
  height: 440px;
  background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
  animation: orbDriftA 26s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

.orb-secondary {
  top: 45%;
  right: 12%;
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgb(from var(--primary) r g b / 70%) 0%, transparent 70%);
  animation: orbDriftB 22s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

.orb-cyan {
  bottom: 8%;
  left: 28%;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgb(from var(--primary) r g b / 50%) 0%, transparent 70%);
  animation: orbDriftC 32s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

@keyframes orbDriftA {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(140px, 90px) scale(1.15);
  }
  100% {
    transform: translate(-80px, 160px) scale(0.92);
  }
}

@keyframes orbDriftB {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-160px, -110px) scale(1.12);
  }
  100% {
    transform: translate(90px, 120px) scale(0.88);
  }
}

@keyframes orbDriftC {
  0% {
    transform: translate(0, 0) scale(0.95);
  }
  50% {
    transform: translate(110px, -130px) scale(1.18);
  }
  100% {
    transform: translate(-120px, 60px) scale(1.05);
  }
}

/* Floating Iridescent Glass Bubbles */
.glass-bubble {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(
    circle at 30% 28%,
    rgba(255, 255, 255, 0.42) 0%,
    rgba(255, 255, 255, 0.08) 32%,
    rgb(from var(--primary) r g b / 6%) 60%,
    transparent 85%
  );
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow:
    inset 2px 2px 6px rgba(255, 255, 255, 0.65),
    inset -2px -2px 8px rgb(from var(--primary) r g b / 16%),
    0 4px 16px rgb(from var(--primary) r g b / 8%);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  will-change: transform;
}

body.dark .glass-bubble {
  background: radial-gradient(
    circle at 30% 28%,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 255, 255, 0.04) 35%,
    rgb(from var(--primary) r g b / 8%) 65%,
    transparent 85%
  );
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow:
    inset 2px 2px 6px rgba(255, 255, 255, 0.35),
    inset -2px -2px 10px rgb(from var(--primary) r g b / 25%),
    0 4px 18px rgb(from var(--primary) r g b / 12%);
}

.bubble-1 {
  width: 90px;
  height: 90px;
  left: 8%;
  bottom: 25%;
  animation: bubbleFloat1 8.5s ease-in-out infinite alternate;
}

.bubble-2 {
  width: 140px;
  height: 140px;
  right: 14%;
  top: 22%;
  animation: bubbleFloat2 11.5s ease-in-out infinite alternate;
}

.bubble-3 {
  width: 65px;
  height: 65px;
  left: 48%;
  top: 55%;
  animation: bubbleFloat3 9.5s ease-in-out infinite alternate;
}

@keyframes bubbleFloat1 {
  0% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(-70px) translateX(25px) rotate(180deg) scale(1.05); }
  100% { transform: translateY(-130px) translateX(-15px) rotate(360deg) scale(0.96); }
}

@keyframes bubbleFloat2 {
  0% { transform: translateY(0) rotate(0deg) scale(0.96); }
  50% { transform: translateY(60px) translateX(-35px) rotate(-180deg) scale(1.06); }
  100% { transform: translateY(110px) translateX(20px) rotate(-360deg) scale(1); }
}

@keyframes bubbleFloat3 {
  0% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(-50px) translateX(-20px) rotate(120deg) scale(1.08); }
  100% { transform: translateY(-90px) translateX(30px) rotate(240deg) scale(0.95); }
}

/* Anti-Banding Micro-Noise */
.ambient-noise {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.025;
  mix-blend-mode: overlay;
  pointer-events: none;
}

body.dark .ambient-noise {
  opacity: 0.035;
}

@media (max-width: 767.98px) {
  .ambient-orb {
    filter: blur(60px);
    width: 280px !important;
    height: 280px !important;
  }
  .glass-bubble {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ambient-orb,
  .glass-bubble {
    animation: none !important;
  }
}
</style>
