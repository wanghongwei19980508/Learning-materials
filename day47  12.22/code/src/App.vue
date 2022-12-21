<template>
    <div id="app">
        <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe> -->
        <!-- 只负责从store中去读取数据 -->
        <Footer v-show="$store.state.isShowFooter" />
        <router-view />
    </div>
</template>

<script>
// 导入底部导航组件
import Footer from "@/components/Navigation/Footer";
// import Vue from "vue";
// import { Swipe, SwipeItem } from "vant";

// Vue.use(Swipe);
// Vue.use(SwipeItem);
// import uri from "@/config/uri";
export default {
    // async created() {
    //     let ret = await this.$http.get(uri.getCity);
    //     console.log(ret);
    // },
    components: {
        Footer,
    },
    data() {
        return {
            // 默认显示底部导航
            isShowFooter: false,
        };
    },
    created() {
        // 接收其他组件传递来的讯息，控制底部导航是否显示
        // this.$eventBus.$on("hide_footer", (val) => {
        //     this.isShowFooter = val;
        // });
    },
};
</script>

<style lang="scss">
// .my-swipe .van-swipe-item {
//     color: #fff;
//     font-size: 20px;
//     line-height: 150px;
//     text-align: center;
//     background-color: #39a9ed;
// }
</style>
