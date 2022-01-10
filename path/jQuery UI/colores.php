<?php

$conexion = new mysqli("localhost", "root", "", "prueba");

$color = $_GET['color'];

$resultado = $conexion->query("SELECT * FROM COLORES WHERE NOMBRE LIKE '%$color%'");

$datos = array();

while($row = $resultado->fetch_assoc()){
    $datos[] = $row['nombre'];
}

echo json_encode($datos);