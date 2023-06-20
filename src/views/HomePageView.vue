<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "../components/NavigationBar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <NavigationBar />
    <div class="basis-full overflow-y-auto">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
