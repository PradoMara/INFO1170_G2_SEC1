<?php
include('/conexion-bd/conexion.php');

$destinatario = $_GET['destinatario'];

// Ccnsulta para obtener mensajes dirigidos al destinatario o mensajes globales
$stmt = $conexion->prepare("SELECT usuario, mensaje, fecha FROM Mensajes WHERE destinatario = ? OR destinatario IS NULL ORDER BY fecha ASC");
$stmt->bind_param("s", $destinatario);
$stmt->execute();
$resultado = $stmt->get_result();

// Crear un array para los mensajes
$mensajes = [];
while ($fila = $resultado->fetch_assoc()) {
    $mensajes[] = $fila;
}

// devolver los mensajes en formato JSON
echo json_encode($mensajes);

// Cerrar la conexion
$stmt->close();
$conexion->close();
?>