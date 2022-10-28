import { defineStore } from "pinia";

export const useCardStore = defineStore("CardStore", {
  state: () => {
    return {
      items: [],
    };
  },
  actions: {
    addItems(count, item) {
      count = parseInt(count);

      for (let i = 0; i < count; i++) {
        this.items.push(item);
      }
    },
  },
});
