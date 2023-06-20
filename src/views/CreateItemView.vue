<script setup>
// LAYOUT IS WIP
import { ref } from "vue";

const reader = new FileReader();
const imageFiles = ref([]);
const imagePreviews = ref([
  "https://img.getimg.ai/generated/img-TJkw9SrWmpQLt9tIhgET7.jpeg",
]);

function loadImageFile(e) {
  let file = e.target.files[0];

  // add the file to the list of files to be uploaded later
  imageFiles.value.push(file);

  // Converts the file to a browser-readable image (aka string with base64 encoding) for display
  reader.readAsDataURL(file);
  reader.onload = (event) => {
    imagePreviews.value.push(event.target.result);
  };
}
/*

personal idea lang on how to create item
- user fills in field
- attach images
- submit
- user wait for images to upload
- add details to database
- item complete

*/
</script>
<template>
  <main class="flex flex-col py-8 container mx-auto px-4">
    <h1>Create an item</h1>
    <input type="file" id="add-image" @change="loadImageFile($event)" hidden />
    <!--button type="button" @click="uploadImage" class="bg-red-300 p-4">
      Add
    </button-->
    <!--img
      class="h-48 aspect-square p-4 bg-blue-200"
      :src="tempImage"
      alt=""
      srcset=""
    /-->
    <label for="images">Images</label>
    <div class="w-full overflow-x-auto p-4 bg-red-200" id="images">
      <div class="flex gap-2">
        <img
          class="h-40 gap-2 aspect-square object-contain"
          v-for="image in imagePreviews"
          :src="image"
          alt=""
          srcset=""
        />
        <label
          for="add-image"
          class="bg-green-400 cursor-pointer h-40 aspect-square text-center py-4"
        >
          Add image...
        </label>
      </div>
    </div>
    <label for="fname">Item Name</label>
    <input
      name="fname"
      type="text"
      class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
      placeholder="Add an item name"
    />
    <label for="fname">Tags</label>
    <input
      name="fname"
      type="text"
      class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
      placeholder="tag1, tag2, tag3"
    />
    <label for="fname">Description</label>
    <textarea
      name="description"
      class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
      placeholder="A short description on what the item is about"
    ></textarea>
    <div class="flex justify-end gap-2 mt-4">
      <!-- TODO: User input from RegisterView is gone upon returning leaving TermsAndConditionVIew -->
      <!-- Probably some way to mark as check upon accepting the terms and conditions? -->
      <RouterLink
        to="/register"
        class="py-3 px-5 text-white bg-green-800 rounded-lg"
      >
        CREATE
      </RouterLink>
      <RouterLink
        to="/register"
        class="py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-lg"
      >
        CANCEL
      </RouterLink>
    </div>
  </main>
</template>
