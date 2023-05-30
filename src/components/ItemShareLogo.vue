<script setup>
import { RouterLink } from "vue-router";
import itemShareLogo from "../assets/ItemShareLogo.png";
</script>
<template>
  <RouterLink to="/" class="flex gap-2 items-center">
    <span
      class="text-3xl text-white font-poppins font-black underline decoration-green-900 underline-offset-4 decoration-4 md:inline-block hidden"
      >ItemShare</span
    >
    <img :src="itemShareLogo" class="w-12 rounded-xl"
  /></RouterLink>
</template>
