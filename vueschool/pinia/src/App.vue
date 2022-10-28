<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
//import { storeToRefs } from "pinia"; // if i just wanna call state not the actions
import { useProductStore } from "./stores/ProductStore";
import { useCardStore } from "./stores/CardStore";
const productStore = useProductStore();
//const { products } = storeToRefs(useProductStore());
const cardStore = useCardStore();
productStore.fill(); //fill the product list
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cardStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
