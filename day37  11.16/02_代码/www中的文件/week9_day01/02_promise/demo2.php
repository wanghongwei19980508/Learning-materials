<?php

$a2 = $_GET['a2']; 
$b2 = $_GET['b2']; 

echo json_encode(['res3' => $a2/100 , 'res4'=> $b2/100]);