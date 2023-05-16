<script setup>
import { useItemShareStore } from "../stores/itemshare";
import { useRouter } from "vue-router";

const router = useRouter();

const itemShareStore = useItemShareStore();

function attemptRegister() {
  // TODO: not yet complete
  if (itemShareStore.login()) router.push("/");
}
</script>
<template>
  <form class="flex gap-2 flex-col" @submit.stop.prevent="attemptRegister">
    <h1>Create an account</h1>
    <div class="flex gap-12 flex-wrap">
      <div class="flex flex-col gap-2">
        <label for="phone">Phone Number</label>
        <input
          name="phone"
          type="text"
          class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="Enter your phone number"
        />
        <button
          class="py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl"
        >
          Send SMS Code
        </button>
        <label for="email">Email Address</label>
        <input
          name="email"
          type="email"
          class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="Email"
        />
        <label for="fname">First Name</label>
        <input
          name="fname"
          type="text"
          class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="First Name"
        />
        <label for="lname">Last Name</label>
        <input
          name="lname"
          type="text"
          class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="Last Name"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="fname">First Name</label>
        <select
          name="fname"
          type="text"
          class="py-3 px-5 bg-yellow-200 text-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="First Name"
        >
          <option>Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
        <label for="bday">Birthday</label>
        <input
          name="bday"
          type="date"
          class="py-3 px-5 bg-yellow-200 text-yellow-700 border-2 border-yellow-500 rounded-xl"
        />
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="Password"
        />
        <button class="py-3 px-5 text-white bg-green-800 rounded-xl mt-4">
          CREATE ACCOUNT
        </button>
        <RouterLink
          to="/login"
          class="py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl text-center"
        >
          GO BACK
        </RouterLink>
      </div>
    </div>
    <!--
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
      New here?
      <RouterLink to="/register" class="underline"
        >Create an account!</RouterLink
      >
    </p>
    <button class="py-3 px-5 text-white bg-green-800 rounded-xl">Login</button>
    -->
  </form>
</template>
