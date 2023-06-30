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
      class="rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 text-text placeholder:text-sm placeholder:text-text placeholder:text-opacity-60 focus:border-2 focus:border-primary focus:border-opacity-100 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50"
    />
    <slot></slot>
  </div>
</template>
