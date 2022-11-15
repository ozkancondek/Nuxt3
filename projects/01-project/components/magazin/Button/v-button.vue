<template>
  <button class="bg-gray-100 p-4 rounded-lg text-gray-900 relative">
    {{ label }}
    <span class="tw-border-solid tw-border-2 tw-border-blue"> ozkan</span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      requried: true,
    },
  },
};
</script>
