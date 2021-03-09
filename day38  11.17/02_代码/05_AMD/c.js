// c.js文件是 整合文件
// 加载之前两个依赖文件,执行程序

// m1 存储的是 a.js return 返回的内容 
// m2 存储的是 b.js return 返回的内容 
require( ['./a.js' , './b.js'] , function(m1,m2){
    console.group('我是c.js中的程序');
    console.log(m1,m2);
    console.groupEnd();
} )