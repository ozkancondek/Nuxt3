import "../assets/tailwind.css";
export const decorators = [
  (story) => ({
    components: { story },
    template: '<div class="tw" data-track-root="storybook"><story />  </div>',
  }),
];

const customViewports = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "480px",
      height: "800px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
  desktop: {
    name: "minimal Desktop",
    styles: {
      width: "960px",
      height: "1440px",
    },
  },
};

export const parameters = {
  viewport: { viewports: customViewports },
};
