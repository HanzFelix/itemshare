<script setup>
import { RouterLink } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import ItemsContainer from "../components/ItemsContainer.vue";
const itemShareStore = useItemShareStore();
</script>

<template>
  <main class="container mx-auto flex flex-col gap-8 px-4 py-8">
    <section class="flex flex-col gap-2">
      <h1>JUST FOR YOU</h1>
      <ItemsContainer :items="itemShareStore.itemsInRange(12, 18)" />
    </section>
    <section class="flex flex-col gap-2">
      <h1>DISCOVER</h1>
      <ItemsContainer :items="itemShareStore.itemsInRange(0, 18)" />
    </section>
  </main>
</template>
