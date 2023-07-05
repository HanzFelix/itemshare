<script setup>
import { ref } from "vue";

const members = ref([
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_male.png?alt=media&token=b239dcf0-a57f-43a1-a0bd-34898f5a9714",

    name: "Ciann Renel Cazar",
  },
  {
    name: "Abimael Dadap",
  },
  {
    name: "Hans Legaspi",
  },
  {
    name: "Hanz Felix Tumulak",
  },
]);
</script>
<template>
  <div
    class="grid grid-cols-2 justify-around gap-8 rounded-xl bg-text bg-opacity-50 p-8"
  >
    <div class="flex flex-col items-center gap-2" v-for="member in members">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_male.png?alt=media&token=b239dcf0-a57f-43a1-a0bd-34898f5a9714"
        alt=""
        class="aspect-square w-32 rounded-full"
      />
      <div class="flex flex-col text-background">
        <p class="font-black">
          {{ member.name }}
        </p>
      </div>
    </div>
  </div>
</template>
