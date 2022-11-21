import ImageComponent from './Image.vue'
import { STORYBOOK_UI_COMPONENTS_PREFIX } from '~/components/storybook.constants'

export default {
  title: `${STORYBOOK_UI_COMPONENTS_PREFIX}/Image`,
  component: ImageComponent,
  argTypes: {},
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, { argTypes }) => ({
  components: { ImageComponent },
  props: Object.keys(argTypes),
  template: '<ImageComponent v-bind="$props" v-on="$props"></ImageComponent>',
})

export const ImageExample = Template.bind({})
ImageExample.args = {
  src: '/magazinapi/dam/Freizeit/draussen-abkuehlen/mann-in-haengematte-garten.jpg',
  alt: 'placeholder',
  aspectRatio: 1.78,
  originalAspectRatio: 1,
  ratioSquare: false,
  fpX: 0.5,
  fpY: 0.5,
  fpZoom: 1,
  square: false,
}

export const ImageSquareExample = Template.bind({})
ImageSquareExample.args = {
  ...ImageExample.args,
  square: false,
}

export const ImageOriginalExample = Template.bind({})
ImageOriginalExample.args = {
  src: '/magazinapi/dam/Terrasse/winterharte-kuebelpflanzen/Sitzplatz-Gartenbank-Beet-Kuebelpflanze-Giesskanne.jpg',
  alt: 'Ein Sitzplatz mit einer Gartenbank vor einem Beet mit Kübelpflanze und Gießkanne',
  caption: '',
  captionAlignRight: false,
  aspectRatio: 1.78,
  originalAspectRatio: 1.5,
  fpX: 0.45,
  fpY: 0.55,
  fpZoom: 1,
  articleImage: true,
}
