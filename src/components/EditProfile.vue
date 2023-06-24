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
const itemShareStore = useItemShareStore();
const emit = defineEmits(["close"]);
const reader = new FileReader();

const props = defineProps({
  // value is the number of stars
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
    <div class="flex flex-col gap-2 p-2 md:gap-4">
      <div class="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
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
              class="material-icons absolute -bottom-2 -right-2 cursor-pointer rounded-lg border-2 border-yellow-500 bg-yellow-200 px-1 py-1 text-yellow-700"
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
        <div class="flex flex-col gap-2">
          <div class="flex flex-col">
            <label for="fname">First Name</label>
            <input
              v-model="profile.firstName"
              name="fname"
              type="text"
              class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-2 placeholder-yellow-700"
              placeholder="First Name"
            />
          </div>
          <div class="flex flex-col">
            <label for="lname">Last Name</label>
            <input
              v-model="profile.lastName"
              name="lname"
              type="text"
              class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-2 placeholder-yellow-700"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <label for="lname">Location</label>
        <input
          name="location"
          v-model="profile.location"
          type="text"
          class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-2 placeholder-yellow-700"
          placeholder="Current Location"
        />
      </div>
    </div>
    <footer class="mt-4 flex flex-col justify-end gap-2 px-2 md:flex-row">
      <button
        type="submit"
        class="rounded-lg border-2 border-green-800 bg-green-800 px-5 py-3 text-white"
      >
        Save changes
      </button>
      <button
        type="button"
        @click="emit('close')"
        class="rounded-lg border-2 border-green-800 bg-white px-5 py-3 text-green-800"
      >
        Cancel
      </button>
    </footer>
  </form>
</template>
