// 我是一个独立的模块A

define(function(require , exports , module){
    // 这里就是一个独立的模块A

    for(var i = 0 ; i <= 10000 ; i++){
        console.log(i);
    }

    let num = 100;
    let bool = true;

    console.log('我是模块A中的程序');

    function af1(){console.log('我是a.js模块中,函数af1中的程序')};

    function af2(){console.log('我是a.js模块中,函数af2中的程序')};

    // 通过 module.exports 来导出内容
    module.exports = {
        num,
        bool,
        af1,
        af2,
    }

})