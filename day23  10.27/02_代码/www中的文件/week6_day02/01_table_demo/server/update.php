<?php

$id = $_POST['id'];
$name = $_POST['name'];
$age = $_POST['age'];
$sex = $_POST['sex'];
$class = $_POST['class'];
$score = $_POST['score'];

$link = mysqli_connect('127.0.0.1' , 'root' , 'root' , 'bk_2003' , 3306);

// 根据id,执行数据更新操作
$sqlChange = "UPDATE  `student` SET name='{$name}' , age={$age} , sex='{$sex}' , class={$class} , score={$score} WHERE id = {$id} ";

$result = mysqli_query( $link , $sqlChange );

// 更新之后,再次执行数据查询操作
$sqlSELECT = "SELECT * FROM `student` WHERE `id`= {$id} ";

$resultSELECT = mysqli_query( $link , $sqlSELECT);

$arr = mysqli_fetch_all( $resultSELECT , MYSQLI_ASSOC );

echo json_encode($arr);