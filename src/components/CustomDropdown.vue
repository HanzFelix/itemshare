<script setup>
defineProps({
  modelValue: { default: "" },
  label: { type: String, default: "" },
  disabled: { default: false },
});

// defines what events our component emits
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="flex w-full flex-col gap-1">
    <label v-show="label" class="text-text">
      {{ label }}
    </label>
    <select
      :disabled="disabled"
      :value="modelValue"
      class="rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 focus:border-2 focus:border-primary focus:border-opacity-60 focus:bg-white focus:bg-opacity-90 focus:ring-0"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <slot><option>Select...</option></slot>
    </select>
  </div>
</template>
