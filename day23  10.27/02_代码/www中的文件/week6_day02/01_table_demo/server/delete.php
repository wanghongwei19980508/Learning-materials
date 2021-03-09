<?php

$id = $_POST['id'];
$keyWord = $_POST['keyWord'];

$link = mysqli_connect('127.0.0.1' , 'root' , 'root' , 'bk_2003' , 3306);

// 删除 id 的数据
$sqlDel = "DELETE FROM `student` WHERE id = {$id} ";

$resultDEL = mysqli_query( $link , $sqlDel);

// 再次按照关键词查询,将删除数据之后,新的结果,返回
$sqlSELECT = "SELECT * FROM `student` WHERE `name` LIKE '%{$keyWord}%' ";

$resultSELECT = mysqli_query( $link , $sqlSELECT);

$arr = mysqli_fetch_all( $resultSELECT , MYSQLI_ASSOC );

echo json_encode($arr);

