<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const route = useRoute();
//i will give unique parameter for cache
const { data } = useAsyncData(`/movies/${route.params.id}`, () => {
  return $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`);
});
</script>
