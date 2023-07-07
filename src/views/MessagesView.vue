<script setup>
import { ref, onMounted } from "vue";
import { RouterView, RouterLink } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";

const itemShareStore = useItemShareStore();
const conversations = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  conversations.value = await itemShareStore.loadConversations(
    itemShareStore.myUserUid
  );
  isLoading.value = false;
});
</script>
<template>
  <main
    class="container mx-auto flex h-full flex-row items-stretch gap-4 px-4 py-8"
  >
    <!--Recent Messages-->
    <aside
      class="box-border basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-secondary lg:block lg:basis-1/3"
      :class="['messages'].includes($route.name) ? '' : 'hidden'"
    >
      <div class="flex h-full flex-col overflow-hidden">
        <h1 class="bg-white px-6 py-4 shadow-sm shadow-secondary">
          Recent Messages
        </h1>
        <!-- Container -->
        <div class="overflow-y-auto px-2" v-if="conversations.length != 0">
          <!--Should link to user's conversation id instead-->
          <RouterLink
            v-for="conversation in conversations"
            :to="'/messages/' + conversation.convoId"
            class="my-2 flex gap-2 rounded-lg p-2"
            active-class="bg-secondary/40"
          >
            <img
              :src="conversation.participant.image"
              alt=""
              class="aspect-square w-12 rounded-full shadow-sm shadow-secondary"
            />
            <div class="w-full truncate">
              <p class="truncate font-black">
                {{
                  conversation.participant.firstName +
                  " " +
                  conversation.participant.lastName
                }}
              </p>
              <p
                class="truncate text-base text-gray-800"
                :class="
                  conversation.isRead ||
                  conversation.lastSender == itemShareStore.myUserUid
                    ? 'font-normal'
                    : 'font-bold'
                "
              >
                {{
                  (conversation.lastSender == itemShareStore.myUserUid
                    ? "You: "
                    : "") + conversation.lastMessage
                }}
              </p>
            </div>
          </RouterLink>
        </div>
        <div
          v-else-if="isLoading"
          class="my-2 flex h-full basis-full flex-col justify-center text-center text-text/60"
        >
          <p>Loading messages...</p>
        </div>
        <div
          v-else
          class="my-2 flex h-full basis-full flex-col justify-center text-center text-text/60"
        >
          <p>No messages to show.</p>
        </div>
      </div>
    </aside>
    <!--Chat Window-->
    <div
      class="basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-400 lg:block lg:basis-2/3"
      :class="['messages'].includes($route.name) ? 'hidden' : ''"
    >
      <RouterView />
    </div>
  </main>
</template>
