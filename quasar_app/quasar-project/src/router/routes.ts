import { RouteRecordRaw } from 'vue-router';
import HomePage from 'pages/HomePage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/HomePage.vue'),
    // children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
