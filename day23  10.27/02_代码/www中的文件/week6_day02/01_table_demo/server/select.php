<?php

$keyWord = $_GET['keyWord'];

$link = mysqli_connect('127.0.0.1' , 'root' , 'root' , 'bk_2003' , 3306);

$sql = "SELECT * FROM `student` WHERE `name` LIKE '%{$keyWord}%' ";

$result = mysqli_query( $link , $sql);

$arr = mysqli_fetch_all( $result , MYSQLI_ASSOC );

echo json_encode($arr);