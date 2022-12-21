<template>
    <div>
        <div>城市列表</div>
        <div>
            <!-- 列表 -->
            <van-index-bar :index-list="cityIndex">
                <!-- 使用伪标签将后面要循环的内容包裹起来 -->
                <template v-for="(item, index) in dataList">
                    <van-index-anchor :key="index">{{
                        item.index
                    }}</van-index-anchor>
                    <van-cell
                        @click="setCity(city.cityId, city.name)"
                        :title="city.name"
                        v-for="city in item.data"
                        :key="city.cityId"
                    />
                </template>
            </van-index-bar>
        </div>
    </div>
</template>

<script>
import uri from "@/config/uri";
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
    data() {
        return {
            // 定义城市索引
            cityIndex: [],
            // 26个大写字母
            charIndex: [],
            // 左侧城市的列表
            dataList: [],
        };
    },
    created() {
        // 进入时隐藏底部导航
        this.$store.commit("isShowFooterNav", false);
        // 获取数据
        this.$http.get(uri.getCity).then((ret) => {
            if (ret.status == 0) {
                // console.log(ret.data.cities);
                // 获取26个大写字母（ASCII码，65-90）
                for (let i = 65; i <= 90; i++) {
                    // 保存每一次循环得到的大写字母
                    this.charIndex.push(String.fromCharCode(i));
                }
                // 循环charIndex，与每个城市的首字母进行比较，如果相同则保留，否则不要
                // this.charIndex.forEach((el) => {
                //     ret.data.cities.forEach((city) => {
                //         if (el.toLowerCase() == city.pinyin.substr(0, 1)) {
                //             if (this.cityIndex.indexOf(el) < 0) {
                //                 this.cityIndex.push(el);
                //             }
                //         }
                //     });
                // });
                this.charIndex.forEach((el) => {
                    // tmp是已经按照首字母分组的城市数据
                    let tmp = ret.data.cities.filter(
                        // array.filer(fn)，表示对数组进行过滤，fn函数是过滤规则
                        (item) => el.toLowerCase() == item.pinyin.substr(0, 1)
                    );
                    // 如果分组下有数据则保留大写字母
                    if (tmp.length > 0) {
                        this.cityIndex.push(el);
                        this.dataList.push({
                            index: el,
                            data: tmp,
                        });
                    }
                });
                // console.log(this.dataList);
            }
        });
    },
    beforeDestroy() {
        // 离开时显示底部导航
        this.$store.commit("isShowFooterNav", true);
    },
    methods: {
        setCity(cityId, cityName) {
            // console.log(cityId,name);
            // 将数据写入到vuex中共享，并且返回到其他页面
            this.$store.commit("setCity", { cityId, cityName });
            // 回退到上一页
            this.$router.back();
        },
    },
};
</script>
