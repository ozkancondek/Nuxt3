<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const route = useRoute();

const { data } = useAsyncData(() => {
  return $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`);
});
</script>
