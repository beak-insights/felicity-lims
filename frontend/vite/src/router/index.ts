import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/auth/Login.vue';
import DashBoardView from '../views/dashboard/index.vue';
import PatientsView from '../views/patient/index.vue';
import ClientsView from '../views/client/index.vue';
import SamplesView from '../views/sample/index.vue';
import WorkSheetsView from '../views/worksheet/index.vue';
import AboutView from '../views/About.vue';
import AdminView from '../views/admin/index.vue';
import PageNotFound from '../views/404.vue';
import { isTokenValid } from './checks';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoardView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/auth',
    name: 'Login',
    component: LoginView,
    meta: { layout: 'empty' },
  },
  {
    path: '/patients',
    name: 'Patients',
    component: PatientsView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/clients',
    name: 'Clients',
    component: ClientsView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/samples',
    name: 'Samples',
    component: SamplesView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/worksheets',
    name: 'WorkSheets',
    component: WorkSheetsView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => AboutView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => WorkSheetsView,
    meta: {
      requiresAuth: true,
      is_admin: true,
    },
  },
  {
    name: 'admin',
    path: '/admin',
    component: AdminView,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    name: '404-page-not-found',
    path: '/:pathMatch(.*)',
    component: PageNotFound,
    meta: {
      layout: 'empty',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let token = localStorage.getItem('fwt');
    if (!isTokenValid(token)) {
      next({ path: '/auth' });
      return;
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
