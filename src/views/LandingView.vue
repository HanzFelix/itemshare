<script setup>
import { RouterView } from "vue-router";
/*
TODO:
add bg image from figma's login page
add itemshare logo
migrate login <form> from here to separate view
*/
</script>
<template>
  <div class="h-full bg-green-100 flex flex-row-reverse">
    <div class="w-1/2 bg-green-600 p-8 flex flex-col justify-between">
      <header class="flex justify-between">
        <nav class="flex gap-4 text-white">
          <a href="#">About Us</a>
          <a href="#">Contacts</a>
        </nav>
        <div>ItemShare [logo]</div>
      </header>
      <!--Move this section to separate file for RouterView-->
      <div class="bg-white p-12 self-center rounded-3xl">
        <RouterView />
      </div>
      <footer class="text-right text-white">All Rights Reserved 2023. ®</footer>
    </div>
  </div>
</template>
