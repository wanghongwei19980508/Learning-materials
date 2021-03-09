<?php

$a1 = $_GET['a1']; 
$b1 = $_GET['b1']; 

echo json_encode(['res1' => $a1*2 , 'res2'=> $b1*2]);