<?php
include '../conexion.php';
include 'obtener-postulante.php';

$id = $_GET['id'];
$postulante = obtenerPostulante($conn, $id);
?>


