# Vue阶段综合演练

[TOC]

# 一、项目概要

## 1、效果前瞻

仿照网站：卖座网

http://m.maizuo.com

![效果预览](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/cbf14ac0b60d10ba7cac70cd93f87af85d26a06b.png?sign=3d94c060b86cc17a523f2f153bfc4485&t=5f7c13a9)



## 2、开发流程

- 产品**立项** (需求分析、技术选型、项目人员确定)，产出立项报告
  - 项目立项报告（百度搜）【产品经理，PM】
    - 当前背景
    - 项目需求
    - 人员安排
    - 功能介绍
    - 市场需求
    - 项目风险
- 产品原型 (设计产品原型图)
  - 产品原型图（通过简单的黑白线条勾勒出项目的初始界面效果）
- 进行ui设计（效果图）
  - 依据用户的视觉体验给界面加上了颜色
- 项目开发 (前端 与 后端)【周期最长的一步】
  - 设计（UI）：设计图和切图
  - 前端：出一版静态页（模板）
    - 以前：html+css+js+其他库文件
    - 现在：
      - v
      - r
      - a
  - 后端：服务器端
    - 写接口
    - 搭服务器
    - 写业务逻辑
  - 前后端整合
    - 耦合式开发
    - 前后端分离式
  - 产出v1.0的代码
- 项目测试
  - 测试部门：QA人员（质量保障）
  - 测试
    - 内测
    - 公测（大公司的产品）
- 项目上线
  - 运维&后端



面试会问的问题：之前的团队的人员配置。

答：这个回答需要取决公司的规模，比方说，以美团为例，研发岗170个人。前端：40个，后端：50个，运维：30个，设计：30个，产品经理：10个，测试：10。

如果是小规模，则例如20个人总共，前端可以为5个，后端，5个人，运维2，测试2个，产品2-3个人，UI：3-4人。



## 3、开发环境

- 开发工具：vs code并安装vue开发插件：Vetur

- 开发环境：windows / mac

- 项目运行环境：node v10+

- Vue脚手架： vue-cli 4.5.9

- 代码版本工具：Git/Gitee/GitLab/Svn，乌龟Git（基于可视化界面的git工具）



# 二、初始化及必要知识点

## 1、初始化远程仓库

> 以Github为例：https://github.com/

- 创建一个新项目

![创建项目](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/306929e959182a95bde37358ccab47ce0842b100.png?sign=1a495fc0bde2637359bee1e4d0c92f50&t=5f7d46b9)



- 仓库配置

![仓库配置](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/f4d0bdf4868f9e4391a08e500c3b41fa265bde96.png?sign=d4e36722cdba0f62c2ec2c0c352b57a5&t=5f7d4765)





## 2、创建项目

- 使用`vue-cli`脚手架创建项目

~~~shell
vue create jy-moive
~~~

> 项目名称`jy-moive`可以根据自己的情况进行替换



- 脚手架创建项目询问式选择回答如下

![q1](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/250eb3908e6d6f1e7030de93a4cc4b7d0ea23d80.png?sign=a8bb298760970b88d096ccd1ab327325&t=5f7d4898)

![q2](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/6d71cfd2736ef70031ecba9b00d5547f8c8a929e.png?sign=937ca6106ff402d047520b5383e30ffa&t=5f7d493d)

![q3](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/09310bc207273240ec618ed3b5e08446a7825f21.png?sign=712e7c92f558ab676e463c8f4716061a&t=5f7d4976)

![q4](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/f36dd956c10bd37a0b41e58bd307410a890be694.png?sign=0640aaf43e5bb7e8e29d11e386284bfc&t=5f7d49c0)

![q5](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/62cd3398cd8e4e350f829c5e0004ad1488ccef9e.png?sign=339953ee56cd30cf22dae3ad2beec50d&t=5f7d4a0d)

![q6](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/61382bbc0f20ce8c9298aecb16e236bb854e5a8e.png?sign=18f3f9060736bfe48c710a3f7ae91b01&t=5f7d4a31)

![q7](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/37730d5e7e2fcdd38034a888abbf8397db681c1b.png?sign=f4e8c82a663746e20f703770bbf2f982&t=5f7d4a5b)



- 项目创建完毕

![创建完毕](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/508f94e359c758bc9ca19ae83ac25cb361b499b8.png?sign=91a61753e74d1fd7195216d9c2bdc366&t=5f7f474d)



- 同步初始化项目到远程仓库

~~~shell
# jy-moive，根据自己的项目名称进行替换
cd jy-moive
git remote add origin 远程仓库地址
# 将本地当前的分支代码上传到远程的master分支中
git push -u origin master
~~~



- 创建开发分支`dev`

> 以后实际工作是master分支为最终稳定运行的版本的代码，而在开发期间提交的代码一般会提交给开发分支，待后期测试没问题，再与master分支进行合并（pull request）。

~~~shell
git branch dev
git checkout dev
git push -u origin dev
~~~

> 后续操作开发就在dev分支上开发，等全部代码编写完毕，再与master分支合并。



- （==可选操作==）为当前项目设置记住密码

> 如果每次提交都提示输入帐号密码，则可以做此步骤。
>
> 修改当前项目中的`.git/config`文件

将配置：

~~~config
[remote "origin"]
	url = https://github.com/......
~~~

修改为：

~~~config
[remote "origin"]
	url = https://用户名:密码@github.com/......
~~~



**后续每天工作使用Git指令是什么？？**

~~~shell
# 将远程仓库的代码拉取到本地
git pull

# 写代码的环节

# 写好代码
git add .
git commit -m "注释"

# 下班
git push
# 打卡下班
~~~



## 3、路由规划

如果项目中所有的路由都写在入口文件中，那么将不便于编写项目和后期维护。因此路由需要进行模块化处理。

可以**先行**添加以下几个空的路由模块：

- 电影模块
  - 正在热映
  - 即将上映
- 影院模块
- 个人中心模块

> 如果后续还有其他模块，届时再进行增加即可。

**创建各个模块对应的视图组件文件**

> - 在`src/views`目录下创建对应的文件夹与文件，同时，可以删除自带的`Home.vue`与`About.vue`文件
>
> - 创建每个视图组件后在其中书写好基本内容
>
>   - ~~~html
>     <template>
>         <div>
>             <h1>XXXX</h1>
>         </div>
>     </template>
>     ~~~

~~~text
src/views             
    ├─Center		（个人中心）         
    │      └─Center.vue 
    │                
    ├─Cinemas 		（电影院）        
    │      └─Cinema.vue 
    │                
    └─Films          （电影）
           │ Films.vue
           │ NowPlaying.vue
           └─ComingSoon.vue
~~~

**创建模块化的目录及路由文件**

> 在每个路由模块文件中注册好对应的路由及各自所使用的视图组件

~~~text
src/router
    ├─index.js
    │
    └─routes
    	 │ center.js
         │ cinemas.js
         └─films.js
~~~

**在剔除`router/index.js`中无用代码后，示例代码如下**

~~~javascript
import Vue from "vue";
import VueRouter from "vue-router";

// 导入路由模块
import centerRouter from '@/router/routes/centers'
import cinemaRouter from "@/router/routes/cinemas";
import filmRouter from "@/router/routes/film";

Vue.use(VueRouter);

const routes = [
    // 注册路由模块
    centerRouter,
    cinemaRouter,
    filmRouter,
    {
        path: "/",
        redirect: "/films",
    }
];

const router = new VueRouter({
    mode: "history",
    // 前缀暂时可以不用使用
    // base: process.env.BASE_URL,
    routes,
});

export default router;
~~~



## 4、ES6模块化语法

### 4.1、默认导出与默认导入

- 默认导出语法：`export default 默认导出的成员`

示例文件名假设为“m1.js”

~~~javascript
let a = 10
let c = 20
let d = 30
function show()
{
    
}
export default {
    a,
    c,
    show
}
~~~

- 默认导入语法`import 接收名称 from '模块标识符'`

~~~javascript
import m1 from './m1.js'
console.log(m1)
// 打印结果为
{a: 10,c: 20, show: [Function: show]}
~~~

> 注意点：每个模块中只允许使用唯一的一次`export default`，否则会报错。



### 4.2、按需导出与按需导入

- 按需导出语法`export let s1 = 10`

~~~javascript
// 当前文件模块为m1.js
// 分别按需导出s1、s2、say
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say = function(){}
~~~

- 按需导入语法`import {s1 as aliasname,s2} from '模块标识符'`

~~~javascript
// 导入模块成员
import {s1, s2 as ss2,say} from './m1.js'
console.log(s1)		//aaa
console.log(ss2)	//ccc
console.log(say)	//[Function: say]
~~~

> - 默认导入导出与按需导入导出可以共存，并不冲突。
> - 在一个模块中可以多次按需导出，但只能一次默认导出
> - 按需导出的成员在导入的时候可以通过`as`关键词起别名(可选)



### 4.3、直接导入并执行代码

有时候，我们只想单纯的执行某个模块中的代码，并不需要得到模块中向外暴露的成员，此时，可以直接导入并执行模块代码。

例如有以下代码：

~~~javascript
// 当前为m2.js模块
for(let i = 0;i < 3;i++){
    console.log(i)
}
~~~

~~~javascript
// 直接导入并执行模块代码
import './m2.js'
~~~

这种写法对于css等其他非JavaScript模块的文件用的次数校多



## 5、反向代理配置

反向代理主要是用于解决项目中接口跨域的问题。注意：在开发时候配置的反向代理在构建（将vue单文件组件转化成最终要上线时候用的html文件）后会失效，所以在正式上线的时候需要重新去解决跨域问题。

以下的配置需要写在vue.config.js文件中，该文件可能在当下项目中是没有的，则需要自己创建，然后将以下配置粘贴进去。

请注意，后续如果修改了项目根下的任意配置文件，**都需要重新启动项目**。

~~~javascript
module.exports = {
    // 开发服务器设置
    devServer: {
        open: true,
        // 设置 npm run serve 启动后的端口号
        port: 3000,
        // 如果你开始了eslint,不要让eslint在页面中遮罩，它错误会在console.log控制台打印
        overlay: false,
        // vue项目代理请求
        proxy: {
            // 规则
            // axios中相对地址开头的字符串  匹配请求uri中的前几位
            "/api": {
                // 把相对地址中的域名 映射到 目标地址中
                // localhost:3000 => https://api.iynn.cn/film/api/v1/
                target: "https://api.iynn.cn/film/api/v1",
                // 修改host请求的域名为目标域名
                // changeOrigin: false,
                changeOrigin: true,
                // 请求uri和目标uri有一个对应关系
                // 请求/api/login ==> 目标 /v1/api/login
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
};
~~~



## 6、网络请求封装

**在封装前请先安装axios**

~~~shell
npm i -S axios
~~~

**步骤：**

- 请求地址文件配置
  
  - 路径：config/uri.js
  - 好处：后期接口地址如果发生了变化，我们可以统一去管理和修改
  
  ~~~javascript
  // 指定代理的前缀
  let prefix = "/api/";
  // 导出
  export default {
      // 城市信息获取
      getCity: prefix + "getCitiesInfo",
      // 正在热映数据获取
      getNowPlaying: prefix + "getNowPlayingFilmList",
      // 即将上映数据获取
      getComingSoon: prefix + "getComingSoonFilmList",
      // ...
  };
  ~~~
  
- 封装请求文件

  - 路径：api/http.js

  ~~~javascript
  import axios from "axios";
  
  // 可以对axios进行封装
  // 以往在学习使用axios的时候每次取获取数据的结果都是从ret.data中获取
  // 这种写法很是不方便，我们可以在此处对axios进行改造，让返回的ret就等同于以前的ret.data
  // 拦截器：此处是对返回结果其实就是响应进行处理，所以得使用响应拦截器
  // var a = 'index.php?'
  // a + 'username=zhangsan'
  axios.interceptors.response.use((ret) => {
      // 将ret.data换成ret
      return ret.data || ret;
      // if (ret.data) {
      //     return ret.data;
      // } else {
      //     return ret;
      // }
  });
  
  // 请求拦截器
  // axios.interceptors.request.use();
  
  export default axios;
  ~~~

- 注册axios到vue实例上

  - 好处：后续操作简单，因为每个组件中都有vue实例`this`，注册到实例上后续可以直接通过this调用，而不再需要每次都import`http.js`
  - 修改文件：main.js

  ~~~javascript
  import Vue from "vue";
  import App from "./App.vue";
  import router from "./router";
  import store from "./store";
  // 导入axios
  import axios from "./api/http";
  // 将axios注册到vue实例上（原型上）
  Vue.prototype.$http = axios;
  Vue.config.productionTip = false;
  
  new Vue({
      router,
      store,
      render: (h) => h(App),
  }).$mount("#app");
  ~~~

- 测试可用性

  - 测试代码测试完毕之后需**要删除**

  ~~~vue
  <script>
  import uri from "@/config/uri";
  export default {
      async created() {
          let ret = await this.$http.get(uri.getCity);
          console.log(ret);
      },
  };
  </script>
  ~~~

  

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



### 2.2、即将上映列表

> 从先前完成的`正在热映`请求地址上来看电影列表应该具备分页效果，列表数据分页可以使用better-scroll来完成数据的展示，此插件对于移动站点的滚动非常友好
>
> better-scroll：https://better-scroll.github.io/docs/zh-CN/guide/
>
> 官网：https://better-scroll.github.io/docs/zh-CN/

- **安装`better-scroll`**

~~~shell
npm i -S better-scroll
~~~

下图是BS运行原理图，根据图示要求，在用的时候需要在外出包2个盒子：`wrapper`和`content`，在`content`中才能是列表的数据。

![bs原理](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/4496adc5975d0a6522a3f06d226ab6c7400f51bc.png?sign=634871e16f131a81483a11a477a1f908&t=5f835384)



bug解决：

a. 实现好之后每次加载了新的数据，bs的位置就会被重置为0

思路：在每次加载新数据的时候记录当前位置高度，再下一次实例化的时候直接使用上次记录的高度数据，而不是使用默认值0（startY的默认值）

~~~javascript
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
~~~



## 3、Vuex

### 3.1、概述

#### 3.1.1、组件间数据共享方式

- 父→子传值：v-bind属性绑定
- 子→父传值：v-on事件绑定
- 兄弟（非父子）组件之间共享数据：EventBus
  - $on，接收数据的那个组件
  - $emit，发送数据的那个组件
- 插槽
  - 单个插槽、具名插槽
  - 作用域插槽
- **数据代理**
- $refs



#### 3.1.2、Vuex是什么？

![vuex](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/08/1f5b60f8db5ab9b0306394aa7411e2354f240fce.jpeg?sign=95117e4a25b3517dcfc95186e3a75ce1&t=5f43b9a3)

> 与eventBus的区别
>
> - 形式上（流程）很像
> - 原理上不一样
>   - eventBus是数据交换中心
>   - vuex可以是数据池（类似前面学习的MySQL、MongoDB，区别在vuex不能持久化数据，但是vuex可以配合localStorage等实现数据持久化）

> 如果不开发大型的项目，上述提及的这些组件之间数据共享方式已经完全够用，但是如果开发大型的项目，前面几种方式效率很显然不是特别的高。这个时候我们迫切希望有一个更加简化高效的数据共享方式，Vuex的出现恰好解决了我们的痛点。

Vuex是一个专为Vue.js应用程序开发的状态（vue实例中可能用到的data数据）管理模式，Vuex是实现组件全局状态（数据）管理的一种机制（其允许我们将部分需要的数据做全局化，有点类似于全局变量的感觉），可以方便的实现组件之间的数据共享。使用Vuex管理数据优势：

- 能够在vuex中集中管理共享的数据，便于开发和后期进行维护

- 能够高效的实现组件之间的数据共享，提高开发效率

- 存储在vuex中的数据是**响应式**的，当数据发生改变时，页面中的数据也会同步更新

**什么样的数据适合存储在Vuex中？**

一般情况下，只有组件之间共享的数据才有必要存储到vuex中，对于组件中私有的数据依旧存储在组件自身的data中即可。

一句话：vuex就是组件间数据共享的一种方式（一处定义，到处使用）。



### 3.2、vuex的使用方式

**本次项目中如果之前已经安装了vuex，则不再需要进行安装。**

>  注意：vuex不是vue内置的，但是是官方的。

**使用步骤**

- 安装`Vuex`
- 创建`Store`对象管理数据
- 挂载`Store`对象到`vue`实例

**实际操作**

- 安装`Vuex`

~~~shell
npm i -S vuex
~~~

- 创建`Store`对象管理数据

①创建`src/store`目录，并在其中创建`vuex.js`文件用于导入并创建store对象

②编写`src/store/vuex.js`文件，基本代码如下：

~~~javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    // state中存放的就是全局共享的数据
    state: {count: 0}
})
~~~

- 挂载`Store`对象到`vue`实例

~~~javascript
import store from '@/store/vuex'

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
~~~



### 3.3、核心概念（重点）

- state：提供唯一公共数据源，所有的共享数据都要统一放到state中进行存储

~~~javascript
// 在组件中访问state数据的第一种方式（单个）
this.$store.state.全局数据名称
~~~

~~~javascript
// 在组件中访问state数据的第二种方式（批量）
// 按需导入mapState函数
import {mapState} from 'vuex'
// 将全局函数映射为当前组件的计算属性
computed: {
    ...mapState(['count'])
}
~~~

> **第二种方式映射过来的情况，其数据的使用方式如同在当前组件中使用自身的data数据一样（下同）**。
>
> - 在视图中，就直接插值表达式
> - 在js中就`this.xxxx`

- mutation(s)：用于变更store中的数据（修改）
  - 在Vuex中**只能**通过mutation变更store中的数据，不可以直接操作store中的数据
  - 通过这种方式操作起来稍微繁琐一些，但是可以集中监控所有数据的变化

~~~javascript
// 定义mutations
const sotre = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state[,arg1,...]){
            // 变更状态
            state.count++
        }
    }
})
~~~

~~~javascript
// 组件中触发mutation的第一种方式
methods:{
    handle(){
        this.$store.commit('add'[,arg1,...])
    }
}
~~~

~~~javascript
// 组件中触发mutation的第二种方式
import {mapMutations} from 'vuex'
methods:{
    ...mapMutations(['add','reduce']),
    handle1(){
        this.add()
    },
    handle2(){
        this.reduce([arg1,...])
    }
}
~~~

> **==不要在mutation中写异步的代码==**
>
> 在mutation中混合异步调用会导致你的程序很难调试。每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel 了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，**给调试带来困难**。

- action(s)：用于处理==异步==操作任务

~~~javascript
// 声明action
const store = new Vuex.Store({
    // 省略其他代码
    mutations: {
        add(state){
            state.count++
        }
    },
    actions: {
        addAsync(context[,arg1,...]){
            setTimeout(() => {
                context.commit('add'[,arg1,...])
            },1000)
        }
    }
})
~~~

~~~javascript
// 组件中触发action
methods: {
    handle(){
        this.$store.dispach('addAsync'[,arg1,...])
    }
}
~~~

> action也是支持如同state、mutation一样的按需导入mapActions方式进行触发。

- getter(s)：对store中已有的数据加工处理形成新的数据
  - 对已有的数据进行加工除了，类似于Vue的计算属性
  - store数据发生变化，则getter中的数据也会跟着变化

~~~javascript
// 定义getter
....
getters: {
    showNum: state => {
        return '当前最新的数量是【' + state.count + '】'
    }
}
~~~

~~~javascript
// 在组件中访问getters数据的第一种方式
this.$store.getters.全局数据名称
~~~

~~~javascript
// 在组件中访问getters数据的第二种方式
// 按需导入mapGetters函数
import {mapGetters} from 'vuex'
// 将全局函数映射为当前组件的计算属性
computed: {
    ...mapGetters(['showNum'])
}
~~~



### 3.4、小结

- state是用于存储数据与获取数据的
- mutations里存储的修改数据的方法
  - 不能写异步代码
- actions里存储修改数据的方法（可以写异步）
  - actions用的是mutations去修改数据
- getters是用于加工处理数据
- 关于展开写法的位置需要注意
  - 写在methods中的是mutations和actions
  - 写在computed中的是state和getters



## 4、电影详情

**步骤：**

- 获取数据
- 展示数据
- 细节处理
  - 上映时间
  - 顶部图片懒加载
  - 滑动图组

**细节处理**

==a. 上映时间格式化==

①安装moment

~~~shell
npm i -S moment
~~~

②在当前组件中引入moment模块

~~~javascript
import moment from 'moment'
~~~

③创建过滤器处理时间戳

~~~javascript
filters: {
    parsePremiereAt: function(value){
        // 时间戳的单位是秒，需要乘以1000转化成毫秒进行处理
        return moment(value * 1000).format('YYYY-MM-DD')
    }
}
~~~

④在模板中使用过滤器：

~~~html
<div>{{ film.premiereAt | parsePremiereAt }}上映</div>
~~~



==b. 顶部大图懒加载==

①安装懒加载三方模块

~~~shell
npm i -S vue-lazyload
~~~

②在`src/main.js`中使用`lazyload`

> 懒加载可以应用在本项目的全部图片上，不一定是详情顶部的图片，所以可以定义在全局入口文件中。

~~~javascript
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: "https://2url.cc/1OwrB",
});
~~~

③改写需要使用懒加载的`img`标签（**重复性步骤**）

> 在想用懒加载的图片的位置，将原先的`:src`替换成三方模块自定义指令`v-lazy`

~~~html
<div class="img">
    <img v-lazy="film.poster"/>
</div>
~~~



==c. 演职人员滑动==

①安装`swiper`

> swiper：https://www.swiper.com.cn/usage/index.html

~~~shell
npm i -S swiper
~~~

 ②在`src/components/`下创建`Swiper`功能组件

> Tip：此处可以使用插槽来实现

~~~vue
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- 插槽（坑） -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
    mounted() {
        new Swiper(".swiper-container", {
            slidesPerView: 4,
        });
    },
};
</script>
~~~

> 关于`this.$nextTick()`函数：当当前异步操作全部做完之后再去做其里面的东西。

③在详情组件中使用`Swiper`组件

a. 引入Swiper组件并注册

~~~javascript
import Swiper from '@/components/Swiper'
export default {
    ......
    components: {
        Swiper
    },
    ......
}
~~~

b. 循环输出演员图片（在`Detail.vue`中）

~~~html
<Swiper :key="'actors_' + film.actors.length">
    <div v-for="(item,index) in film.actors" :key="index" class="swiper-slide">
        <div>
            <img :src="item.avatarAddress" alt="">
        </div>
    </div>
</Swiper>
~~~

> 如果此处也需要实现懒加载，只需要将`img`标签的`:src`替换成`v-lazy`指令即可。

c. 根据需要，需要用到的样式`.swiper-slide`如下

> 样式需要**根据元素层次**放到对应的地方

~~~css
.swiper-slide {
    img {
       width: 80px; 
    }
}
~~~

> 注意事项：在页面中演职人员length可能会报错的问题
>
> 只需要在页面初始的时候给`actors`一个空数组的默认值即可。
>
> ~~~javascript
> data() {
>      return {
>          film: {actors: []},
>      };
> },
> ~~~



# 四、城市列表

**步骤**

- 创建组件/路由

  - 进入组件中需要隐藏底部导航
  - 离开后需要显示底部导航

- 获取数据

- 处理数据

  - 预期希望得到的数据格式

  - ~~~txt
    // 右侧的索引
    [
    	"A","B","C","D"....
    ],
    // 左侧列表的索引
    [
    	{
    		index: "A",
    		item:[
    			{
                    cityId:123456,
                    name: '安康',
                    pinyin:'ankang',
                    isHot:1
                },
                {
                    cityId:123456,
                    name: '安顺',
                    pinyin:'ankshun',
                    isHot:0
                }
    		]
    	},
    	{
    		index: "B",
    		item:[
    			{
                    cityId:123456,
                    name: '北京',
                    pinyin:'beijing',
                    isHot:1
                }
    		]
    	}
    ]
    ~~~

- 渲染展示

不考虑定位，排出列表即可。

关于定位：

思路：

- 获取经纬度（推荐）
  - 高德、百度等地图服务商接口
- IP地址（可能会不准确）
- 根据经纬度获取物理地址信息
  - 高德、百度等地图服务商的接口
  - https://api.i-lynn.cn/poi?location=121.49124909851835,31.379142696763655



# 五、细节完善

## 1、切换导航选中的选项卡不变

思想：监听路由的变化

操作：修改顶部/底部的路由导航组件，增加对路由的监听

参考代码：

~~~javascript
watch: {
    $route: function(val){
        // console.log(val);
        this.active = this.url.indexOf(val.fullPath);
    }
}
~~~





## 2、排出个人中心页面





# 六、登录

## 1、登录功能

a. 给登录按钮添加点击事件

~~~html
<div class="nick-name" @click="login">立即登录</div>
~~~

其对应的事件处理程序是：

~~~javascript
methods: {
    login() {
        this.$router.push("/login");
    },
},
~~~



b. 创建对应的路由&组件

路由修改router/routes/center.js，增加login路由

~~~javascript
import Center from "@/views/Center/Center";
import Login from "@/views/Center/Login";

var centerRouter = [
    {
        path: "/center",
        component: Center,
    },
    {
        path: "/login",
        component: Login,
    },
];

export default centerRouter;
~~~

修改路由入口文件的对center.js的使用：

~~~javascript
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
~~~



c. 编写登录组件

- 去除底部的导航
- 排页面



d. 联合vuex与localStorage



## 2、获取用户信息

步骤：

- 获取jwt
- 如果有jwt直接在个人中心 页面发送网络请求获取用户数据
- 注意：获取数据需要jwt，因此需要在api/http.js中配置请求拦截器，添加jwt到header头中
- ajax请求获取到数据后，将数据在页面中展示处理
  - 注意：登录与未登录都是用一个组件，做好判断
  - 测试的时候可以新开一个浏览器测试，或者使用谷歌浏览器的无痕模式（快捷键：Ctrl + Shift + N）

![image-20201223100809659](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/12/4091209568cbe99a2f2dc8898c2fc24db8503c70.png?sign=5f82106fb65570a3a701f6040571e51c&t=5fe2b4b9)





## 3、路由守卫

部分的页面需要用户登录后才能看到的，例如刚才写的余额显示页面。此时需要去判断有没有登录，如果登录则显示对应的内容，否则让其去登录页面。

导航守卫`就是路由跳转过程中的一些`钩子函数`，这个过程中触发的这些函数能让你操作一些其它事情时，可以进行过滤操作，这就是导航守卫。

- 全局守卫（全局守卫是写在路由模块里面的）

~~~javascript
// 全局前置守卫  路由规则文件中定义
// 当一个导航触发时,触发前置守卫，
// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该next方法，否则路由不向下执行。
router.beforeEach((to, from, next) => {
  // ...
})

// 全局后置钩子
// 此钩子不会接受 next 函数也不会改变导航本身
router.afterEach((to, from) => {
  // ...
})
~~~

> - 全局守卫定义在路由规则文件中
> - 参数含义：
>   - to: Route: 即将要进入的目标 路由对象
>   - from: Route: 当前导航正要离开的路由
>   - next: Function: 一定要调用该next方法，否则路由不向下执行（后置全局守卫没有next函数）



- 组件内守卫（局部）

~~~javascript
// 可以在路由组件内直接定义以下路由导航守卫
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`（这个时候还没有进入到to对应的组件中，所以拿不到this）
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
~~~

> 手动更改地址栏中的路由不会触发`beforeRouteUpdate`和`beforeRouteLeave`钩子函数。





# 七、上线发布

## 1、vue项目打包

当我们使用vue-cli脚手架完成一个项目的时候，下一步肯定会要把这个项目放到互联网上进行发布，我们在本地调试的时候只要命令行执行`npm run serve`就可以把这个项目跑起来，但是现在我们要把他放到服务器上的话，就得先通过打包命令`npm run build`来对项目进行打包。

在命令行工具中运行（需进入项目路径）：

~~~shell
npm run build
~~~

稍等片刻后如果提示如下信息则表示打包成功：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/7b4f0e1a12f634b43ff433ae11ef80e57d58a96a.png?sign=3c8ac9f8acf06f0dd9487d47de1e5051&t=5f884fb3)

打包成功后会在当前项目目录下多出一个`dist`目录：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/884f0669871ce455b0a3592ebcbc388ef294c840.png?sign=c91be6fcc4c86cfb430c5bd4df34d0a5&t=5f8859cd)

> 打包之后得到的这些文件都是经过压缩处理的，如果需要更改原先JavaScript、css等文件的内容，请在开发环境中去修改，然后重新打包生成。



## 2、项目上线的要素

- 辅助软件
  - 连接服务器的软件
  - 文件传输工具（FileZilla或其他替代方案）/ Git
- 服务器
  - 选型：Linux
  - 配置环境（难度大）
- 域名（可选）
  - 好记
  - 在大陆地区使用大陆的服务器，需要对域名进行备案（15天）+ 公安备案
- 代码



## 3、Vue项目上线发布

### 3.1、购买云服务器

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/518b8dba0b1ce76867da9bbcc7f109cd88743353.png?sign=7c404e1bb7d378a5a522df9cd0aacb30&t=5f891792)

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/d1463e3865f6562b45c48143787c4a563b1974db.png?sign=56a92873d9190b82e8b7c1a38bfd5ce0&t=5f8918a8)



### 3.2、云服务器操作基础

①使用cmder等终端工具连接远程服务器

~~~shell
ssh root@服务器公网IP地址
~~~

 在首次连接时会询问是否连接，输入`yes`按下回车。随后输入密码，在输入密码的时候没有任何提示，确认正确输入后按下回车。

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/3d7eb6e7d9d6596d81f3ddb11b67150be14d1ce4.png?sign=3dc2a2469de4e1a8d6387b1608bda435&t=5f8877ed)

> 退出的方式有2种：
>
> - 简单粗暴关闭连接工具
> - Ctrl + D
>
> 服务器旨在长期稳定的给用户提供服务，因此没有特殊需求，一般是不用关机的。因此，上述2个退出操作并不会让服务器关机。



②基本操作命令

- pwd：（print working directory）输出当前命令行所在的工作路径
- cd：（change directory）更改当前命令行所在的工作路径
  - cd  路径
  - 路径支持相对路径与**绝对路径**，需要注意Linux系统没有盘符的概念
- ls：（list，列出）列出指定（默认为当前）路径下的文档结构
  - ls 选项 路径
  - 选项：
    - -a：列出所有（包含隐藏文档）的文档
    - -l：（list，列表）以列表的形式列出详细信息
    - 选项可以合在一起写（仅支持单个字母的选项），让多个选项公用一个“-”
- mkdir：（make directory）创建文件夹
  - mkdir 文件夹路径
  - 选项：
    - -p：（parent）在创建文件夹的时候连同其父级文件夹一起创建
- touch：创建普通文件
  - touch 文件路径
  - 路径要求目录必须存在（touch没有mkdir类似的流氓`-p`选项）
- cp：（copy）复制文档
  - cp  选项  需要复制的文档路径  复制到的位置
  - 选项：
    - -r：递归（如果是复制的是文件夹，则一定要递归）

- mv：（move）移动/剪切&重命名文档
  - mv  需要操作的文档路径  保存的文档路径
- rm：（remove）删除文档
  - rm 选项 文档路径
  - 选项：
    - -r：递归
    - -f：强制（不提示是否删除，静默模式）



③`本地⇋服务器`的文件传输

> 文件传输可以借助可视化的辅助工具，如：FileZilla

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/80da3912bea8d8388ab81d79af9e818b0f7db351.png?sign=5edff12943dd8fc78661e21455c98de6&t=5f8954a1)



### 3.3、项目运行环境部署

> 后续操作会用到不少相对路径，为了保证大家的操作正确，**此处统一先切换当前工作路径：**
>
> ~~~shell
> cd /usr/local/src
> ~~~

①安装`mongoDB`

下载地址：https://www.mongodb.com/try/download/community

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/369db82949a6e517c91e9fe92108b6087bd5c01f.png?sign=b6bf07fee34509c0ba8e00bd9774c135&t=5f891da0)

可以选择`Copy Link`随后去服务器中对应的目录执行命令下载：

~~~shell
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.4.1.tgz
# 或
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.4.1.tgz
~~~

**也可以**直接用今日`docs`目录下已经下载好的压缩包，使用FileZilla进行上传到服务器的`/usr/local/src`目录。

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/e284c853d0444bdee2683454b12911cba23de0a3.png?sign=c5a88c47d7a741eddf7c54118ef66bb4&t=5f891f9d)

`.tgz`格式文件是压缩包文件格式的一种，需要使用其中的内容得先解压，解压命令为：

~~~shell
tar -zxvf mongodb-linux-x86_64-rhel70-4.4.1.tgz
# 或
tar -xvf mongodb-linux-x86_64-rhel70-4.4.1.tgz

# -z：表示指定解压缩所使用的方式，表示使用gz格式进行解压
# 如果不指定使用什么方式解压，则tar会自己判断
~~~

解压后会得到mongoDB的解压目录：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/709bef6405729c4368c5d417a88f7c8065cf1fc5.png?sign=7075a28d2ef424c8238cc3dbae7d0974&t=5f89206c)

Linux系统下对于第三方软件的安装一般存放在`/usr/local`下，此处建议将解压后得到的目录中的`bin`目录进行转移，转移的同时需要创建mongoDB的数据文件夹和日志文件夹，命令如下：

~~~shell
mkdir -p /usr/local/mongodb/data
mkdir /usr/local/mongodb/log
cp -r /usr/local/src/mongodb-linux-x86_64-rhel70-4.4.1/bin /usr/local/mongodb/
# 建立mongodb需要使用的日志文件
touch /usr/local/mongodb/log/logfile
~~~

上述指令执行完毕后可以通过`ls`进行列出检查，查看是否有以下文档结构：

~~~shell
ls /usr/local/mongodb/
~~~

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/01c094d8593040f3e65792da344471a5c046e66c.png?sign=cdf8b8bf937d03d3fb932437ccd0917a&t=5f892236)

随后，就可以通过以下命令去启动mongoDB了：

> 需要注意，此种方式的mongoDB为绿色软件，默认不会开机自动启动，不再需要使用的时候直接删除`/usr/local/mongodb`目录即可卸载软件。

~~~shell
/usr/local/mongodb/bin/mongod --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/log/logfile --bind_ip=127.0.0.1 --fork
# --dbpath：指定数据库文件夹位置
# --logpath：指定日志文件位置
# --bind_ip：绑定监听的网卡ip地址
# --fork：以后台服务的形式运行
~~~

> 注意：`logpath`配置项的值一定是一个文件（可以不存在），不能是文件夹。

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/18d7ae20487e55f26198b1deb19d586f14fc40d8.png?sign=240b7abd3aa386c37336a33951bf66ec&t=5f892473)

至此，mongoDB已经可以使用了，可以通过运行mongoDB连接工具进行测试，如果有以下输出则一切正常：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/9bf579dac0c48ffb21225a96cb3411bf70410b76.png?sign=41fffbdb658c6b406ddf699bfb66973e&t=5f8924da)

此时可以在其中创建好`maizuo`数据库，以及往库中写入`users`表中的数据了。

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/f9749e6205e1707ea902eeb107a65540c6f3fc71.png?sign=8da3a6d037b433573bb775ac5a86d591&t=5f895ae2)



②安装`nodejs`

文档地址：https://github.com/nodesource/distributions/blob/master/README.md

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/3117169f6da2544853974ea2284ee757ee1f012d.png?sign=40a3d91dd380be7ecd10a280268f9d81&t=5f892570)

复制好对应的指令后在终端中去执行（这个命令会在我们服务器上安装一个nodejs的镜像源以告诉包管理工具去哪里下载nodejs）：

~~~shell
curl -sL https://rpm.nodesource.com/setup_12.x | bash -
~~~

随后运行以下命令安装nodejs：

~~~shell
sudo yum install -y nodejs
~~~

> 使用`sudo`开头的命令**可能**会提示让输入密码，如果有则输入当前用户的密码即可。

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/294cde9114e1a7d0747a6c0acc72b879a7d81fb6.png?sign=1ada2b8e69fab63a7ba51b46078ac0a6&t=5f89266c)

安装好nodejs后，可以通过命令测试是否安装成功nodejs：

~~~shell
node -v
~~~

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/cf63350fbcbd7f1ce5798bb9f5f6dae7b1a8a70b.png?sign=261841d4501e9fc9b0ec71551c87c714&t=5f892778)

最后，可以继续安装一些可选的全局包以方便后面使用：

~~~shell
# 安装nrm，并切换npm镜像源为淘宝
npm i -g nrm
nrm use taobao

# 安装nodemon
npm i -g nodemon

# 安装pm2（让node在后端运行的工具，这样可以在配置完毕之后关闭终端窗口）
npm i -g pm2
~~~

到此，nodejs环境安装完毕！

③安装`nginx`

> Nginx是一款**轻量级**服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，其特点是占有内存少，并发能力强，事实上nginx的并发能力在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。

软件官网：https://nginx.org/

傻瓜式包管理工具安装方式说明参考地址：https://nginx.org/en/linux_packages.html#RHEL-CentOS

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/6e51b7eba5c921f9678ad23626004064468b0bc3.png?sign=60f6d81b605756c8310c6c55e8a1da65&t=5f8927f6)

按照上述提示，在服务器上指定的位置`/etc/yum.repos.d/nginx.repo`新建一个文件，文件内容如下：

~~~
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
~~~

> 对于文件的创建和修改，可以考虑咋windows上进行，写完毕之后再通过文件传输工具，将文件上传到指定的位置即可。

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/cfe824a24b83b826733b192e23f134b075dad3b2.png?sign=c2ebde34a175c8dc20fae3fbdd2524be&t=5f892878)

随后运行nginx的安装命令：

~~~shell
sudo yum install -y nginx
~~~

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/bd0d9d11ab17f51b278da9df41c3055bbac4c48e.png?sign=d0406ebe7495bec322b9e3ecaaff1fe2&t=5f8928e1)

在nginx完成安装后，可以通过以下几个命令来管理nginx服务：

~~~shell
# 启动nginx
systemctl start nginx

# 停止nginx
systemctl stop nginx

# 重启nginx
systemctl restart nginx

# 设置nginx开机自启动
systemctl enable nginx

# 设置nginx开机不自启动
systemctl disable nginx
~~~

接下来启动nginx：

~~~shell
systemctl start nginx
~~~

> 请注意，后续每次修改了nginx的配置文件都需要对nginx服务进行重启，否则新的配置不会生效。

> nginx相关的目录位置：
>
> - 配置文件
>   - **主配置文件nginx.conf：**/etc/nginx/nginx.conf
>   - **从配置文件‘*.conf’**：可以是任意位置，以主配置文件声明为准，比较常用针对站点的从配置文件在`/etc/nginx/conf.d/`目录下
> - 默认站点目录
>   - /usr/share/nginx/html（等于PHPstudy中的WWW目录，回头代码得放到这个里面去）

④域名解析（**如果有域名的话**）

> 如果是大陆服务器使用，则域名一定要通过了ICP备案才可以。

以阿里云为例，先进入[域名控制台](https://dc.console.aliyun.com/next/index)，在需要使用的域名后面点击`解析`按钮进入解析页面，随后点击`添加记录`按钮并按照自身需求填写解析信息：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/ebdd3cf94cdf28b15c0db6e7458c1c781d2cf6a3.png?sign=7dd0608f58b94b1e9c2dd9f13791deb5&t=5f892b88)

设置完成后一般1分钟内即可生效，可以在本机`windows`上通过`ping`命令进行测试：

~~~shell
# 以刚才设置的域名为例
ping sh2008.lynnn.cn
~~~

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/44a702283438bf25cf0e9cde1c5acd6a0fabddd4.png?sign=717baf0c16975001782e725a19e736fe&t=5f892c17)

⑤项目代码部署

a. 将打包好的vue代码上传到Nginx默认的站点下，目录地址为`/usr/share/nginx/html`

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/61d8982e8ce1815a1a1d6b716b23a46f760b95aa.png?sign=1a2cf6a36f72574d8c78c14339b4d065&t=5f89638f)



b. 启动node服务端为vue项目提供数据访问服务

> 如果出现无法访问的情况，请注意防火墙与云安全组的设置。

上传node服务端的代码到远程服务器，位置可以随意（因为代码是node运行的，不是nginx）：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/b78de2301ee42b897f894184a1108e80b03d458f.png?sign=c579249041a40c2738c6b25414cf831a&t=5f8965ad)

接下来进入node代码的目录`/usr/local/src/http`，运行安装所需模块的指令：

~~~shell
npm install
~~~

此时即便运行了node服务器，也会出现无法访问的情况，需进入阿里云的控制台添加允许3000端口通过。

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/7777c2c5c25987d93e1b544b01c5ec39e1ed5557.png?sign=5c003ec82781697ccf26e55ea74d82ad&t=5f896729)

最后，让node在后台执行http.js文件，此处需要用到前面安装的pm2工具：

~~~shell
# 先进入项目目录
pm2 start http.js
~~~

如果成功，则会看到如下效果：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/fa13340cda95ef20e3bf17d7f41ab48416eeca4e.png?sign=96ec6342731183618489513eeae164b9&t=5f8967d4)



c. 解决nginx下，vue路由模式`history`失效的问题

方案1：不使用`history`模式的路由

> 不使用`istory`模式，则得用hash模式，该模式下地址栏会有`#`

方案2：配置nginx，让nginx支持`history`模式的路由

~~~
try_files $uri $uri/ /index.html;
~~~

将上述的代码放到`/etc/nginx/conf.d/default.conf`中

~~~
location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
    # 以下是新增的一行
    try_files $uri $uri/ /index.html;
}
~~~

随后重启nginx：

~~~shell
systemctl restart nginx
~~~



⑤扩展了解：nginx下配置多网站（虚拟主机）及`HTTPS`站点

参考地址：https://www.cnblogs.com/tang-j-l/p/9907982.html

参考地址：https://www.cnblogs.com/zeussbook/p/11231820.html



最终，上线成功的效果：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/a56c4219f5bb6c504dd1cb81be2404bf31ebe670.png?sign=54eb3dcb37462edcf77d875f0c80cab2&t=5f896860)





nodejs的跨域：

~~~
https://www.cnblogs.com/zhangyezi/p/13841591.html

先安装cors，
然后再
const cors = require('cors')
app.use(cors())
~~~

