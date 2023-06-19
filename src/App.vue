<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <NavigationBar />
  <div class="overflow-y-auto basis-full">
    <RouterView />
  </div>
  <Footer />
</template>
