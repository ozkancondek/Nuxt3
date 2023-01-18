<template>
  <NuxtLayout>
    <div class="prose">
      <h1>Dang</h1>
      <p>Something went wrong</p>
      <p>{{ error.message }}</p>
      <p>{{ error.statusCode }}</p>
      <button
        class="border-solid border-2 border-indigo-600"
        @click="handleError"
      >
        Go to course page
      </button>
    </div>
  </NuxtLayout>
</template>
<script setup>
//only exist in server side
const error = useError();
const handleError = (error) => {
  clearError({ redirect: "/course" });
};
</script>
