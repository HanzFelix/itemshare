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
    <div class="basis-1/2 bg-green-600"></div>
  </div>
  <div class="absolute top-0 h-screen flex md:flex-row-reverse flex-col w-full">
    <div
      class="basis-full md:basis-1/2 p-8 flex flex-col justify-between w-full gap-4 overflow-y-auto"
    >
      <header class="flex justify-between">
        <nav class="flex gap-4 text-white">
          <a href="#">About Us</a>
          <a href="#">Contacts</a>
        </nav>
        <ItemShareLogoLP />
      </header>
      <!--Move this section to separate file for RouterView-->
      <div
        class="bg-white p-8 self-center rounded-3xl flex flex-col overflow-y-auto"
      >
        <RouterView />
      </div>
      <footer class="text-right text-white">All Rights Reserved 2023. ®</footer>
    </div>
  </div>
</template>
