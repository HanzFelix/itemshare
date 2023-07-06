<script setup>
import { useItemShareStore } from "@/stores/itemshare";
import ItemsContainer from "@/components/ItemsContainer.vue";
import CustomField from "@/components/CustomField.vue";
const itemShareStore = useItemShareStore();
</script>
<template>
  <main
    class="container mx-auto flex flex-col gap-4 px-0 py-8 sm:px-4 lg:flex-row"
  >
    <aside class="basis-1/3 px-4 sm:px-0">
      <div
        class="box-border flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm shadow-secondary"
      >
        <h1>Search for Items</h1>
        <form action="#" method="get" class="flex flex-col gap-2">
          <div class="flex gap-2">
            <CustomField placeholder="Item name" />
            <button
              type="submit"
              class="rounded-md border-2 border-transparent bg-primary px-6 py-2 text-background"
            >
              Search
            </button>
          </div>
          <div class="flex gap-2">
            <CustomField placeholder="Min. Rate" />
            <CustomField placeholder="Max. Rate" />
          </div>
          <CustomField placeholder="Location" />
          <CustomField placeholder="Tags" />
        </form>
      </div>
    </aside>
    <ItemsContainer
      :items="itemShareStore.itemsInRange(4, 16)"
      gridfor="search"
      class="basis-2/3"
    />
  </main>
</template>
