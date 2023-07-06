<script setup>
import { ref } from "vue";
import { useItemShareStore } from "@/stores/itemshare";
import CustomField from "@/components/CustomField.vue";

const itemShareStore = useItemShareStore();

const email = ref("");
let errorMessage = ref("");
let successMessage = ref("");

async function resetPassword() {
  try {
    errorMessage.value = "";
    if (await itemShareStore.resetPassword(email.value)) {
      successMessage.value = "Check your email to reset your password";
    }
  } catch (error) {
    errorMessage.value = error;
  }
}
</script>

<template>
  <div
    class="flex max-w-xs flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"
  >
    <div v-show="successMessage" class="flex flex-col gap-4">
      <p>{{ successMessage }}</p>
      <RouterLink
        to="/login"
        class="rounded-md bg-primary px-6 py-2 text-center text-background"
      >
        Close
      </RouterLink>
    </div>
    <form
      @submit.stop.prevent="resetPassword"
      v-show="!successMessage"
      class="flex flex-col gap-2"
    >
      <CustomField
        placeholder="Email address"
        label="Enter the email associated with your account."
        v-model="email"
        input-type="email"
      />
      <div
        v-show="errorMessage"
        class="rounded-md border-2 border-red-400 bg-red-300 px-4 py-2 align-middle text-sm text-red-800"
      >
        {{ errorMessage }}
      </div>
      <button
        class="rounded-md border-2 border-transparent bg-primary px-6 py-2 text-background"
      >
        Reset Password
      </button>
      <RouterLink
        to="/login"
        class="rounded-md border-2 border-primary bg-background px-6 py-2 text-center text-primary"
      >
        Back
      </RouterLink>
    </form>
  </div>
</template>
