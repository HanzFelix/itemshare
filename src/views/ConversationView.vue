<script setup>
import { ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
const route = useRoute();

const id = parseInt(route.params.id);
const messageDraft = ref("");
const scrollToElement = ref();

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
  {
    user: "them",
    message:
      "And by the way, you can try writing in the input field and it will actually send to our convo.",
  },
]);

// send a message & clear input field
function sendMessage() {
  chatHistory.value.push({ user: "me", message: messageDraft.value });
  messageDraft.value = "";
  scrollToElement.value.scrollTop = scrollContainer.value.scrollHeight;
}

// hide avatar if from same sender
function isSamePerson(chat_id) {
  if (chat_id + 1 == chatHistory.value.length) {
    return false;
  }

  return chatHistory.value[chat_id].user == chatHistory.value[chat_id + 1].user;
}

// stylize chat bubbles
function isSameMessageSource(chat_id) {
  var classes = "";

  if (
    chat_id + 1 < chatHistory.value.length &&
    chatHistory.value[chat_id].user == chatHistory.value[chat_id + 1].user
  ) {
    classes +=
      chatHistory.value[chat_id].user == "me"
        ? " rounded-br-none"
        : " rounded-bl-none";
  }

  if (
    chat_id - 1 >= 0 &&
    chatHistory.value[chat_id].user == chatHistory.value[chat_id - 1].user
  ) {
    classes +=
      chatHistory.value[chat_id].user == "me"
        ? " rounded-tr-none"
        : " rounded-tl-none";
  }

  // use green color if message source is me
  classes +=
    chatHistory.value[chat_id].user == "me"
      ? " bg-green-700 text-white"
      : " bg-gray-300";

  return classes;
}
</script>
<template>
  <div class="flex flex-col justify-between h-full">
    <header
      class="bg-green-600 flex justify-between px-6 py-2 shadow-md shadow-gray-400 items-center"
    >
      <div class="flex gap-2">
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
      </div>
      <RouterLink to="/messages" class="text-white material-icons"
        >close</RouterLink
      >
    </header>
    <!--Chat bubbles-->
    <main
      class="flex flex-col-reverse overflow-y-auto basis-full"
      ref="scrollToElement"
    >
      <div class="bg-white px-6 pt-12">
        <div
          v-for="(chat, index) in chatHistory"
          :class="chat.user == 'me' ? 'flex-row-reverse' : 'flex-row'"
          class="flex gap-2 my-1 items-end"
        >
          <img
            src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
            alt=""
            class="aspect-square w-12 rounded-full"
            :class="isSamePerson(index) ? 'opacity-0' : ''"
          />
          <div
            class="max-w-md rounded-3xl py-3 px-4"
            :class="isSameMessageSource(index)"
          >
            <p>{{ chat.message }}</p>
          </div>
        </div>
        <section class="bg-white pb-4 sticky bottom-0 mt-4 rounded-t-xl">
          <form
            class="bg-amber-400 flex gap-2 p-2 rounded-xl shadow-sm shadow-gray-400"
            @submit.prevent="sendMessage()"
          >
            <input
              type="text"
              name=""
              placeholder="Enter message..."
              class="w-full py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
              id=""
              v-model="messageDraft"
            />
            <button
              type="submit"
              class="py-2 px-6 text-white bg-green-700 rounded-xl"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </main>
  </div>
</template>
