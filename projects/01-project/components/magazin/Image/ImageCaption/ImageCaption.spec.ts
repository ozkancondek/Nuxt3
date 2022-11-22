import { shallowMount } from '@vue/test-utils'
import ImageCaption from '~/components/magazin/Image/ImageCaption/ImageCaption.vue'
export type Image = {
  type: 'Image'
  content: {
    src: string
    alt: string
    caption?: string
    captionAlignRight?: boolean
    aspectRatio: number
    originalAspectRatio?: number
    fpX?: number
    fpY?: number
    fpZoom?: number
    articleImage?: boolean
  }
}


const image: Image = {
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
}
test('renders ImageCaption with bottom caption correctly', () => {
  const wrapper = shallowMount(ImageCaption, {
    mocks: {
      $t: () => {},
    },
    propsData: {
      image,
      captionPosition: 'bottom',
    },
  })
  expect(wrapper.element).toMatchSnapshot()
})

test('renders ImageCaption with inline caption correctly', () => {
  const wrapper = shallowMount(ImageCaption, {
    mocks: {
      $t: () => {},
    },
    propsData: {
      image,
      captionPosition: 'inline',
    },
  })
  expect(wrapper.element).toMatchSnapshot()
})
