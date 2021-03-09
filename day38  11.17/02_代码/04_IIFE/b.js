// 我是一个独立的模块B
(function(){
    let num = 200;
    let bool = false;

    function bf1(){console.log('我是b.js中的bf1函数中的程序')}

    function bf2(){console.log('我是b.js中的bf2函数中的程序')}

    window.modeB = {
        // 对象的属性和属性值是相同的名称，可以就写一个
        // 自动解析变量的内容,存储在键名中
        num,   // 将变量num存储的数据,解析,存储到对象num键名中
        bool,
        bf1,
        bf2,
    }
})()