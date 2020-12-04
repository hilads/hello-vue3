import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../views/home.vue'
import aboutus from '../views/aboutus.vue'

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name:'home',
            component: home
        },
        {
            path: '/aboutus',
            name:'关于我们',
            component: () => import('../views/aboutus.vue')
        },
    ]
})

export default router