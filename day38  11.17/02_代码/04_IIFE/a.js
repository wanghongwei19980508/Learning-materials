// 独立模块a
(function(){
    let num = 100;
    let bool = true;

    function af1(){console.log('我是a.js中的af1函数中的程序')}

    function af2(){console.log('我是a.js中的af2函数中的程序')}

    // 导入模块,将模块内容,定义在顶级对象 window 中
    // 在 window 这个顶级对象中 新增顺序应
    window.modeA = {
        num:num,
        bool:bool,
        af1:af1,
        af2:af2,
    }

})()