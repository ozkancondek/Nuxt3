import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vitest/config";
import AutoImport from "unplugin-auto-import/vite";
//import NuxtVitest from "vite-plugin-nuxt-test";
import fs from "fs";
import { resolve } from "path";
const NuxtTsConfig = fs.readFileSync("./.nuxt/tsconfig.json").toString();
const tsConfigFormated = JSON.parse(
  NuxtTsConfig.replace(
    /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
    (m, g) => (g ? "" : m)
  )
);

const r = (p) => resolve(__dirname, p);

export const alias = {};

Object.entries(tsConfigFormated.compilerOptions.paths).forEach(
  ([key, value]) => {
    alias[key] = r(value[0]);
  }
);

export default defineConfig({
  plugins: [
    // NuxtVitest(),
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
    alias,
    // : {
    //   "~": path.resolve(__dirname, "./"),
    //   "#app": path.resolve(
    //     __dirname,
    //     "./node_modules/nuxt/dist/app/index.d.ts"
    //   ),
    //   "#head": path.resolve(__dirname, "./.nuxt/imports.d.ts"),
    //   "#imports": path.resolve(__dirname, "./.nuxt/imports.d.ts"),
    // },
  },
});
