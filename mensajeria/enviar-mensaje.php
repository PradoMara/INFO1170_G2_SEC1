<?php
include '/conexion-bd/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'];
    $mensaje = $_POST['mensaje'];
    $destinatario = $_POST['destinatario'];

    // insertar el mensaje en la base de datos
    $stmt = $conexion->prepare("INSERT INTO Mensajes (usuario, mensaje, destinatario) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $usuario, $mensaje, $destinatario);

    if ($stmt->execute()) {
        echo "Mensaje enviado.";
    } else {
        echo "Error al enviar el mensaje: " . $stmt->error;
    }

    // cerrar la conexion
    $stmt->close();
    $conexion->close();
}
?>