<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavigationBar />
  <div class="overflow-y-auto basis-full">
    <RouterView />
  </div>
  <Footer />
</template>
