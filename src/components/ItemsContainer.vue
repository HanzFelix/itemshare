<script setup>
import { RouterLink } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
const props = defineProps({
  gridfor: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: [
      {
        id: 1,
        name: "Lampshade",
        location: "Baybay City",
        price: "150.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",
      },
      {
        id: 2,
        name: "Outdoor Bench",
        location: "Tacloban City",
        price: "150.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",
      },
    ],
  },
});

function gridSize(text) {
  switch (text) {
    // list of classes to include in SearchView, mostly for grid size
    case "search":
      return "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";
    // classes to include for the rest of them
    default:
      return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8";
  }
}
</script>
<template>
  <div
    class="grid grid-flow-row gap-2 rounded-xl bg-gradient-to-b from-green-500 to-transparent bg-[length:100%_150px] bg-no-repeat p-4"
    :class="gridSize(gridfor)"
  >
    <RouterLink
      :to="'/item/' + item.id"
      v-for="item in items"
      class="bg-white p-2 shadow-sm shadow-gray-400"
    >
      <div class="aspect-square w-full">
        <img
          :src="item.img"
          alt=""
          srcset=""
          loading="lazy"
          class="object-contain"
        />
      </div>

      <div class="flex flex-col">
        <p>{{ item.name }}</p>
        <p class="text-xs">{{ item.location }}</p>
        <p class="text-green-800">
          <span class="text-2xl">₱</span>{{ item.price + " - " + item.rate }}
        </p>
      </div>
    </RouterLink>
  </div>
</template>
