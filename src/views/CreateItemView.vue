<script setup>
// LAYOUT IS WIP
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseInit.js";
/*import {
  getStorage,
  ref as stRef,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";*/
import "firebase/storage";

const currentUserID = ref();
const currentUserFName = ref("");
const currentUserLName = ref("");
//const imagePreview = ref();
//const imgPath = ref();

onMounted(() => {
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      // User logged in already or has just logged in.
      currentUserID.value = user.uid;
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (user.uid == doc.id) {
          currentUserFName.value = `${doc.data().firstName}`;
          currentUserLName.value = `${doc.data().lastName}`;
        }
      });
    } else {
      // User not logged in or has just logged out.
    }
  });
});

const router = useRouter();

const reader = new FileReader();
const imageFiles = ref([]);
const imagePreviews = ref([]);

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

const itemName = ref("");
const location = ref("");
const rentAmount = ref();
const rentRate = ref("");
const tags = ref("");
const description = ref("");
let error = ref(false);
let errorMessage = ref("");

const addItem = async () => {
  try {
    if (
      /*image !== null &&*/
      itemName.value !== "" &&
      location.value !== "" &&
      rentAmount.value !== "" &&
      rentRate.value !== "Select" &&
      tags.value !== "" &&
      description.value !== ""
    ) {
      try {
        await addDoc(collection(db, "items"), {
          ownerId: currentUserID.value,
          ownerFName: currentUserFName.value,
          ownerLName: currentUserLName.value,
          //image: imageFiles.value,
          itemName: itemName.value,
          location: location.value,
          rentAmount: rentAmount.value,
          rentRate: rentRate.value,
          tags: tags.value,
          description: description.value,
        });
        router.push("/home");
        return;
      } catch (err) {
        error.value = true;
        errorMessage.value = err.message;
      }
    } else {
      error.value = true;
      errorMessage.value = "Please fill out all the fields!";
    }
  } catch (err) {
    error.value = true;
    errorMessage.value = err.message;
  }
};
/*
async function uploadImage(img) {
  //console.log(img.name);
  const storageRef = stRef(storage, "postImages/" + img.name);
  const taskUpload = uploadBytesResumable(storageRef, img);
  await taskUpload;
  const imageURL = getDownloadURL(storageRef);
  return await imageURL;
}

async function handleUploadImage(event) {
  const img = event.target.files[0];
  imagePreview.value = URL.createObjectURL(img);
  imgPath.value = await uploadImage(img);
}
*/
</script>
<template>
  <main>
    <form
      class="container mx-auto flex flex-col px-4 py-8"
      @submit.stop.prevent="addItem"
    >
      <h1>Create an item</h1>
      <input
        type="file"
        id="add-image"
        @change="loadImageFile($event)"
        hidden
      />
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
            ref="fileInput"
            @change="handleUploadImage"
            for="add-image"
            class="aspect-square h-40 cursor-pointer bg-green-400 py-4 text-center"
          >
            Add image...
          </label>
        </div>
      </div>
      <label for="fname">Item Name</label>
      <input
        v-model="itemName"
        name="fname"
        type="text"
        class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
        placeholder="Add an item name"
      />
      <label for="fname">Location</label>
      <input
        v-model="location"
        name="fname"
        type="text"
        class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
        placeholder="Enter location..."
      />
      <label for="fname">Rent rate</label>
      <div class="rent-rate">
        <input
          v-model="rentAmount"
          name="fname"
          type="text"
          class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
          placeholder="Amount"
        />
        <input
          v-model="rentRate"
          name="fname"
          type="text"
          class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
          placeholder="Rate (e.d. per day, per week, per month)"
        />
      </div>
      <label for="fname">Tags</label>
      <input
        name="fname"
        type="text"
        class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
        placeholder="tag1, tag2, tag3"
      />
      <label for="fname">Description</label>
      <textarea
        v-model="description"
        name="description"
        class="rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700"
        placeholder="A short description on what the item is about"
      ></textarea>
      <div
        v-show="error"
        class="errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"
      >
        {{ errorMessage }}
      </div>
      <div class="mt-4 flex justify-end gap-2">
        <!-- TODO: User input from RegisterView is gone upon returning leaving TermsAndConditionVIew -->
        <!-- Probably some way to mark as check upon accepting the terms and conditions? -->
        <button
          to="/item/1"
          class="rounded-lg border-2 border-green-800 bg-green-800 px-5 py-3 text-white"
        >
          CREATE
        </button>
        <!--TODO: return to previous page using vue router-->
        <RouterLink
          to="/home"
          class="rounded-lg border-2 border-green-800 bg-white px-5 py-3 text-green-800"
        >
          CANCEL
        </RouterLink>
      </div>
    </form>
  </main>
</template>
