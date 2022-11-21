<template>
  <picture class="tw-flex" @click="$emit('click')">
    <source
      v-for="(source, index) in sources"
      :key="compKey + index"
      :media="source.media"
      :srcset="source.srcset"
    />
    <img
      :src="srcOriginal"
      :alt="alt"
      class="tw-w-full tw-object-cover"
      @load="onLoad"
    />
  </picture>
</template>

<script lang="ts">
import { useRuntimeConfig } from "#app";

import { PropType } from "vue";

type Source = { media: string; srcset: string };

export default defineComponent({
  name: "ImageComponent",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    aspectRatio: {
      type: Number,
      default: 1,
    },
    originalAspectRatio: {
      type: Number,
      default: 1,
    },
    fpX: {
      type: Number,
      default: 0.5,
    },
    fpY: {
      type: Number,
      default: 0.5,
    },
    fpZoom: {
      type: Number,
      default: 1,
    },
    widths: {
      type: Array as PropType<number[]>,
      required: false,
      default: () => [330, 690, 910, 1120],
    },
    resizeOnLoad: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props) {
    const config = useRuntimeConfig();
    const debug = config.imgixDebug === true;
    const compKey =
      "pic-source-" + (Math.random() + 1).toString(36).substring(7) + "-";
    const sources = computed<Source[]>(() => {
      const { src, fpX, fpY, fpZoom, aspectRatio } = props;
      const options = { src, fpX, fpY, fpZoom, aspectRatio, debug };

      return [];
    });
    const srcOriginal = computed<string>(() => {
      const { src, fpX, fpY, fpZoom, aspectRatio } = props;
      const options = { src, fpX, fpY, fpZoom, aspectRatio, debug };

      return src;
    });
    const onLoad = () => {
      if (props.resizeOnLoad) {
        window.dispatchEvent(new Event("resize"));
      }
    };
    return {
      srcOriginal,
      sources,
      compKey,
      onLoad,
    };
  },
});
</script>
