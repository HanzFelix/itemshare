<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useItemShareStore } from "@/stores/itemshare";
import CustomField from "@/components/CustomField.vue";

const route = useRoute();
const itemShareStore = useItemShareStore();
const convoId = ref(route.params.id);

const messageDraft = ref("");
const otherParticipant = ref(itemShareStore.tempUserProfile);
const conversationDetails = ref({
  lastMessage: "Loading...",
  lastSender: "12",
  isRead: true,
});

async function loadData(convoId) {
  conversationDetails.value = await itemShareStore.loadConversation(convoId);
  otherParticipant.value = await itemShareStore.loadProfile(
    conversationDetails.value.participants.find(
      (uid) => uid != itemShareStore.myUserUid
    )
  );
  itemShareStore.loadMessages(convoId);
}

// send a message & clear input field
async function sendMessage(message) {
  messageDraft.value = "";
  itemShareStore.loadedMessages.push({
    sender: itemShareStore.myUserUid,
    content: message,
    type: "message",
  });
  await itemShareStore.sendMessage(convoId.value, message);
}

onMounted(async () => {
  await loadData(route.params.id);
});

watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      convoId.value = newId;
      await loadData(newId);
    }
  }
);
</script>
<template>
  <div
    class="flex h-full flex-col justify-between"
    v-if="itemShareStore.loadedMessages.length != 0"
  >
    <header
      class="flex items-center justify-between bg-primary/90 px-6 py-2 shadow-sm shadow-secondary"
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
    <main class="flex basis-full flex-col-reverse overflow-y-auto">
      <div class="bg-white px-6 pt-12">
        <div
          v-for="(message, index) in itemShareStore.loadedMessages"
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
            :class="itemShareStore.isSamePerson(index) ? 'opacity-0' : ''"
          />
          <div
            class="max-w-md rounded-3xl px-4 py-3 shadow-sm shadow-secondary"
            :class="itemShareStore.isSameMessageSource(index)"
          >
            <p class="max-w-full break-words">{{ message.content }}</p>
          </div>
        </div>
        <section class="sticky bottom-0 mt-4 rounded-t-xl bg-white pb-4">
          <form
            class="bg-amber-400 flex gap-2 rounded-xl bg-secondary/80 p-2 shadow-gray-400 drop-shadow-sm"
            @submit.prevent="sendMessage(messageDraft)"
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
    class="my-2 flex h-full basis-full flex-col justify-center text-center text-text/60"
  >
    <p>Loading messages...</p>
  </div>
</template>
