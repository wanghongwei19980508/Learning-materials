<?php

$cb = $_GET['cb'];
$name = $_GET['name'];
$age = $_GET['age'];

$result = json_encode( ['name'=>$name , 'age'=>$age] );

echo "{$cb}('{$result}')";