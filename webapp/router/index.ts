import { RouteRecordRaw, createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import * as guards from '@/guards';
import adminRoutes from './admin';
import patientRoutes from './patient';
import clientRoutes from './client';
import sampleRoutes from './samples';
import qualityRoutes from './quality';
import worksheetRoutes from './worksheet';
import shipmentRoutes from './referral';
import schemeRoutes from './scheme';
import { isTokenValid } from './checks';
import { useAuthStore } from '@/stores/auth';
import documentRoutes from './document';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: { name: guards.pages.DASHBOARD },
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/installation',
        name: guards.pages.INSTALLATION,
        component: () => import('@/views/install/Install.vue'),
        meta: {
            layout: 'empty',
        },
    },
    {
        path: '/auth',
        name: guards.pages.LOGIN,
        component: () => import('@/views/auth/Auth.vue'),
        meta: { layout: 'empty' },
    },
    {
        path: '/dashboard',
        name: guards.pages.DASHBOARD,
        component: () => import('@/views/dashboard/Dashboard.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/patients',
        name: guards.pages.PATIENTS,
        component: () => import('@/views/patient/Patients.vue'),
        children: patientRoutes,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/patients-compact',
        name: guards.pages.PATIENTS_COMPACT,
        component: () => import('@/views/patient/PatientsCompact.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/clients',
        name: guards.pages.CLIENTS,
        component: () => import('@/views/client/Clients.vue'),
        children: clientRoutes,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/samples',
        name: guards.pages.SAMPLES,
        component: () => import('@/views/sample/Samples.vue'),
        children: sampleRoutes,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/quality-control',
        name: guards.pages.QC_SAMPLES,
        component: () => import('@/views/qcontrol/QualityControls.vue'),
        children: qualityRoutes,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/worksheets',
        name: guards.pages.WORKSHEETS,
        component: () => import('@/views/worksheet/WorkSheets.vue'),
        children: worksheetRoutes,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/shipments',
        name: guards.pages.REFERRAL,
        component: () => import('@/views/shipment/Shipments.vue'),
        children: shipmentRoutes,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/bio-banking',
        name: guards.pages.BIO_BANKING,
        component: () => import('@/views/storage/Storage.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/inventory',
        name: guards.pages.INVENTORY,
        component: () => import('@/views/inventory/Inventory.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/notice-manager',
        name: guards.pages.NOTICE_MANAGER,
        component: () => import('@/views/notice/Notices.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/schemes',
        name: guards.pages.SCHEMES,
        component: () => import('@/views/grind/Schemes.vue'),
        children: schemeRoutes,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/documents',
        name: guards.pages.DOCUMENT,
        component: () => import('@/views/document/Documents.vue'),
        children: documentRoutes,
        meta: {
            requiresAuth: true,
        },
    },
    {
        name: guards.pages.ADMINISTRATION,
        path: '/admin',
        component: () => import('@/views/admin/Admin.vue'),
        children: adminRoutes,
        meta: {
            requiresAuth: true,
            requiresAdmin: true,
        },
    },
    {
        path: '/print/barcodes',
        name: 'print-barcodes',
        component: () => import('@/views/barcode/index.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        name: guards.pages.NOT_AUTHORISED,
        path: '/access-denied',
        component: () => import('@/views/Restricted.vue'),
        meta: {
            layout: 'empty',
        },
    },
    {
        name: guards.pages.FOUR_OR_FOUR,
        path: '/:pathMatch(.*)',
        component: () => import('@/views/404.vue'),
        meta: {
            layout: 'empty',
        },
    },
];

const historyX = createWebHistory('/'); 
const history = createWebHashHistory();
const router = createRouter({
    history,
    routes,
});

router.beforeEach(async (to, from) => {
    const authStore = useAuthStore();
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isTokenValid(authStore.auth.token!)) {
            return { name: guards.pages.LOGIN };
        }

        if (!hasAccess(to.matched[0].name)) {
            return { name: guards.pages.NOT_AUTHORISED };
        }
    } else {
        if (to.path === '/auth') {
            
            if (isTokenValid(authStore.auth.token!)) {
                return { name: guards.pages.DASHBOARD };
            }
        }
    }
});

const exemptions = ["print-barcodes"]

function hasAccess(page: any) {
    switch (page) {
        case guards.pages.DASHBOARD:
            return guards.canAccessPage(guards.pages.DASHBOARD);

        case guards.pages.PATIENTS:
            return guards.canAccessPage(guards.pages.PATIENTS);

        case guards.pages.PATIENTS_COMPACT:
            return guards.canAccessPage(guards.pages.PATIENTS_COMPACT);

        case guards.pages.CLIENTS:
            return guards.canAccessPage(guards.pages.CLIENTS);

        case guards.pages.SAMPLES:
            return guards.canAccessPage(guards.pages.SAMPLES);

        case guards.pages.QC_SAMPLES:
            return guards.canAccessPage(guards.pages.QC_SAMPLES);

        case guards.pages.WORKSHEETS:
            return guards.canAccessPage(guards.pages.WORKSHEETS);

        case guards.pages.REFERRAL:
            return guards.canAccessPage(guards.pages.REFERRAL);

        case guards.pages.ADMINISTRATION:
            return guards.canAccessPage(guards.pages.ADMINISTRATION);

        case guards.pages.NOTICE_MANAGER:
            return guards.canAccessPage(guards.pages.NOTICE_MANAGER);

        case guards.pages.SCHEMES:
            return guards.canAccessPage(guards.pages.SCHEMES);

        case guards.pages.DOCUMENT:
            return true;

        case guards.pages.BIO_BANKING:
            return guards.canAccessPage(guards.pages.BIO_BANKING);

        case guards.pages.INVENTORY:
            return guards.canAccessPage(guards.pages.INVENTORY);

        case 'experiment':
            return true;

        default:
            return exemptions.includes(page);
    }
}

export default router;
