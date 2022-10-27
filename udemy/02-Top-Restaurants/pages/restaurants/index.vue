<script setup>
const { name } = useRoute();

useHead({
  title: name,
});
</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <div class="container">
        <RestaurantTable /></div
    ></NuxtLayout>
  </div>
</template>

<style scoped></style>
