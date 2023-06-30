<script setup>
import { RouterLink } from "vue-router";
import itemShareLogo from "../assets/ItemShareLogo.png";
</script>
<template>
  <RouterLink to="/" class="flex items-center gap-2">
    <span
      class="font-poppins hidden select-none text-3xl font-black text-background underline decoration-accent decoration-2 underline-offset-4 md:inline-block"
      >ItemShare</span
    >
    <img :src="itemShareLogo" class="w-10 rounded-xl" loading="lazy"
  /></RouterLink>
</template>
