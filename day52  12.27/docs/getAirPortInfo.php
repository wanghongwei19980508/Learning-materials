<?php
// 导入需要用到的函数库
include "./common.php";

// 获取代理的参数信息
$params = "";
if(count($_REQUEST) > 0){
    foreach ($_REQUEST as $key => $value) {
        $params .= $key . "=" . $value . "&";
    }
    // 去除右边多余的&符号
    $params = "?" . rtrim($params,'&');
}

// 代理地址（各位只需要修改$url这个变量的值，将其替换成自己需要从别处去取的地址即可）
// 参数需要另传给当前这个php文件，由php代为传递给目标url
$url = "https://api.i-lynn.cn/iata";
$api = $url . $params;

// 请求接口的数据
// http_get方法为get请求方法，如果需要发送post请求，请使用http_post请求方法
$data = http_get($api);

// 以json格式输出
header("Content-Type:application/json;charset=utf-8");
// cors解决跨域
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:*');
echo $data;