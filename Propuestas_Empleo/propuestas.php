<?php

include 'conexion.php';

session_start();
$postulante_id = $_SESSION['postulante_id'] ?? 1; 

$sql_acepto = "SELECT acepto_propuesta FROM postulantes WHERE id = ?";
$stmt = mysqli_prepare($conexion, $sql_acepto);
mysqli_stmt_bind_param($stmt, 'i', $postulante_id);
mysqli_stmt_execute($stmt);
$resultado = mysqli_stmt_get_result($stmt);
$acepto_propuesta = mysqli_fetch_assoc($resultado)['acepto_propuesta'];

if ($acepto_propuesta) {
    echo json_encode(["mensaje" => "Ya has aceptado una propuesta de empleo."]);
    exit();
}

$sql = "SELECT id, empresa, descripcion, fecha_limite FROM propuestas WHERE id_postulante = ? AND estado = 'pendiente'";
$stmt = mysqli_prepare($conexion, $sql);
mysqli_stmt_bind_param($stmt, 'i', $postulante_id);
mysqli_stmt_execute($stmt);
$resultado = mysqli_stmt_get_result($stmt);

$propuestas = [];
while ($fila = mysqli_fetch_assoc($resultado)) {
    $propuestas[] = $fila;
}

echo json_encode($propuestas);

mysqli_close($conexion);
?>
