import { defineStore } from "pinia";
//import products from "@/data/products.json"; // its for static data fill

export const useProductStore = defineStore("ProductStore", {
  //State
  state: () => {
    return {
      //products,
      //BP its starts with empty array
      products: [],
    };
  },
  //Actions
  actions: {
    //take real data and fill the empty array in state
    async fill() {
      // this.products = products; //static method
      this.products = (await import("@/data/products.json")).default;
    },
  },
  //Getters
});
