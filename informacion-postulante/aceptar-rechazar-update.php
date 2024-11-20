<?php

include('../conexion.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $id = isset($_POST['id']) ? intval($_POST['id']) : 0;
    $accion = isset($_POST['accion']) ? trim($_POST['accion']) : '';

    if ($id <= 0 || empty($accion)) {
        echo "Datos inválidos.";
        exit;
    }

    if ($accion == 'aceptar') {
        $nuevo_estado = 'aceptado';
    } elseif ($accion == 'rechazar') {
        $nuevo_estado = 'rechazado';
    } else {
        $nuevo_estado = 'pendiente';
    }

    $sql = "UPDATE Postulantes SET estado = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        error_log("Error en la preparación de la consulta: " . $conn->error);
        echo "Error en la preparación de la consulta.";
        exit;
    }

    $stmt->bind_param('si', $nuevo_estado, $id);

    if ($stmt->execute()) {
        header("Location: ../informacion-postulante.php?id=$id&estado=actualizado");
        exit; // detener la ejecucien del script despues de la redireccion
    } else {
        error_log("Error en la ejecución de la consulta: " . $stmt->error);
        echo "Error al actualizar el estado del postulante.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Método no permitido.";
}
?>