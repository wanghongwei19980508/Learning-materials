<?php

$arr = [
    ['name'=>'张三','age'=>181,'sex'=>'男1'],
    ['name'=>'李四','age'=>182,'sex'=>'男2'],
    ['name'=>'王五','age'=>183,'sex'=>'男3'],
    ['name'=>'赵六','age'=>184,'sex'=>'男4'],
];

// 函数名称
$cb = $_GET['cb'];

// 第二个参数:标签对象
$ele = $_GET['ele'];

// 第一个参数:数组
$result = json_encode( $arr );

// 给变量赋值 PHP程序的执行结果
// echo 'abc=' . $result ;


// 直接调用 JavaScript中已经定义好的函数,并且要赋值参参数
echo "{$cb}( {$result} , {$ele} )";

