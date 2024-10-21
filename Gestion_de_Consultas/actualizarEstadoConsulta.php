<?php
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idConsulta = $_POST['idConsulta'];
    $nuevoEstado = $_POST['estado'];

    $sql = "UPDATE dudas_consultas SET estado = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $nuevoEstado, $idConsulta);

    if ($stmt->execute()) {
        echo "Estado actualizado con éxito.";
    } else {
        echo "Error al actualizar el estado: " . $conn->error;
    }

    $stmt->close();
}

$conn->close();
?>
