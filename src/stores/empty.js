import { defineStore } from "pinia";
import { useItemShareStore } from "@/stores/itemshare";
const itemShareStore = useItemShareStore();

export const useEmptyStore = defineStore("empty", {
  state: () => ({}),
  getters: {},
  actions: {},
});
