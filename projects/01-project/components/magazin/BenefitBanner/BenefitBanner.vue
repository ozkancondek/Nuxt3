<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "BenefitBanner",
  components: {},

  props: {
    message: {
      type: String,
      default: "World",
    },
  },
});
</script>

<style scoped>
@media screen and (min-width: 960px) {
  .benefit-item {
    max-width: 30%;
  }
}
</style>
