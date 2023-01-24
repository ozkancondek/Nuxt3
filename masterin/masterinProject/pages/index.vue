<script lang="ts" setup>
const firstLesson = useFirstLesson();
</script>

<template>
  <div>index.vue in main page directory</div>
  <NuxtLink class="underline font-medium" href="/course">
    Start with----- {{ firstLesson.title }}</NuxtLink
  >
</template>

<style scoped></style>
