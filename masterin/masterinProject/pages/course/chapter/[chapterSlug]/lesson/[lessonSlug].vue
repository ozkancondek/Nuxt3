<template>
  <div class="border-solid border-2 border-indigo-600">
    <div>[lessonSlug].vue page</div>
    <p>Now if you chenge the params in adress bar, u will see the macig</p>
    <p>Chapter Slug : {{ chapter.title }}</p>
    <p>Lesson Slug: {{ lesson.title }}</p>
    <VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" />
    <NuxtLink v-if="lesson.downloadUrl" :to="lesson.downloadUrl"
      >Download Video</NuxtLink
    >
    <br /><br />

    <LessonCompleteButton
      :model-value="isLessonComplete"
      @update:model-value="toggleComplete"
    ></LessonCompleteButton>
    <br />
    <br />
    <button
      @click="throw createError('Error occured');"
      class="border-solid border-2 border-indigo-600"
    >
      Throw error example button
    </button>
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

const title = computed(() => {
  return `${lesson.value.title}-${course.title}`;
});
//store progress in useState to reach when browse the pages
/* const progress = useState("progress", () => {
  return [];
}); */
const progress = useLocalStorage("progress", []);
//comes with outo imports from vueuse
const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }
  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }
  //value exist. return value
  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});
const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }
  progress.value[chapter.value.number - 1][lesson.value.number - 1] =
    !isLessonComplete.value;
};
//useState end line
useHead({
  title: title.value,
});
</script>

<!-- <ClientOnly></ClientOnly>  tag for .clent-->
