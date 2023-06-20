<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const router = useRouter();

let error = ref(false);
let errorMessage = ref("");
const email = ref("");
const password = ref("");

const login = async () => {
  if (email.value !== "" && password.value !== "") {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        error.value = true;
        errorMessage.value = err.code;
      });
  } else {
    error.value = true;
    errorMessage.value = "Please fill out all the fields!";
  }
};
</script>
<template>
  <form class="flex gap-2 flex-col" @submit.stop.prevent="login">
    <h1>Login</h1>
    <input
      v-model="email"
      type="text"
      class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
      placeholder="Email"
    />
    <input
      v-model="password"
      type="password"
      class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
      placeholder="Password"
    />
    <div
      v-show="error"
      class="errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"
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
    <button class="py-3 px-5 text-white bg-green-800 rounded-xl">Login</button>
  </form>
</template>
