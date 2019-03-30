import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/parent_to_child/v-on_emit",
            component: () => import("./views/parent_to_child/props/Parent.vue")
        },
        {
            path: "/parent_to_child/slot",
            component: () => import("./views/parent_to_child/slot/Parent.vue")
        },
        {
            path: "/parent_to_child/refs",
            component: () => import("./views/parent_to_child/refs/Parent.vue")
        },
        {
            path: "/parent_to_child/$children",
            component: () =>
                import("./views/parent_to_child/$children/Parent.vue")
        },
        {
            path: "/child_to_parent/v-on_emit",
            component: () =>
                import("./views/child_to_parent/v-on_emit/Parent.vue")
        },
        {
            path: "/child_to_parent/sync_emit_update",
            component: () =>
                import("./views/child_to_parent/sync_emit_update/Parent.vue")
        }
    ]
});
