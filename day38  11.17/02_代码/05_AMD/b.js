// 我是 一个 模块B 我要加载使用依赖 a.js 中的程序

// console.group() 一个 一个 "组" 的形式 输出内容
// 要配合 console.groupEnd()  "组"结束

// 这里的 m1 自动存储 a.js 中 return 之后 返回的内容
define(['./a.js'] , function(m1){
    console.group('这是b.js中,执行程序')
    
    console.log(m1);

    console.groupEnd()


    // 定义 模块B 自己的内容

    return {
        num:200,
        bool:false,
        bf1:function(){console.log('我是b.js文件中,bf1函数中的程序')},
        bf2:function(){console.log('我是b.js文件中,bf2函数中的程序')}
    }
})