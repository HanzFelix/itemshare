<script setup>
import { RouterLink, useRoute } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import StarRating from "../components/StarRating.vue";
import ItemsContainer from "../components/ItemsContainer.vue";
import { onMounted, ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import db from "../firebase/firebaseInit.js";
import EditProfile from "../components/EditProfile.vue";

const itemShareStore = useItemShareStore();
const route = useRoute();
const id = route.params.id || itemShareStore.myUserId;

const items = ref([]);
const profile = ref({
  id: 9,
  firstName: "Isaac",
  lastName: "Einstein",
  image: "https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",
  location: "Baybay City",
});

onMounted(async () => {
  initFlowbite();
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      // User logged in already or has just logged in.
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (user.uid == doc.id) {
          profile.value.firstName = `${doc.data().firstName}`;
          profile.value.lastName = `${doc.data().lastName}`;
          profile.value.location = `${doc.data().location}`;
          profile.value.image = doc.data().image;
        }
      });

      const querySnapshot1 = query(
        collection(db, "items"),
        where("ownerId", "==", user.uid)
      );
      const querySnapshotf = await getDocs(querySnapshot1);
      let fItems = [];
      querySnapshotf.forEach((doc) => {
        const item = {
          itemId: doc.id,
          itemName: doc.data().itemName,
          location: doc.data().location,
          rentAmount: doc.data().rentAmount,
          rentRate: doc.data().rentRate,
          image:
            "https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",
        };
        fItems.push(item);
      });
      items.value = fItems;
    } else {
      // User not logged in or has just logged out.
    }
  });
});

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
        <div class="flex basis-4/12 flex-col gap-2 bg-white p-4">
          <img
            :src="profile.image"
            alt=""
            srcset=""
            class="aspect-square w-full object-contain"
          />
        </div>
        <!--Details-->
        <div
          class="flex w-full basis-8/12 flex-col justify-between bg-white p-4"
        >
          <div>
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div class="flex items-center gap-2">
                <h1 class="text-3xl">
                  {{ profile.firstName + " " + profile.lastName }}
                </h1>
                <button
                  v-if="true"
                  @click="showEditProfile"
                  class="material-icons rounded-md border border-yellow-500 bg-yellow-200 p-0.5 px-1.5 text-base text-yellow-800"
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
        {{ profile.firstName + " " + profile.lastName + "'s Item(s)" }}
      </h1>
      <ItemsContainer :items="items" />
    </section>
  </main>
  <dialog ref="editDialog" class="rounded-xl backdrop:backdrop-brightness-50">
    <EditProfile @close="hideEditProfile" :userid="id" />
  </dialog>
</template>
