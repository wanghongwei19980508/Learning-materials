let int = 100;
let str = '北京';
const obj = {name:'张三',age:18};
const arr = [1,2,3,4,5];

function fun(){
    console.log('我是a.js中的程序');
}

// 通过  module.exports 添加 导出内容
// 导出内容是以对象的形式,导出的
// 当前文件中的所有的变量,都可以导出

// 输出的内容,只能显示不能使用
console.log( 12345 );

module.exports = {
    // 导出一个数据,键名的是integer 键值是 变量int 中存储的数据 100
    integer:int,
    string:str,
    array:arr,
    function:fun,
}


