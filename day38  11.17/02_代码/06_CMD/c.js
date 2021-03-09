// 我是一个整合的文件
// 通过 seajs.use() 来 整合 模块

// 当前如果只要加载B 
// B会在需要的时候,执行加载A
seajs.use(['./b.js'] , function(mB){
    console.log(mB);
})
