import { shallowMount } from '@vue/test-utils'
//import { createTestingPinia } from '@pinia/testing'
import Image from '~/components/magazin/Image/Image.vue'

test('renders Image  correctly', () => {
  //const pinia = createTestingPinia()
  const wrapper = shallowMount(Image, {
  /*   global: {
     plugins: [pinia],
    }, */
    mocks: {
      $t: () => {},
    },
  })
  expect(wrapper.element).toMatchSnapshot()
})
