<script setup>
import { RouterView } from "vue-router";
import ItemShareLogo from "@/components/ItemShareLogo.vue";
</script>
<template>
  <div
    class="flex h-full flex-col-reverse bg-background md:flex-row-reverse"
    style="
      background-image: url('/images/landingBg.jpg');
      background-size: cover;
      background-position: center;
    "
  >
    <div
      class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
    ></div>
    <div class="z-10 basis-1/2 bg-primary"></div>
  </div>
  <div
    class="absolute top-0 z-20 flex h-screen w-full flex-col md:flex-row-reverse"
  >
    <div
      class="flex w-full basis-full flex-col justify-between gap-4 overflow-y-auto p-8 md:basis-1/2"
    >
      <header class="flex items-center justify-between">
        <nav class="flex gap-4 text-background">
          <RouterLink to="/about">About Us</RouterLink>
          <RouterLink to="/about">Contacts</RouterLink>
        </nav>
        <ItemShareLogo />
      </header>
      <RouterView />
      <footer class="text-right text-background">
        All Rights Reserved 2023. ®
      </footer>
    </div>
  </div>
</template>
