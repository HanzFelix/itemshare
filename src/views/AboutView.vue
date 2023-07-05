<script setup>
import { ref } from "vue";

const members = ref([
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/devs%2Fciann.jpg?alt=media&token=76a72dd1-d5f5-4989-b83b-6d5899212ab8",

    name: "Ciann Renel Cazar",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/devs%2Fabimael.jpg?alt=media&token=3136962d-40f5-4a09-ae5c-5913efddd1fe",
    name: "Abimael Dadap",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/devs%2Fhans.jpg?alt=media&token=a8b46e11-3a86-47af-9094-d75396490773",
    name: "Hans Legaspi",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/devs%2Fhanz.jpg?alt=media&token=3300883e-0fe9-4334-bd45-dcabe374b728",
    name: "Hanz Felix Tumulak",
  },
]);
</script>
<template>
  <div class="flex flex-col gap-4 rounded-xl bg-text bg-opacity-25 p-8">
    <h1 class="text-white">The Team</h1>
    <div class="grid grid-cols-2 justify-around gap-8">
      <div class="flex flex-col items-center gap-2" v-for="member in members">
        <img
          :src="member.image"
          alt=""
          class="aspect-square w-32 rounded-full"
        />
        <div class="flex flex-col text-background">
          <p class="font-black">
            {{ member.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
