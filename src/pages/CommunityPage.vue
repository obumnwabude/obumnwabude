<script setup lang="ts">
import Project from '@/components/Project.vue';
import { community } from '@/content/community';
</script>

<template>
  <h2 page-heading>CONTRIBUTING TO <span primary>COMMUNITY</span></h2>
  <p page-intro>
    I actively volunteer in tech communities in my locality. At
    <a
      href="https://developers.google.com/community/gdg"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Google Developer Groups</a
    >
    (GDG) Abakaliki, I assist in event organization, mentor beginner members and
    help them in their tech journey.
    <br />
    <br />
    I also speak at tech events. I've spoken on
    <a
      href="https://flutter.dev"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Flutter</a
    >
    on several occasions. I also was once a Trainer on the
    <a
      href="https://blog.google/around-the-globe/google-africa/digitalskillsforafrica-over-500000-people-africa-trained/"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Google Digital Skills for Africa</a
    >
    program. Across these sessions, I have acquired great public speaking
    experience and have addressed multiple audiences.
    <br />
    <br />
    Following are community engagements that I kept track of.
  </p>
  <div page-content>
    <Project :project="contribution" v-for="contribution of community" />
  </div>
</template>
