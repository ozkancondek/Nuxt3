<template>
  <hr :class="classes" :color="color" />
</template>

<script lang="ts">
const COLORS = ["orange", "gray"];
const ORIENTATION = ["horizontal", "vertical"];

export default defineComponent({
  name: "Divider",
  props: {
    color: {
      type: String,
      validator: (value: string) => COLORS.includes(value),
      default: "orange",
    },
    orientation: {
      type: String,
      validator: (value: string) => ORIENTATION.includes(value),
      default: "horizontal",
    },
  },
  setup(props) {
    const classes = computed(() => ({
      "tw-border-0 tw-mx-auto tw-mb-8": true,
      /** color **/
      "tw-bg-orange": props.color === "orange",
      "tw-bg-gray-300": props.color === "gray",
      /** orientation **/
      "tw-w-36 tw-h-0.5": props.orientation === "horizontal",
      "tw-w-0.5 tw-h-36": props.orientation === "vertical",
    }));
    return { classes };
  },
});
</script>
