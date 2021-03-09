// 我是一个独立的模块文件

let int = 100;
let bool = true;

function af1(){console.log('我是a.js文件中,af1函数的执行内容')};

function af2(){console.log('我是a.js文件中,af2函数的执行内容')};

// 以对象的形式导出数据
export default {
    int,
    bool,
    af1,
    af2,
}

// 以变量存储的形式,导出数据
// export const n = int;
