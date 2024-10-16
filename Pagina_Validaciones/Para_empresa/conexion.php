<?php

$host = "db.inf.uct.cl";
$user = "dprado";
$password = "9uwlZuJJWPHjj+uYU";
$bd     = "A2024_dprado";

// Crear la conexión usando $conexion
$conexion = new mysqli($host, $user, $password, $bd);

// Verificar si la conexión tiene algún error usando $conexion
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
echo "ok";  // Si la conexión es exitosa
?>
