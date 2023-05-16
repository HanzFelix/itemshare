<script setup>
import { useItemShareStore } from "../stores/itemshare";
import { useRouter } from "vue-router";
const router = useRouter();

const itemShareStore = useItemShareStore();

function attemptLogin() {
  if (itemShareStore.login()) router.push("/");
}
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
      <div>
        <form
          class="bg-white gap-2 p-12 rounded-3xl flex flex-col self-center"
          @submit.stop.prevent="attemptLogin"
        >
          <h1>Login</h1>
          <input
            type="text"
            class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
            placeholder="Email/Phone Number"
          />
          <input
            type="password"
            class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
            placeholder="Password"
          />
          <p class="pt-2">
            New here? <a href="#" class="underline">Create an account!</a>
          </p>
          <button class="py-3 px-5 text-white bg-green-800 rounded-xl">
            Login
          </button>
        </form>
      </div>
      <footer class="text-right text-white">All Rights Reserved 2023. ®</footer>
    </div>
  </div>
</template>
