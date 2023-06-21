<script setup>
import { ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const email = ref("");
let error = ref(false);
let errorMessage = ref("");
let success = ref(false);
let successMessage = ref("");

const resetPassword = async () => {
  if (email.value !== "") {
    try {
      await firebase
        .auth()
        .sendPasswordResetEmail(email.value)
        .then(() => {
          success.value = true;
          successMessage.value = "Check your email to reset your password";
          error.value = false;
        });
    } catch (err) {
      success.value = false;
      error.value = true;
      errorMessage.value = err.message;
      console.log("error");
    }
    console.log("success");
  } else {
    success.value = false;
    error.value = true;
    errorMessage.value = "Please enter your email address.";
  }
  console.log("failed");
};
</script>

<template>
  <div v-show="success" class="successMessage bg-white rounded-md">
    {{ successMessage }}
    <button
      class="py-3 px-5 text-white bg-gray-800 rounded-xl flex flex-col m-auto mt-5"
    >
      <RouterLink to="/login">Close</RouterLink>
    </button>
  </div>
  <form
    @submit.stop.prevent="resetPassword"
    v-show="!success"
    class="flex gap-2 flex-col"
  >
    <h2>Enter Email that is associated with your account.</h2>
    <input
      v-model="email"
      type="text"
      class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
      placeholder="Email Address"
    />
    <div
      v-show="error"
      class="errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"
    >
      {{ errorMessage }}
    </div>
    <button class="py-3 px-5 text-white bg-green-800 rounded-xl">
      Reset Password
    </button>
    <button class="py-3 px-5 text-white bg-green-800 rounded-xl">
      <RouterLink to="/login">Back</RouterLink>
    </button>
  </form>
</template>
