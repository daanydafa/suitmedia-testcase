
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/work',
    name: 'work',
    component: () => import("../views/Work.vue"),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("../views/About.vue"),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import("../views/Services.vue"),
  },
  {
    path: '/ideas',
    name: 'ideas',
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/careers',
    name: 'careers',
    component: () => import("../views/Careers.vue"),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
