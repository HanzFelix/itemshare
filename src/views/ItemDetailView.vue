<script setup>
import { ref } from "vue";

const tags = ref(["scanner", "3d", "technology", "gadget", "device"]);
</script>
<template>
  <main class="flex flex-col py-40 container mx-auto px-4 gap-8">
    <section class="flex flex-row-reverse gap-2">
      <button>Close X</button>
    </section>
    <!--Item-->
    <section class="flex gap-2 lg:flex-row flex-col">
      <!--Images-->
      <div class="basis-3/12 flex flex-col gap-2 p-4 bg-white">
        <img
          src="https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
          alt=""
          srcset=""
        />
        <div class="flex w-full">
          <img
            class="w-1/3 px-1 aspect-auto"
            src="https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
            alt=""
            srcset=""
          />
          <img
            class="w-1/3 px-1 aspect-auto"
            src="https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
            alt=""
            srcset=""
          />
          <img
            class="w-1/3 px-1 aspect-auto"
            src="https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <!--Details-->
      <div class="basis-6/12 flex flex-col justify-between w-full p-4 bg-white">
        <div>
          <div class="flex justify-between items-start">
            <h1>3D Scanner</h1>
            <span
              class="bg-green-600 text-white text-xs py-1 px-4 rounded-full font-black"
            >
              AVAILABLE
            </span>
          </div>

          <!--rent rate-->
          <div class="my-4">
            <p class="text-green-600">
              <span class="text-2xl mr-2">₱</span>150 - per week
            </p>
            <!--rating-->
            <div class="flex gap-4">
              <span>4.0 / 5.0</span>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <!--location-->
            <div class="flex">
              <span class="material-icons text-green-600">location_on</span>
              <span>Baybay City</span>
            </div>
          </div>
          <!--description-->
          <p>
            Quality: 3d scanner, perfect for real object to graphic conversion
            chuchu text wrap verbose text paragraph really long line yes...
          </p>
        </div>
        <div class="flex flex-col items-start mt-2">
          <div class="flex gap-2">
            Tags:
            <ul class="flex gap-2">
              <li
                v-for="tag in tags"
                class="bg-yellow-200 text-yellow-700 text-xs py-1 border-2 px-4 border-yellow-500 rounded-full"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-2">
            <button class="py-3 px-5 text-white bg-green-600 rounded-lg mt-4">
              Rent
            </button>
            <button
              class="py-3 px-5 bg-yellow-200 text-yellow-800 border-2 border-yellow-500 rounded-lg text-center"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
      <!--Lender Details-->
      <div class="basis-3/12 bg-white p-4">
        <h2>Lender</h2>
        <div class="flex items-center gap-2 justify-between mb-4 flex-wrap">
          <div class="flex items-center gap-2">
            <img
              class="aspect-square w-12 rounded-full"
              src="https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
              alt=""
              srcset=""
            />
            <span class="whitespace-nowrap">Isaac Einstein</span>
          </div>
          <button class="flex items-center gap-1">
            <span class="material-icons text-green-600">forum</span>Chat
          </button>
        </div>
        <!--rating-->
        <h2>Lender Ratings</h2>
        <div class="flex gap-4 mb-4">
          <span>4.0 / 5.0</span>
          <span>⭐⭐⭐⭐⭐</span>
        </div>

        <!--rating-->
        <h2>Chat Response Rate</h2>
        <div class="flex gap-4 mb-4">
          <span>4.0 / 5.0</span>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
      </div>
    </section>
    <section class="flex flex-col px-4 gap-2">
      <div class="flex justify-between p-4 bg-gray-50">
        <h1>Item Reviews and Rating</h1>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1">
            <span class="material-icons">filter_alt</span>
            <span>Filter:</span>
            <select name="" id="">
              <option value="">All Star</option>
            </select>
          </div>
          <div class="flex items-center gap-1">
            <span class="material-icons">sort</span>
            <span>Sort:</span>
            <select name="" id="">
              <option value="">Relevance</option>
              <option value="">???</option>
            </select>
          </div>
        </div>
      </div>
      <section class="flex flex-col gap-2">
        <article v-for="i in 6" class="bg-white p-4 flex flex-col gap-2">
          <span>⭐⭐⭐⭐⭐</span>
          <div class="flex items-center gap-2">
            <img
              class="aspect-square w-12 rounded-full"
              src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
              alt=""
              srcset=""
            />
            <span class="whitespace-nowrap text-gray-600">Isaac Einstein</span>
          </div>
          <p class="py-2">user review........................</p>
        </article>
      </section>
    </section>
  </main>
</template>
