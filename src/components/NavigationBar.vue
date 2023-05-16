<script setup>
import { RouterLink } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import ItemShareLogo from "./ItemShareLogo.vue";

const itemShareStore = useItemShareStore();
</script>
<template>
  <!-- Temporary header to demonstrate vue router -->
  <header
    class="bg-green-600 flex flex-col fixed w-full text-white"
    v-if="!['login', 'register'].includes($route.name)"
  >
    <nav
      class="flex items-center justify-between container mx-auto py-2 bg-green-600"
    >
      <ItemShareLogo />
      <div class="flex gap-4">
        <p><span>[Z]</span>NOTIFICATIONS</p>
        <p><span>[Z]</span>MY ITEMS</p>
        <p><span>[Z]</span>FAVORITES</p>
        <p><span>[Z]</span>MESSAGES</p>
        <RouterLink to="/login">LOG OUT</RouterLink>
        <RouterLink to="/profile">PROFILE</RouterLink>
      </div>
    </nav>
    <section class="bg-green-500">
      <div class="container mx-auto py-4 flex justify-between items-center">
        <ol class="flex gap-10">
          <li>NEW</li>
          <li>HOT</li>
          <li>TOP RATED</li>
          <li>KIDS</li>
          <li>MEN</li>
          <li>WOMEN</li>
        </ol>
        <form class="bg-yellow-200 border-2 pr-4 border-yellow-500 rounded-xl">
          <input
            type="text"
            name=""
            id=""
            class="placeholder-yellow-700 rounded-l-xl text-black py-1 px-4 text-sm bg-transparent"
            placeholder="Search..."
          />
          <button class="text-yellow-700 px-2">Q</button>
          <button class="text-yellow-700">=</button>
        </form>
      </div>
    </section>
  </header>
</template>
