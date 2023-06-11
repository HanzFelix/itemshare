import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LandingView from "../views/LandingView.vue";
import ProfileView from "../views/ProfileView.vue";
import ItemDetailView from "../views/ItemDetailView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import MessagesView from "../views/MessagesView.vue";
import SearchView from "../views/SearchView.vue";
import EmptyView from "../views/EmptyView.vue";
import ConversationView from "../views/ConversationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
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
      path: "/login",
      component: LandingView,
      children: [
        { path: "", name: "login", component: LoginView },
        { path: "/register", name: "register", component: RegisterView },
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
  ],
});

export default router;
