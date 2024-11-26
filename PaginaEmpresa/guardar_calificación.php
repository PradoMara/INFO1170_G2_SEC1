<?php
// Conexión a la base de datos
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id_postulante = $_POST['id_postulante'];
    $id_empresa = $_POST['id_empresa'];
    $calificacion = $_POST['calificacion'];

    // Validación básica
    if (!is_numeric($calificacion) || $calificacion < 1 || $calificacion > 5) {
        http_response_code(400);
        echo json_encode(['error' => 'Calificación inválida']);
        exit;
    }

    // Guardar en la base de datos
    $stmt = $conn->prepare("INSERT INTO calificaciones (id_postulante, id_empresa, calificacion) VALUES (?, ?, ?)");
    $stmt->bind_param("iii", $id_postulante, $id_empresa, $calificacion);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Calificación guardada exitosamente']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error al guardar la calificación']);
    }

    $stmt->close();
    $conn->close();
}
?>
