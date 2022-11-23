import { shallowMount } from '@vue/test-utils'
import Headline from '~/components/magazin/Headline/Headline.vue'

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
  const wrapper = shallowMount(Headline, {
    mocks: {
      $t: () => {},
    },
  })
  expect(wrapper.element).toMatchSnapshot()
})
