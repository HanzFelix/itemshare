<script setup>
import { onMounted, onUpdated, ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import CustomField from "../components/CustomField.vue";
import { useItemShareStore } from "../stores/itemshare";
const route = useRoute();
const itemShareStore = useItemShareStore();

const messageDraft = ref("");
const scrollToElement = ref();
const otherParticipant = ref(itemShareStore.tempUserProfile);
const conversationDetails = ref({
  lastMessage: "Loading...",
  lastSender: "12",
  isRead: true,
});
const convoId = ref(route.params.id);

const isLoading = ref(true);
const messages = ref([]);

onMounted(async () => {
  conversationDetails.value = await itemShareStore.loadConversation(
    convoId.value
  );
  messages.value = [{ sender: conversationDetails.value.lastSender }];
  otherParticipant.value = await itemShareStore.loadProfile(
    conversationDetails.value.participants.find(
      (uid) => uid != itemShareStore.myUserUid
    )
  );
  messages.value = await itemShareStore.loadMessages(convoId.value);
  isLoading.value = false;
});

watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      convoId.value = newId;
      isLoading.value = true;
      messages.value = [];
      conversationDetails.value = await itemShareStore.loadConversation(newId);
      otherParticipant.value = await itemShareStore.loadProfile(
        conversationDetails.value.participants.find(
          (uid) => uid != itemShareStore.myUserUid
        )
      );
      messages.value = await itemShareStore.loadMessages(newId);
      isLoading.value = false;
    }
  }
);

// send a message & clear input field
async function sendMessage() {
  await itemShareStore.sendMessage(convoId.value, messageDraft.value);
  messages.value.push({
    sender: itemShareStore.myUserUid,
    content: messageDraft.value,
  });
  messageDraft.value = "";
  //scrollToElement.value.scrollTop = scrollContainer.value.scrollHeight;
}

// hide avatar if from same sender
function isSamePerson(chat_id) {
  if (chat_id + 1 == messages.value.length) {
    return false;
  }

  return messages.value[chat_id].sender == messages.value[chat_id + 1].sender;
}

// stylize chat bubbles
function isSameMessageSource(chat_id) {
  var classes = "";

  if (
    chat_id + 1 < messages.value.length &&
    messages.value[chat_id].sender == messages.value[chat_id + 1].sender
  ) {
    classes +=
      messages.value[chat_id].sender == itemShareStore.myUserUid
        ? " rounded-br-none"
        : " rounded-bl-none";
  }

  if (
    chat_id - 1 >= 0 &&
    messages.value[chat_id].sender == messages.value[chat_id - 1].sender
  ) {
    classes +=
      messages.value[chat_id].sender == itemShareStore.myUserUid
        ? " rounded-tr-none"
        : " rounded-tl-none";
  }

  // use green color if message source is me
  classes +=
    messages.value[chat_id].sender == itemShareStore.myUserUid
      ? " bg-primary text-background bg-opacity-90"
      : " bg-secondary bg-opacity-40";

  return classes;
}
</script>
<template>
  <div class="flex h-full flex-col justify-between" v-if="messages.length != 0">
    <header
      class="flex items-center justify-between bg-primary bg-opacity-90 px-6 py-2 shadow-md shadow-gray-400"
    >
      <div class="flex gap-2">
        <img
          :src="otherParticipant.image"
          alt=""
          class="aspect-square w-12 rounded-full"
        />
        <div class="flex flex-col text-background">
          <p class="font-black">
            {{ otherParticipant.firstName + " " + otherParticipant.lastName }}
          </p>
          <div class="flex items-center gap-1 truncate">
            <div class="inline-block h-2 w-2 rounded-full bg-green-300"></div>
            <span>Online</span>
          </div>
        </div>
      </div>
      <RouterLink to="/messages" class="material-icons text-background"
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
          v-for="(message, index) in messages"
          :class="
            message.sender == itemShareStore.myUserUid
              ? 'flex-row-reverse'
              : 'flex-row'
          "
          class="my-1 flex items-end gap-2"
        >
          <img
            :src="
              message.sender == itemShareStore.myUserUid
                ? itemShareStore.myProfile.image
                : otherParticipant.image
            "
            alt=""
            class="aspect-square w-12 rounded-full shadow-sm shadow-secondary"
            :class="isSamePerson(index) ? 'opacity-0' : ''"
          />
          <div
            class="max-w-md rounded-3xl px-4 py-3 shadow-sm shadow-secondary"
            :class="isSameMessageSource(index)"
          >
            <p class="max-w-full break-words">{{ message.content }}</p>
          </div>
        </div>
        <section class="sticky bottom-0 mt-4 rounded-t-xl bg-white pb-4">
          <form
            class="bg-amber-400 flex gap-2 rounded-xl bg-secondary bg-opacity-80 p-2 shadow-gray-400 drop-shadow-sm"
            @submit.prevent="sendMessage()"
          >
            <CustomField
              placeholder="Enter message..."
              v-model="messageDraft"
            />
            <button
              type="submit"
              class="material-icons rounded-md border-2 border-transparent bg-primary px-4 py-2 text-background"
            >
              send
            </button>
          </form>
        </section>
      </div>
    </main>
  </div>
  <div
    v-else
    class="my-2 flex h-full basis-full flex-col justify-center text-center text-text text-opacity-60"
  >
    <p>Loading messages...</p>
  </div>
</template>
