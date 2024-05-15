<script setup lang="ts">
import IconRight from '@/icons/IconRight.vue';
const article = {
  title: 'How to structure any booking/reservation system with Firebase',
  date: { month: 9, year: 2023 },
  description: 'Check out this one other thing that you can do with Firebase.',
  image: { alt: '', name: 'firebase-booking' },
  link: 'https://stories.obumnwabude.com/how-to-structure-any-booking-reservation-system-with-firebase-e7f1774e848e',
  publishedOn: 'Medium',
};
const months = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
</script>

<template>
  <h2>ARTICLES</h2>
  <p intro>
    I write articles on various topics. I write about mobile app development
    with Flutter, about Tech Communities, and other tech-related topics.
    <br /><br />
    Here are articles I've written over the years. They got published in great
    blogs like
    <a
      href="https://www.css-tricks.com"
      rel="noopener noreferrer"
      target="_blank"
      >CSS-Tricks</a
    >,
    <a
      href="https://www.freeCodeCamp.org"
      rel="noopener noreferrer"
      target="_blank"
      >freeCodeCamp</a
    >,
    <a href="https://www.sweetcode.io" rel="noopener noreferrer" target="_blank"
      >Sweetcode</a
    >, among others.
  </p>
  <div articles>
    <div article>
      <img
        :src="`/assets/images/${article.image.name}.jpg`"
        :alt="article.image.alt"
      />
      <div content>
        <p date>{{ months[article.date.month] }} {{ article.date.year }}</p>
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
        <div bottom>
          <p>
            Published On: <span published-on>{{ article.publishedOn }}</span>
          </p>
          <button icon><IconRight /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1rem;
}

[intro] {
  margin-bottom: 2rem;
  max-width: 768px;
}

[article] {
  border: 10px solid rgba(var(--text), 0.3);
  border-radius: 8px;
}

[article] img {
  width: 100%;
}

[date] {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

[article] h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

[article] [bottom] {
  display: flex;
  justify-content: space-between;
}

[published-on] {
  color: var(--primary);
}

[icon] {
  background: none;
  border: none;
  outline: none;
  padding: 0.25rem;
}

@media (max-width: 511.98px) {
  [article] {
  }
}
</style>
