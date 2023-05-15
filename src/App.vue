<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useItemShareStore } from './stores/itemshare'

const itemShareStore = useItemShareStore();
</script>

<template>
  <!-- Temporary header to demonstrate vue router -->
  <header class="bg-green-500 py-2 px-8 flex gap-4 fixed w-full" v-if="!($route.name).includes('login')">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/item">Item Detail</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
  </header>
  <RouterView />
</template>
