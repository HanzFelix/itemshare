<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useItemShareStore } from "@/stores/itemshare";
import { useProfileStore } from "@/stores/profile";
import ItemsContainer from "@/components/ItemsContainer.vue";
import StarRating from "@/components/StarRating.vue";
import EditProfile from "@/components/EditProfile.vue";
import MessageOwner from "@/components/MessageOwner.vue";

const itemShareStore = useItemShareStore();
const profileStore = useProfileStore();
const route = useRoute();
const useruid = ref(route.params.id || itemShareStore.myUserUid); // redundant?

const isLoading = ref(true);
const items = ref([]);

const editDialog = ref(null);
const messageDialog = ref(null);

const isMyProfile = computed(() => useruid.value == itemShareStore.myUserUid);

function showEditProfile(yes) {
  if (yes) {
    editDialog.value.showModal();
  } else {
    editDialog.value.close();
  }
}

function showMessageOwner(yes) {
  if (yes) {
    messageDialog.value.showModal();
  } else {
    messageDialog.value.close();
  }
}

onMounted(async () => {
  await profileStore.loadProfile(useruid.value);
  items.value = await itemShareStore.loadItems(12, useruid.value);
  isLoading.value = false;
});

watch(
  () => route.params.id,
  async (newId) => {
    isLoading.value = true;
    useruid.value = newId || itemShareStore.myUserUid;
    await profileStore.loadProfile(useruid.value);
    items.value = await itemShareStore.loadItems(12, useruid.value);
    isLoading.value = false;
  }
);
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
            v-if="profileStore.loadedProfile.image"
            :src="profileStore.loadedProfile.image"
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
              <h1 class="text-3xl">
                {{
                  profileStore.loadedProfile.firstName +
                  " " +
                  profileStore.loadedProfile.lastName
                }}
              </h1>
              <div class="flex">
                <span class="material-icons text-green-600">location_on</span>
                <span>{{ profileStore.loadedProfile.location }}</span>
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
            <button
              v-if="isMyProfile"
              @click="showEditProfile(true)"
              class="flex items-center justify-center gap-1 rounded-md border-2 border-text/50 bg-secondary px-8 py-2 text-text/80"
            >
              <span class="material-icons">edit</span>
              <span>Edit Profile</span>
            </button>
            <button
              v-if="!isMyProfile"
              @click="showMessageOwner(true)"
              class="flex items-center justify-center gap-1 rounded-md border-2 border-primary bg-primary px-8 py-2 text-background sm:basis-auto"
            >
              <span class="material-icons">forum</span>
              <span>Chat</span>
            </button>
            <!--Need some placeholder action-->
            <button
              v-if="!isMyProfile"
              class="flex items-center justify-center gap-1 rounded-md border-2 border-text/50 bg-secondary px-8 py-2 text-text/80"
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
    <section v-if="!isLoading" class="flex flex-col gap-2">
      <h1>
        {{
          profileStore.loadedProfile.firstName +
          " " +
          profileStore.loadedProfile.lastName +
          "'s Item(s)"
        }}
      </h1>
      <ItemsContainer :items="items" />
    </section>
  </main>
  <dialog ref="editDialog" class="rounded-xl backdrop:backdrop-brightness-50">
    <EditProfile
      @close="showEditProfile(false)"
      :useruid="useruid"
      :profile="profileStore.loadedProfile"
    />
  </dialog>
  <dialog
    ref="messageDialog"
    class="rounded-xl p-0 backdrop:backdrop-brightness-50"
  >
    <MessageOwner
      :owner-id="useruid"
      :owner-profile="profileStore.loadedProfile"
      @close="showMessageOwner(false)"
    />
  </dialog>
</template>
