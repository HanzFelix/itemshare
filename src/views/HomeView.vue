<script setup>
import ItemsContainer from "../components/ItemsContainer.vue";
import { useItemShareStore } from "../stores/itemshare";
import { onMounted, ref } from "vue";
const itemShareStore = useItemShareStore();

const discoverItems = ref([]);

onMounted(async () => {
  discoverItems.value = await itemShareStore.loadItems();
});
</script>

<template>
  <main class="container mx-auto flex flex-col gap-8 px-0 py-8 sm:px-4">
    <section class="flex flex-col gap-2">
      <h1 class="px-4 sm:px-0">JUST FOR YOU</h1>
      <ItemsContainer :items="itemShareStore.itemsInRange(12, 18)" />
    </section>
    <section class="flex flex-col gap-2">
      <h1 class="px-4 sm:px-0">DISCOVER</h1>
      <ItemsContainer :items="discoverItems" />
    </section>
  </main>
</template>
