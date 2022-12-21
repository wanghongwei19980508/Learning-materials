import Films from "@/views/Films/Films";
import NowPlaying from "@/views/Films/NowPlaying";
import ComingSoon from "@/views/Films/ComingSoon";

var filmRouter = {
    path: "/films",
    component: Films,
    redirect: "/films/nowplaying",
    children: [
        { path: "nowplaying", component: NowPlaying },
        { path: "comingsoon", component: ComingSoon },
    ],
};

// 导出
// ES6的模块化语法
export default filmRouter;
// CommonJS规范
// module.exports = filmRouter
