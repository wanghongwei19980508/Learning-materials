

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





