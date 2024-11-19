<?php
include 'conexion.php'; 

$sql = "SELECT id, nombre, correo, mensaje, fecha, estado FROM dudas_consultas";
$resultado = $conn->query($sql);

$consultas = [];

if ($resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        $consultas[] = $fila;
    }
}

header('Content-Type: application/json');
echo json_encode($consultas);

$conn->close();
?>
