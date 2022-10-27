<script setup>
const { data } = useFetch("http://localhost:3000/api/todo");
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
