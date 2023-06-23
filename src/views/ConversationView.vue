<script setup>
import { onUpdated, ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
const route = useRoute();

const itemShareStore = useItemShareStore();

var id = parseInt(route.params.id);
const messageDraft = ref("");
const scrollToElement = ref();
onUpdated(() => {
  id = parseInt(route.params.id);
});
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
  <div class="flex h-full flex-col justify-between">
    <header
      class="flex items-center justify-between bg-green-600 px-6 py-2 shadow-md shadow-gray-400"
    >
      <div class="flex gap-2">
        <img
          :src="itemShareStore.loadedProfile(id).image"
          alt=""
          class="aspect-square w-12 rounded-full"
        />
        <div class="flex flex-col text-white">
          <p class="font-black">
            {{
              itemShareStore.loadedProfile(id).firstname +
              " " +
              itemShareStore.loadedProfile(id).lastname
            }}
          </p>
          <div class="flex items-center gap-1 truncate">
            <div class="inline-block h-2 w-2 rounded-full bg-green-300"></div>
            <span>Online</span>
          </div>
        </div>
      </div>
      <RouterLink to="/messages" class="material-icons text-white"
        >close</RouterLink
      >
    </header>
    <!--Chat bubbles-->
    <main
      class="flex basis-full flex-col-reverse overflow-y-auto"
      ref="scrollToElement"
    >
      <div class="bg-white px-6 pt-12">
        <div
          v-for="(chat, index) in chatHistory"
          :class="chat.user == 'me' ? 'flex-row-reverse' : 'flex-row'"
          class="my-1 flex items-end gap-2"
        >
          <img
            :src="
              chat.user == 'me'
                ? 'https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg'
                : itemShareStore.loadedProfile(id).image
            "
            alt=""
            class="aspect-square w-12 rounded-full"
            :class="isSamePerson(index) ? 'opacity-0' : ''"
          />
          <div
            class="max-w-md rounded-3xl px-4 py-3"
            :class="isSameMessageSource(index)"
          >
            <p>{{ chat.message }}</p>
          </div>
        </div>
        <section class="sticky bottom-0 mt-4 rounded-t-xl bg-white pb-4">
          <form
            class="flex gap-2 rounded-xl bg-amber-400 p-2 shadow-sm shadow-gray-400"
            @submit.prevent="sendMessage()"
          >
            <input
              type="text"
              name=""
              placeholder="Enter message..."
              class="w-full rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"
              id=""
              v-model="messageDraft"
            />
            <button
              type="submit"
              class="rounded-xl bg-green-700 px-6 py-2 text-white"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </main>
  </div>
</template>
