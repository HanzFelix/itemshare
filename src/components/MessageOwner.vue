<script setup>
import { useRouter } from "vue-router";
import CustomField from "../components/CustomField.vue";
import { ref } from "vue";
import { useItemShareStore } from "../stores/itemshare";

const router = useRouter();
const itemShareStore = useItemShareStore();
const emit = defineEmits(["close"]);
const props = defineProps({
  ownerId: String,
  ownerProfile: {
    default: {
      firstName: "",
      lastName: "",
      image: "https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",
      location: "",
    },
  },
});

const messageDraft = ref("");
const isSending = ref(false);

async function messageOwner() {
  try {
    isSending.value = true;
    let convoid = await itemShareStore.messageOwner(
      itemShareStore.myUserUid,
      props.ownerId,
      messageDraft.value
    );
    router.push("/messages/" + convoid);
  } catch (error) {
    console.log(error + "from MessageOwner");
  } finally {
    isSending.value = false;
  }
}
</script>
<template>
  <header
    class="flex items-center justify-between gap-24 bg-primary bg-opacity-90 px-4 py-2 shadow-md shadow-gray-400"
  >
    <div class="flex items-center gap-2">
      <img
        :src="ownerProfile.image"
        alt=""
        class="aspect-square w-8 rounded-full"
      />
      <p class="font-black text-background">
        {{ ownerProfile.firstName + " " + ownerProfile.lastName }}
      </p>
    </div>
    <button class="material-icons text-background" @click="emit('close')">
      close
    </button>
  </header>
  <section class="sticky bottom-0 mt-4 rounded-t-xl bg-white">
    <form
      class="bg-amber-400 flex gap-2 bg-secondary bg-opacity-80 p-2 shadow-gray-400 drop-shadow-sm"
      @submit.prevent="messageOwner()"
    >
      <CustomField
        placeholder="Enter message..."
        v-model="messageDraft"
        :disabled="isSending"
      />
      <button
        :disabled="isSending"
        type="submit"
        class="material-icons rounded-md border-2 border-transparent bg-primary px-4 py-2 text-background disabled:bg-text disabled:bg-opacity-50"
      >
        send
      </button>
    </form>
  </section>
</template>
