<?php
include 'conexion.php';

header('Content-Type: application/json'); // Asegura que la respuesta sea JSON

try {
    $sql = "SELECT * FROM ofertas_empleo WHERE disponible = 1 ORDER BY fecha_publicacion DESC";
    $stmt = $conexion->prepare($sql);

    if ($stmt->execute()) {
        $resultado = $stmt->get_result();
        $ofertas = [];

        while ($fila = $resultado->fetch_assoc()) {
            $ofertas[] = $fila;
        }

        echo json_encode([
            'success' => true,
            'data' => $ofertas,
        ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    } else {
        throw new Exception("Error al ejecutar la consulta");
    }
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage(),
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} finally {
    $conexion->close();
}
?>
