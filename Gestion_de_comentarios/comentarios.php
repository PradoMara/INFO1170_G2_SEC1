<?php
include 'conexion.php';

header('Content-Type: application/json'); // Asegura que la respuesta sea JSON

try {
    // Consulta SQL para obtener comentarios
    $sql = "SELECT autor, texto, fecha FROM comentarios ORDER BY fecha DESC";
    $resultado = $conexion->query($sql);

    if (!$resultado) {
        throw new Exception("Error al ejecutar la consulta: " . $conexion->error);
    }

    $comentarios = [];
    while ($fila = $resultado->fetch_assoc()) {
        $comentarios[] = $fila;
    }

    // Respuesta en JSON con los comentarios
    echo json_encode([
        "success" => true,
        "data" => $comentarios,
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} catch (Exception $e) {
    // Manejo de errores
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage(),
    ]);
} finally {
    // Cerrar la conexión a la base de datos
    $conexion->close();
}
?>
