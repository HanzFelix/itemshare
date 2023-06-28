<script setup>
import { useRoute } from "vue-router";
import { useItemShareStore } from "../stores/itemshare";
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import StarRating from "../components/StarRating.vue";

const itemShareStore = useItemShareStore();
const route = useRoute();

const itemId = ref(route.params.id);
//const item = itemShareStore.itemById(id);
const activeImg = ref(0);
const sampleImgs = ref([
  "https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",
  "https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",
  "https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",
  "https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",
]);

// temporarily uses placeholder profile until onMounted is called
const profile = ref(itemShareStore.loadedProfile(5));

const item = ref({
  itemName: "",
  location: "",
  rentAmount: "",
  rentRate: "",
  images: [],
  description: "",
  ownerId: "",
  tags: [],
});

function viewImage(index) {
  activeImg.value = index;
}

onMounted(async () => {
  item.value = await itemShareStore.loadItem(itemId.value);
  profile.value = await itemShareStore.loadProfile(item.value.ownerId);
});
</script>
<template>
  <main class="container mx-auto flex flex-col gap-4 px-4 py-8">
    <section class="flex flex-row-reverse gap-2">
      <!--Update to go back one page-->
      <RouterLink to="/home">Close X</RouterLink>
    </section>
    <!--Item-->
    <section class="flex flex-col gap-2 lg:flex-row">
      <!--Images-->
      <div class="flex basis-3/12 flex-col gap-2 bg-white p-4">
        <img
          :src="item.images[activeImg]"
          alt=""
          srcset=""
          class="aspect-square w-full object-contain"
        />
        <div class="flex w-full gap-2 overflow-x-auto">
          <img
            class="aspect-square h-24 cursor-pointer object-contain"
            v-for="(img, index) in item.images"
            :src="img"
            @click="viewImage(index)"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <!--Details-->
      <div class="flex w-full basis-6/12 flex-col justify-between bg-white p-4">
        <div>
          <div class="flex items-start justify-between">
            <h1>{{ item.itemName }}</h1>
            <span
              class="rounded-full bg-green-600 px-4 py-1 text-xs font-black text-white"
            >
              AVAILABLE
            </span>
          </div>

          <!--rent rate-->
          <div class="my-4">
            <p class="text-green-600">
              <span class="mr-2 text-2xl">₱</span
              >{{ item.rentAmount + " - " + item.rentRate }}
            </p>
            <!--rating-->
            <div class="flex gap-4">
              <span>4.0 / 5.0</span>
              <StarRating value="4" />
            </div>
            <!--location-->
            <div class="flex">
              <span class="material-icons text-green-600">location_on</span>
              <span>{{ item.location }}</span>
            </div>
          </div>
          <!--description-->
          <p>
            {{ item.description }}
          </p>
        </div>
        <div class="mt-2 flex flex-col items-start">
          <div class="flex gap-2">
            Tags:
            <ul class="flex flex-wrap gap-2">
              <!--Clicking on a tag should redirect user to search results with the same tag-->
              <li
                v-for="tag in item.tags"
                class="rounded-full border-2 border-yellow-500 bg-yellow-200 px-4 py-1 text-xs text-yellow-700"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-2">
            <button class="mt-4 rounded-lg bg-green-600 px-5 py-3 text-white">
              Rent
            </button>
            <button
              class="rounded-lg border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-center text-yellow-800"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
      <!--Lender Details-->
      <div class="basis-3/12 bg-white p-4">
        <h2>Lender</h2>
        <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
          <RouterLink to="" class="flex items-center gap-2">
            <img
              class="aspect-square w-12 rounded-full"
              :src="profile.image"
              alt=""
              srcset=""
            />
            <span class="whitespace-nowrap">{{
              profile.firstName + " " + profile.lastName
            }}</span>
          </RouterLink>
          <button class="flex items-center gap-1">
            <span class="material-icons text-green-600">forum</span>Chat
          </button>
        </div>
        <!--rating-->
        <h2>Lender Ratings</h2>
        <div class="mb-4 flex items-center gap-4">
          <span>4.0 / 5.0</span>
          <StarRating value="4" />
        </div>

        <!--rating-->
        <h2>Chat Response Rate</h2>
        <div class="mb-4 flex items-center gap-4">
          <span>3.0 / 5.0</span>
          <StarRating value="3" />
        </div>
      </div>
    </section>
    <section class="flex flex-col gap-2">
      <div
        class="flex flex-col justify-between gap-4 bg-gray-50 p-4 md:flex-row md:items-center"
      >
        <h1>Item Reviews and Rating</h1>
        <div
          class="flex flex-wrap items-start gap-4 text-sm sm:text-base md:items-center"
        >
          <div class="flex items-center gap-1">
            <span class="material-icons text-green-600">filter_alt</span>
            <span>Filter:</span>
            <select name="" id="" class="text-xs sm:text-base">
              <option value="">All Star</option>
            </select>
          </div>
          <div class="flex items-center gap-1">
            <span class="material-icons text-green-600">sort</span>
            <span>Sort:</span>
            <select name="" id="" class="text-xs sm:text-base">
              <option value="">Relevance</option>
              <option value="">???</option>
            </select>
          </div>
        </div>
      </div>
      <section class="flex flex-col gap-2">
        <article v-for="i in 6" class="flex flex-col gap-2 bg-white p-4">
          <div class="flex items-center gap-2">
            <img
              class="aspect-square w-12 rounded-full"
              :src="itemShareStore.loadedProfile(i).image"
              alt=""
              srcset=""
            />
            <div class="flex flex-col">
              <StarRating value="4" />
              <span class="truncate text-gray-700">
                {{
                  itemShareStore.loadedProfile(i).firstName +
                  " " +
                  itemShareStore.loadedProfile(i).lastName
                }}</span
              >
            </div>
          </div>
          <p class="py-2">user review........................</p>
        </article>
      </section>
    </section>
  </main>
</template>
