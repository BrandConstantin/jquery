<?php
include('conexion.php');
$con = db_connect();

$id = $_POST['id'];

$q = "SELECT * FROM usuarios WHERE id=$id";
$result = $con->query($q);

$datos = array();
while ($row=$result->fetch_assoc()) {
  $datos[]=$row;
}

echo json_encode($datos);

?>