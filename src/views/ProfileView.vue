<script setup>
import { RouterLink } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import StarRating from "../components/StarRating.vue";
const itemShareStore = useItemShareStore();
</script>

<template>
  <main class="flex flex-col py-8 container mx-auto px-4 gap-8">
    <section class="flex gap-2 lg:flex-row flex-col">
      <div class="basis-9/12 flex flex-col sm:flex-row gap-2">
        <!--Image-->
        <div class="basis-4/12 flex flex-col gap-2 p-4 bg-white">
          <img
            src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
            alt=""
            srcset=""
          />
        </div>
        <!--Details-->
        <div
          class="basis-8/12 flex flex-col justify-between w-full p-4 bg-white"
        >
          <div>
            <div class="gap-2 flex-wrap flex justify-between items-start">
              <h1 class="text-3xl">Isaac Einstein</h1>
              <div class="flex">
                <span class="material-icons text-green-600">location_on</span>
                <span>Baybay City</span>
              </div>
            </div>
            <!--Ratings-->
            <div class="my-4 block md:flex xl:block flex-row">
              <div class="basis-full">
                <h2>Lender Ratings</h2>
                <div class="flex gap-4 mb-4 items-center">
                  <span>3.0 / 5.0</span>
                  <StarRating value="3" />
                </div>
              </div>
              <div class="basis-full">
                <h2 class="">Chat Response Rate</h2>
                <div class="flex gap-4 mb-4 items-center">
                  <span>4.0 / 5.0</span>
                  <StarRating value="4" />
                </div>
              </div>
              <!--location-->
            </div>
          </div>
          <!--Button actions-->
          <div class="block lg:flex flex-col items-start">
            <div class="flex flex-row lg:flex-col gap-2">
              <RouterLink
                to="/messages/5"
                class="py-3 px-5 text-white bg-green-600 rounded-lg justify-center flex items-center gap-1 basis-full"
              >
                <span class="material-icons">forum</span>
                <span>Chat</span>
              </RouterLink>
              <!--Need some placeholder action-->
              <button
                class="py-3 px-5 bg-yellow-200 text-yellow-800 border-2 border-yellow-500 rounded-lg basis-full justify-center flex items-center gap-1"
              >
                <span class="material-icons">flag</span>
                <span>Report user</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--Lend Details-->
      <div class="basis-3/12 bg-white p-4 flex flex-row lg:flex-col gap-4">
        <div class="basis-1/2 lg:basis-0">
          <h2>Lended Items</h2>
          <h2 class="text-2xl">542</h2>
        </div>
        <div class="basis-1/2 lg:basis-0">
          <h2>Rented Items</h2>
          <h2 class="text-2xl">34</h2>
        </div>
      </div>
    </section>
    <!--User's items go here-->
    <section class="flex flex-col gap-2">
      <h1>Isaac Einstein's Favorites</h1>
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
    </section>
    <section class="flex flex-col gap-2">
      <h1>Isaac Einstein's Items</h1>
      <div
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
    </section>
  </main>
</template>
