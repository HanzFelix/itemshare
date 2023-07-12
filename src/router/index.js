import { createRouter, createWebHistory } from "vue-router";
import { useItemShareStore } from "@/stores/itemshare";
const LandingView = () => import("@/views/LandingView.vue");
const LandingPageView = () => import("@/views/LandingPageView.vue");
const LoginView = () => import("@/views/LoginView.vue");
const RegisterView = () => import("@/views/RegisterView.vue");
const HomePageView = () => import("@/views/HomePageView.vue");
const HomeView = () => import("@/views/HomeView.vue");
const ProfileView = () => import("@/views/ProfileView.vue");
const ItemDetailView = () => import("@/views/ItemDetailView.vue");
const MessagesView = () => import("@/views/MessagesView.vue");
const SearchView = () => import("@/views/SearchView.vue");
const EmptyView = () => import("@/views/EmptyView.vue");
const ConversationView = () => import("@/views/ConversationView.vue");
const ForgotPasswordView = () => import("@/views/ForgotPasswordView.vue");
const TermsAndConditionsView = () =>
  import("@/views/TermsAndConditionsView.vue");
const CreateItemView = () => import("@/views/CreateItemView.vue");
const AboutView = () => import("@/views/AboutView.vue");

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
