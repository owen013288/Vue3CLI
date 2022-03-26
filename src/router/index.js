// 該文件專門用於創建整個應用的路由器
import { createRouter, createWebHistory } from "vue-router";

// 創建並報露一個路由器
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../components/路由/pages/Home.vue"),
        },
        {
            path: "/Home",
            component: () => import("../components/路由/pages/Home.vue"),
            children: [
                {
                    path: "News",
                    component: () => import("../components/路由/pages/News.vue")
                },
                {
                    path: "Message",
                    component: () => import("../components/路由/pages/Message.vue"),
                    children: [
                        {
                            path: "Detail",
                            component: () => import("../components/路由/pages/Detail.vue"),
                        }
                    ]
                }
            ]
        },
        {
            path: "/about",
            component: () => import("../components/路由/pages/About.vue")
        }
    ]
});