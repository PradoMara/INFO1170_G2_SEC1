<?php
$host = "db.inf.uct.cl";
$user = "dprado";
$password = "9uwlZuJJWPHjj+uYU";
$bd = "A2024_dprado";

$conexion = mysqli_connect($host, $user, $password, $bd);

if (!$conexion) {
    // Enviar respuesta JSON en caso de error (opcional)
    die(json_encode(array('success' => false, 'message' => 'Error de conexión a la base de datos.')));
}
?>
