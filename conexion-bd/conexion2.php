<?php

$host = "db.inf.uct.cl";
$user = "dprado";
$password = "9uwlZuJJWPHjj+uYU";
$bd     = "A2024_dprado";

$conexion = new mysqli($host, $user, $password, $bd);

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
echo "ok";  
?>
