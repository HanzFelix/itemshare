<template>
  <div class="flex basis-full flex-col justify-between px-4 pt-16">
    <h1
      class="basis-full border-0 border-green-400 text-5xl font-bold text-white sm:text-6xl md:border-b-4 md:shadow-none"
    >
      Hello, looking for something you like?
    </h1>
    <div class="flex basis-full flex-col gap-8 px-4 py-16">
      <p class="text-xl text-white">
        Unlock the value of your unused items: Earn, Share, and Connect with
        ItemShare
      </p>
      <div class="flex items-center gap-2">
        <RouterLink
          to="/login"
          class="rounded-xl border-2 border-white bg-white px-5 py-3 text-center text-green-800"
        >
          LOGIN
        </RouterLink>
        <RouterLink
          to="/register"
          class="rounded-xl border-2 border-white px-5 py-3 text-center text-white"
        >
          REGISTER
        </RouterLink>
      </div>
    </div>
  </div>
</template>
