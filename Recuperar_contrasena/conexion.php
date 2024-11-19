<?php

$host = "db.inf.uct.cl";
$user = "dprado";
$password = "9uwlZuJJWPHjj+uYU";
$bd = "A2024_dprado";

$conexion = mysqli_connect($host, $user, $password, $bd);

if (!$conexion) {
    die("Conexión fallida: " . mysqli_connect_error());
}
echo "Conexión exitosa";
?>
