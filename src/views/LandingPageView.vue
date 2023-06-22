<template>
  <div class="basis-full flex flex-col justify-between pt-16 px-4">
    <h1
      class="text-5xl sm:text-6xl font-bold text-white md:shadow-none border-0 md:border-b-4 pb-8 border-green-400"
    >
      Hello, looking for something you like?
    </h1>
    <div class="px-4 basis-full py-16 flex-col gap-8 flex">
      <p class="text-white text-xl">
        Unlock the value of your unused items: Earn, Share, and Connect with
        ItemShare
      </p>
      <div class="gap-2 flex items-center">
        <RouterLink
          to="/login"
          class="py-3 px-5 text-green-800 border-2 bg-white border-white rounded-xl text-center"
        >
          LOGIN
        </RouterLink>
        <RouterLink
          to="/register"
          class="py-3 px-5 text-white border-2 border-white rounded-xl text-center"
        >
          REGISTER
        </RouterLink>
      </div>
    </div>
  </div>
</template>
