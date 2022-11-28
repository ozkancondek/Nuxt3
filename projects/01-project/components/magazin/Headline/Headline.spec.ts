import { shallowMount } from '@vue/test-utils'
import Headline from '~/components/magazin/Headline/Headline.vue'
import {test,expect} from "vitest"
vi.mock('#app', () => {
    return {
      useRoute() {
        return {
          public: {
            // Your public config!
          }
        }
      },
      
 
    }
  })
  vi.mock('#head', () => {
    return {
      useHead() {
        return {
          public: {
            // Your public config!
          }
        }
      },
 
    }
  })
test('renders Headline  correctly', () => {
  const wrapper = shallowMount(Headline)
  expect(wrapper.element).toMatchSnapshot()
})
