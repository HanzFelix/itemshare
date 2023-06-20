<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/firebaseInit.js";

const router = useRouter();

const phoneNumber = ref("");
const email = ref("");
const firstName = ref("");
const lastName = ref("");
const gender = ref("Select");
const birthday = ref("");
const password = ref("");
const verified = ref(false);
const admin = ref(false);
let error = ref(false);
let errorMessage = ref("");

const register = async () => {
  try {
    if (
      phoneNumber.value !== "" &&
      email.value !== "" &&
      firstName.value !== "" &&
      lastName.value !== "" &&
      gender.value !== "Select" &&
      birthday.value !== "" &&
      password.value !== ""
    ) {
      const firebaseAuth = await firebase.auth();
      const createUser = await firebaseAuth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      const result = await createUser;
      const dataBase = db.collection("users").doc(result.user.uid);
      await dataBase.set({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        gender: gender.value,
        birthday: birthday.value,
        verified: verified.value,
        admin: admin.value,
      });
      router.push("/home");
      return;
    } else {
      error.value = true;
      errorMessage.value = "Please fill out all the fields!";
    }
  } catch (err) {
    error.value = true;
    errorMessage.value = err.message;
  }
};
</script>
<template>
  <form class="flex gap-2 flex-col" @submit.stop.prevent="register">
    <h1>Create an account</h1>
    <div class="flex xl:gap-12 gap-2 xl:flex-row flex-col">
      <div class="flex flex-col gap-2 basis-1/2">
        <label for="phone">Phone Number</label>
        <input
          v-model="phoneNumber"
          name="phone"
          type="tel"
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
          v-model="email"
          name="email"
          type="email"
          class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="Email"
        />
        <label for="fname">First Name</label>
        <input
          v-model="firstName"
          name="fname"
          type="text"
          class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="First Name"
        />
        <label for="lname">Last Name</label>
        <input
          v-model="lastName"
          name="lname"
          type="text"
          class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="Last Name"
        />
      </div>
      <div class="flex flex-col gap-2 basis-1/2">
        <label for="fname">Gender</label>
        <select
          v-model="gender"
          name="fname"
          type="text"
          class="py-3 px-5 bg-yellow-200 text-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="Gender"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
        <label for="bday">Birthday</label>
        <input
          v-model="birthday"
          name="bday"
          type="date"
          class="py-3 px-5 bg-yellow-200 text-yellow-700 border-2 border-yellow-500 rounded-xl"
        />
        <label for="password">Password</label>
        <input
          v-model="password"
          name="password"
          type="password"
          class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
          placeholder="Password"
        />
        <p class="text-sm">
          <input type="checkbox" name="" id="" />
          <span> I agree to the </span>
          <RouterLink to="/terms-and-conditions" class="underline">
            Terms and Conditions
          </RouterLink>
        </p>
        <div
          v-show="error"
          class="errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"
        >
          {{ errorMessage }}
        </div>
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
