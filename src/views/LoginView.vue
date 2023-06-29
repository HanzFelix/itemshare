<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import firebase from "firebase/compat/app";
import { useItemShareStore } from "../stores/itemshare";
import "firebase/compat/auth";
import CustomField from "../components/CustomField.vue";

const router = useRouter();
const itemShareStore = useItemShareStore();

let errorMessage = ref("");
const email = ref("");
const password = ref("");

async function login() {
  try {
    if (await itemShareStore.login(email.value, password.value)) {
      router.push("/home");
    }
  } catch (err) {
    errorMessage.value = err;
  }
}
</script>
<template>
  <div
    class="flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-white p-8"
  >
    <form class="flex max-w-full flex-col gap-2" @submit.stop.prevent="login">
      <h1>Login</h1>
      <CustomField input-type="email" v-model="email" placeholder="Email" />
      <CustomField
        input-type="password"
        v-model="password"
        placeholder="Password"
      />
      <div
        v-show="errorMessage"
        class="errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"
      >
        {{ errorMessage }}
      </div>
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
      <button class="rounded-xl bg-green-800 px-5 py-3 text-white">
        Login
      </button>
    </form>
  </div>
</template>
