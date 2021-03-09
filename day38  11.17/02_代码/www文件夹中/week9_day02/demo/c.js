// 我是一个整合文件

// 加载 b.js 中导出两个变量
// {} 中写的是 b.js 中 export 之后变量名称
import { int,bool } from "./b.js";

console.log(int);
console.log(bool);
