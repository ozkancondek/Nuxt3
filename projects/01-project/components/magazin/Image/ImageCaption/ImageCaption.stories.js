import ImageComponent from '../Image.vue'
import ImageCaption from './ImageCaption.vue'
import { STORYBOOK_UI_COMPONENTS_PREFIX } from '~/components/storybook.constants'

export default {
  title: `${STORYBOOK_UI_COMPONENTS_PREFIX}/Image/ImageCaption`,
  component: ImageCaption,
  argTypes: {},
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, { argTypes }) => ({
  components: { ImageCaption, ImageComponent },
  props: Object.keys(argTypes),
  template:
    '<div class="tw-max-w-3xl"><ImageCaption v-bind="$props"><ImageComponent v-bind="$props.image.content"/></ImageCaption></div>',
})

export const ImageCaptionExample = Template.bind({})
ImageCaptionExample.args = {
  captionPosition: 'bottom',
  image: {
    type: 'Image',
    content: {
      articleImage: true,
      src: '/api/disc/cms/public/dam/Grill/grillrost-reinigen/grillrost-reinigen.jpg',
      alt: 'Grillrost reinigen',
      caption:
        '<p>Hier wird ein Grillrost gereinigt Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>',
      captionAlignRight: false,
      aspectRatio: 1.78,
      originalAspectRatio: 1.78,
      fpX: 0.5,
      fpY: 0.5,
      fpZoom: 1,
    },
  },
}

export const ImageCaptionInlineExample = Template.bind({})
ImageCaptionInlineExample.args = {
  captionPosition: 'inline',
  image: {
    type: 'Image',
    content: {
      articleImage: true,
      src: '/api/disc/cms/public/dam/Grill/grillrost-reinigen/grillrost-reinigen.jpg',
      alt: 'Grillrost reinigen',
      caption:
        '<p>Hier wird ein Grillrost gereinigt Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>',
      captionAlignRight: false,
      aspectRatio: 1.78,
      originalAspectRatio: 1.78,
      fpX: 0.5,
      fpY: 0.5,
      fpZoom: 1,
    },
  },
}
