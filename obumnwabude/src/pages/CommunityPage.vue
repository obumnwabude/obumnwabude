<script setup lang="ts">
import Project from '@/components/Project.vue';
import { community } from '@/content/community';
</script>

<template>
  <h2 page-heading>CONTRIBUTING TO <span primary>COMMUNITY</span></h2>
  <p page-intro>
    I actively volunteer in tech communities in my locality. I am a volunteer at
    <a
      href="https://developers.google.com/community/gdg"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Google Developer Groups</a
    >
    (GDG) Abakaliki. I am also a
    <a
      href="https://mvp.microsoft.com/studentambassadors"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Microsoft Learn Student Ambassador</a
    >
    (MLSA) in
    <a
      href="https://funai.edu.ng/"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Alex Ekwueme Federal University</a
    >. In addition, I was the first
    <a
      href="https://developers.google.com/community/gdsc"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Google Developer Students Club</a
    >
    (GDSC) lead and also the first
    <a
      href="https://www.genesystechhub.com"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >Genesys</a
    >
    Ambassador there too.
    <br />
    <br />
    In these roles, I organize events. In some, I just assist in event
    organization. In the communities, I mentor beginner members and help them in
    their tech journey.
    <br />
    <br />
    Furthermore, I speak at tech events. I've spoken on
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
