<?php

include 'conexion.php';

session_start();
$postulante_id = $_SESSION['postulante_id'] ?? 1;

$sql_edad = "SELECT edad FROM postulantes WHERE id = ?";
$stmt_edad = mysqli_prepare($conexion, $sql_edad);
mysqli_stmt_bind_param($stmt_edad, 'i', $postulante_id);
mysqli_stmt_execute($stmt_edad);
$resultado_edad = mysqli_stmt_get_result($stmt_edad);
$postulante = mysqli_fetch_assoc($resultado_edad);

$sql_acepto = "SELECT acepto_propuesta FROM postulantes WHERE id = ?";
$stmt_acepto = mysqli_prepare($conexion, $sql_acepto);
mysqli_stmt_bind_param($stmt_acepto, 'i', $postulante_id);
mysqli_stmt_execute($stmt_acepto);
$resultado_acepto = mysqli_stmt_get_result($stmt_acepto);
$acepto_propuesta = mysqli_fetch_assoc($resultado_acepto)['acepto_propuesta'];

if ($acepto_propuesta) {
    echo json_encode(["mensaje" => "Ya has aceptado una propuesta de empleo."]);
    exit();
}

if ($postulante['edad'] < 18) {
    $sql = "SELECT id, empresa, descripcion, fecha_limite FROM propuestas WHERE id_postulante = ? AND estado = 'pendiente' AND especial_para_menores = 1";
} else {
    $sql = "SELECT id, empresa, descripcion, fecha_limite FROM propuestas WHERE id_postulante = ? AND estado = 'pendiente'";
}

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
