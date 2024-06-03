<script setup lang="ts">
import { articles } from '@/content/articles';
import IconRight from '@/icons/IconRight.vue';

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
  <h2 page-heading>ARTICLES</h2>
  <p page-intro>
    I write articles on various topics. I write about mobile app development
    with Flutter, about Tech Communities, web development, my stories, and
    anything worth sharing.
    <br /><br />
    Here are articles I've written over the years. For some, I published them on my blogs. For others, they were guest authorship for blogs like
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
  <div page-content>
    <div
      article
      v-for="{ image, date, title, description, link, publishedOn } of articles"
    >
      <img
        :src="`/assets/${image.name}.${image.png ? 'png' : 'jpg'}`"
        :alt="image.alt"
      />
      <div text>
        <p date>{{ months[date.month] }} {{ date.year }}</p>
        <h3>{{ title }}</h3>
        <p description>{{ description }}</p>
        <div bottom>
          <p published-on>
            Published On: <span primary>{{ publishedOn }}</span>
          </p>
          <a
            :href="link"
            target="_blank"
            rel="noopener noreferer"
            aria-label="Read"
          >
            <button icon><IconRight /></button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
[article] {
  border: 1px solid rgb(from var(--text) r g b / 25%);
  border-radius: 8px;
  margin: 0 auto 3rem;
}

[article] [text] {
  padding: 1rem;
  flex-grow: 1;
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
