<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: "ozkan",
  },
});
</script>
<template>
  <div>
    <h2 class="tw-text-blue">{{ text }}</h2>
  </div>
</template>
