<script setup lang="ts">
import Project from '@/components/Project.vue';
import { community } from '@/content/community';
</script>

<template>
  <h2 page-heading>CONTRIBUTING TO <span primary>COMMUNITY</span></h2>
  <p page-intro>
    I actively volunteer in tech communities in my locality. I am
    <a
      href="https://developers.google.com/community/experts"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Google Developer Expert (GDE)</a
    >
    in the
    <a
      href="https://g.dev/obumnwabude"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Dart & Flutter</a
    >
    categories. At
    <a
      href="https://developers.google.com/community/gdg"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Google Developer Groups (GDG)</a
    >
    Abakaliki, I assist in event organization, mentor beginner members and help
    them in their tech journey.
    <br />
    <br />
    I am a
    <a
      href="https://mvp.microsoft.com/studentambassadors"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Microsoft Learn Student Ambassador (MLSA)</a
    >
    in my school:
    <a
      href="https://funai.edu.ng"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Alex Ekwueme Federal University (AE-FUNAI)</a
    >. Also, I was once the
    <a
      href="https://genesystechhub.com"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Genesys</a
    >
    Campus Club Ambassador for my school. In addition, in 2020/21, I was the
    <a
      href="https://developers.google.com/community/gdsc"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Google Developer Student Clubs (GDSC)</a
    >
    lead in my school. While holding these positions, I organized events for my
    local student community.
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
