import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import adminRoutes from './admin';

import LoginView from '../views/auth/Login.vue';
import DashBoardView from '../views/dashboard/index.vue';
import PatientsView from '../views/patient/index.vue';
import PatientsCompact from '../views/patient/Patients.vue';
import PatientSearch from '../views/patient/PatientSearch.vue';
import PatientSingleView from '../views/patient/_id/index.vue';
import PatientDetail from '../views/patient/_id/PatientDetail.vue';
import PatientSample from '../views/patient/_id/PatientSample.vue';
import ClientsView from '../views/client/index.vue';
import SamplesView from '../views/sample/index.vue';
import SamplesListing from '../views/sample/SamplesListing.vue';
import SamplesAdd from '../views/sample/SamplesAdd.vue';
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
    children: [
      {
        path: '',
        name: 'patients-compact',
        component: PatientsCompact,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'search',
        name: 'patients-search',
        component: PatientSearch,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'detail',
        name: 'patient',
        component: PatientSingleView,
        children: [
          {
            path: '',
            name: 'patient-detail',
            component: PatientDetail,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: 'sample-detail',
            name: 'patient-sample-detail',
            component: PatientSample,
            meta: {
              requiresAuth: true,
            },
          },
        ],
        meta: {
          requiresAuth: true,
        },
      },
    ],
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
    children: [
      {
        path: '',
        name: 'samples-listing',
        component: SamplesListing,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'add-new',
        name: 'samples-add',
        component: SamplesAdd,
        meta: {
          requiresAuth: true,
        },
      },
    ],
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
    name: 'admin',
    path: '/admin',
    component: AdminView,
    children: adminRoutes,
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
