<template>
  <div>
    <div>Course.vue in page directory</div>

    <p>
      Main trick here is <strong>NuxtApp</strong> <br />
      because of it i can see further pages under the same root <br />
      if i go to the further route, i will see that i have elements of /course
      root
    </p>
    <hr />
    <br />
    <br />
    <h1><strong>Chapters</strong></h1>
    <div v-for="chapter in chapters" :key="chapter.slug">
      <h4>{{ chapter.title }}</h4>
      <hr />

      <NuxtLink
        v-for="(lesson, index) in chapter.lessons"
        :key="lesson.slug"
        :to="`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`"
      >
        <span>{{ index + 1 }}.</span> <span>{{ lesson.title }}</span> <br />
      </NuxtLink>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup>
const { chapters } = useCourse();
</script>
