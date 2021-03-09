// 我是一个独立的模块
define(function(){
    let num = 100;
    let bool = true;

    // 不用定义函数,可以直接定义需要执行的程序
    console.log('我是 a.js 文件中执行的程序');

    for(var i = 1 ; i<=10000; i++){
        console.log(i);
    }

    // 也可以定义一些需要的方法函数
    function af1(){
        console.log( '我是 a.js 文件中 af1函数中的程序' )
    }

    function af2(){
        console.log( '我是 a.js 文件中 af2函数中的程序' )
    }

    // 通过 return 对象 来导出 数据和程序
    return {
        num,
        bool,
        af1,
        af2,
    }

})