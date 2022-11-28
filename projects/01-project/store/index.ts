import { defineStore } from 'pinia'


export const useStore = defineStore('main',{
    state: () => ({
        name: "ozkan",
        age : 34,
      }),
      getters: {
        info: (state) => state,
      },
      actions: {
        changeName() {
          this.name = "ozkan changed with store action";
        },
      },
})