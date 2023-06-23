<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import ItemShareLogo from "./ItemShareLogo.vue";
import NotificationsPopup from "./NotificationsPopup.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { collection, getDocs } from "firebase/firestore";

// initialize components based on data attribute selectors
const db = firebase.firestore();

const displayName = ref("");
const currentUserFName = ref();
const currentUserLName = ref();

onMounted(() => {
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
    } else {
      // User not logged in or has just logged out.
    }
  });
});

const router = useRouter();
const itemShareStore = useItemShareStore();

function searchItem() {
  if (itemShareStore.searchItem()) router.push("/search");
}

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(
      function () {
        alert("Successfully Signed Out");
        router.push("/");
      },
      function (error) {
        alert("Sign Out Error", error);
      }
    );
};
</script>
<template>
  <header
    class="sticky flex w-full flex-col bg-green-600 text-white shadow-sm shadow-gray-400"
    v-if="!['login', 'register'].includes($route.name)"
  >
    <nav
      class="container mx-auto flex items-center justify-between bg-green-600 px-4 py-2"
    >
      <ItemShareLogo />
      <ul class="flex items-center gap-4">
        <li>
          <RouterLink to="/create-item" class="flex gap-1">
            <span class="material-icons text-3xl lg:text-base">add_box</span>
            <span class="hidden lg:inline-block">CREATE ITEM</span>
          </RouterLink>
        </li>
        <li>
          <button
            type="button"
            class="flex gap-1"
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdownNotifications"
            data-dropdown-trigger="click"
          >
            <span class="material-icons text-3xl lg:text-base"
              >notifications</span
            ><span class="hidden lg:inline-block">NOTIFICATIONS</span>
          </button>
          <NotificationsPopup />
        </li>
        <!--p class="flex gap-1">
          <span class="material-icons lg:text-base text-3xl">inbox</span
          ><span class="hidden lg:inline-block">MY ITEMS</span>
        </p-->
        <!--p class="flex gap-1">
          <span class="material-icons lg:text-base text-3xl"
            >favorite_border</span
          ><span class="hidden lg:inline-block">FAVORITES</span>
        </p-->
        <li>
          <RouterLink to="/messages" class="flex gap-1">
            <span class="material-icons text-3xl lg:text-base">chat</span
            ><span class="hidden lg:inline-block">MESSAGES</span>
          </RouterLink>
        </li>
        <!--TODO: move logout to somewhere else-->
        <li>
          <button @click.prevent="signOut">LOG OUT</button>
        </li>
        <li>
          <RouterLink to="/profile">
            <img
              src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
              alt=""
              class="aspect-square w-10 rounded-full"
          /></RouterLink>
        </li>
        <h5>{{ displayName }}</h5>
      </ul>
    </nav>
    <section class="bg-green-500">
      <div
        class="container mx-auto flex flex-col-reverse items-stretch justify-between px-4 lg:flex-row"
      >
        <ol
          class="flex scroll-p-12 gap-8 overflow-x-auto whitespace-nowrap px-4 pb-4 lg:py-4"
          v-if="['home'].includes($route.name)"
        >
          <li>NEW</li>
          <li>HOT</li>
          <li>TOP RATED</li>
          <li>KIDS</li>
          <li>MEN</li>
          <li>WOMEN</li>
        </ol>
        <div></div>
        <form
          class="my-3 flex rounded-xl border-2 border-yellow-500 bg-yellow-200"
          v-if="!['search'].includes($route.name)"
          @submit.stop.prevent="searchItem()"
        >
          <input
            type="text"
            name=""
            id=""
            class="w-full rounded-l-xl border-none bg-transparent px-4 py-1 text-sm text-black placeholder-yellow-700"
            placeholder="Search..."
          />
          <button
            class="material-icons px-2 py-1 text-yellow-700 lg:py-0 lg:text-lg"
          >
            search
          </button>
          <RouterLink
            to="/search"
            class="material-icons py-1 pr-2 text-yellow-700 lg:py-0 lg:text-lg"
            >menu</RouterLink
          >
        </form>
      </div>
    </section>
  </header>
</template>
