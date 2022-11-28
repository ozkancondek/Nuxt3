<template>
  <div>{{ store.name }}</div>
  <button @click="changeStore">click</button>
</template>
<script setup>
import { createPinia } from "pinia";
import { useStore } from "./store";
const pinia = createPinia();
const store = useStore(pinia);

const changeStore = () => {
  store.$patch({
    name: "function",
  });
};
useHead({
  title: "ozkan",
  meta: [
    {
      hid: "og:site_name",
      property: "og:site_name",
      content: "OBI Baumarkt und Online-Shop",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Pflanzen im Garten – Tipps, Ideen & Anleitungen | OBI",
    },
    { hid: "og:type", property: "og:type", content: "website" },
    { hid: "og:determiner", property: "og:determiner", content: "auto" },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Alles über Pflanzen im Garten erfährst du im OBI Ratgeber: ✓ Bäume pflanzen ✓ Pflanzenpflege ✓ Rosen schneiden ✓ Schädlinge bekämpfen uvm.",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://www.obi.de/magazin/garten/pflanzen",
    },
    { hid: "og:locale", property: "og:locale", content: "de_DE" },
    {
      hid: "og:locale:alternate",
      property: "og:locale:alternate",
      content: "de_DE",
    },
    {
      hid: "og:locale:alternate",
      property: "og:locale:alternate",
      content: "de_AT",
    },
    {
      hid: "og:locale:alternate",
      property: "og:locale:alternate",
      content: "sk_SK",
    },
    {
      hid: "og:locale:alternate",
      property: "og:locale:alternate",
      content: "hu_HU",
    },
    {
      hid: "og:locale:alternate",
      property: "og:locale:alternate",
      content: "cs_CZ",
    },
    {
      content:
        "https://imgix.obi.de/api/disc/cms/public/dam/Freizeit/spass-mit-kindern/COC-1266_kinderspiel-vertical.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&fp-z=1&h=630&w=1200&auto=format%2Ccompress",
      hid: "og:image",
      property: "og:image",
    },
    { hid: "author", name: "author", content: "anonymous" },
    {
      hid: "description",
      name: "description",
      content:
        "Alles über Pflanzen im Garten erfährst du im OBI Ratgeber: ✓ Bäume pflanzen ✓ Pflanzenpflege ✓ Rosen schneiden ✓ Schädlinge bekämpfen uvm.",
    },
    { hid: "date", name: "date", content: "2021-06-02T15:08:18.830+02:00" },
    { hid: "language", name: "language", content: "de-DE" },
    { hid: "robots", name: "robots", content: "index,follow" },
  ],
  link: [
    {
      rel: "preconnect",
      href: "https://www.obi.de",
    },
    { rel: "canonical", href: "https://www.obi.de/magazin/garten/pflanzen" },
    {
      rel: "alternate",
      hreflang: "de-DE",
      href: "https://www.obi.de/magazin/garten/pflanzen",
    },
    {
      rel: "alternate",
      hreflang: "de-AT",
      href: "https://www.obi.at/magazin/garten/pflanzen",
    },
    {
      rel: "alternate",
      hreflang: "sk-SK",
      href: "https://www.obi.sk/magazin/zahrada/zahradny-dizajn",
    },
    {
      rel: "alternate",
      hreflang: "hu-HU",
      href: "https://www.obi.hu/magazin/kert/kertrendezes",
    },
    {
      rel: "alternate",
      hreflang: "cs-CZ",
      href: "https://www.obi.cz/magazin/zahrada/zahradni--design",
    },
  ],
  script: [
    {
      async: true,
      crossorigin: "anonymous",
      hid: "speedkit",
      src: "https://obi-de.app.baqend.com/v1/speedkit/install.js?d=production",
    },
  ],
});
</script>
