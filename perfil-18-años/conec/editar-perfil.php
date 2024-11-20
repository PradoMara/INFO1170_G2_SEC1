<?php
session_start();
include '../conexion-bd/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_SESSION['user_id'];
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];

    $stmt = $conn->prepare("UPDATE Usuarios SET nombre = ?, telefono = ?, email = ? WHERE id = ?");
    $stmt->bind_param("sssi", $nombre, $telefono, $email, $user_id);

    if ($stmt->execute()) {
        echo "Perfil actualizado.";
    } else {
        echo "Error al actualizar: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
