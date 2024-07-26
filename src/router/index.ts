import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomeView.vue";

const routes = [
    { path: "/Home", redirect: "/" },
    { path: "/", component: Home },
    { path: "/Chat", component: () => import("../views/ChatView.vue") },
    {
        path: "/AddressBook",
        component: () => import("../views/AddressBookView.vue"),
    },
    { path: "/Setting", component: () => import("../views/SettingView.vue") },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
