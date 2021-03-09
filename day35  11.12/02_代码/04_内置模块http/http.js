// 1,加载内置模块 http
const http = require('http');

// 加载fs内置模块
const fs = require('fs');

// 2,使用 createServer 创建一个服务器
// 在创建服务器的同时,设定响应内容
const server = http.createServer( (req,res)=>{
    // req.url是请求地址
    if( req.url === '/' ){
        // 请求地址是 / ,访问的应该是首页面
        // 读取首页面内容,响应首页面内容
        fs.readFile( './pages/index.html' , 'utf8' , (err,data)=>{
            // 报错优先
            if( err !== null ) throw('报错信息');
            // 通过res.end() 返回响应页面内容
            res.end(data);
        })
    }

    if( req.url === '/pages/login.html' ){
        // 请求地址是 / ,访问的应该是首页面
        // 读取首页面内容,响应首页面内容
        fs.readFile( './pages/login.html' , 'utf8' , (err,data)=>{
            // 报错优先
            if( err !== null ) throw('报错信息');
            // 通过res.end() 返回响应页面内容
            res.end(data);
        })
    }
});

// 3,设定监听端口
server.listen(8080);

