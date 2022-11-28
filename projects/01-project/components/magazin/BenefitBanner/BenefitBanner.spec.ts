import { mount } from "@vue/test-utils";
import BenefitBanner from "./BenefitBanner.vue";

 

test("renders BenefitBanner  correctly", () => {
  const message = "Happy People";
  const wrapper = mount(BenefitBanner, {
    props: { message },
  });
  expect(wrapper.element).toMatchSnapshot();
});
