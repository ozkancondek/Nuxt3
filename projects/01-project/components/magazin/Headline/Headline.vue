<template>
  <component
    :is="level ? level : 'h2'"
    class="tw-pr-8 lg:tw-pr-6 tw-relative"
    :class="highlightedClasses"
    data-ui-name="headline"
  >
    <span
      v-if="level.toLowerCase() === 'h2'"
      :id="text.replace(/\W/g, '')"
      class="tw--top-24 tw-absolute"
    ></span>
    <span :class="classes">
      <slot>{{ text }}</slot>
    </span>
  </component>
</template>

<script lang="ts">
import { PropType, computed } from "vue";

const SIZES = [null, "XXS", "XS", "S", "M", "L", "XL"];
const DISPLAY = [null, "M", "L", "XL", "XXL"];

export default {
  name: "Headline",
  props: {
    level: {
      type: String,
      default: "h2",
    },
    size: {
      type: String as PropType<typeof SIZES[number]>,
      validator: (value: string) => SIZES.includes(value),
      default: null,
    },
    highlighted: {
      type: Boolean,
      default: false,
    },
    display: {
      type: String as PropType<typeof DISPLAY[number]>,
      validator: (value: string) => DISPLAY.includes(value),
      default: null,
    },
    centeredText: {
      type: Boolean,
      default: false,
    },
    invert: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const classes = computed(() => ({
      "tw-font-obi-bold tw-font-normal": true,
      /** size or h **/
      "tw-text-5xl lg:tw-text-7xl tw-mb-4 lg:tw-mb-7":
        (props.size === "XL" && !props.display) ||
        (!props.size && props.level === "h1" && !props.display),
      "tw-text-4xl lg:tw-text-6xl tw-mb-4 lg:tw-mb-6 tw-relative":
        (props.size === "L" && !props.display) ||
        (!props.size && props.level === "h2" && !props.display),
      "tw-text-4xl lg:tw-text-5xl tw-leading-9 lg:tw-leading-snug tw-mb-3":
        props.size === "M",
      "tw-text-3xl lg:tw-text-4xl tw-mb-4 lg:tw-mb-5": props.size === "S",
      "tw-text-lg lg:tw-text-3xl tw-mb-3":
        (props.size === "XS" && !props.display) ||
        (!props.size && props.level === "h3" && !props.display),
      "tw-text-lg tw-mb-1": props.size === "XXS",
      "tw-text-base lg:tw-text-2xl tw-mb-2":
        !props.size && props.level === "h4" && !props.display,
      /** highlighted **/
      "highlighted tw-inline tw-bg-deep-orange tw-text-white tw-py-1.5 tw-pl-4 lg:tw-pl-6":
        props.highlighted,
      "tw-block": !props.highlighted,
      /** display **/
      "highlighted tw-inline tw-bg-deep-orange tw-text-white tw-py-1.5 tw-pl-4 lg:tw-pl-6 tw-uppercase":
        props.display,
      /** display size **/
      "tw-text-10xl": props.display === "XXL",
      "tw-text-9xl": props.display === "XL",
      "tw-text-8xl": props.display === "L",
      "tw-text-4xl lg:tw-text-5xl": props.display === "M",
      /** inverted **/
      "tw-text-white": props.invert,
      /** centered **/
      "tw-block tw-text-center": props.centeredText,
    }));
    const highlightedClasses = computed(() => ({
      "headline-spacer": props.highlighted,
    }));
    return { classes, highlightedClasses };
  },
};
</script>

<style scoped>
.highlighted {
  box-shadow: rgb(245 102 0) 1rem 0 0, rgb(245 102 0) 1rem 0 0;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

.headline-spacer::after {
  content: "";
  height: 1rem;
  display: block;
}

@media screen and (min-width: 960px) {
  .headline-spacer::after {
    height: 1.5rem;
  }
}
</style>
