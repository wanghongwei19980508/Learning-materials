// 1,加载内置模块fs,名称必须是fs
const fs = require('fs');


fs.readFile('./demo1.txt' , 'utf-8' ,function(err,data){
    // 报错优先,如果err中存储的不是null,就是有报错信息
    if(err !== null) throw(`我是抛出的报错信息,报错状态码是:${err.errno}`);

    // 如果没有报错,执行正常的操作
    console.log(data);

});


fs.writeFile('./demo1.txt' , '我是通过node.js写入的内容' ,function(){});