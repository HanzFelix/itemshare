<script setup>
import { RouterView } from "vue-router";
import ItemShareLogo from "../components/ItemShareLogo.vue";
/*
TODO:
add bg image from figma's login page
*/
</script>
<template>
  <div
    class="h-full bg-green-100 flex flex-row-reverse"
    style="
      background-image: url('https://wordpress.heals.com/blog/wp-content/uploads/2021/08/Colourful-sofa-cushions-1024x485.jpg;');
      background-size: cover;
      background-position: center;
    "
  >
    <div class="w-1/2 bg-green-600 p-8 flex flex-col justify-between">
      <header class="flex justify-between">
        <nav class="flex gap-4 text-white">
          <a href="#">About Us</a>
          <a href="#">Contacts</a>
        </nav>
        <ItemShareLogo />
      </header>
      <!--Move this section to separate file for RouterView-->
      <div class="bg-white p-12 self-center rounded-3xl">
        <RouterView />
      </div>
      <footer class="text-right text-white">All Rights Reserved 2023. ®</footer>
    </div>
  </div>
</template>
