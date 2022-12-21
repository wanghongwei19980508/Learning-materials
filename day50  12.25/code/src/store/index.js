import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    // 数据源（仓库）
    state: {
        // classname: "bk2003",
        // classroom: "2F-5",
        // 是否显示底部导航
        isShowFooter: true,
        // 城市信息
        city: {
            cityId: 0,
            cityName: "",
        },
        // 令牌
        jwt: "",
    },
    // 放的是修改数据的方法（同步）
    mutations: {
        // editClassName(state, val) {
        //     // 给classname赋予新的值
        //     state.classname = val;
        //     // console.log(val);
        // },
        // editClassRoom(state, val) {
        //     // 给classroom赋予新的值
        //     state.classroom = val;
        // },
        // 控制是否显示底部导航
        isShowFooterNav(state, val) {
            state.isShowFooter = val;
        },
        // 设置城市信息
        setCity(state, city) {
            state.city = city;
        },
        // 设置jwt
        setJwt(state, jwt) {
            state.jwt = jwt;
            // 设置localStorage
            localStorage.setItem("jwt", jwt);
        },
    },
    // 放的是修改数据的方法（异步）
    actions: {},
    // 对数据源中的数据在取出时进行加工处理（计算属性，过滤器）
    getters: {
        // getClassName(state) {
        //     return "获取的班级名称是：" + state.classname;
        // },
        // getClassRoom(state) {
        //     return "获取的教室名称是：" + state.classroom;
        // },
    },
    // 模块化的（拆）
    modules: {},
});
