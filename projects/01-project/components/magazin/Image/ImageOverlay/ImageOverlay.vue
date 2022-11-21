<i18n lang="yaml">
de:
  zoom: 'vergrößern'
cs-CZ:
  zoom: 'zvětšit'
hu-HU:
  zoom: 'nagyítsa ki a  oldalt.'
pl-PL:
  zoom: 'powiększać'
sk-SK:
  zoom: 'zväčšiť'
</i18n>

<template>
  <div
    class="tw-relative tw-w-full tw-h-full tw-cursor-pointer"
    :class="square && 'tw-aspect-w-1 tw-aspect-h-1 tw-overflow-hidden'"
    data-track-click="picture"
    @click="$emit('open-modal')"
  >
    <IconComponent
      name="maximise"
      class="icon-shadow tw-text-white hover:tw-text-deep-orange tw-absolute tw-hidden lg:tw-block tw-z-30 tw-top-2.5 tw-right-2.5 tw-left-auto tw-cursor-pointer tw-h-5 tw-w-5"
      :alt="t('zoom')"
    ></IconComponent>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import IconComponent from '~/components/magazin/Icon/Icon.vue'

export default defineComponent({
  name: 'ImageOverlay',
  components: {
    IconComponent,
  },
  props: {
    square: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['open-modal'],
  setup() {
    const { t } = useI18n({
      useScope: 'local',
    })
    return { t }
  },
})
</script>

<style scoped>
.icon-shadow {
  -webkit-filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.7));
}
</style>
