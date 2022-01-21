<?php
    include('conexion.php');
    $con = db_connect();

    $id = $_POST['id'];

    $q = "DELETE FROM usuarios WHERE id=$id";
    $con->query($q);

    echo "ok";

?>