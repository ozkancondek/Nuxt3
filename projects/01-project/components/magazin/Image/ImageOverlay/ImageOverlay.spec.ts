import { shallowMount } from '@vue/test-utils'
import ImageOverlay from '~/components/magazin/Image/ImageOverlay/ImageOverlay.vue'

test('renders ImageOverlay  correctly', () => {
  const wrapper = shallowMount(ImageOverlay, {
    mocks: {
      $t: () => {},
    },
  })
  expect(wrapper.element).toMatchSnapshot()
})
