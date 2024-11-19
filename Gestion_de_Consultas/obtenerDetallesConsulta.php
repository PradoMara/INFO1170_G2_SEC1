<?php
include 'conexion.php'; 

if (isset($_GET['id'])) {
    $idConsulta = $_GET['id'];

    $sql = "SELECT nombre, correo, mensaje, estado, respuesta FROM dudas_consultas WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $idConsulta);
    $stmt->execute();
    $resultado = $stmt->get_result();
    $consulta = $resultado->fetch_assoc();

    header('Content-Type: application/json');
    echo json_encode($consulta);

    $stmt->close();
} else {
    echo json_encode(['error' => 'ID de consulta no proporcionado']);
}

$conn->close();
?>
