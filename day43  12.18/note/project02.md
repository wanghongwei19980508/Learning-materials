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

