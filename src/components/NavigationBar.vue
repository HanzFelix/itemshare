<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useItemShareStore } from "@/stores/itemshare";
import ItemShareLogo from "@/components/ItemShareLogo.vue";
import NotificationsPopup from "@/components/NotificationsPopup.vue";

const router = useRouter();
const itemShareStore = useItemShareStore();
const showNotifs = ref(false);

onMounted(async () => {
  await itemShareStore.initMyProfile();
});

function searchItem() {
  if (itemShareStore.searchItem()) router.push("/search");
}

async function logout() {
  try {
    await itemShareStore.logout();
    router.push("/");
  } catch (error) {
    alert("Sign Out Error" + error);
  }
}
</script>
<template>
  <header
    class="sticky flex w-full flex-col bg-primary text-background shadow-sm shadow-secondary"
    v-if="!['login', 'register'].includes($route.name)"
  >
    <nav
      class="container mx-auto flex items-center justify-between bg-primary px-4 py-2"
    >
      <ItemShareLogo />
      <ul class="flex items-center gap-4">
        <li>
          <RouterLink to="/create-item" class="flex gap-1">
            <span class="material-icons text-3xl lg:text-base">add_box</span>
            <span class="hidden lg:inline-block">CREATE ITEM</span>
          </RouterLink>
        </li>
        <li>
          <button
            type="button"
            class="flex gap-1"
            @click="showNotifs = !showNotifs"
          >
            <span class="material-icons text-3xl lg:text-base"
              >notifications</span
            ><span class="hidden lg:inline-block">NOTIFICATIONS</span>
          </button>
          <NotificationsPopup :visible="showNotifs" />
        </li>
        <li>
          <RouterLink to="/messages" class="flex gap-1">
            <span class="material-icons text-3xl lg:text-base">chat</span
            ><span class="hidden lg:inline-block">MESSAGES</span>
          </RouterLink>
        </li>
        <!--TODO: move logout to somewhere else-->
        <li>
          <button @click.prevent="logout" class="flex gap-1">
            <span class="material-icons text-3xl lg:text-base">logout</span
            ><span class="hidden lg:inline-block">LOG OUT</span>
          </button>
        </li>
        <li>
          <RouterLink to="/profile" class="flex items-center gap-2">
            <img
              :src="itemShareStore.myProfile.image"
              alt=""
              class="aspect-square w-10 rounded-full"
              :title="itemShareStore.myFullName"
            />
          </RouterLink>
        </li>
      </ul>
    </nav>
    <section class="bg-secondary bg-opacity-20">
      <div
        class="container mx-auto flex flex-col-reverse items-stretch justify-between px-4 lg:flex-row"
      >
        <ol
          class="flex scroll-p-12 gap-8 overflow-x-auto whitespace-nowrap px-4 pb-4 lg:py-4"
          v-if="['home'].includes($route.name)"
        >
          <li>NEW</li>
          <li>HOT</li>
          <li>TOP RATED</li>
          <li>KIDS</li>
          <li>MEN</li>
          <li>WOMEN</li>
        </ol>
        <div></div>
        <form
          class="my-3 flex overflow-hidden rounded-md border-2 border-text border-opacity-50 bg-background focus-within:border-2 focus-within:border-primary focus-within:border-opacity-100"
          v-if="!['search'].includes($route.name)"
          @submit.stop.prevent="searchItem()"
        >
          <input
            type="text"
            name=""
            id=""
            class="w-full rounded-l-md border-none bg-transparent bg-white bg-opacity-50 px-4 py-1 text-sm text-text placeholder:text-text placeholder:text-opacity-60 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50"
            placeholder="Search..."
          />
          <button
            class="material-icons bg-accent px-2 py-1 text-text text-opacity-70 lg:py-0 lg:text-lg"
          >
            search
          </button>
          <RouterLink
            to="/search"
            class="material-icons bg-accent py-1 pr-2 text-text text-opacity-70 lg:py-0 lg:text-lg"
          >
            menu
          </RouterLink>
        </form>
      </div>
    </section>
  </header>
</template>
