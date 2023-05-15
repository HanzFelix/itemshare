import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useItemShareStore = defineStore('itemshare', {
  state: () => ({
    temp: 1
  }),
  getters: {
    tempGetter(state) {
      return state.temp
    }
  },
  actions: {
    login() {
      // some login processing
      return true; //login successful
    }
  }
})
