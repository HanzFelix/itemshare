<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useItemShareStore } from "../stores/itemshare";

const router = useRouter();
const itemShareStore = useItemShareStore();
let errorMessage = ref("");

const registerDetails = ref({
  phoneNumber: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "Select",
  birthday: "",
  password: "",
  confirmPassword: "",
  terms: false,
});

async function register() {
  try {
    if (await itemShareStore.register(registerDetails.value))
      router.push("/home");
  } catch (error) {
    errorMessage.value = error;
  }
}
</script>
<template>
  <div
    class="flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-white p-8"
  >
    <form
      class="flex max-w-full flex-col gap-2"
      @submit.stop.prevent="register"
    >
      <h1>Create an account</h1>
      <div class="flex flex-col gap-2 xl:flex-row xl:gap-8">
        <div class="flex basis-1/2 flex-col gap-2">
          <label for="phone">Phone Number</label>
          <input
            v-model="registerDetails.phoneNumber"
            name="phone"
            type="tel"
            class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
            placeholder="Enter your phone number"
          />
          <button
            class="rounded-xl border-2 border-green-800 bg-white px-5 py-3 text-green-800"
          >
            Send SMS Code
          </button>
          <label for="email">Email Address</label>
          <input
            v-model="registerDetails.email"
            name="email"
            type="email"
            class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
            placeholder="Email"
          />
          <label for="fname">First Name</label>
          <input
            v-model="registerDetails.firstName"
            name="fname"
            type="text"
            class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
            placeholder="First Name"
          />
          <label for="lname">Last Name</label>
          <input
            v-model="registerDetails.lastName"
            name="lname"
            type="text"
            class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
            placeholder="Last Name"
          />
          <label for="fname">Gender</label>
          <select
            v-model="registerDetails.gender"
            name="fname"
            class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-yellow-700"
            placeholder="Gender"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>
        <div class="flex basis-1/2 flex-col gap-2">
          <label for="bday">Birthday</label>
          <input
            v-model="registerDetails.birthday"
            name="bday"
            type="date"
            class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-yellow-700"
          />
          <label for="password">Password</label>
          <input
            v-model="registerDetails.password"
            name="password"
            type="password"
            class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
            placeholder="Password"
          />
          <label for="confirm password">Confirm Password</label>
          <input
            v-model="registerDetails.confirmPassword"
            name="confirm password"
            type="password"
            class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
            placeholder="Confirm Password"
          />
          <div
            v-show="errorMessage"
            class="errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"
          >
            {{ errorMessage }}
          </div>
          <p class="text-sm">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              v-model="registerDetails.terms"
            />
            <span> I agree to the </span>
            <RouterLink to="/terms-and-conditions" class="underline">
              Terms and Conditions
            </RouterLink>
          </p>
          <button class="rounded-xl bg-green-800 px-5 py-3 text-white">
            CREATE ACCOUNT
          </button>
          <RouterLink
            to="/login"
            class="rounded-xl border-2 border-green-800 bg-white px-5 py-3 text-center text-green-800"
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
    --></form>
  </div>
</template>
