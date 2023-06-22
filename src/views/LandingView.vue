<script setup>
import { RouterView, RouterLink } from "vue-router";
import ItemShareLogoLP from "../components/ItemShareLogoLP.vue";
/*
TODO:
add bg image from figma's login page
*/
</script>
<template>
  <div
    class="h-full bg-green-100 flex md:flex-row-reverse flex-col-reverse"
    style="
      background-image: url('https://wordpress.heals.com/blog/wp-content/uploads/2021/08/Colourful-sofa-cushions-1024x485.jpg;');
      background-size: cover;
      background-position: center;
    "
  >
    <div
      class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
    ></div>
    <div class="basis-1/2 bg-green-600 z-10"></div>
  </div>
  <div
    class="absolute top-0 h-screen flex md:flex-row-reverse flex-col w-full z-20"
  >
    <div
      class="basis-full md:basis-1/2 p-8 flex flex-col justify-between w-full gap-4 overflow-y-auto"
    >
      <header class="flex justify-between items-center">
        <nav class="flex gap-4 text-white">
          <a href="#">About Us</a>
          <a href="#">Contacts</a>
        </nav>
        <ItemShareLogoLP />
      </header>
      <RouterView />
      <footer class="text-right text-white">All Rights Reserved 2023. ®</footer>
    </div>
  </div>
</template>
