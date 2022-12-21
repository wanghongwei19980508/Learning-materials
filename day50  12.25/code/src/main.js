import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入axios模块
import axios from "./api/http";
// 将axios注册到vue实例上（原型上）
Vue.prototype.$http = axios;
// 创建事件中心
Vue.prototype.$eventBus = new Vue();
Vue.config.productionTip = false;

// 页面刷新的时候去同步jwt
let jwt = localStorage.getItem("jwt");
if (jwt) {
    store.commit("setJwt", jwt);
}

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");