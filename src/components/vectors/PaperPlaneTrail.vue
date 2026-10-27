<script setup lang="ts">
// A paper plane gliding in on a looping dashed trail, for the "let's work
// together" card. Decorative only.
</script>

<template>
  <svg class="paper-plane" viewBox="0 0 160 96" aria-hidden="true" focusable="false">
    <path class="trail" d="M6 88 C 30 88, 34 52, 58 56 S 80 82, 92 62 S 104 30, 124 26" />
    <g class="plane">
      <!-- Plane points up-right, nose at (150, 14) -->
      <path class="wing" d="M150 14 L118 22 L128 30 Z" />
      <path class="body" d="M150 14 L128 30 L132 44 Z" />
      <path class="fold" d="M150 14 L128 30" />
    </g>
  </svg>
</template>

<style scoped>
.paper-plane {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.trail {
  fill: none;
  stroke: rgb(from var(--primary) r g b / 45%);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-dasharray: 2 6;
  animation: plane-trail 2.4s linear infinite;
}

.plane {
  transform-box: fill-box;
  transform-origin: 30% 70%;
  animation: plane-glide 4s ease-in-out infinite;
}

.wing {
  fill: rgb(from var(--primary) r g b / 22%);
  stroke: var(--primary);
  stroke-width: 1.4;
  stroke-linejoin: round;
}

.body {
  fill: var(--glass-tint, #fff);
  stroke: var(--primary);
  stroke-width: 1.4;
  stroke-linejoin: round;
}

.fold {
  stroke: var(--primary);
  stroke-width: 1.2;
  stroke-linecap: round;
}

/* Dashes flow toward the plane. */
@keyframes plane-trail {
  to {
    stroke-dashoffset: -16;
  }
}

@keyframes plane-glide {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(3px, -5px) rotate(-4deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .trail,
  .plane {
    animation: none;
  }
}
</style>
