import Headline from "./Headline.vue";
import { STORYBOOK_UI_COMPONENTS_PREFIX } from "../../storybook.constants";

export default {
  title: `${STORYBOOK_UI_COMPONENTS_PREFIX}/Headline`,
  component: Headline,
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "XXS", "XS", "S", "M", "L", "XL"],
    },
    display: {
      control: { type: "select" },
      options: [null, "M", "L", "XL", "XXL"],
    },
    level: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5"],
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, { argTypes }) => ({
  components: { Headline },
  props: Object.keys(argTypes),
  template: '<Headline v-bind="$props" v-bind="args"></Headline>',
});

export const Normal = Template.bind({});
Normal.args = {
  size: "M",
  level: "h1",
  text: "Hallo, ich bin eine wunderschöne Headline, die öfter als nötig umbricht",
};

export const Display = Template.bind({});
Display.args = {
  display: "L",
  level: "h2",
  text: "Ich bin eine Display Headline mit Versalien",
};
