import Example from "./BenefitBanner.vue";

export default {
  title: "Example Folder/Example",
  component: Example,
  argTypes: {},
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Example },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Example v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  text: "here is example text",
};
