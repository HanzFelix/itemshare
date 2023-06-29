<script setup>
// LAYOUT IS WIP
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useItemShareStore } from "../stores/itemshare";
import CustomField from "../components/CustomField.vue";

const router = useRouter();
const itemShareStore = useItemShareStore();

const imagePreviews = ref([]);

const item = ref({
  itemName: "",
  location: "",
  rentAmount: "",
  rentRate: "",
  description: "",
  imageFiles: [],
  tags: [],
});

const errorMessage = ref("");

const tagInput = ref("");

// image-related stuff
function loadImageFile(e) {
  for (let file of e.target.files) {
    // allow multiple files to be read simultaneously
    let reader = new FileReader();

    // add the file to the list of files to be uploaded later
    item.value.imageFiles.push(file);

    // Converts the file to a browser-readable image (aka string with base64 encoding) for display
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      imagePreviews.value.push(event.target.result);
    };
  }
}

function removeImage(index) {
  imagePreviews.value.splice(index, 1);
  item.value.imageFiles.splice(index, 1);
}

// tag-related stuff
function deleteTag(index) {
  item.value.tags.splice(index, 1);
}

function addTag() {
  if (!tagInput.value) return; // do nothing if empty

  if (!item.value.tags.includes(tagInput.value)) {
    item.value.tags.push(tagInput.value);
  }
  tagInput.value = "";
}

function validateTag() {
  if (tagInput.value.endsWith(",")) {
    tagInput.value = tagInput.value.slice(0, -1);
    addTag();
  }
}

async function createItem() {
  errorMessage.value = "";
  try {
    if (await itemShareStore.createItem(item.value)) router.push("/home");
  } catch (error) {
    errorMessage.value = error;
  }
}
</script>
<template>
  <main class="container mx-auto flex flex-col gap-2 px-4 py-8">
    <h1>New Item for Rent</h1>
    <form
      @submit.stop.prevent="createItem"
      class="flex flex-col gap-4 divide-x-0 divide-text divide-opacity-25 bg-white py-8 md:flex-row md:gap-0 md:divide-x-2"
    >
      <div class="flex basis-1/2 flex-col gap-4 px-8">
        <CustomField
          v-model="item.itemName"
          label="Item Name"
          placeholder="A name of the item..."
        />
        <div class="flex flex-col gap-1">
          <label>Description</label>
          <textarea
            v-model="item.description"
            name="description"
            class="rounded-md border-2 border-text border-opacity-25 bg-secondary bg-opacity-50 focus:border-2 focus:border-primary focus:border-opacity-60 focus:bg-primary focus:bg-opacity-5 focus:ring-0"
            placeholder="A description on the item..."
          ></textarea>
        </div>
        <div class="flex flex-col gap-1">
          <label>Tags</label>
          <div
            class="flex flex-wrap gap-2 rounded-md border-2 border-text border-opacity-25 bg-secondary p-2 focus-within:border-primary focus-within:border-opacity-60 focus-within:bg-primary focus-within:bg-opacity-5"
          >
            <div
              v-for="(tag, index) in item.tags"
              class="flex items-center gap-1 whitespace-nowrap rounded-md bg-primary bg-opacity-90 px-2 py-1 text-white"
            >
              <span>{{ tag }}</span>
              <button
                class="material-icons aspect-square rounded-lg pl-1.5 text-xs font-bold text-white"
                @click="deleteTag(index)"
                type="button"
              >
                close
              </button>
            </div>
            <input
              type="text"
              placeholder="Add a tag..."
              @input="validateTag()"
              @keydown.enter.prevent="addTag()"
              @focusout="addTag()"
              v-model="tagInput"
              class="flex-1 border-none bg-transparent px-1 py-1 focus:ring-0"
            />
          </div>
        </div>
        <CustomField
          v-model="item.location"
          label="Location"
          placeholder="Preferred area to deliver or retrieve..."
        />
      </div>
      <div class="flex basis-1/2 flex-col gap-4 px-8">
        <div class="flex flex-col gap-1">
          <label>Images</label>
          <div
            class="w-full overflow-x-auto rounded-md border-2 border-text border-opacity-25 bg-secondary bg-opacity-50 p-2"
            id="images"
          >
            <div class="flex gap-2">
              <label
                for="add-image"
                class="group/x relative aspect-square h-40 rounded-md border-2 border-dashed border-text border-opacity-40 px-2 py-4 text-center hover:border-primary"
              >
                <p
                  class="material-icons text-6xl text-text text-opacity-50 group-hover/x:text-primary"
                >
                  add_photo_alternate
                </p>
                <p
                  class="text-sm text-text text-opacity-75 group-hover/x:text-primary"
                >
                  Drag an image here or browse for an image to upload.
                </p>
                <input
                  type="file"
                  id="add-image"
                  accept="image/*"
                  @change="loadImageFile($event)"
                  class="absolute left-0 top-0 block h-full w-full cursor-pointer opacity-0"
                  multiple
                />
              </label>
              <img
                v-for="(image, index) in imagePreviews"
                class="aspect-square h-40 cursor-pointer rounded-md object-contain ring-4 ring-transparent hover:opacity-60 hover:ring-primary"
                :src="image"
                alt=""
                @click="removeImage(index)"
                srcset=""
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 sm:flex-row">
          <CustomField
            v-model="item.rentAmount"
            placeholder="1,500"
            label="Rent Amount"
            class="basis-1/2"
          />
          <CustomField
            v-model="item.rentRate"
            label="Rent Rate"
            class="basis-1/2"
            placeholder="per day/week/month"
          />
        </div>
        <div
          v-show="errorMessage"
          class="errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"
        >
          {{ errorMessage }}
        </div>
        <footer class="mt-4 flex flex-col justify-end gap-2 md:flex-row">
          <button
            type="submit"
            class="rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"
          >
            Create
          </button>
          <button
            type="button"
            class="rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"
          >
            Cancel
          </button>
        </footer>
      </div>
    </form>
    <!--form
      class="container mx-auto flex flex-col px-4 py-8"
      @submit.stop.prevent="createItem"
    >
    <h1>Create an item</h1>
    <input
      type="file"
      id="add-image"
      accept="image/*"
      @change="loadImageFile($event)"
      hidden
      multiple
    />
    <label for="images">Add Images</label>
    <div class="w-full overflow-x-auto bg-red-200 p-4" id="images">
      <div class="flex gap-2">
        <img
          class="aspect-square h-40 gap-2 object-contain"
          v-for="image in imagePreviews"
          :src="image"
          alt=""
          srcset=""
        />
        <label
          for="add-image"
          class="aspect-square h-40 cursor-pointer bg-green-400 py-4 text-center"
        >
          Add image...
        </label>
      </div>
    </div>
    <label for="fname">Item Name</label>
      <input
        v-model="item.itemName"
        name="fname"
        type="text"
        class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
        placeholder="Add an item name"
      />
      <label for="fname">Location</label>
      <input
        v-model="item.location"
        name="fname"
        type="text"
        class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
        placeholder="Enter location..."
      />
      <label for="fname">Rent rate</label>
      <div class="rent-rate">
        <input
          v-model="item.rentAmount"
          name="fname"
          type="text"
          class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
          placeholder="Amount"
        />
        <input
          v-model="item.rentRate"
          name="fname"
          type="text"
          class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
          placeholder="Rate (e.d. per day, per week, per month)"
        />
      </div>
      <h2>Tags</h2>
      <div class="flex flex-wrap gap-2 border border-black p-2">
        <div
          v-for="(tag, index) in item.tags"
          class="flex items-center gap-1 whitespace-nowrap rounded-md bg-red-300 px-2 py-1"
        >
          <span>{{ tag }}</span>
          <button
            class="material-icons aspect-square rounded-lg bg-red-500 px-1.5 text-xs text-white"
            @click="deleteTag(index)"
          >
            close
          </button>
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add a tag..."
          @input="validateTag()"
          @keydown.enter.prevent="addTag()"
          @focusout="addTag()"
          v-model="tagInput"
          class="flex-1 border-none py-0"
        />
      </div>
      <label for="fname">Description</label>
      <textarea
        v-model="item.description"
        name="description"
        class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
        placeholder="A short description on what the item is about"
      ></textarea>
      <div
        v-show="errorMessage"
        class="errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"
      >
        {{ errorMessage }}
      </div>
    <div class="mt-4 flex justify-end gap-2">
      <button
        class="rounded-lg border-2 border-green-800 bg-green-800 px-5 py-3 text-white"
      >
        CREATE
      </button>
      <RouterLink
        to="/home"
        class="rounded-lg border-2 border-green-800 bg-white px-5 py-3 text-green-800"
      >
        CANCEL
      </RouterLink>
    </div>
    </form-->
  </main>
</template>
