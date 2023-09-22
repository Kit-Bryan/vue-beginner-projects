// Define Our Routing Rules
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import CarView from "@/views/CarView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/404View.vue"

const router = createRouter({
    // TODO: cpaste to notion
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/", // Root path
            name: "home",
            component: HomeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/about", // About path
            name: "about",
            component: AboutView
        },
        {
            path: "/cars/:id", // Cars path with variable id
            name: "car",
            component: CarView,
            children: [
                {
                    path: "contact", //cars/:id/contact
                    component: ContactView,

                }
            ]
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView
        }
    ]
})

// Export default
export default router