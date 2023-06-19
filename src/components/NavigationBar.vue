<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import ItemShareLogo from "./ItemShareLogo.vue";
import NotificationsPopup from "./NotificationsPopup.vue";

const router = useRouter();
const itemShareStore = useItemShareStore();

function searchItem() {
  if (itemShareStore.searchItem()) router.push("/search");
}
</script>
<template>
  <!-- Temporary header to demonstrate vue router -->
  <header
    class="bg-green-600 flex flex-col sticky w-full text-white shadow-sm shadow-gray-400"
    v-if="!['login', 'register'].includes($route.name)"
  >
    <nav
      class="flex items-center justify-between container mx-auto py-2 px-4 bg-green-600"
    >
      <ItemShareLogo />
      <ul class="flex gap-4 items-center">
        <li>
          <button
            type="button"
            class="flex gap-1"
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdownNotifications"
            data-dropdown-trigger="click"
          >
            <span class="material-icons lg:text-base text-3xl"
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
            <span class="material-icons lg:text-base text-3xl">chat</span
            ><span class="hidden lg:inline-block">MESSAGES</span>
          </RouterLink>
        </li>
        <!--TODO: move logout to somewhere else-->
        <li>
          <RouterLink to="/login">LOG OUT</RouterLink>
        </li>
        <!-- TODO: replace with user avatar-->
        <li>
          <RouterLink to="/profile">
            <img
              src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
              alt=""
              class="aspect-square w-10 rounded-full"
          /></RouterLink>
        </li>
      </ul>
    </nav>
    <section class="bg-green-500">
      <div
        class="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-stretch px-4"
      >
        <ol
          class="flex px-4 gap-8 lg:py-4 pb-4 whitespace-nowrap overflow-x-auto scroll-p-12"
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
          class="bg-yellow-200 border-2 pr-4 border-yellow-500 rounded-xl py-1 lg:py-0 flex my-3"
          v-if="!['search'].includes($route.name)"
          @submit.stop.prevent="searchItem()"
        >
          <input
            type="text"
            name=""
            id=""
            class="placeholder-yellow-700 rounded-l-xl text-black py-1 px-4 text-sm bg-transparent w-full"
            placeholder="Search..."
          />
          <button class="text-yellow-700 px-2">Q</button>
          <RouterLink to="/search" class="text-yellow-700">=</RouterLink>
        </form>
      </div>
    </section>
  </header>
</template>
