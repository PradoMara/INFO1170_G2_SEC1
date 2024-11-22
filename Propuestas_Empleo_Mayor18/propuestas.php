<?php
include 'conexion.php';
header('Content-Type: application/json');
session_start();

// Validar sesión
if (!isset($_SESSION['postulante_id']) || !is_numeric($_SESSION['postulante_id'])) {
    echo json_encode(['success' => false, 'message' => 'Sesión no válida o expirada.']);
    exit();
}

$postulante_id = (int) $_SESSION['postulante_id'];

try {
    // Consulta combinada para obtener edad y estado de aceptación
    $sql = "SELECT edad, acepto_propuesta FROM postulantes WHERE id = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    if (!$stmt) {
        throw new Exception("Error al preparar la consulta.");
    }

    mysqli_stmt_bind_param($stmt, 'i', $postulante_id);
    mysqli_stmt_execute($stmt);
    $resultado = mysqli_stmt_get_result($stmt);
    $postulante = mysqli_fetch_assoc($resultado);

    if (!$postulante) {
        echo json_encode(['success' => false, 'message' => 'Postulante no encontrado.']);
        exit();
    }

    // Verificar si ya aceptó una propuesta
    if ($postulante['acepto_propuesta']) {
        echo json_encode(['success' => false, 'message' => 'Ya has aceptado una propuesta de empleo.']);
        exit();
    }

    // Construir consulta según la edad
    if ($postulante['edad'] < 18) {
        $sql_propuestas = "SELECT id, empresa, descripcion, fecha_limite 
                        FROM propuestas 
                        WHERE id_postulante = ? AND estado = 'pendiente' AND especial_para_menores = 1";
    } else {
        $sql_propuestas = "SELECT id, empresa, descripcion, fecha_limite 
                        FROM propuestas 
                        WHERE id_postulante = ? AND estado = 'pendiente'";
    }

    $stmt_propuestas = mysqli_prepare($conexion, $sql_propuestas);
    if (!$stmt_propuestas) {
        throw new Exception("Error al preparar la consulta de propuestas.");
    }

    mysqli_stmt_bind_param($stmt_propuestas, 'i', $postulante_id);
    mysqli_stmt_execute($stmt_propuestas);
    $resultado_propuestas = mysqli_stmt_get_result($stmt_propuestas);

    $propuestas = [];
    while ($fila = mysqli_fetch_assoc($resultado_propuestas)) {
        $propuestas[] = $fila;
    }

    echo json_encode(['success' => true, 'data' => $propuestas], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
} finally {
    // Cerrar recursos
    if (isset($stmt)) {
        mysqli_stmt_close($stmt);
    }
    if (isset($stmt_propuestas)) {
        mysqli_stmt_close($stmt_propuestas);
    }
    mysqli_close($conexion);
}
?>
