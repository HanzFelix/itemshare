<script setup>
import {
  onMounted,
  onUpdated,
  onActivated,
  ref,
  onBeforeUpdate,
  onBeforeMount,
} from "vue";
import { useItemShareStore } from "../stores/itemshare";
import CustomField from "../components/CustomField.vue";
const itemShareStore = useItemShareStore();
const emit = defineEmits(["close"]);
const reader = new FileReader();

const props = defineProps({
  useruid: {
    default: 0,
  },
  profile: {
    default: {
      firstName: "",
      lastName: "",
      image: "https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",
      location: "Baybay City",
    },
  },
});
const profile = ref(Object.assign({}, props.profile)); // duplicates it

function loadImageFile(e) {
  let file = e.target.files[0];

  // Converts the file to a browser-readable image (aka string with base64 encoding) for display
  reader.readAsDataURL(file);
  reader.onload = (event) => {
    profile.value.image = event.target.result;
  };
}
function updateProfile() {
  // insert firebase stuff
  itemShareStore.editProfile = Object.assign({}, profile.value);
  emit("close");
}

onBeforeMount(async () => {
  // redundant retrieval from server, might be possible to rework, idk
  profile.value = await itemShareStore.loadProfile(props.useruid);
});
</script>
<template>
  <form action="#" @submit.stop.prevent="updateProfile">
    <h1>Edit Profile</h1>
    <div class="flex flex-col gap-2 p-2 sm:gap-4">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
        <div class="flex flex-col">
          <h2>Profile Picture</h2>
          <div
            class="relative inline-block aspect-square w-32 rounded-sm object-contain"
          >
            <img
              :src="profile.image"
              alt=""
              srcset=""
              class="aspect-square w-32 rounded-lg object-contain"
            />
            <label
              for="add-image"
              class="material-icons absolute -bottom-2 -right-2 cursor-pointer rounded-md border-2 border-text border-opacity-50 bg-accent px-1 py-1 text-text text-opacity-70"
            >
              add_photo_alternate
            </label>
            <input
              type="file"
              id="add-image"
              @change="loadImageFile($event)"
              hidden
            />
          </div>
        </div>
        <div class="flex w-56 basis-full flex-col gap-2">
          <CustomField
            label="First Name"
            v-model="profile.firstName"
            placeholder="First Name"
          />
          <CustomField
            label="Last Name"
            v-model="profile.lastName"
            placeholder="Last Name"
          />
        </div>
      </div>
      <CustomField
        label="Location"
        v-model="profile.location"
        placeholder="Current Location"
      />
    </div>
    <footer class="my-2 flex flex-col justify-end gap-2 px-2 sm:flex-row">
      <button
        type="submit"
        class="rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"
      >
        Save changes
      </button>
      <button
        type="button"
        @click="emit('close')"
        class="rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"
      >
        Cancel
      </button>
    </footer>
  </form>
</template>
