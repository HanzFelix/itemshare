<script setup>
import { RouterLink } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
const itemShareStore = useItemShareStore();
</script>

<template>
  <main class="flex flex-col py-8 container mx-auto px-4 gap-8">
    <section class="flex flex-col gap-2">
      <h1>JUST FOR YOU</h1>
      <!-- temporary bg-gradient, def. not in figma but might remove later-->
      <div
        class="grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 bg-gradient-to-b from-green-500 to-transparent bg-[length:auto_150px] bg-no-repeat rounded-xl p-4"
      >
        <article
          v-for="item in itemShareStore.itemsInRange(12, 18)"
          class="shadow-sm shadow-gray-400 p-2 bg-white"
        >
          <RouterLink :to="'/item/' + item.id">
            <img
              :src="item.img"
              alt=""
              srcset=""
              class="object-contain aspect-square"
            />
            <div class="flex flex-col">
              <p>{{ item.name }}</p>
              <p class="text-xs">{{ item.location }}</p>
              <p class="text-green-800">
                <span class="text-2xl">₱</span
                >{{ item.price + " - " + item.rate }}
              </p>
            </div>
          </RouterLink>
        </article>
      </div>
    </section>
    <section class="flex flex-col gap-2">
      <h1>DISCOVER</h1>
      <div
        class="grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 bg-gradient-to-b from-green-500 to-transparent bg-[length:auto_150px] bg-no-repeat rounded-xl p-4"
      >
        <article
          v-for="item in itemShareStore.itemsInRange(0, 18)"
          class="shadow-sm shadow-gray-400 p-2 bg-white"
        >
          <a href="#">
            <img :src="item.img" alt="" srcset="" class="object-contain" />
            <div class="flex flex-col">
              <p>{{ item.name }}</p>
              <p class="text-xs">{{ item.location }}</p>
              <p class="text-green-800">
                <span class="text-2xl">₱</span
                >{{ item.price + " - " + item.rate }}
              </p>
            </div></a
          >
        </article>
      </div>
    </section>
  </main>
</template>
