<?php
include 'conexion.php';

header('Content-Type: application/json'); // Asegura que la respuesta sea JSON

/**
 * Obtiene todas las notificaciones ordenadas por fecha.
 *
 * @param mysqli $conexion La conexión a la base de datos.
 * @return array Lista de notificaciones.
 */
function obtenerNotificaciones($conexion) {
    $sql = "SELECT * FROM notificaciones ORDER BY fecha DESC";
    $resultado = $conexion->query($sql);
    
    $notificaciones = [];
    while ($fila = $resultado->fetch_assoc()) {
        $notificaciones[] = $fila;
    }
    
    return $notificaciones;
}

/**
 * Marca una notificación como leída.
 *
 * @param mysqli $conexion La conexión a la base de datos.
 * @param int $id El ID de la notificación.
 * @return bool True si se ejecutó correctamente, false en caso contrario.
 */
function marcarComoLeida($conexion, $id) {
    $sql = "UPDATE notificaciones SET leida = 1 WHERE id = ?";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param('i', $id);
    return $stmt->execute();
}

/**
 * Elimina una notificación.
 *
 * @param mysqli $conexion La conexión a la base de datos.
 * @param int $id El ID de la notificación.
 * @return bool True si se ejecutó correctamente, false en caso contrario.
 */
function eliminarNotificacion($conexion, $id) {
    $sql = "DELETE FROM notificaciones WHERE id = ?";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param('i', $id);
    return $stmt->execute();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $id = filter_var($_POST['id'], FILTER_VALIDATE_INT);
        $accion = isset($_POST['accion']) ? $_POST['accion'] : null;

        if (!$id || !$accion) {
            echo json_encode(['success' => false, 'message' => 'Datos insuficientes']);
            exit;
        }

        switch ($accion) {
            case 'marcar_leida':
                if (marcarComoLeida($conexion, $id)) {
                    echo json_encode(['success' => true, 'message' => 'Notificación marcada como leída']);
                } else {
                    echo json_encode(['success' => false, 'message' => 'Error al marcar como leída']);
                }
                break;

            case 'eliminar':
                if (eliminarNotificacion($conexion, $id)) {
                    echo json_encode(['success' => true, 'message' => 'Notificación eliminada']);
                } else {
                    echo json_encode(['success' => false, 'message' => 'Error al eliminar la notificación']);
                }
                break;

            default:
                echo json_encode(['success' => false, 'message' => 'Acción no válida']);
        }
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
    } finally {
        $conexion->close();
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}
?>
