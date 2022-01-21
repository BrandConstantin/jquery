<?php
include('conexion.php');

$con = db_connect();

$usuario = $_POST['usuario'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$password = $_POST['password'];
$password = md5($password);

$q = "INSERT INTO usuarios (usuario,nombre,apellido,telefono,email,password) VALUES('$usuario','$nombre','$apellido','$telefono','$email','$password')";
$con->query($q);

echo "ok";

?>