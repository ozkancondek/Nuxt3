import { defineStore } from "pinia";
import products from "@/data/products.json";

export const useProductStore = defineStore("ProductStore", {
  //State
  state: () => {
    return {
      products,
    };
  },
  //Actions
  //Getters
});
