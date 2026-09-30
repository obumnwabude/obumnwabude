<script setup lang="ts">
import ProjectOrEvent from '@/components/ProjectOrEvent.vue';
import TimelineScroller from '@/components/TimelineScroller.vue';
import { community } from '@/content/community';
import { LINKS } from '@/content/links';
import { trackCommunityIntroLinkClick } from '@/utils/analytics';

const timelineCommunity = community.map((contribution, index) => ({
  id: index,
  date: contribution.date,
}));
</script>

<template>
  <h1 page-heading>CONTRIBUTING TO COMMUNITY</h1>
  <p page-intro>
    I actively volunteer in tech communities in my locality. I am
    <a
      :href="LINKS.gde"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackCommunityIntroLinkClick('Google Developer Expert', LINKS.gde)"
      >Google Developer Expert (GDE)</a
    >
    in
    <a
      :href="LINKS.gdev"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackCommunityIntroLinkClick('GDE Profile (Cloud AI & Dart-Flutter)', LINKS.gdev)"
      >Cloud AI & Dart-Flutter</a
    >. At
    <a
      :href="LINKS.gdg"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackCommunityIntroLinkClick('GDG', LINKS.gdg)"
      >Google Developer Groups (GDG)</a
    >
    Abakaliki, I assist in event organization, mentor beginner members and help them in their tech journey.
    <br />
    <br />
    At my school:
    <a
      :href="LINKS.funai"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackCommunityIntroLinkClick('AE-FUNAI', LINKS.funai)"
      >Alex Ekwueme Federal University (AE-FUNAI)</a
    >, I had served as the pioneer
    <a
      :href="LINKS.gdsc"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackCommunityIntroLinkClick('GDSC Pioneer Lead', LINKS.gdsc)"
      >Google Developer Student Clubs (GDSC, 2020/21)</a
    >
    lead. I was also the pioneer
    <a
      :href="LINKS.genesys"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackCommunityIntroLinkClick('Genesys Hub', LINKS.genesys)"
      >Genesys</a
    >
    Campus Club Ambassador (same year) and a
    <a
      :href="LINKS.mlsa"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackCommunityIntroLinkClick('MLSA', LINKS.mlsa)"
      >Microsoft Learn Student Ambassador (MLSA, much later)</a
    >
    . While holding these positions, I organized events for my local student community.
    <br />
    <br />
    I also speak at tech events. I've spoken on
    <a
      :href="LINKS.flutter"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackCommunityIntroLinkClick('Flutter Dev', LINKS.flutter)"
      >Flutter</a
    >
    on several occasions. Sometimes, I'm a panelist. I also was once a Trainer on the
    <a
      :href="LINKS.gdsa"
      rel="noopener noreferrer"
      target="_blank"
      underline
      @click="() => trackCommunityIntroLinkClick('Google Digital Skills for Africa', LINKS.gdsa)"
      >Google Digital Skills for Africa</a
    >
    program. Across these sessions, I have acquired great public speaking experience and have addressed multiple
    audiences.
    <br />
    <br />
    In recent years the work has landed at the #BuildwithAI workshop series across Nigerian cities and on the 2024 and
    2025 DevFest circuit (Nsukka, Abuja, Owerri, Kaduna, Onitsha, and beyond), alongside keynotes for Women Techmakers
    and university outreach sessions on AI, ethics, and career.
    <br />
    <br />
    Following are community engagements that I kept track of.
  </p>
  <div page-content>
    <div v-for="(contribution, index) of community" :key="index" :id="`timeline-item-${index}`" class="timeline-item">
      <ProjectOrEvent :content="contribution" />
    </div>
  </div>

  <TimelineScroller :items="timelineCommunity" />
</template>

<style scoped>
.timeline-item {
  scroll-margin-top: 6rem;
}
</style>
