<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useItemShareStore } from "@/stores/itemshare";
import CustomField from "@/components/CustomField.vue";

const router = useRouter();
const itemShareStore = useItemShareStore();
const errorMessage = ref("");

const registerDetails = ref({
  phoneNumber: "",
  email: "",
  firstName: "",
  lastName: "",
  location: "",
  image: "",
  password: "",
  confirmPassword: "",
  terms: false,
});

async function register() {
  try {
    errorMessage.value = "";
    if (await itemShareStore.register(registerDetails.value))
      router.push("/home");
  } catch (error) {
    errorMessage.value = error;
  }
}
</script>
<template>
  <div
    class="flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"
  >
    <form
      class="flex max-w-full flex-col gap-2"
      @submit.stop.prevent="register"
    >
      <h1>Create an account</h1>
      <div class="flex flex-col gap-2 xl:flex-row xl:gap-8">
        <div class="flex basis-1/2 flex-col gap-2">
          <CustomField
            label="Phone Number"
            v-model="registerDetails.phoneNumber"
            input-type="tel"
            placeholder="Enter your phone number"
          >
            <button
              class="rounded-md border-2 border-text/50 bg-secondary/100 px-6 py-2 text-text/80 transition-colors"
            >
              Send SMS Code
            </button>
          </CustomField>
          <CustomField
            label="Email Address"
            v-model="registerDetails.email"
            input-type="email"
            placeholder="Email"
          />
          <CustomField
            label="First Name"
            v-model="registerDetails.firstName"
            input-type="text"
            placeholder="First Name"
          />
          <CustomField
            label="Last Name"
            v-model="registerDetails.lastName"
            input-type="text"
            placeholder="Last Name"
          />
        </div>
        <div class="flex basis-1/2 flex-col gap-2">
          <CustomField
            label="Location"
            v-model="registerDetails.location"
            input-type="text"
            placeholder="Location"
          />
          <CustomField
            label="Password"
            v-model="registerDetails.password"
            input-type="password"
            placeholder="Password"
          />
          <CustomField
            label="Confirm Password"
            v-model="registerDetails.confirmPassword"
            input-type="password"
            placeholder="Confirm Password"
          />
          <div
            v-show="errorMessage"
            class="rounded-md border-2 border-red-400 bg-red-300 px-4 py-2 align-middle text-sm text-red-800"
          >
            {{ errorMessage }}
          </div>
          <p class="text-sm">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              v-model="registerDetails.terms"
              class="text-accent focus:ring-0"
            />
            <span> I agree to the </span>
            <RouterLink
              to="/terms-and-conditions"
              class="underline decoration-accent"
            >
              Terms and Conditions
            </RouterLink>
          </p>
          <button
            class="rounded-md border-2 border-transparent bg-primary px-6 py-2 text-white"
          >
            Create account
          </button>
          <p class="pt-2 text-sm">
            Have an account?
            <RouterLink to="/login" class="underline decoration-accent"
              >Log in instead!</RouterLink
            >
          </p>
        </div>
      </div>
    </form>
  </div>
</template>
