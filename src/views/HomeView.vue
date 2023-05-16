<script setup>
import { RouterLink } from "vue-router";
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main class="flex flex-col pt-16 container mx-auto px-4 gap-8">
    <section class="flex flex-col gap-2">
      <h1>JUST FOR YOU</h1>
      <div class="flex items-center gap-4 flex-wrap">
        <article v-for="i in 6" class="shadow-sm shadow-gray-400 p-2 w-40">
          <RouterLink to="/item">
            <img
              src="https://skillsforall.com/skillsforall/img/desktop/skillsforall.jpg"
              alt=""
              srcset=""
              class="object-contain aspect-square"
            />
            <div class="flex flex-col">
              <p>3D Scanner</p>
              <p class="text-xs">Baybay City</p>
              <p class="text-green-800">
                <span class="text-2xl">P</span>150 - per week
              </p>
            </div>
          </RouterLink>
        </article>
      </div>
    </section>
    <section class="flex flex-col gap-2">
      <h1>DISCOVER</h1>
      <div class="flex items-center gap-4 flex-wrap">
        <article v-for="i in 18" class="shadow-sm shadow-gray-400 p-2 w-40">
          <a href="#">
            <img
              src="https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
              alt=""
              srcset=""
              class="object-contain"
            />
            <div class="flex flex-col">
              <p>3D Scanner</p>
              <p class="text-xs">Baybay City</p>
              <p class="text-green-800">
                <span class="text-2xl">P</span>150 - per week
              </p>
            </div></a
          >
        </article>
      </div>
    </section>
  </main>
</template>
