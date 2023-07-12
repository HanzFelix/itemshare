import { defineStore } from "pinia";
import { useItemShareStore } from "@/stores/itemshare";

export const useItemStore = defineStore("item", {
  state: () => ({
    lastLoadedItemId: "",
    item: {
      itemName: "",
      location: "",
      rentAmount: "",
      rentRate: "",
      images: [],
      description: "",
      ownerId: "",
      tags: [],
    },
  }),
  getters: {},
  actions: {
    async loadItem(itemId) {
      if (itemId == this.lastLoadedItemId) {
        return;
      }
      const itemShareStore = useItemShareStore();

      this.item = await itemShareStore.loadItem(itemId);
      this.lastLoadedItemId = itemId;
    },
  },
});
