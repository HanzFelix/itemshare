<script setup></script>
<template>
  <header
    class="bg-green-600 flex flex-col fixed w-full text-white bottom-0"
    v-if="!['login', 'register'].includes($route.name)"
  >
    <nav
      class="flex items-center justify-end container mx-auto py-4 bg-green-600"
    >
      <p>All Rights Reserved 2023. &reg;</p>
    </nav>
  </header>
</template>
