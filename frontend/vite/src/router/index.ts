import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';


import LoginView from "../views/pages/Login.vue";
import HomeView from "../views/App.vue";
import AboutView from "../views/About";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: "/auth",
    name: "Login",
    component: LoginView,
    meta: { layout: "empty" },
  },
  {
    path: '/about',
    name: 'About',
    component: () => AboutView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
