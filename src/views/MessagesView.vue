<script setup>
import { ref } from "vue";

const chatHistory = ref([
  {
    user: "me",
    message:
      "Hi, with regards to product X, is this item still in good condition?",
  },
  {
    user: "them",
    message: "Of course! ",
  },
  {
    user: "them",
    message:
      'We regularly perform "Maintenance Order X" upon return of item to ensure that the product is in a good quality ',
  },
  {
    user: "me",
    message: "Great!",
  },
  {
    user: "me",
    message: "Will the product be available by Tuesday?",
  },
  {
    user: "them",
    message: "Yes.",
  },
  {
    user: "me",
    message: "👍",
  },
]);
</script>
<template>
  <main
    class="flex flex-row items-stretch py-8 container mx-auto px-4 gap-4 h-full"
  >
    <!--Recent Messages-->
    <!--Note: hiding this section is temporary workaround for mobile view, until a proper implementation is decided-->
    <aside
      class="hidden lg:flex flex-col lg:basis-1/3 box-border bg-white rounded-xl shadow-md shadow-gray-400 overflow-hidden"
    >
      <h1 class="px-6 py-4 shadow-sm shadow-gray-300 z-10">Recent Messages</h1>
      <!-- Container -->
      <div class="overflow-y-auto px-2">
        <!--TODO: Convert to RouterLink-->
        <article
          v-for="i in 9"
          class="flex gap-2 p-2 rounded-2xl my-2"
          :class="i == 3 ? 'bg-yellow-200' : ''"
        >
          <img
            src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
            alt=""
            class="aspect-square w-12 rounded-full"
          />
          <div class="w-full truncate">
            <p class="font-black truncate">Elong Mah</p>
            <p class="truncate">Insert Extra Lengthy and Wordy Message Here</p>
          </div>
        </article>
      </div>
    </aside>
    <!--Chat Window-->
    <!--Note: basis-full and lg:basis-2/3 are temporary workarounds for mobile view, until a proper implementation is decided-->
    <section
      class="basis-full lg:basis-2/3 bg-white overflow-hidden rounded-xl flex flex-col justify-between shadow-md shadow-gray-400"
    >
      <header class="bg-green-600 flex px-6 py-2 gap-2">
        <img
          src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
          alt=""
          class="aspect-square w-12 rounded-full"
        />
        <div class="flex flex-col text-white">
          <p class="font-black">Elong Mah</p>
          <div class="truncate flex gap-1 items-center">
            <div class="h-2 rounded-full bg-green-300 w-2 inline-block"></div>
            <span>Online</span>
          </div>
        </div>
      </header>
      <!--Chat bubbles-->
      <main class="bg-white basis-full px-6 overflow-y-auto pt-12">
        <div
          v-for="chat in chatHistory"
          :class="chat.user == 'me' ? 'flex-row-reverse' : 'flex-row'"
          class="flex gap-2 my-2 items-end"
        >
          <img
            src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
            alt=""
            class="aspect-square w-12 rounded-full"
          />
          <div
            class="max-w-md rounded-3xl py-3 px-4"
            :class="
              chat.user == 'me' ? 'bg-green-700 text-white' : 'bg-gray-300'
            "
          >
            <p>{{ chat.message }}</p>
          </div>
        </div>
        <section class="bg-white pb-4 sticky bottom-0 mt-8 rounded-t-xl">
          <form
            class="bg-amber-400 flex gap-2 p-2 rounded-xl shadow-sm shadow-gray-400"
          >
            <input
              type="text"
              name=""
              placeholder="Enter message..."
              class="w-full py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
              id=""
            />
            <button
              type="submit"
              class="py-2 px-6 text-white bg-green-700 rounded-xl"
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </section>
  </main>
</template>
