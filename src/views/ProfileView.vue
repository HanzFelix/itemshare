<script setup>
import { RouterLink } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import { ref } from "vue";
import StarRating from "../components/StarRating.vue";
import ItemsContainer from "../components/ItemsContainer.vue";
import EditProfile from "../components/EditProfile.vue";
const itemShareStore = useItemShareStore();

const editDialog = ref(null);
function showEditProfile() {
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
            :src="itemShareStore.loadedProfile.image"
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
                  {{
                    itemShareStore.loadedProfile.firstname +
                    " " +
                    itemShareStore.loadedProfile.lastname
                  }}
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
                <span>{{ itemShareStore.loadedProfile.location }}</span>
              </div>
            </div>
            <!--Ratings-->
            <div class="my-4 block flex-row md:flex xl:block">
              <div class="basis-full">
                <h2>Lender Ratings</h2>
                <div class="mb-4 flex items-center gap-4">
                  <span>3.0 / 5.0</span>
                  <StarRating value="3" />
                </div>
              </div>
              <div class="basis-full">
                <h2 class="">Chat Response Rate</h2>
                <div class="mb-4 flex items-center gap-4">
                  <span>4.0 / 5.0</span>
                  <StarRating value="4" />
                </div>
              </div>
              <!--location-->
            </div>
          </div>
          <!--Button actions-->
          <div class="block flex-col items-start lg:flex">
            <div class="flex flex-row gap-2 lg:flex-col">
              <RouterLink
                to="/messages/5"
                class="flex basis-full items-center justify-center gap-1 rounded-lg bg-green-600 px-5 py-3 text-white"
              >
                <span class="material-icons">forum</span>
                <span>Chat</span>
              </RouterLink>
              <!--Need some placeholder action-->
              <button
                class="flex basis-full items-center justify-center gap-1 rounded-lg border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-yellow-800"
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
    <section class="flex flex-col gap-2">
      <h1>Isaac Einstein's Favorites</h1>
      <ItemsContainer :items="itemShareStore.itemsInRange(12, 18)" />
    </section>
    <section class="flex flex-col gap-2">
      <h1>Isaac Einstein's Items</h1>
      <ItemsContainer :items="itemShareStore.itemsInRange(0, 18)" />
    </section>
  </main>
  <dialog ref="editDialog" class="rounded-xl backdrop:backdrop-brightness-50">
    <EditProfile @close="hideEditProfile" />
  </dialog>
</template>
