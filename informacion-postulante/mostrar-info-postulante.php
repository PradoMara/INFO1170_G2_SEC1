<?php
include '../conexion.php';
include 'obtener-postulante.php';

// validar y sanitizar la entrada
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($id <= 0) {
    echo "ID inválido.";
    exit;
}

$postulante = obtenerPostulante($conn, $id);

if ($postulante === null) {
    echo "No se encontró el postulante.";
    exit;
}
?>