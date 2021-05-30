import ClientsListing from '../views/client/Clients.vue';
import ClientSingleView from '../views/client/_id/index.vue';
import ClientDetail from '../views/client/_id/ClientDetail.vue';

const clientRoutes = [
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
];

export default clientRoutes;
