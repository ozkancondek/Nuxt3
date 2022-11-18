import { it, expect } from "vitest";
import ExampleVue from "./Example.vue";
import { shallowMount } from "@vue/test-utils";

it("word should be 4 letters long", () => {
  const wrapper = shallowMount(ExampleVue, {
    mocks: {
      $t: () => {},
    },
  });
  expect(wrapper.text()).toContain("as");
});
