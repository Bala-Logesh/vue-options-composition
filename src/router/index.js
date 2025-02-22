import Composition from "@/components/Composition.vue";
import Options from "@/components/Options.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Options',
        component: Options
    },
    {
        path: '/composition',
        name: 'Composition',
        component: Composition
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router