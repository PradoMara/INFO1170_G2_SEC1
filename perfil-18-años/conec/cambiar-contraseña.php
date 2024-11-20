<?php

include '/conexion-bd/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id_usuario = $_SESSION['id_usuario'];
    $nueva_contraseña = $_POST['new-password'];
    $confirmar_contraseña = $_POST['confirm-password'];

    if ($nueva_contraseña === $confirmar_contraseña) {
        $contraseña_hash = password_hash($nueva_contraseña, PASSWORD_DEFAULT);

        $stmt = $conn->prepare("UPDATE Usuarios SET contraseña = ? WHERE id_usuario = ?");
        $stmt->bind_param("si", $contraseña_hash, $id_usuario);

        if ($stmt->execute()) {
            echo "La contraseña fue cambiada correctamente.<br>";
        } else {
            echo "Error al cambiar contraseña: " . $stmt->error . "<br>";
        }

        $stmt->close();
        $conn->close();
    } else {
        echo "Las contraseñas no coinciden.<br>";
    }
}
?>