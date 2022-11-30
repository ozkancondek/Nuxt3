import { shallowMount } from '@vue/test-utils'
import GravelCalculator from '~/components/magazin/MaterialCalculator/GravelCalculator/GravelCalculator.vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'de',
})
test('renders GravelCalculator  correctly', () => {
  const wrapper = shallowMount(GravelCalculator, {
    global: {
      plugins: [i18n],
    },
    mocks: {

    },
  })
  expect(wrapper.element).toMatchSnapshot()
})
