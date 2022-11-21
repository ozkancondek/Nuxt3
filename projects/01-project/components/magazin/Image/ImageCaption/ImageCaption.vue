<template>
  <div
    v-if="captionPosition === 'inline'"
    class="tw-flex-row tw-h-full tw-relative"
    data-track-section="image_caption"
  >
    <slot></slot>
    <RichTextParser
      v-if="showCaption"
      class="tw-absolute tw-bottom-0 tw-w-full tw-bg-gray-100 tw-bg-opacity-80 tw-text-sm tw-py-2 tw-px-4"
      :class="image.content.captionAlignRight && 'tw-text-right'"
      :html="image.content.caption"
    ></RichTextParser>
  </div>
  <div v-else class="tw-flex-row" data-track-section="image_caption">
    <slot></slot>
    <RichTextParser
      v-if="showCaption"
      class="tw-py-3 image-caption__caption tw-text-base"
      :class="image.content.captionAlignRight && 'tw-text-right'"
      :html="image.content.caption"
    ></RichTextParser>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { Image } from '~/types/cms.types'
import RichTextParser from '~/components/magazin/RichTextParser/RichTextParser.vue'

export default defineComponent({
  name: 'ImageCaption',
  components: { RichTextParser },
  props: {
    image: {
      type: Object as PropType<Image>,
      default: () => undefined,
    },
    captionPosition: {
      type: String as PropType<'bottom' | 'inline'>,
      default: () => 'bottom',
    },
  },
  setup(props) {
    const showCaption = computed(() => {
      return (
        props.image?.content.caption &&
        props.image?.content.caption !== '' &&
        props.image?.content.caption !== '<p></p>' &&
        props.image?.content.caption !== '<p> </p>'
      )
    })
    return { showCaption }
  },
})
</script>

<style scoped>
:where(.disc-image-modal-container) .image-caption__caption {
  padding-left: 12px;
  padding-right: 12px;
}
</style>
