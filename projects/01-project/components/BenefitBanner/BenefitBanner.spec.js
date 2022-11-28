import { shallowMount } from "@vue/test-utils";

export const BenefitBannerExample = {
  headline: {
    content: {},
    type: "Headline",
  },
  button: {
    content: {
      text: "Beraten lassen",
      href: "https://www.obi.de/pages/heyobi-fachberatung",
    },
    type: "Button",
  },
  benefits: [
    {
      type: "Benefit",
      content: {
        text: "Beratung per Nachricht",
        icon: {
          content: {
            name: "rating-star",
          },
          type: "Icon",
        },
      },
    },
    {
      type: "Benefit",
      content: {
        text: "Live-Beratung per Rückruf. Das Gespräch dauert etwas länger, damit der Text umbricht",
        icon: {
          content: {
            name: "home",
          },
          type: "Icon",
        },
      },
    },
    {
      type: "Benefit",
      content: {
        text: "Beratungstermin im Markt",
        icon: {
          content: {
            name: "lamp",
          },
          type: "Icon",
        },
      },
    },
  ],
};

test("renders BenefitBanner  correctly", () => {
  //@ts-ignore
  const wrapper = shallowMount(BenefitBanner, {
    mocks: {
      $t: () => {},
    },
    propsData: BenefitBannerExample,
  });
  expect(wrapper.element).toMatchSnapshot();
});
