<script setup>
const props = defineProps({
  rentRate: { default: 1 },
});
import { ref, computed, reactive } from "vue";
import CustomField from "../components/CustomField.vue";
import CustomDropdown from "./CustomDropdown.vue";
const emit = defineEmits(["close"]);
const suggestAddress = ref(false);
const rent = ref({
  startDate: addDays(new Date(), 1),
  endDate: addDays(new Date(), props.rentRate + 1),
  returnDate: addDays(new Date(), props.rentRate + 2),
  address: "The Chasm, Liyue",
  paymentOption: "Select...",
});

const startDate = computed({
  get() {
    return dateToString(rent.value.startDate);
  },
  set(newValue) {
    rent.value.startDate = stringToDate(newValue);
  },
});

const endDate = computed({
  get() {
    return dateToString(rent.value.endDate);
  },
  set(newValue) {
    rent.value.endDate = stringToDate(newValue);
  },
});

const returnDate = computed({
  get() {
    return dateToString(rent.value.returnDate);
  },
  set(newValue) {
    rent.value.returnDate = stringToDate(newValue);
  },
});
/*
const startDate = ref();
const endDate = reactive(dateToString(addDays(new Date(), 1 + props.rentRate)));
const returnDate = computed(() => {
  dateToString(addDays(stringToDate(endDate), 1));
});*/
function rentItem() {
  emit("close");
}

function stringToDate(str) {
  const [y, m, d] = str.split("-");
  return new Date(+y, m - 1, +d);
}

function dateToString(date) {
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate())
  );
}

function addDays(date = new Date(), days) {
  const dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() + days);
  return dateCopy;
}

function updateReturnDate() {
  rent.value.returnDate = addDays(rent.value.endDate, 1);
}

function pad(n, s = String(n)) {
  return s.length < 2 ? `0${s}` : s;
}
</script>
<template>
  <form action="#" @submit.stop.prevent="rentItem">
    <h1>Rent Item</h1>
    <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
      <div class="flex w-56 basis-full flex-col gap-2">
        <CustomField label="Start Date" input-type="date" v-model="startDate" />
        <CustomField
          label="End Date"
          input-type="date"
          v-model="endDate"
          @update:model-value="updateReturnDate"
        />
        <CustomField
          label="Return Date"
          input-type="date"
          v-model="returnDate"
          disabled="true"
        />
      </div>
      <div class="flex w-56 basis-full flex-col gap-2">
        <CustomField
          label="Address"
          :disabled="!suggestAddress"
          v-model="rent.address"
        >
          <p class="flex items-center text-sm">
            <input
              type="checkbox"
              v-model="suggestAddress"
              class="mr-1 rounded-sm text-accent focus:ring-0"
            /><span>Suggest another address</span>
          </p>
        </CustomField>
        <CustomDropdown label="Payment Options" v-model="rent.paymentOption">
          <option>Select...</option>
          <option>Cash on Delivery</option>
          <option>Credit Card</option>
        </CustomDropdown>
      </div>
    </div>
    <footer class="mt-4 flex flex-col justify-end gap-2 sm:flex-row">
      <button
        type="submit"
        class="rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"
      >
        Request Rent
      </button>
      <button
        type="button"
        @click="emit('close')"
        class="rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"
      >
        Cancel
      </button>
    </footer>
  </form>
</template>
