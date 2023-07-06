<script setup>
import { ref } from "vue";
import StarRating from "@/components/StarRating.vue";

defineProps({
  visible: Boolean,
});

const notifications = ref([
  {
    type: "review",
    message: 'Lorem Dolor gave your "3D Scanner" a rating:',
    rating: 4,
    time: "JUST NOW",
  },
  {
    type: "review",
    message:
      'Lorem Dolor left a review to your "3D Scanner": "Way lami imo item di nani nahu iuli nimo kay ahu ni sunugon human gamit!"',
    rating: 5,
    time: "24 MINS AGO",
  },
  {
    type: "upcoming",
    message: '"2D Printer" will be ready for you to pick up in 24 hours.',
    time: "23 HOURS AGO",
  },
  {
    type: "message",
    message: "Lorem Dolor chatted you! Be sure to leave a reply.",
    time: "4 DAYS AGO",
  },
]);
</script>
<template>
  <Transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 -translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1"
  >
    <!-- flex -->
    <div
      class="absolute left-0 z-50 mt-2.5 w-screen max-w-max translate-x-0 overflow-hidden rounded-none bg-white shadow-md shadow-gray-400 md:left-auto md:-translate-x-1/2 md:rounded-lg lg:mt-4"
      id="dropdownNotifications"
      v-if="visible"
    >
      <div class="flex h-64 w-full flex-col md:w-96">
        <h2
          class="z-10 px-3 py-2 font-bold text-green-600 shadow-sm shadow-gray-400"
        >
          NOTIFICATIONS
        </h2>
        <!--List of notifications go here-->
        <div class="overflow-y-auto bg-green-50">
          <div class="flex flex-col gap-1 p-2">
            <article
              v-for="notification in notifications"
              class="bg-white p-2 text-sm text-gray-700 shadow-sm shadow-gray-400"
            >
              <p>{{ notification.message }}</p>
              <StarRating
                v-if="notification.rating"
                :value="notification.rating"
              />
              <p>{{ notification.time }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
