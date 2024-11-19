<?php

include('../conexion.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $id = $_POST['id'];
    $accion = $_POST['accion'];

    
    if ($accion == 'aceptar') {
        $nuevo_estado = 'aceptado';
    } elseif ($accion == 'rechazar') {
        $nuevo_estado = 'rechazado';
    } else {
        $nuevo_estado = 'pendiente';
    }

    
    $sql = "UPDATE postulantes SET estado = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si', $nuevo_estado, $id);

    if ($stmt->execute()) {
       
        header("Location: ../informacion-postulante.php?id=$id&estado=actualizado");
    } else {
        echo "Error al actualizar el estado del postulante.";
    }


    $stmt->close();
    $conn->close();
} else {
    echo "Método no permitido.";
}
?>
