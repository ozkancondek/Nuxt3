vi.mock("#app", () => ({
  useRoute() {
    return {
      public: {
        // Your public config!
      },
    };
  },
}));
vi.mock("#app", () => ({
  useRuntimeConfig() {
    return {
      public: {
        // Your public config!
      },
    };
  },
}));
vi.mock("#head", () => ({
  useHead() {
    return {
      public: {
        // Your public config!
      },
    };
  },
}));
vi.mock("#imports", () => ({
  useI18n() {
    return {
      public: {
        // Your public config!
      },
    };
  },
}));
