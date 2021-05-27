import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import adminRoutes from './admin';

import LoginView from '../views/auth/Login.vue';
import DashBoardView from '../views/dashboard/index.vue';
import PatientsView from '../views/patient/index.vue';
import PatientsListing from '../views/patient/Patients.vue';
import PatientsCompact from '../views/patient/PatientsCompact.vue';
import PatientSingleView from '../views/patient/_id/index.vue';
import PatientDetail from '../views/patient/_id/PatientDetail.vue';
import ClientsView from '../views/client/index.vue';
import ClientsListing from '../views/client/Clients.vue';
import ClientSingleView from '../views/client/_id/index.vue';
import ClientDetail from '../views/client/_id/ClientDetail.vue';
import SamplesView from '../views/sample/index.vue';
import SamplesListing from '../views/_components/SampleListing.vue';
import SamplesAdd from '../views/sample/SamplesAdd.vue';
import SampleSingleView from '../views/sample/_id/index.vue';
import SampleDetail from '../views/sample/_id/SampleDetail.vue';
import WorkSheetsView from '../views/worksheet/index.vue';
import WorkSheetListing from '../views/worksheet/WorkSheetListing.vue';
import WorkSheetSingleView from '../views/worksheet/_id/index.vue';
import WorkSheetDetail from '../views/worksheet/_id/WorkSheetDetail.vue';
import KanBanView from '../views/kanban/index.vue';
import KanBanBoards from '../views/kanban/Boards.vue'
import KanBanBoardSingle from '../views/kanban/_id/index.vue'
import KanBanBoardDetail from '../views/kanban/_id/Listings.vue'
import MarkDownView from '../views/markdown/index.vue';
import MarkDownListing from '../views/markdown/DocumentListing.vue';
import MarkDownDocumentSingle from '../views/markdown/_id/index.vue';
import MarkDownDocumentView from '../views/markdown/_id/Document.vue';
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
        name: 'patients-listing',
        component: PatientsListing,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'compact',
        name: 'patients-compact',
        component: PatientsCompact,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'search',
        name: 'patients-search',
        component: PatientsListing,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: ':patientUid',
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
            path: 'samples',
            name: 'patient-sample',
            component: SampleSingleView,
            children: [
              {
                path: '',
                name: 'patient-samples',
                component: SampleSingleView,
                meta: {
                  requiresAuth: true,
                },
              },
              {
                path: ':sampleUid',
                name: 'sample-detail',
                component: SampleDetail,
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
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientsView,
    children: [
      {
        path: '',
        name: 'clients-listing',
        component: ClientsListing,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'single',
        name: 'client-single-view',
        component: ClientSingleView,
        children: [
          {
            path: '',
            name: 'client-detail',
            component: ClientDetail,
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
    children: [
      {
        path: '',
        name: 'worksheet-listing',
        component: WorkSheetListing,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: ':workSheetUid',
        name: 'worksheet-single',
        component: WorkSheetSingleView,
        children: [
          {
            path: '',
            name: 'worksheet-detail',
            component: WorkSheetDetail,
            meta: {
              requiresAuth: true,
            },
          }
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
    path: '/kanban-boards',
    name: 'KanBan',
    component: KanBanView,
    children: [
      {
        path: '',
        name: 'kanban-boards',
        component: KanBanBoards,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: ':boardUid',
        name: 'board-single',
        component: KanBanBoardSingle,
        children: [
          {
            path: '',
            name: 'board-detail',
            component: KanBanBoardDetail,
            meta: {
              requiresAuth: true,
            },
          },
        ],
        meta: {
          requiresAuth: true,
        },
      }
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/documents',
    name: 'MarkDown',
    component: MarkDownView,
    children: [
      {
        path: '',
        name: 'document-listing',
        component: MarkDownListing,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: ':documentUid',
        name: 'document-single-view',
        component: MarkDownDocumentSingle,
        children: [
          {
            path: '',
            name: 'document-detail',
            component: MarkDownListing,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: 'view',
            name: 'document-viewer',
            component: MarkDownDocumentView,
            meta: {
              requiresAuth: true,
            },
          }
        ],
        meta: {
          requiresAuth: true,
        },
      }
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
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
