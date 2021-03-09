// 我是 一个 依赖其他模块的 依赖模块

define(function(require , exports , module){
    console.group('我是b.js中的程序输出');
    console.log('b.js中的程序内容');

    // 之前先执行 B中的自己的程序

    // 加载了一个外部的模块,定义变量,存储 module.exports 导出的内容
    // 需要加载a了,才会执行加载a.js的程序内容
    // 加载之前的B中的程序,会先执行,不受a的影响
    const mA = require('./a.js');
    console.log(mA);

    console.groupEnd();

    module.exports = {
        num:200,
        bool:false,
    }

})