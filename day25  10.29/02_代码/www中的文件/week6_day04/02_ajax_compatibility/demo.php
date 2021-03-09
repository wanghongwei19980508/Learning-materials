<?php

// echo '我是响应体内容';


// json_encode(表达式);   将表达式的内容,转化为 json字符串
// json_decode(表达式);   将表达式中的 json 字符串 还原为原始的数据类型

// $json = json_encode([ 
//     [ 'name'=>'张三','age'=>18,'sex'=>'男' ],
//     [ 'name'=>'李四','age'=>19,'sex'=>'男' ],
//     [ 'name'=>'王五','age'=>20,'sex'=>'女' ],
//     [ 'name'=>'赵六','age'=>21,'sex'=>'女' ],
//  ]);

//  echo $json;


//  print_r( json_decode($json) );


echo json_encode(
    [
        [ 'name'=>'张三','age'=>18,'sex'=>'男' ],
        [ 'name'=>'李四','age'=>19,'sex'=>'男' ],
        [ 'name'=>'王五','age'=>20,'sex'=>'女' ],
        [ 'name'=>'赵六','age'=>21,'sex'=>'女' ],
    ]);


// print_r( [ 
//      );