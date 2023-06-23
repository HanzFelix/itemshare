<script setup>
import { useRoute } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { collection, getDocs } from "firebase/firestore";
import StarRating from "../components/StarRating.vue";

import db from "../firebase/firebaseInit.js";

const itemShareStore = useItemShareStore();
const route = useRoute();

const itemId = ref(route.params.id);
//const item = itemShareStore.itemById(id);

const sampleimg = ref(
  "https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
);

const currentUserFName = ref("");
const currentUserLName = ref("");
const itemName = ref("");
const location = ref("");
const rentAmount = ref("");
const rentRate = ref("");
const description = ref("");
const tags = ref([]);
//const imagePreview = ref();
//const imgPath = ref();

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  querySnapshot.forEach((doc) => {
    if (itemId.value == doc.id) {
      currentUserFName.value = doc.data().ownerFName;
      currentUserLName.value = doc.data().ownerLName;
      itemName.value = doc.data().itemName;
      location.value = doc.data().location;
      rentAmount.value = doc.data().rentAmount;
      rentRate.value = doc.data().rentRate;
      description.value = doc.data().description;
      tags.value = doc.data().tags;
    }
  });
});
</script>
<template>
  <main class="container mx-auto flex flex-col gap-4 px-4 py-8">
    <section class="flex flex-row-reverse gap-2">
      <RouterLink to="/home">Close X</RouterLink>
    </section>
    <!--Item-->
    <section class="flex flex-col gap-2 lg:flex-row">
      <!--Images-->
      <div class="flex basis-3/12 flex-col gap-2 bg-white p-4">
        <img :src="sampleimg" alt="" srcset="" />
        <div class="flex w-full">
          <img
            class="aspect-auto w-1/3 px-1"
            :src="sampleimg"
            alt=""
            srcset=""
          />
          <img
            class="aspect-auto w-1/3 px-1"
            :src="sampleimg"
            alt=""
            srcset=""
          />
          <img
            class="aspect-auto w-1/3 px-1"
            :src="sampleimg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <!--Details-->
      <div class="flex w-full basis-6/12 flex-col justify-between bg-white p-4">
        <div>
          <div class="flex items-start justify-between">
            <h1>{{ itemName }}</h1>
            <span
              class="rounded-full bg-green-600 px-4 py-1 text-xs font-black text-white"
            >
              AVAILABLE
            </span>
          </div>

          <!--rent rate-->
          <div class="my-4">
            <p class="text-green-600">
              <span class="mr-2 text-2xl">₱</span
              >{{ rentAmount + " - " + rentRate }}
            </p>
            <!--rating-->
            <div class="flex gap-4">
              <span>4.0 / 5.0</span>
              <StarRating value="4" />
            </div>
            <!--location-->
            <div class="flex">
              <span class="material-icons text-green-600">location_on</span>
              <span>{{ location }}</span>
            </div>
          </div>
          <!--description-->
          <p>
            {{ description }}
          </p>
        </div>
        <div class="mt-2 flex flex-col items-start">
          <div class="flex gap-2">
            Tags:
            <ul class="flex flex-wrap gap-2">
              <!--Clicking on a tag should redirect user to search results with the same tag-->
              <li
                v-for="tag in tags"
                class="rounded-full border-2 border-yellow-500 bg-yellow-200 px-4 py-1 text-xs text-yellow-700"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-2">
            <button class="mt-4 rounded-lg bg-green-600 px-5 py-3 text-white">
              Rent
            </button>
            <button
              class="rounded-lg border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-center text-yellow-800"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
      <!--Lender Details-->
      <div class="basis-3/12 bg-white p-4">
        <h2>Lender</h2>
        <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <img
              class="aspect-square w-12 rounded-full"
              :src="itemShareStore.loadedProfile(1).image"
              alt=""
              srcset=""
            />
            <span class="whitespace-nowrap">{{
              currentUserFName + " " + currentUserLName
            }}</span>
          </div>
          <button class="flex items-center gap-1">
            <span class="material-icons text-green-600">forum</span>Chat
          </button>
        </div>
        <!--rating-->
        <h2>Lender Ratings</h2>
        <div class="mb-4 flex items-center gap-4">
          <span>4.0 / 5.0</span>
          <StarRating value="4" />
        </div>

        <!--rating-->
        <h2>Chat Response Rate</h2>
        <div class="mb-4 flex items-center gap-4">
          <span>3.0 / 5.0</span>
          <StarRating value="3" />
        </div>
      </div>
    </section>
    <section class="flex flex-col gap-2">
      <div
        class="flex flex-col justify-between gap-4 bg-gray-50 p-4 md:flex-row md:items-center"
      >
        <h1>Item Reviews and Rating</h1>
        <div
          class="flex flex-wrap items-start gap-4 text-sm sm:text-base md:items-center"
        >
          <div class="flex items-center gap-1">
            <span class="material-icons text-green-600">filter_alt</span>
            <span>Filter:</span>
            <select name="" id="" class="text-xs sm:text-base">
              <option value="">All Star</option>
            </select>
          </div>
          <div class="flex items-center gap-1">
            <span class="material-icons text-green-600">sort</span>
            <span>Sort:</span>
            <select name="" id="" class="text-xs sm:text-base">
              <option value="">Relevance</option>
              <option value="">???</option>
            </select>
          </div>
        </div>
      </div>
      <section class="flex flex-col gap-2">
        <article v-for="i in 6" class="flex flex-col gap-2 bg-white p-4">
          <div class="flex items-center gap-2">
            <img
              class="aspect-square w-12 rounded-full"
              :src="itemShareStore.loadedProfile(i).image"
              alt=""
              srcset=""
            />
            <div class="flex flex-col">
              <StarRating value="4" />
              <span class="truncate text-gray-700">
                {{
                  itemShareStore.loadedProfile(i).firstname +
                  " " +
                  itemShareStore.loadedProfile(i).lastname
                }}</span
              >
            </div>
          </div>
          <p class="py-2">user review........................</p>
        </article>
      </section>
    </section>
  </main>
</template>
