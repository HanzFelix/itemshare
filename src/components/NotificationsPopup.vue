<script setup>
import { ref } from "vue";

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
  <!-- flex -->
  <div
    class="rounded-lg shadow-md shadow-gray-400 overflow-hidden hidden z-50 bg-white"
    id="dropdownNotifications"
  >
    <div
      class="h-64 w-full md:w-96 flex flex-col"
      aria-labelledby="dropdownNotificationsButton"
    >
      <h2
        class="font-bold px-3 py-2 shadow-sm shadow-gray-400 z-10 text-green-600"
      >
        NOTIFICATIONS
      </h2>
      <!--List of notifications go here-->
      <div class="overflow-y-auto bg-green-100">
        <div class="flex flex-col gap-1 p-2">
          <article
            v-for="notification in notifications"
            class="p-2 text-sm shadow-sm bg-white shadow-gray-400 text-gray-700"
          >
            <p>{{ notification.message }}</p>
            <!-- Haha inefficient way to write stars-->
            <p v-if="notification.rating" class="text-green-600 whitespace-pre">
              <span v-for="i in 5" class="material-icons-outlined">
                {{ i < notification.rating ? "star" : "grade" }}
              </span>
            </p>
            <p>{{ notification.time }}</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
