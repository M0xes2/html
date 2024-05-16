import { defineStore } from 'pinia'

export const inputStore = defineStore({
  id: "input",
  state: () => ({
    input_color:"black",
  }),
  actions: {
    changeColor(color){
      this.input_color = color;
    },
  }
  })
