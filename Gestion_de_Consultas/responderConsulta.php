<?php
include 'conexion.php'; 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idConsulta = $_POST['idConsulta'];
    $respuesta = $_POST['respuesta'];

    $sql = "UPDATE dudas_consultas SET respuesta = ?, estado = 'respondida' WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $respuesta, $idConsulta);

    if ($stmt->execute()) {
        echo "Respuesta enviada con éxito.";
    } else {
        echo "Error al enviar la respuesta: " . $conn->error;
    }

    $stmt->close();
}

$conn->close();
?>
