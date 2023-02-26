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
const { chapterSlug, lessonSlug } = route.params;
const lesson = await useLesson(chapterSlug, lessonSlug);

const chapter = computed(() => {
  if (route.params.lessonSlug === "3-typing-component-events") {
    console.log(
      route.params.paramthatdoesnotexistwhoops.capitalizeIsNotAMethod()
    );
  }
  //take chapterName and find it in courses
  return course.chapters.find((e) => e.slug === route.params.chapterSlug);
});
if (!chapter.value) {
  throw createError({
    statusCode: 404,
    message: "chapter not found",
  });
}
if (!lesson.value) {
  throw createError({
    statusCode: 404,
    message: "lesson not found",
  });
}

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
definePageMeta({
  middleware: [
    function ({ params }, from) {
      const course = useCourse();
      const chapter = course.chapters.find(
        (chapter) => chapter.slug === params.chapterSlug
      );
      if (!chapter) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: "Chapter not found",
          })
        );
      }
      const lesson = chapter.lessons.find(
        (lesson) => lesson.slug === params.lessonSlug
      );
      if (!lesson) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: "lesson not found",
          })
        );
      }
    },
    //second middleware to user without authentication we will use it commonly thats why moved to the middleware folder
    "auth",
  ],
});
</script>
