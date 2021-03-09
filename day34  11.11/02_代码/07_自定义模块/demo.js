// 在 demo.js 中 导入 b.js 
// 我们不需要管 b.js 文件对谁有依赖
// 导入b.js 时 b.js 会自动加载导入 a.js
// demo.js 中 只需要导入 b.js 就可以了
const res = require('./b.js');

console.log(res);