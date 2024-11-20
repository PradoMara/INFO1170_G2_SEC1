<?php
include 'conexion.php';

$sql = "SELECT id, fecha_nacimiento, tipo_archivo, tipo_permiso, fecha_subida FROM ValidacionMenor18 ORDER BY fecha_subida DESC";
$resultado = $conn->query($sql);

$validaciones = [];

if ($resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        $validaciones[] = $fila;
    }
}

header('Content-Type: application/json');
echo json_encode($validaciones);

$conn->close();
?>
