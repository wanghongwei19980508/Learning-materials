<template>
    <!-- 可视窗口 -->
    <div id="container" class="wrapper" :style="{ height: height + 'px' }">
        <!-- content窗口，要求：content高度>可视窗口的高度 -->
        <div>
            <van-loading size="24px" type="spinner" vertical v-show="isLoading"
                >加载中...</van-loading
            >
            <!-- 具体的内容条目，要求：数量一定要足够多，让其足以撑起content盒子 -->
            <van-card
                v-for="item in list"
                :key="item.filmId"
                @click="gotoDetail(item.filmId)"
            >
                <template #title>
                    <span style="fontSize:16px;color:#191a1b"
                        >{{ item.name }}
                        <span class="item">{{ item.filmType.name }}</span></span
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
                        <div style="fontSize:14px">
                            主演：{{ item.actors | parserActors }}
                            <div
                                class="nowPlayingFilm-buy"
                                style="float: right;"
                            >
                                预约
                            </div>
                        </div>
                        <div style="fontSize:14px">
                            {{ item.nation }} | {{ item.runtime }}分钟
                        </div>
                    </div>
                </template>
            </van-card>
        </div>
    </div>
</template>

<script>
// 导入地址
import uri from "@/config/uri";
import Vue from "vue";
import { Loading, Card } from "vant";
Vue.use(Loading);
Vue.use(Card);
// 需要导入better-scroll
import BScroll from "better-scroll";
export default {
    data() {
        return {
            list: [],
            // 页码
            pageNum: 1,
            // 是否显示loading组件
            isLoading: true,
            // 定义bscroll示例
            bs: null,
            // 定义可视窗口的高度
            height: 0,
            // 记录Y轴的高度
            y: 0,
        };
    },
    created() {
        // 获取数据
        this.getData();
    },
    mounted() {
        // 重新赋值高度
        this.height = document.documentElement.clientHeight - 94;
    },
    updated() {
        // 在页面挂载完毕之后获取可视窗口的选择器，产生BS实例
        this.bs = new BScroll(".wrapper", {
            // BetterScroll 默认会阻止浏览器的原生 click 事件，但是去详情是需要点击的
            click: true,
            startY: this.y,
            pullUpLoad: true,
        });
        this.bs.on("pullingUp", () => {
            this.getData();
            // console.log(this.bs.y);
            // 更新数据的时候让this.y记录下当前的高度数据
            this.y = this.bs.y;
            // 这次上滑操作已经结束，告诉bs可以准备监听下一次滑动事件
            this.bs.finishPullUp();
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
    methods: {
        // 获取数据
        getData(cb = null) {
            // 默认取第一页的数据
            this.$http
                .get(uri.getComingSoon + `?pageNum=${this.pageNum}`)
                .then((ret) => {
                    if (this.pageNum <= Math.ceil(ret.data.total / 10)) {
                        this.pageNum++;
                        // 不要把数据覆盖了！！
                        // this.list = this.list.concat(ret.data.films);
                        this.list = [...this.list, ...ret.data.films];
                    }
                    if (cb == null) {
                        this.isLoading = false;
                    } else {
                        // 执行cb
                        cb();
                    }
                });
        },
        gotoDetail(filmId) {
            // 编程导航，去详情页面
            this.$router.push("/film/" + filmId);
        },
    },
};
</script>

<style lang="scss" scoped>
// 针对电影的图片的处理
img {
    width: 90%;
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
//干掉图片右侧8像素的右边距
.van-card__thumb {
    margin-right: 0px;
    width: 80px;
}
.nowPlayingFilm-buy {
    line-height: 25px;
    height: 25px;
    width: 50px;
    border: 1px solid;
    color: #ff5f16;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: relative;
}
</style>
