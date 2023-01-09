<template>
  <div class="border-solid border-2 border-indigo-600">
    <div>[lessonSlug].vue page</div>
    <p>Now if you chenge the params in adress bar, u will see the macig</p>
    <p>Chapter Slug : {{ chapter.title }}</p>
    <p>Lesson Slug: {{ lesson.title }}</p>
  </div>
</template>
<script setup>
const course = useCourse();

const route = useRoute();
const chapter = computed(() => {
  //take chapterName and find it in courses
  return course.chapters.find((e) => e.slug === route.params.chapterSlug);
});

const lesson = computed(() => {
  return chapter.value.lessons.find((e) => e.slug === route.params.lessonSlug);
});
</script>
