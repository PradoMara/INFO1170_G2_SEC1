<?php
include 'conexion.php'; 

function obtenerNotificaciones() {
    global $conexion;
    $sql = "SELECT * FROM notificaciones ORDER BY fecha DESC";
    $resultado = mysqli_query($conexion, $sql);
    
    $notificaciones = [];
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $notificaciones[] = $fila;
    }
    
    return $notificaciones;
}

function marcarComoLeida($id) {
    global $conexion;
    $sql = "UPDATE notificaciones SET leida = 1 WHERE id = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, 'i', $id);
    return mysqli_stmt_execute($stmt);
}

function eliminarNotificacion($id) {
    global $conexion;
    $sql = "DELETE FROM notificaciones WHERE id = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, 'i', $id);
    return mysqli_stmt_execute($stmt);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    
    if (isset($_POST['accion'])) {
        $accion = $_POST['accion'];
        
        if ($accion === 'marcar_leida') {
            if (marcarComoLeida($id)) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['success' => false]);
            }
        } elseif ($accion === 'eliminar') {
            if (eliminarNotificacion($id)) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['success' => false]);
            }
        }
    }
}
?>
