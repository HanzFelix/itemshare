<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
<template>
  <main
    class="flex flex-row items-stretch py-8 container mx-auto px-4 gap-4 h-full"
  >
    <!--Recent Messages-->
    <!--Note: hiding this section is temporary workaround for mobile view, until a proper implementation is decided-->
    <aside
      class="hidden lg:flex flex-col lg:basis-1/3 box-border bg-white rounded-xl shadow-md shadow-gray-400 overflow-hidden"
    >
      <h1 class="px-6 py-4 shadow-sm shadow-gray-300 z-10">Recent Messages</h1>
      <!-- Container -->
      <div class="overflow-y-auto px-2">
        <!--TODO: Convert to RouterLink-->
        <RouterLink
          :to="'/messages/' + i"
          v-for="i in 9"
          class="flex gap-2 p-2 rounded-2xl my-2"
          active-class="bg-yellow-200"
        >
          <img
            src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
            alt=""
            class="aspect-square w-12 rounded-full"
          />
          <div class="w-full truncate">
            <p class="font-black truncate">Elong Mah</p>
            <p class="truncate text-gray-800">
              Insert Extra Lengthy and Wordy Message Here
            </p>
          </div>
        </RouterLink>
      </div>
    </aside>
    <!--Chat Window-->
    <!--Note: basis-full and lg:basis-2/3 are temporary workarounds for mobile view, until a proper implementation is decided-->
    <div
      class="basis-full lg:basis-2/3 bg-white overflow-hidden rounded-xl shadow-md shadow-gray-400"
    >
      <RouterView />
    </div>
  </main>
</template>
