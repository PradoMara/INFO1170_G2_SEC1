<?php

$host = "db.inf.uct.cl";
$user = "dprado";
$password = "9uwlZuJJWPHjj+uYU";
$bd     = "A2024_dprado";

$conexion = new mysqli($host, $user, $password, $bd);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "ok";
?>