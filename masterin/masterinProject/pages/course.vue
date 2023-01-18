<template>
  <div class="border">
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
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        <p>
          oh no, something went wrong

          <code>{{ error }}</code>
        </p>
        <p>
          NuxtErrorBoundr prevented bubling and showed error template instance
          of NuxtPage. So i wrapped my child route with error boundary
        </p>
        <button
          class="border-solid border-2 border-indigo-600"
          @click="resetError(error)"
        >
          Reset Error
        </button>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
const { chapters } = useCourse();

const resetError = async (error) => {
  //redirect to route first and reset the error
  await navigateTo("/course");
  error.value = null;
  //in situation no save use code below
  /*   throw createError({
    fatal: true,
    message: "fatal error",
  }); */
};

//definePageMeta({
//remove layout
//layout: false,
//use custom one
//layout: "custom",
//another way is in app.vue
//});
</script>
<style scoped>
.border {
  border: 2px solid red;
}
.router-link-active {
  @apply text-blue-500;
}
</style>
