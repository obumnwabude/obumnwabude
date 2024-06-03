<script setup lang="ts">
import IconRight from '@/icons/IconRight.vue';
import { displayDate, type Article } from '@/types';

const { article } = defineProps<{ article: Article }>();
const { image, date, title, description, link, publishedOn } = article;
</script>

<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferer"
    :title="title"
    :aria-label="title"
  >
    <div article>
      <img
        :src="`/assets/${image.name}.${image.png ? 'png' : 'jpg'}`"
        :alt="image.alt"
      />
      <div text>
        <p date>{{ displayDate(date) }}</p>
        <h3>{{ title }}</h3>
        <p description>{{ description }}</p>
        <div bottom>
          <p published-on>
            Published On: <span primary>{{ publishedOn }}</span>
          </p>
          <button icon><IconRight /></button>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
a:hover [article] {
  background-color: rgb(from var(--primary) r g b / 15%);
}

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
