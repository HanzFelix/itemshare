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
      <div class="flex gap-4 nav-list">
        <p><span>[Z]</span>NOTIFICATIONS</p>
        <p><span>[Z]</span>MY ITEMS</p>
        <p><span>[Z]</span>FAVORITES</p>
        <p><span>[Z]</span>MESSAGES</p>
        <RouterLink to="/login">LOG OUT</RouterLink>
        <RouterLink to="/profile">PROFILE</RouterLink>
      </div>
    </nav>
    <section class="bg-green-500">
      <ol class="flex gap-10 container mx-auto py-4">
        <li>NEW</li>
        <li>HOT</li>
        <li>TOP RATED</li>
        <li>KIDS</li>
        <li>MEN</li>
        <li>WOMEN</li>
      </ol>
    </section>
  </header>
</template>
