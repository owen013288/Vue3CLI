// 該文件專門用於創建整個應用的路由器
import { createRouter, createWebHistory } from "vue-router";

// 創建並報露一個路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../components/路由/pages/Home.vue"),
            meta: {
                title: '首頁'
            }
        },
        {
            path: "/Home",
            component: () => import("../components/路由/pages/Home.vue"),
            meta: {
                title: '首頁'
            },
            children: [
                {
                    path: "News",
                    component: () => import("../components/路由/pages/News.vue"),
                    // 路由元資料，供放自己想要放的
                    meta: {
                        isAuth: true,
                        title: '最新消息'
                    }
                },
                {
                    path: "Message",
                    component: () => import("../components/路由/pages/Message.vue"),
                    // 路由元資料，供放自己想要放的
                    meta: {
                        isAuth: true,
                        title: '訊息'
                    },
                    children: [
                        {
                            path: "Detail",
                            component: () => import("../components/路由/pages/Detail.vue"),
                            // props($route) {
                            //     return { id: $route.query.id, title: $route.query.title };
                            // }
                            //高級寫法
                            props({ query: { id, title } }) {
                                return { id, title };
                            },
                            meta: {
                                title: '詳情'
                            },
                            // beforeEnter(to, from, next) {
                            //     xxxx跟之前一樣
                            // }
                        }
                    ]
                }
            ]
        },
        {
            path: "/about",
            component: () => import("../components/路由/pages/About.vue"),
            meta: {
                title: '關於'
            }
        }
    ]
});

// 全局前置路由守衛 -> 初始化 || 每次路由切換之前
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('name') === 'owen') {
            next();
        } else {
            alert('您並無權限查看！')
        }
    } else {
        next();
    }
})

// 全局後置路由守衛 -> 初始化 || 每次路由切換之前
router.afterEach((to, from) => {
    document.title = to.meta.title;
})

export default router;