<script setup>
import { RouterLink } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import StarRating from "../components/StarRating.vue";
//import ItemsContainer from "../components/ItemsContainer.vue";
import { onMounted, ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseInit.js";
//const itemShareStore = useItemShareStore();

const displayName = ref("");
const currentUserFName = ref("");
const currentUserLName = ref("");

const items = ref([]);
const sampleimg = ref(
  "https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
);

onMounted(async () => {
  initFlowbite();
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      // User logged in already or has just logged in.
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (user.uid == doc.id) {
          currentUserFName.value = `${doc.data().firstName}`;
          currentUserLName.value = `${doc.data().lastName}`;
          displayName.value =
            currentUserFName.value + " " + currentUserLName.value;
        }
      });

      const querySnapshot1 = await getDocs(collection(db, "items"));
      let fItems = [];
      querySnapshot1.forEach((doc) => {
        if (user.uid == doc.data().ownerId) {
          const item = {
            itemId: doc.id,
            itemName: doc.data().itemName,
            location: doc.data().location,
            rentAmount: doc.data().rentAmount,
            rentRate: doc.data().rentRate,
          };
          fItems.push(item);
        }
      });
      items.value = fItems;
    } else {
      // User not logged in or has just logged out.
    }
  });
});
function gridSize(text) {
  return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8";
}
const itemShareStore = useItemShareStore();
</script>

<template>
  <main class="container mx-auto flex flex-col gap-8 px-4 py-8">
    <section class="flex flex-col gap-2 lg:flex-row">
      <div class="flex basis-9/12 gap-2">
        <!--Image-->
        <div class="flex basis-4/12 flex-col gap-2 bg-white p-4">
          <img
            src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
            alt=""
            srcset=""
          />
        </div>
        <!--Details-->
        <div
          class="flex w-full basis-8/12 flex-col justify-between bg-white p-4"
        >
          <div>
            <div class="flex flex-wrap items-start justify-between gap-2">
              <h1 class="text-3xl">
                {{ currentUserFName + " " + currentUserLName }}
              </h1>
              <div class="flex">
                <span class="material-icons text-green-600">location_on</span>
                <span>Baybay City</span>
              </div>
            </div>
            <!--Ratings-->
            <div class="my-4">
              <h2>Lender Ratings</h2>
              <div class="mb-4 flex gap-4">
                <span>4.0 / 5.0</span>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <h2>Chat Response Rate</h2>
              <div class="mb-4 flex gap-4">
                <span>4.0 / 5.0</span>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <!--location-->
            </div>
          </div>
          <!--Button actions-->
          <div class="flex flex-col items-start">
            <div class="flex flex-col gap-2">
              <RouterLink
                to="/messages/5"
                class="flex items-center justify-center gap-1 rounded-lg bg-green-600 px-5 py-3 text-white"
              >
                <span class="material-icons">forum</span>
                <span>Chat</span>
              </RouterLink>
              <!--Need some placeholder action-->
              <button
                class="flex items-center justify-center gap-1 rounded-lg border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-yellow-800"
              >
                <span class="material-icons">flag</span>
                <span>Report user</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--Lend Details-->
      <div class="flex basis-3/12 flex-row gap-4 bg-white p-4 lg:flex-col">
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
    <!--<section class="flex flex-col gap-2">
      <h1>
        {{ currentUserFName + " " + currentUserLName + "'s Favorite(s)" }}
      </h1>
      <ItemsContainer :items="itemShareStore.itemsInRange(12, 18)" />
    </section>-->
    <section class="flex flex-col gap-2">
      <h1>
        {{ currentUserFName + " " + currentUserLName + "'s Item(s)" }}
      </h1>
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
