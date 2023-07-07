<template>
  <div
    class="flex basis-full flex-col justify-between divide-y-0 divide-secondary/80 px-4 md:divide-y-4"
  >
    <div class="flex basis-full flex-col justify-center">
      <h1 class="text-5xl font-bold text-background sm:text-6xl md:shadow-none">
        Hello, looking for something you like?
      </h1>
    </div>
    <div class="flex basis-full flex-col gap-8 px-4 py-16">
      <p class="text-xl text-background">
        Unlock the value of your unused items: Earn, Share, and Connect with
        ItemShare
      </p>
      <div class="flex items-center gap-2">
        <RouterLink
          to="/login"
          class="rounded-md border-2 border-background bg-background px-8 py-2 text-center text-green-800"
        >
          LOGIN
        </RouterLink>
        <RouterLink
          to="/register"
          class="rounded-md border-2 border-background px-8 py-2 text-center text-background"
        >
          REGISTER
        </RouterLink>
      </div>
    </div>
  </div>
</template>
