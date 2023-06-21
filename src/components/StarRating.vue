<script setup>
const props = defineProps({
  // value is the number of stars
  value: {
    type: Number,
    default: 0,
  },
});
</script>
<template>
  <p class="text-green-600 whitespace-pre">
    <span v-for="i in 5" class="material-icons-outlined">
      {{ i < value ? "star" : "grade" }}
    </span>
  </p>
</template>
