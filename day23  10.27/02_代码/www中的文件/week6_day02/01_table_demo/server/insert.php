<?php

$name = $_POST['name'];
$age = $_POST['age'];
$sex = $_POST['sex'];
$class = $_POST['class'];
$score = $_POST['score'];

// 链接 MySQL数据库
$link = mysqli_connect('127.0.0.1' , 'root' , 'root' , 'bk_2003' , 3306);

// 新增数据操作
$sqlIns = "INSERT INTO `student` VALUES( DEFAULT , '{$name}' , {$age}  , '{$sex}' , {$class} , {$score} ) ";

$resultIns = mysqli_query( $link , $sqlIns);

$newId = mysqli_insert_id( $link);

// 根据新增数据的id,查询数据库,返回新增数据的内容
$sqlSELECT = "SELECT * FROM `student` WHERE `id`= {$newId} ";

$resultSELECT = mysqli_query( $link , $sqlSELECT);

$arr = mysqli_fetch_all( $resultSELECT , MYSQLI_ASSOC );

echo json_encode($arr);
