<template>
  <main class="flex flex-row items-stretch py-36 container mx-auto px-4 gap-4">
    <aside
      class="flex flex-col basis-1/3 gap-2 p-4 box-border bg-white rounded-xl shadow-md shadow-gray-400"
    >
      <h1 class="px-2">Recent Messages</h1>
      <!--Message -->
      <div class="flex flex-col gap-2 items-stretch">
        <!--Convert to RouterLink-->
        <article
          v-for="i in 6"
          class="flex gap-2 p-2 rounded-2xl"
          :class="i == 3 ? 'bg-yellow-200' : ''"
        >
          <img
            src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
            alt=""
            class="aspect-square w-12 rounded-full"
          />
          <div class="bg-blue-300 basis-full">
            <p class="font-black">Elong Mah</p>
            <p class="truncate bg-red-300">Insert Message Here</p>
          </div>
        </article>
      </div>
    </aside>
    <section
      class="basis-2/3 bg-white overflow-hidden rounded-xl flex flex-col justify-stretch shadow-md shadow-gray-400"
    >
      <header class="bg-green-600 flex px-6 py-2 gap-2">
        <img
          src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg"
          alt=""
          class="aspect-square w-12 rounded-full"
        />
        <div class="flex flex-col text-white">
          <p class="font-black">Elong Mah</p>
          <div class="truncate flex gap-1 items-center">
            <div class="h-2 rounded-full bg-green-300 w-2 inline-block"></div>
            <span>Online</span>
          </div>
        </div>
      </header>
      <main
        class="bg-white basis-full px-6 overflow-y-scroll overflow-hidden h-48"
      >
        <div v-for="i in 8" class="bg-red-200 h-24 w-52">a</div>
      </main>
      <form
        class="bg-amber-400 flex gap-2 p-2 mx-6 mb-4 rounded-xl shadow-sm shadow-gray-400"
      >
        <input
          type="text"
          name=""
          placeholder="Enter message..."
          class="w-full py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"
          id=""
        />
        <button
          type="submit"
          class="py-2 px-4 text-white bg-green-700 rounded-xl"
        >
          Send
        </button>
      </form>
    </section>
  </main>
</template>
