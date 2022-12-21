import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导入路由模块
import filmRouter from "./routes/films";
import cinemaRouter from "./routes/cinemas";
import centerRouter from "./routes/center";
import cityRouter from "./routes/city";
// 导入测试组件
import VuexTest1 from "@/views/Vuex/Test1";
import VuexTest2 from "@/views/Vuex/Test2";

const routes = [
    // 展开电影模块的其他所有的路由
    ...filmRouter,
    cinemaRouter,
    ...centerRouter,
    cityRouter,
    { path: "/vuex1", component: VuexTest1 },
    { path: "/vuex2", component: VuexTest2 },
    { path: "/", redirect: "/films" },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

// 写路由守卫（全局）
router.beforeEach((to, from, next) => {
    // 告诉系统需要登录的页面有哪些（为了方便）
    let arr = [
        "/balance",
        //...
    ];
    if (arr.includes(to.path) && !localStorage.getItem("jwt")) {
        // 登录去
        router.push({ path: "/login", query: { toUrl: to.fullPath } });
    } else {
        // 不用登录
        next();
    }
});

export default router;
