<script setup>
import { RouterLink, useRoute } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import StarRating from "../components/StarRating.vue";
import ItemsContainer from "../components/ItemsContainer.vue";
import { onMounted, ref, watch } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import db from "../firebase/firebaseInit.js";
import EditProfile from "../components/EditProfile.vue";

const itemShareStore = useItemShareStore();
const route = useRoute();
var useruid = route.params.id || itemShareStore.myUserUid; // redundant?

const items = ref([]);
const profile = ref({
  firstName: "",
  lastName: "",
  image: "",
  location: "",
});

onMounted(async () => {
  initFlowbite();
  profile.value = await itemShareStore.loadProfile(useruid);
  items.value = await itemShareStore.loadItems(12, useruid);
});
watch(
  () => route.params.id,
  async (newId) => {
    newId = newId || itemShareStore.myUserUid;
    profile.value = await itemShareStore.loadProfile(newId);
    items.value = await itemShareStore.loadItems(12, newId);
  }
);
const editDialog = ref(null);
function showEditProfile() {
  itemShareStore.editProfile = profile.value;
  editDialog.value.showModal();
}

function hideEditProfile() {
  editDialog.value.close();
}
</script>

<template>
  <main class="container mx-auto flex flex-col gap-8 px-4 py-8">
    <section class="flex flex-col gap-2 lg:flex-row">
      <div class="flex basis-9/12 flex-col gap-2 sm:flex-row">
        <!--Image-->
        <div
          class="flex basis-4/12 flex-col gap-2 bg-white p-4 shadow-sm shadow-secondary"
        >
          <img
            :src="profile.image"
            alt=""
            srcset=""
            class="aspect-square w-full object-contain"
          />
        </div>
        <!--Details-->
        <div
          class="flex w-full basis-8/12 flex-col justify-between bg-white p-4 shadow-sm shadow-secondary"
        >
          <div>
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div class="flex items-start gap-2">
                <h1 class="text-3xl">
                  {{ profile.firstName + " " + profile.lastName }}
                </h1>
                <button
                  v-if="useruid == itemShareStore.myUserUid"
                  @click="showEditProfile"
                  class="material-icons rounded-md border-2 border-text border-opacity-50 bg-accent px-1.5 py-0.5 text-base text-text text-opacity-60"
                >
                  edit
                </button>
              </div>
              <div class="flex">
                <span class="material-icons text-green-600">location_on</span>
                <span>{{ profile.location }}</span>
              </div>
            </div>
            <!--Ratings-->
            <div class="my-4">
              <h2>Lender Ratings</h2>
              <div class="mb-4 flex gap-4">
                <span>3.0 / 5.0</span>
                <StarRating value="3" />
              </div>
              <h2>Chat Response Rate</h2>
              <div class="mb-4 flex gap-4">
                <span>4.0 / 5.0</span>
                <StarRating value="4" />
              </div>
              <!--location-->
            </div>
          </div>
          <!--Button actions-->
          <div class="flex flex-col justify-end gap-2 md:flex-row">
            <RouterLink
              to="/messages/5"
              class="flex basis-1/2 items-center justify-center gap-1 rounded-md bg-primary px-8 py-2 text-background sm:basis-auto"
            >
              <span class="material-icons">forum</span>
              <span>Chat</span>
            </RouterLink>
            <!--Need some placeholder action-->
            <button
              class="flex basis-1/2 items-center justify-center gap-1 rounded-md border-2 border-text border-opacity-50 bg-secondary px-8 py-2 text-text text-opacity-80 transition-colors hover:bg-opacity-90 sm:basis-auto"
            >
              <span class="material-icons">flag</span>
              <span>Report user</span>
            </button>
          </div>
        </div>
      </div>
      <!--Lend Details-->
      <div
        class="flex basis-3/12 flex-row gap-4 bg-white p-4 shadow-sm shadow-secondary lg:flex-col"
      >
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
        {{ profile.firstName + " " + profile.lastName + "'s Item(s)" }}
      </h1>
      <ItemsContainer :items="items" />
    </section>
  </main>
  <dialog ref="editDialog" class="rounded-xl backdrop:backdrop-brightness-50">
    <EditProfile
      @close="hideEditProfile"
      :useruid="useruid"
      :profile="profile"
    />
  </dialog>
</template>
