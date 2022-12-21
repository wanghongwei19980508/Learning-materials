### 3.11、路由守卫（欠债）

`导航守卫`就是路由跳转过程中的一些`钩子函数`，这个过程中触发的这些函数能让你操作一些其它事情时，可以进行过滤操作，这就是导航守卫。

- 全局守卫

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



- 组件内守卫

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


# Vue阶段综合演练

[TOC]

# 一、项目概要

## 1、效果前瞻

仿照网站：卖座网

![效果预览](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/cbf14ac0b60d10ba7cac70cd93f87af85d26a06b.png?sign=3d94c060b86cc17a523f2f153bfc4485&t=5f7c13a9)



## 2、开发流程

- 产品**立项** (需求分析、技术选型、项目人员确定)
  - 项目立项报告（百度搜）【产品经理，PM】
    - 当前背景
    - 项目需求
    - 人员安排
    - 功能介绍
    - 市场需求
    - 项目风险
- 产品原型 (设计产品原型图— 进行ui设计)
  - 产品原型图
- 项目开发 (前端 与 后端)【周期最长的一步】
  - 设计（UI）：设计图和切图
  - 前端：出一版静态页（模板）
  - 后端：服务器端
- 项目测试
  - 测试部门：QA
- 项目上线
  - 运维&后端



## 3、开发环境

- 开发工具：vs code并安装vue开发插件：Vetur

- 开发环境：windows /mac

- 项目运行环境：node v10+

- Vue脚手架： vue-cli 4.5.7

- 代码版本工具：Git/Gitee



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
cd jy-moive
git remote add origin 远程仓库地址
git push -u origin master
~~~



- 创建开发分支`dev`

~~~shell
git branch dev
git checkout dev
git push -u origin dev
~~~



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
~~~



## 3、路由规划

如果项目中所有的路由都写在入口文件中，那么将不便于编写项目和后期维护。因此路由需要进行模块化处理。

可以**先行**添加以下几个空的路由模块：

- 电影模块
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
    ├─Cinema 		（电影院）        
    │      └─Cinema.vue 
    │                
    └─Film          （电影）
           │ Film.vue
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
         │ cinema.js
         └─film.js
~~~

**在剔除`router/index.js`中无用代码后，示例代码如下**

~~~javascript
import Vue from "vue";
import VueRouter from "vue-router";

// 导入路由模块
import centerRouter from '@/router/routes/center'
import cinemaRouter from "@/router/routes/cinema";
import filmRouter from "@/router/routes/film";

Vue.use(VueRouter);

const routes = [
    // 注册路由模块
    centerRouter,
    cinemaRouter,
    filmRouter,
    {
        path: "/",
        redirect: "/film",
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

- 按需导入语法`import {s1 as aliasname} from '模块标识符'`

~~~javascript
// 导入模块成员
import {s1, s2 as ss2,say} from './m1.js'
console.log(s1)		//aaa
console.log(ss2)	//ccc
console.log(say)	//[Function: say]
~~~

> - 默认导入导出与按需导入导出可以共存，并不冲突。
> - 在一个模块中可以多次按需导出，但只能一次默认导出
> - 按需导出的成员在导入的时候可以通过`as`关键词起别名



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



## 5、反向代理配置

~~~json
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





