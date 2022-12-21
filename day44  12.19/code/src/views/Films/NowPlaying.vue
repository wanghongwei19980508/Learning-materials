<template>
    <div id="container">
        <van-loading size="24px" type="spinner" vertical v-show="isLoading"
            >加载中...</van-loading
        >
        <van-card v-for="item in list" :key="item.filmId">
            <template #title>
                <span style="fontSize:16px;color:#191a1b"
                    >{{ item.name }} <span class="item">{{item.filmType.name}}</span></span
                >
            </template>
            <template #thumb>
                <img :src="item.poster" />
            </template>
            <template #desc>
                <div>
                    <div style="fontSize:14px">
                        观众评分
                        <span style="color:#ffb232;fontSize:16px">{{
                            item.grade
                        }}</span>
                    </div>
                    <div style="fontSize:14px">主演：{{ item.actors | parserActors }}</div>
                    <div style="fontSize:14px">{{ item.nation }} | {{ item.runtime }}分钟</div>
                </div>
            </template>
        </van-card>
    </div>
</template>

<script>
// 导入地址
import uri from "@/config/uri";
import Vue from "vue";
import { Loading, Card } from "vant";
Vue.use(Loading);
Vue.use(Card);
export default {
    data() {
        return {
            list: [],
            // 页码
            pageNum: 1,
            // 是否显示loading组件
            isLoading: true,
        };
    },
    created() {
        // 默认取第一页的数据
        this.$http.get(uri.getNowPlaying).then((ret) => {
            this.list = ret.data.films;
            this.isLoading = false;
        });
    },
    filters: {
        // 针对主演的数据处理
        parserActors(actors) {
            // 判断是否有主演
            if (actors) {
                let str = "";
                actors.forEach((el) => {
                    str += el.name + " ";
                });
                return str.substr(0, 15) + "...";
            } else {
                return "暂无主演";
            }
        },
    },
};
</script>

<style lang="scss" scoped>
// 针对电影的图片的处理
img {
    width: 66px;
    height: 90px;
    border-radius: 0;
}
// 针对2D/3D的样式
.item {
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
}
// 防止底部被挡住50px
#container {
    margin-bottom: 50px;
}
</style>
