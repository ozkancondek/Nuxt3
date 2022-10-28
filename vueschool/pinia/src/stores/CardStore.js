import { groupBy } from "lodash";
import { defineStore } from "pinia";
import { useAuthUserStore } from "./AuthUserStore";

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
    //grouped: (state) => groupBy(state.items, (item) => item.name),
    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      const inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },
    total: (state) => state.items.reduce((p, c) => p + c.price, 0),
  },
  actions: {
    checkout() {
      const authUserStore = useAuthUserStore();
      alert(
        `User ${authUserStore.username} bought ${this.count} item in total ${this.total} $. `
      );
    },

    addItems(count, item) {
      count = parseInt(count);

      for (let i = 0; i < count; i++) {
        this.items.push(item);
      }
    },
    clearItem(itemName) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },
    setItemCount(item, count) {
      this.clearItem(item.name);
      this.addItems(count, item);
    },
  },
});
