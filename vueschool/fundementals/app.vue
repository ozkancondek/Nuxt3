<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  //title: "my movie site",
  //second option is ;
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - movie-project` : "movie-project";
  },
});
</script>
