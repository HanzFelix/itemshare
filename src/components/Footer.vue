<script setup></script>
<template>
  <header
    class="sticky bottom-0 flex w-full flex-col bg-primary px-4 text-background"
    v-if="!['login', 'register'].includes($route.name)"
  >
    <nav class="container mx-auto flex items-center justify-end py-4">
      <p>All Rights Reserved 2023. &reg;</p>
    </nav>
  </header>
</template>
