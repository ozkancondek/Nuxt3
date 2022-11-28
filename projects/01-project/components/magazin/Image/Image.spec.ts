import { shallowMount } from '@vue/test-utils'
//import { createTestingPinia } from '@pinia/testing'
import Image from '~/components/magazin/Image/Image.vue'
 
import {test,expect} from "vitest"
vi.mock('#app', () => {
  return {
    useRuntimeConfig() {
      return {
      
      }     
    }
  }
})
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
