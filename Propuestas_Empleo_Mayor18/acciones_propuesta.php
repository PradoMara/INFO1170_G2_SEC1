<?php

include 'conexion.php'; 

session_start();
$postulante_id = $_SESSION['postulante_id'] ?? 1; 
$propuesta_id = $_POST['propuesta_id'];
$accion = $_POST['accion'];
if (!in_array($accion, ['aceptar', 'rechazar'])) {
    echo json_encode(["mensaje" => "Acción no válida."]);
    exit();
}

if ($accion == 'aceptar') {
    $sql = "UPDATE propuestas SET estado = 'aceptada' WHERE id = ? AND id_postulante = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, 'ii', $propuesta_id, $postulante_id);
    mysqli_stmt_execute($stmt);

    $sql_update_postulante = "UPDATE postulantes SET acepto_propuesta = TRUE WHERE id = ?";
    $stmt_postulante = mysqli_prepare($conexion, $sql_update_postulante);
    mysqli_stmt_bind_param($stmt_postulante, 'i', $postulante_id);
    mysqli_stmt_execute($stmt_postulante);

} elseif ($accion == 'rechazar') {
    $sql = "UPDATE propuestas SET estado = 'rechazada' WHERE id = ? AND id_postulante = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, 'ii', $propuesta_id, $postulante_id);
    mysqli_stmt_execute($stmt);
}

mysqli_close($conexion);

echo json_encode(["mensaje" => "Acción realizada con éxito."]);
?>
