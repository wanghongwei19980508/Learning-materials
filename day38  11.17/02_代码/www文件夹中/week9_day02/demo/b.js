// 我是 一个 依赖模块

// 将 a.js 文件 export default 导出的内容,存储在 mA 形参中
// mA的形参名称,可以任意定义
import mA from './a.js';

console.log(mA);

// 还可以写多个导出

export let int = 200;

export let bool = false;



