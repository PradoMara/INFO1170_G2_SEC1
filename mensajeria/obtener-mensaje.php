<?php
require_once '/conexion-bd/conexion.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $remitente = $_GET['remitente'] ?? '';
    $destinatario = $_GET['destinatario'] ?? '';

    if ($remitente && $destinatario) {
        $query = $conn->prepare("SELECT remitente, mensaje, fecha_envio FROM mensajes WHERE (remitente = ? AND destinatario = ?) OR (remitente = ? AND destinatario = ?) ORDER BY fecha_envio ASC");
        $query->bind_param("ssss", $remitente, $destinatario, $destinatario, $remitente);
        $query->execute();
        $result = $query->get_result();

        $mensajes = [];
        while ($row = $result->fetch_assoc()) {
            $mensajes[] = $row;
        }

        echo json_encode(["status" => "success", "messages" => $mensajes]);
    } else {
        echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
?>
