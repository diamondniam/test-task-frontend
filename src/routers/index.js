import {createRouter, createWebHistory} from "vue-router";
import Index from "../views/Index.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Index
    },
]

export const router = createRouter({
    history: createWebHistory(`/test-task-frontend/`),
    routes,
});