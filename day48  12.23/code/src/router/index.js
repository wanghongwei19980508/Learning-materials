import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导入路由模块
import filmRouter from "./routes/films";
import cinemaRouter from "./routes/cinemas";
import centerRouter from "./routes/center";
// 导入测试组件
import VuexTest1 from '@/views/Vuex/Test1';
import VuexTest2 from '@/views/Vuex/Test2';

const routes = [
    // 展开电影模块的其他所有的路由
    ...filmRouter,
    cinemaRouter,
    centerRouter,
    { path: "/vuex1", component: VuexTest1 },
    { path: "/vuex2", component: VuexTest2 },
    { path: "/", redirect: "/films" },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
