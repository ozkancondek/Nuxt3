<template>
  <div
    class="
      tw-bg-white tw-rounded tw-border tw-border-gray-300 tw-p-4 tw-pt-6
      lg:tw-px-8 lg:tw-py-6
    "
    data-track-section="benefit_banner"
  >
    <Headline
      v-if="headline.content.text"
      v-bind="headline.content"
      size="M"
      class="tw-mb-6"
    ></Headline>
    <div
      class="tw-flex tw-flex-wrap tw-gap-2.5 tw-justify-between tw-items-center"
    >
      <div
        v-for="(benefit, index) in benefits"
        :key="compKey + index"
        class="
          benefit-item
          tw-flex tw-items-center tw-w-full
          lg:tw-w-auto
          tw-mb-4
          lg:tw-mb-0
        "
      >
        {{ "d" }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Headline from "~/components/magazin/Headline/Headline.vue";

export default defineComponent({
  name: "BenefitBanner",
  components: {
    Headline,
  },
  props: {
    headline: {
      type: Object,
      default: () => {},
    },

    benefits: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const compKey =
      "benefits-banner-" + (Math.random() + 1).toString(36).substring(7) + "-";
    return { compKey };
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
