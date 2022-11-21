import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vitest/config";
import AutoImport from "unplugin-auto-import/vite";
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.spec.ts"],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
    },
  },
});
