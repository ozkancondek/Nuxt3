import { groupBy, reduce } from "lodash";
import { defineStore } from "pinia";

export const useCardStore = defineStore("CardStore", {
  state: () => {
    return {
      items: [],
    };
  },
  getters: {
    /*     count() {
      return this.items.length;
    }, */
    count: (state) => state.items.length,
    /*    isEmpty() {
      return this.count === 0;
    }, */
    isEmpty: (state) => state.items.length === 0,
    //to make order in cardStore by name
    grouped: (state) => groupBy(state.items, (item) => item.name),
    total: (state) => state.items.reduce((p, c) => p + c.price, 0),
  },
  actions: {
    addItems(count, item) {
      count = parseInt(count);

      for (let i = 0; i < count; i++) {
        this.items.push(item);
      }
    },
    clearItem(itemName) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },
  },
});
