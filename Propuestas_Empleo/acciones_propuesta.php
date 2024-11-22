<?php
include 'conexion.php';
header('Content-Type: application/json');
session_start();

// Validar sesión
if (!isset($_SESSION['postulante_id']) || !is_numeric($_SESSION['postulante_id'])) {
    echo json_encode(["success" => false, "message" => "Sesión no válida o expirada."]);
    exit();
}

$postulante_id = (int) $_SESSION['postulante_id'];

// Validar entrada
$propuesta_id = filter_var($_POST['propuesta_id'], FILTER_VALIDATE_INT);
$accion = $_POST['accion'];

if (!$propuesta_id || !in_array($accion, ['aceptar', 'rechazar'])) {
    echo json_encode(["success" => false, "message" => "Datos inválidos."]);
    exit();
}

try {
    if ($accion === 'aceptar') {
        // Aceptar la propuesta
        $sql = "UPDATE propuestas SET estado = 'aceptada' WHERE id = ? AND id_postulante = ?";
        $stmt = mysqli_prepare($conexion, $sql);
        if (!$stmt) {
            throw new Exception("Error al preparar la consulta para aceptar la propuesta.");
        }
        mysqli_stmt_bind_param($stmt, 'ii', $propuesta_id, $postulante_id);
        if (!mysqli_stmt_execute($stmt)) {
            throw new Exception("Error al ejecutar la consulta para aceptar la propuesta.");
        }

        // Actualizar estado del postulante
        $sql_update_postulante = "UPDATE postulantes SET acepto_propuesta = TRUE WHERE id = ?";
        $stmt_postulante = mysqli_prepare($conexion, $sql_update_postulante);
        if (!$stmt_postulante) {
            throw new Exception("Error al preparar la consulta para actualizar el estado del postulante.");
        }
        mysqli_stmt_bind_param($stmt_postulante, 'i', $postulante_id);
        if (!mysqli_stmt_execute($stmt_postulante)) {
            throw new Exception("Error al ejecutar la consulta para actualizar el estado del postulante.");
        }
        $stmt_postulante->close();
    } elseif ($accion === 'rechazar') {
        // Rechazar la propuesta
        $sql = "UPDATE propuestas SET estado = 'rechazada' WHERE id = ? AND id_postulante = ?";
        $stmt = mysqli_prepare($conexion, $sql);
        if (!$stmt) {
            throw new Exception("Error al preparar la consulta para rechazar la propuesta.");
        }
        mysqli_stmt_bind_param($stmt, 'ii', $propuesta_id, $postulante_id);
        if (!mysqli_stmt_execute($stmt)) {
            throw new Exception("Error al ejecutar la consulta para rechazar la propuesta.");
        }
    }

    // Cerrar statement
    $stmt->close();

    // Respuesta de éxito
    echo json_encode(["success" => true, "message" => "Acción realizada con éxito."]);
} catch (Exception $e) {
    // Manejo de errores
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
} finally {
    // Cerrar conexión
    mysqli_close($conexion);
}
?>
