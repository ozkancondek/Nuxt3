<template>
  <div>
    <h3>Hello user!</h3>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["logger"],
});
</script>
