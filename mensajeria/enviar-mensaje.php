<?php
require_once '/conexion-bd/conexion.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $remitente = $_POST['remitente'] ?? '';
    $destinatario = $_POST['destinatario'] ?? '';
    $mensaje = $_POST['mensaje'] ?? '';

    if ($remitente && $destinatario && $mensaje) {
        $query = $conn->prepare("INSERT INTO mensajes (remitente, destinatario, mensaje, fecha_envio) VALUES (?, ?, ?, NOW())");
        $query->bind_param("sss", $remitente, $destinatario, $mensaje);

        if ($query->execute()) {
            echo json_encode(["status" => "success", "message" => "Mensaje enviado"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al enviar el mensaje"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
?>
