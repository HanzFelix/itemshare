import { createRouter, createWebHistory } from "vue-router";
import { useItemShareStore } from "@/stores/itemshare";
import LandingView from "@/views/LandingView.vue";
import LandingPageView from "@/views/LandingPageView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomePageView from "@/views/HomePageView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ItemDetailView from "@/views/ItemDetailView.vue";
import MessagesView from "@/views/MessagesView.vue";
import SearchView from "@/views/SearchView.vue";
import EmptyView from "@/views/EmptyView.vue";
import ConversationView from "@/views/ConversationView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import TermsAndConditionsView from "@/views/TermsAndConditionsView.vue";
import CreateItemView from "@/views/CreateItemView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LandingView,
      meta: { requiresAuth: false },
      children: [
        { path: "", name: "getStarted", component: LandingPageView },
        { path: "/login", name: "login", component: LoginView },
        { path: "/register", name: "register", component: RegisterView },
        {
          path: "/terms-and-conditions",
          name: "termsAndConditions",
          component: TermsAndConditionsView,
        },
        {
          path: "/forgot-password",
          name: "forgotPassword",
          component: ForgotPasswordView,
        },
        { path: "/about", name: "about", component: AboutView },
      ],
    },
    {
      path: "/home",
      component: HomePageView,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "/profile/:id",
          name: "profile",
          component: ProfileView,
        },
        {
          path: "/profile",
          name: "myProfile",
          component: ProfileView,
        },
        {
          path: "/messages",
          component: MessagesView,
          children: [
            { path: "", name: "messages", component: EmptyView },
            {
              path: "/messages/:id",
              name: "conversation",
              component: ConversationView,
            },
          ],
        },
        {
          path: "/item/:id",
          name: "itemDetail",
          component: ItemDetailView,
        },
        {
          path: "/search",
          name: "search",
          component: SearchView,
        },
        {
          path: "/create-item",
          name: "createItem",
          component: CreateItemView,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to the top of the RouterView container
    const routerViewElement =
      document.getElementsByClassName("overflow-y-auto")[0];
    if (routerViewElement) {
      routerViewElement.scrollTo(0, 0);
    }

    // Scroll the entire page to the top
    window.scrollTo(0, 0);

    // Return the savedPosition if available
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
});

// checks if user is logged in before navigating
router.beforeEach((to, from, next) => {
  const itemShareStore = useItemShareStore();
  if (to.meta.requiresAuth && !itemShareStore.loggedInUser) {
    // redirect non-user accessing user-only sites to landing
    next("/");
  } else if (!to.meta.requiresAuth && itemShareStore.loggedInUser) {
    // redirect user accessing landing page to home
    next("/home");
  } else {
    // proceed as usual (even when refreshed)
    next();
  }
});

export default router;
