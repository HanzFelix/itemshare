<script setup>
import { useItemShareStore } from "../stores/itemshare";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const itemShareStore = useItemShareStore();

function attemptLogin() {
  if (itemShareStore.login()) router.push("/home");
}
</script>
<template>
  <form class="flex gap-2 flex-col" @submit.stop.prevent="attemptLogin">
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
      <RouterLink to="/forgot-password" class="underline"
        >Forgot Password?</RouterLink
      >
    </p>
    <p class="pt-2">
      New here?
      <RouterLink to="/register" class="underline"
        >Create an account!</RouterLink
      >
    </p>
    <button class="py-3 px-5 text-white bg-green-800 rounded-xl">Login</button>
  </form>
</template>
