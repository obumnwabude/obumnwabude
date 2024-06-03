<script setup lang="ts">
import { displayDate, type Project } from '@/types';

const { project } = defineProps<{ project: Project }>();
const { date, image, title, description, actions, tags } = project;
</script>

<template>
  <div project>
    <img
      :src="`/assets/${image.name}.${image.png ? 'png' : 'jpg'}`"
      :alt="image.alt"
    />
    <div text>
      <p tags>
        <span primary tag v-for="tag of tags">{{ tag }}</span>
      </p>
      <p date v-if="date">{{ displayDate(date) }}</p>
      <h3>{{ title }}</h3>
      <p description>{{ description }}</p>
      <div actions>
        <a
          :href="link"
          target="_blank"
          rel="noopener noreferer"
          v-for="{ link, title } of actions"
          action
          filled
        >
          {{ title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
[project] {
  margin: 0 auto 5rem;
}

[project] [text] {
  flex-grow: 1;
  padding: 1rem 0;
}

[tags] {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

[tag] {
  background-color: rgb(from var(--primary) r g b / 12%);
  border-radius: 32px;
  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;
}

[date] {
  font-size: 0.75rem;
  margin-bottom: 1rem;
}

[project] h3 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1rem;
}

[project] [description] {
  margin-bottom: 1.5rem;
}

[actions] {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  text-align: center;
}

[action] {
  flex-grow: 1;
  font-weight: 500;
  padding: 0.5rem 2rem;
}

@media (max-width: 400px) {
  [action] {
    font-size: 0.875rem;
  }
}

@media (max-width: 767.98px) {
  [project] {
    max-width: 384px;
  }

  [project] img {
    width: 100%;
  }

  [project] [tags],
  [project] h3,
  [project] [description] {
    margin-bottom: 1rem;
  }
}

@media (min-width: 768px) {
  [project] {
    align-items: center;
    display: flex;
  }

  [project] img {
    width: 50%;
  }

  [project] [text] {
    padding: 1rem;
  }

  [project]:nth-child(even) {
    flex-direction: row-reverse;
  }

  [project]:nth-child(even) [text] {
    padding-right: 2rem;
  }

  [project]:nth-child(odd) [text] {
    padding-left: 2rem;
  }

  [action] {
    max-width: 288px;
  }
}
</style>
