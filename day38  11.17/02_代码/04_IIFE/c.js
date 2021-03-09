// console.log(window)
// 在 c模块中 可以使用 modeA 和 modeB 对象中的数据



// 执行需要两个参数
(function(m1,m2){
    // m1 存储的是 modeA中的对象内容
    // m2 存储的是 modeB中的对象内容
    console.log(m1);
    console.log(m2);

// 在立即执行() 中 输入参数
})( window.modeA , window.modeB )
// 在 立即执行函数中 可以看到 依赖的模块
// 但是这两个模块是哪个文件中的,看不出来




