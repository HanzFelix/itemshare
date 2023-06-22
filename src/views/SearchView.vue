<script setup>
import { useItemShareStore } from "../stores/itemshare";
import ItemsContainer from "../components/ItemsContainer.vue";
const itemShareStore = useItemShareStore();
</script>
<template>
  <main class="container mx-auto flex flex-col gap-4 px-4 py-8 lg:flex-row">
    <aside class="basis-1/3">
      <div
        class="box-border flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm shadow-gray-400"
      >
        <h1>Search for Items</h1>
        <form action="#" method="get" class="flex flex-col gap-2">
          <div class="flex gap-2">
            <input
              type="text"
              name=""
              placeholder="Item name"
              class="w-full rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"
              id=""
            />
            <button
              type="submit"
              class="rounded-xl bg-green-700 px-4 py-2 text-white"
            >
              Search
            </button>
          </div>
          <div class="flex gap-2">
            <input
              type="text"
              name=""
              placeholder="Min. Rate"
              class="w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"
              id=""
            />
            <input
              type="text"
              name=""
              placeholder="Max. Rate"
              class="w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"
              id=""
            />
          </div>
          <input
            type="text"
            placeholder="Location"
            class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"
          />
        </form>
        <section>
          <h2>Category</h2>
          <ul>
            <li>
              <input type="checkbox" name="" id="" />Clothing
              <ul class="ml-4">
                <li><input type="checkbox" name="" id="" />Men</li>
                <li><input type="checkbox" name="" id="" />Women</li>
                <li><input type="checkbox" name="" id="" />Unisex</li>
                <li><input type="checkbox" name="" id="" />Kids</li>
              </ul>
            </li>
            <li>
              <input type="checkbox" name="" id="" />Appliances
              <ul class="ml-4">
                <li><input type="checkbox" name="" id="" />Kitchen</li>
                <li><input type="checkbox" name="" id="" />Laundry</li>
                <li><input type="checkbox" name="" id="" />Living Room</li>
              </ul>
            </li>
            <li>
              <input type="checkbox" name="" id="" />Gadgets and Devices
              <ul class="ml-4">
                <li><input type="checkbox" name="" id="" />Smartphones</li>
                <li><input type="checkbox" name="" id="" />Cameras</li>
                <li><input type="checkbox" name="" id="" />Tablets</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </aside>
    <ItemsContainer
      :items="itemShareStore.itemsInRange(4, 16)"
      gridfor="search"
      class="basis-2/3"
    />
  </main>
</template>
