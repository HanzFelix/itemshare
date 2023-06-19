<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="overflow-y-auto basis-full">
    <RouterView />
  </div>
</template>
