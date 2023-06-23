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
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage.value = "Invalid email";
            break;
          case "auth/user-not-found":
            errorMessage.value = "No account with that email was found";
            break;
          case "auth/wrong-password":
            errorMessage.value = "Incorrect password";
            break;
          default:
            errorMessage.value = "Email or password was incorrect";
            break;
        }
      });
  } else {
    error.value = true;
    errorMessage.value = "Please fill out all the fields!";
  }
};
</script>
<template>
  <div
    class="flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-white p-8"
  >
    <form class="flex max-w-full flex-col gap-2" @submit.stop.prevent="login">
      <h1>Login</h1>
      <input
        v-model="email"
        type="text"
        class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
        placeholder="Email"
      />
      <input
        v-model="password"
        type="password"
        class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
        placeholder="Password"
      />
      <div
        v-show="error"
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
