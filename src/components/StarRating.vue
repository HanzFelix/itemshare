<script setup>
const props = defineProps({
  // value is the number of stars
  value: {
    default: 0,
  },
});
</script>
<template>
  <p class="whitespace-pre text-green-600">
    <span v-for="i in 5" class="material-icons-outlined">
      {{ i < value ? "star" : "grade" }}
    </span>
  </p>
</template>
