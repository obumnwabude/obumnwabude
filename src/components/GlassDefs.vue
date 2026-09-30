<script setup lang="ts">
// GlassDefs.vue — SVG filters for optical displacement and refraction
</script>

<template>
  <svg
    aria-hidden="true"
    width="0"
    height="0"
    style="position: absolute; width: 0; height: 0; overflow: hidden; pointer-events: none;"
  >
    <defs>
      <!-- Liquid Glass Edge Refraction Filter -->
      <filter id="glass-displace" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.008 0.012"
          numOctaves="2"
          seed="7"
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="1.5" result="softNoise" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softNoise"
          scale="22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
</template>
