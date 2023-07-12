<script setup>
import { RouterView } from "vue-router";
import { defineAsyncComponent } from "vue";
const NavigationBar = defineAsyncComponent(() =>
  import("@/components/NavigationBar.vue")
);
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
</script>

<template>
  <div class="flex h-screen flex-col">
    <NavigationBar />
    <div class="basis-full overflow-y-auto">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
