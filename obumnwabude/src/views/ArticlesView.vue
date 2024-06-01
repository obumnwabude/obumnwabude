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
    with Flutter, about Tech Communities, web development, my stories, and
    anything worth sharing.
    <br /><br />
    Here are articles I've written over the years. I published them on my blogs.
    I have also been a guest author for blogs like
    <a
      href="https://www.css-tricks.com/author/obumnwabude"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >CSS-Tricks</a
    >
    and
    <a
      href="https://www.freeCodeCamp.org/news/author/obumnwabude"
      rel="noopener noreferrer"
      target="_blank"
      underline
      >freeCodeCamp</a
    >.
  </p>
  <div articles>
    <div article>
      <img
        :src="`/assets/images/${article.image.name}.jpg`"
        :alt="article.image.alt"
      />
      <div text>
        <p date>{{ months[article.date.month] }} {{ article.date.year }}</p>
        <h3>{{ article.title }}</h3>
        <p description>{{ article.description }}</p>
        <div bottom>
          <p published-on>
            Published On: <span primary>{{ article.publishedOn }}</span>
          </p>
          <a :href="article.link" target="_blank" rel="noopener noreferer">
            <button icon><IconRight /></button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 2rem;
  margin: 0 auto 1rem;
  max-width: 1024px;
}

[intro],
[articles] {
  margin: 0 auto 5rem;
  max-width: 1024px;
}

[article] {
  border: 1px solid rgb(from var(--text) r g b / 25%);
  border-radius: 8px;
  margin: 0 auto 2rem;
}

[article] [text] {
  padding: 1rem;
}

[date],
[published-on] {
  font-size: 0.75rem;
}

[article] h3 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}

[article] [bottom] {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

[icon] {
  background: none;
  border: none;
  outline: none;
  padding: 0.25rem;
}

@media (max-width: 767.98px) {
  [article] {
    max-width: 384px;
  }

  [article] img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
  }

  [article] [date],
  [article] h3,
  [article] [description] {
    margin-bottom: 1rem;
  }
}

@media (min-width: 768px) {
  [article] {
    display: flex;
  }

  [article] img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    object-fit: cover;
    width: 30%;
  }

  [article] [date],
  [article] h3,
  [article] [description] {
    margin-bottom: 0.5rem;
  }
}
</style>
