import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';


import LoginView from "../views/auth/Login.vue";
import DashBoardView from "../views/dashboard/index.vue";
import PatientsView from "../views/patient/index.vue";
import ClientsView from "../views/client/index.vue";
import SamplesView from "../views/sample/index.vue";
import WorkSheetsView from "../views/worksheet/index.vue";
import AboutView from "../views/About";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoardView,
  },
  {
    path: "/auth",
    name: "Login",
    component: LoginView,
    meta: { layout: "empty" },
  },
  {
    path: '/patients',
    name: 'Patients',
    component: PatientsView,
  },
  {
    path: '/clients',
    name: 'Clients',
    component: ClientsView,
  },
  {
    path: '/samples',
    name: 'Samples',
    component: SamplesView,
  },
  {
    path: '/worksheets',
    name: 'WorkSheets',
    component: WorkSheetsView,
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
