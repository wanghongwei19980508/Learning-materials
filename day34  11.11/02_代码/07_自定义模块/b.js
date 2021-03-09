// 通过 require 来 导入记载 a.js 中 导出的数据
// 从在 result 中 数据类型是一个对象
const result = require('./a.js');

let a = 100;

module.exports = {
    number:a,
}