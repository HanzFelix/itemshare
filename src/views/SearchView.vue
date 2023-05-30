<script setup></script>
<template>
  <main
    class="flex flex-col lg:flex-row lg:items-start py-40 container mx-auto px-4 gap-4"
  >
    <aside
      class="flex flex-col basis-1/3 gap-2 p-4 box-border bg-white rounded-xl shadow-sm shadow-gray-400"
    >
      <h1>Search for Items</h1>
      <form action="#" method="get" class="flex flex-col gap-2">
        <div class="flex gap-2">
          <input
            type="text"
            name=""
            placeholder="Item name"
            class="w-full py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
            id=""
          />
          <button
            type="submit"
            class="py-2 px-4 text-white bg-green-700 rounded-xl"
          >
            Search
          </button>
        </div>
        <div class="flex gap-2">
          <input
            type="text"
            name=""
            placeholder="Min. Rate"
            class="w-1/2 py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
            id=""
          />
          <input
            type="text"
            name=""
            placeholder="Max. Rate"
            class="w-1/2 py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
            id=""
          />
        </div>
        <input
          type="text"
          placeholder="Location"
          class="py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
        />
      </form>
      <section>
        <h2>Category</h2>
        <ul>
          <li>
            <input type="checkbox" name="" id="" />Clothing
            <ul class="ml-4">
              <li><input type="checkbox" name="" id="" />Men</li>
              <li><input type="checkbox" name="" id="" />Women</li>
              <li><input type="checkbox" name="" id="" />Unisex</li>
              <li><input type="checkbox" name="" id="" />Kids</li>
            </ul>
          </li>
          <li>
            <input type="checkbox" name="" id="" />Appliances
            <ul class="ml-4">
              <li><input type="checkbox" name="" id="" />Kitchen</li>
              <li><input type="checkbox" name="" id="" />Laundry</li>
              <li><input type="checkbox" name="" id="" />Living Room</li>
            </ul>
          </li>
          <li>
            <input type="checkbox" name="" id="" />Gadgets and Devices
            <ul class="ml-4">
              <li><input type="checkbox" name="" id="" />Smartphones</li>
              <li><input type="checkbox" name="" id="" />Cameras</li>
              <li><input type="checkbox" name="" id="" />Tablets</li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>
    <section
      class="basis-2/3 grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <article v-for="i in 8" class="shadow-sm shadow-gray-400 p-2 bg-white">
        <a href="#">
          <img
            src="https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
            alt=""
            srcset=""
            class="object-contain"
          />
          <div class="flex flex-col">
            <p>3D Scanner</p>
            <p class="text-xs">Baybay City</p>
            <p class="text-green-800">
              <span class="text-2xl">₱</span>150 - per week
            </p>
          </div></a
        >
      </article>
    </section>
  </main>
</template>
