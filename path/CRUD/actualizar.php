<?php
    include('conexion.php');
    $con = db_connect();

    $id = $_POST['id'];
    $usuario = $_POST['usuario'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if(empty($password)){
        $q = "UPDATE usuarios SET usuario='$usuario', nombre='$nombre', apellido='$apellido', telefono='$telefono', email='$email' WHERE id=$id";
    }else{
        $password = md5($password);
        $q = "UPDATE usuarios SET usuario='$usuario', nombre='$nombre', apellido='$apellido', telefono='$telefono', email='$email', password='$password' WHERE id=$id";
    }

    $con->query($q);

    echo "ok";

?>