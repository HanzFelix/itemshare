<script setup>
import { RouterLink } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import { onMounted, ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseInit.js";
const itemShareStore = useItemShareStore();

const items = ref([]);
const sampleimg = ref(
  "https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  let fItems = [];
  querySnapshot.forEach((doc) => {
    const item = {
      itemId: doc.id,
      ownerID: doc.data().ownerId,
      ownerFName: doc.data().ownerFName,
      ownerLName: doc.data().ownerLName,
      itemName: doc.data().itemName,
      location: doc.data().location,
      rentAmount: doc.data().rentAmount,
      rentRate: doc.data().rentRate,
      tags: doc.data().tags,
      description: doc.data().description,
    };
    fItems.push(item);
  });
  items.value = fItems;
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
  <main class="container mx-auto flex flex-col gap-8 px-4 py-8">
    <!--<section class="flex flex-col gap-2">
      <h1>JUST FOR YOU</h1>
      <div
        class="grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 bg-gradient-to-b from-green-500 to-transparent bg-[length:auto_150px] bg-no-repeat rounded-xl p-4"
      >
        <RouterLink
          :to="'/item/' + item.id"
          v-for="item in itemShareStore.itemsInRange(12, 18)"
          class="shadow-sm shadow-gray-400 p-2 bg-white"
        >
          <div class="w-full aspect-square">
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
              <span class="text-2xl">₱</span
              >{{ item.price + " - " + item.rate }}
            </p>
          </div>
        </RouterLink>
      </div>
    </section> -->
    <section class="flex flex-col gap-2">
      <h1>DISCOVER</h1>
      <!---<div
        class="grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 bg-gradient-to-b from-green-500 to-transparent bg-[length:auto_150px] bg-no-repeat rounded-xl p-4"
      >
        <RouterLink
          :to="'/item/' + item.id"
          v-for="item in itemShareStore.itemsInRange(0, 18)"
          class="shadow-sm shadow-gray-400 p-2 bg-white"
        >
          <div class="w-full aspect-square">
            <img
              :src="item.img"
              alt=""
              srcset=""
              loading="lazy"
              class="object-contain"
            />-->
      <div
        class="grid grid-flow-row gap-2 rounded-xl bg-gradient-to-b from-green-500 to-transparent bg-[length:100%_150px] bg-no-repeat p-4"
        :class="gridSize(gridfor)"
      >
        <RouterLink
          :to="'/item/' + item.itemId"
          v-for="item in items"
          class="bg-white p-2 shadow-sm shadow-gray-400"
        >
          <div class="aspect-square w-full">
            <img
              :src="sampleimg"
              alt=""
              srcset=""
              loading="lazy"
              class="object-contain"
            />
          </div>

          <div class="flex flex-col">
            <p>{{ item.itemName }}</p>
            <p class="text-xs">{{ item.location }}</p>
            <p class="text-green-800">
              <span class="text-2xl">₱</span
              >{{ item.rentAmount + " - " + item.rentRate }}
            </p>
          </div>
        </RouterLink>
      </div>
    </section>
  </main>
</template>
