<script setup>
defineProps({
  modelValue: { default: "" },
  inputType: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  label: { type: String, default: "" },
});

// defines what events our component emits
defineEmits(["update:modelValue"]);

// Basically an over-engineered input field
</script>

<template>
  <div class="flex w-full flex-col gap-1">
    <label v-show="label" class="text-text">
      {{ label }}
    </label>
    <input
      size="1"
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="rounded-md border-2 border-text border-opacity-25 bg-secondary bg-opacity-50 focus:border-2 focus:border-primary focus:border-opacity-60 focus:bg-primary focus:bg-opacity-5 focus:ring-0"
    />
  </div>
</template>
