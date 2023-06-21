<script setup>
import { RouterView, RouterLink } from "vue-router";
import { ref } from "vue";

// help, need better sample avatars
const conversations = ref([
  {
    id: 1,
    name: "John Smith",
    avatar: "https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",
    message: "Okay, but when?",
  },
  {
    id: 2,
    name: "Emily Johnson",
    avatar: "https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",
    message:
      "Hi there! I'm interested in renting this item. Can you provide more details about its specifications?",
  },
  {
    id: 3,
    name: "David Brown",
    avatar: "https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",
    message:
      "I received the package today, and I'm thrilled with the product! It exceeded my expectations.",
  },
  {
    id: 4,
    avatar: "https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",
    name: "Sarah Davis",
    message: "Great!",
  },
  {
    id: 5,
    avatar: "https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",
    name: "Michael Wilson",
    message: "Will the item be available by Tuesday?",
  },
  {
    id: 6,
    name: "Jessica Thompson",
    avatar: "https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",
    message:
      "I just wanted to say thank you for the excellent customer service. I'm impressed with the prompt responses and assistance.",
  },
  {
    id: 7,
    name: "Christopher Martinez",
    avatar: "https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",
    message: "👍",
  },
  {
    id: 8,
    name: "Megan Taylor",
    avatar: "https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",
    message: "Look! A placeholder text!",
  },
]);
</script>
<template>
  <main
    class="flex flex-row items-stretch py-8 container mx-auto px-4 gap-4 h-full"
  >
    <!--Recent Messages-->
    <aside
      class="lg:flex flex-col basis-full lg:basis-1/3 box-border bg-white rounded-xl shadow-md shadow-gray-400 overflow-hidden"
      :class="['messages'].includes($route.name) ? '' : 'hidden'"
    >
      <h1 class="px-6 py-4 shadow-sm shadow-gray-300 z-10">Recent Messages</h1>
      <!-- Container -->
      <div class="overflow-y-auto px-2">
        <!--Should link to user's conversation id instead-->
        <RouterLink
          v-for="conversation in conversations"
          :to="'/messages/' + conversation.id"
          class="flex gap-2 p-2 rounded-2xl my-2"
          active-class="bg-yellow-200"
        >
          <img
            :src="conversation.avatar"
            alt=""
            class="aspect-square w-12 rounded-full"
          />
          <div class="w-full truncate">
            <p class="font-black truncate">{{ conversation.name }}</p>
            <p class="truncate text-gray-800">
              {{ conversation.message }}
            </p>
          </div>
        </RouterLink>
      </div>
    </aside>
    <!--Chat Window-->
    <div
      class="basis-full lg:basis-2/3 lg:block bg-white overflow-hidden rounded-xl shadow-md shadow-gray-400"
      :class="['messages'].includes($route.name) ? 'hidden' : ''"
    >
      <RouterView />
    </div>
  </main>
</template>
