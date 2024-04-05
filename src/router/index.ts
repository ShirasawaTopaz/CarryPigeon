import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'

const routes = [ 
    { path: '/Home', redirect: '/'},
    { path: '/', component: Home },
    { path: '/Chat', component: () => import('../views/Chat.vue') },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;