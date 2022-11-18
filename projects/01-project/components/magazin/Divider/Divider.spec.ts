import { it, expect } from "vitest";
import { shallowMount } from '@vue/test-utils'
import Divider from '~/components/magazin/Divider/Divider.vue'

it('renders Divider  correctly', () => {
  const wrapper = shallowMount(Divider, {
    mocks: {
      $t: () => {},
    },
  })
  expect(wrapper.element).toMatchSnapshot()
})

// @types/jest
//ts-jest