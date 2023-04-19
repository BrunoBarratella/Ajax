<?php
require_once __DIR__."/class/comentarios_class.php";
$classe = new Comentarios();

if($_POST){
$classe->names = $_POST['names'];
$classe->comments = $_POST['comments'];

$classe->set();
}else{
$recebe = json_encode($classe->get());
echo $recebe;
}