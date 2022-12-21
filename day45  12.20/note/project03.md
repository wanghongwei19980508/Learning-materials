# Vue阶段综合演练

[TOC]

# 一、项目概要

## 1、效果前瞻

仿照网站：卖座网

http://m.maizuo.com

![效果预览](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/cbf14ac0b60d10ba7cac70cd93f87af85d26a06b.png?sign=3d94c060b86cc17a523f2f153bfc4485&t=5f7c13a9)


# 二、初始化及必要知识点

## 7、vant组件配置

官网：https://vant-contrib.gitee.io/vant/#/zh-CN/

Vant 是有赞前端团队开源的移动端组件库，于 2017 年开源，已持续维护 4 年时间。Vant 对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一。

**配置使用步骤**

- 安装

  ~~~shell
  npm i -S vant
  ~~~

- 引入组件

  ~~~shell
  npm i -D babel-plugin-import
  ~~~

  ~~~javascript
  // 对于使用 babel7 的用户，可以在 /babel.config.js 中配置
  module.exports = {
    	plugins: [
      	['import', {
        		libraryName: 'vant',
        		libraryDirectory: 'es',
        		style: true
      	}, 'vant']
    	]
  };
  ~~~

> 此处修改了根下的配置文件，记得重启项目

- 导入&使用UI组件
- import ... from ...
  - Vue.use( ... )
  - <xxx></xxx>



## 8、底部导航实现

组件路径：components/Navigation/Footer.vue

所用的组件：tabbar，https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar

关于图标：去阿里矢量图官网去下载。https://www.iconfont.cn/

**解压下载的图标，放置到指定的位置**

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/12/02a84e50d984bb8ccd1e22af94d2f86a0dbaf0da.png?sign=26682d21f39c8ea72c4fa4262cd55518&t=5fdc7f88)

**参考代码**

~~~vue
<template>
    <div>
        <van-tabbar v-model="active" @change="changeTab">
            <van-tabbar-item
                ><van-icon
                    class="iconfont icon-dianying"
                    slot="icon"
                    size="1.1rem"
                /><span>电影</span></van-tabbar-item
            >
            <van-tabbar-item
                ><van-icon
                    class="iconfont icon-yingyuan"
                    slot="icon"
                    size="1.1rem"
                /><span>影院</span></van-tabbar-item
            ><van-tabbar-item
                ><van-icon
                    class="iconfont icon-yixianshi_huaban"
                    slot="icon"
                    size="1.1rem"
                /><span>我的</span></van-tabbar-item
            >
        </van-tabbar>
    </div>
</template>

<script>
// 导入需要使用的图标css
import "@/assets/icon/iconfont.css";
// 导入需要使用的vant组件
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
    data() {
        return {
            active: 0,
            url: ["/films", "/cinemas", "/center"],
        };
    },
    created() {
        // 根据页面的地址纠正底部索引
        this.active = this.url.indexOf(this.$route.path);
    },
    methods: {
        changeTab(index) {
            // 此处的索引与url数据中的地址是一一对应的，所以可以直接使用
            this.$router.push(this.url[index]);
        },
    },
};
</script>
~~~



# 三、电影模块

## 1、顶部导航实现

组件路径：src/components/Navigation/FilmHeader.vue

**参考代码**

~~~vue
<template>
    <div>
        <van-tabs @click="changeTab" v-model="active">
            <van-tab title="正在热映"></van-tab>
            <van-tab title="即将上映"></van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
    data() {
        return {
            active: 0,
            url: ["/films/nowplaying", "/films/comingsoon"],
        };
    },
    created() {
        // 刷新的时候去纠正索引
        this.active = this.url.indexOf(this.$route.path);
    },
    methods: {
        changeTab(index) {
            this.$router.push(this.url[index]);
        },
    },
};
</script>
~~~

**注意：**最后在Film组件中引入头部导航，注意底部导航索引丢失的问题



## 2、电影列表

### 2.1、正在热映列表

组件位置：src/views/Films/NowPlaying.vue

接口地址：getNowPlayingFilmList

细节：

a. 给每个卡片添加点击事件，点击后去详情页面（目录详情路由尚未定义，回头定义）

~~~javascript
gotoDetail(filmId) {
    // 编程导航，去详情页面
    this.$router.push("/film/" + filmId);
},
~~~



b. 设置顶部导航的吸顶效果

修改文件是顶部导航的文件组件

~~~javascript
mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", () => {
        // 获取滚动条的位置
        let top = document.documentElement.scrollTop;
        if (top > 100) {
            // 吸顶
            this.show = true;
        } else {
            // 不吸顶
            this.show = false;
        }
    });
},
~~~

