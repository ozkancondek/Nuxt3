<template>
  <div class="border-solid border-2 border-indigo-600">
    <div>[lessonSlug].vue page</div>
    <p>Now if you chenge the params in adress bar, u will see the macig</p>
    <p>Chapter Slug : {{ $route.params.chapterSlug }}</p>
    <p>Lesson Slug: {{ $route.params.lessonSlug }}</p>
  </div>
</template>
