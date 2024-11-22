<?php
include 'conexion.php';
header('Content-Type: application/json');
session_start();

// Verificar si el ID del postulante está definido
if (!isset($_SESSION['postulante_id']) || !is_numeric($_SESSION['postulante_id'])) {
    echo json_encode(['success' => false, 'message' => 'ID de postulante no válido o sesión expirada.']);
    exit();
}

$postulante_id = (int) $_SESSION['postulante_id'];

try {
    // Obtener edad y estado de aceptación en una sola consulta
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
        $sql = "SELECT id, empresa, descripcion, fecha_limite 
                FROM propuestas 
                WHERE id_postulante = ? AND estado = 'pendiente' AND especial_para_menores = 1";
    } else {
        $sql = "SELECT id, empresa, descripcion, fecha_limite 
                FROM propuestas 
                WHERE id_postulante = ? AND estado = 'pendiente'";
    }

    $stmt = mysqli_prepare($conexion, $sql);
    if (!$stmt) {
        throw new Exception("Error al preparar la consulta de propuestas.");
    }

    mysqli_stmt_bind_param($stmt, 'i', $postulante_id);
    mysqli_stmt_execute($stmt);
    $resultado = mysqli_stmt_get_result($stmt);

    $propuestas = [];
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $propuestas[] = $fila;
    }

    echo json_encode(['success' => true, 'data' => $propuestas], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
} finally {
    mysqli_close($conexion);
}
?>
