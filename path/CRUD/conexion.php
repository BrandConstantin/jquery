<?php

function db_connect(){

    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'prueba';

    $mysql = @new mysqli($host,$user,$pass,$db);
    if(mysqli_connect_errno()){
        printf(error_db_connect());
        exit();
    }

    return $mysql;
}